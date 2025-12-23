import express from 'express';
import cors from 'cors';
import { sql } from '@vercel/postgres';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

// Load env from the most likely locations after the restructure
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envCandidates = [
  path.resolve(__dirname, '../.env'), // backend/.env
  path.resolve(__dirname, '.env'),    // backend/server/.env
  path.resolve(process.cwd(), '.env') // project root .env
];
for (const p of envCandidates) {
  if (fs.existsSync(p)) {
    dotenv.config({ path: p });
    break;
  }
}
// Env loaded via candidates above

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize DB tables (runs once on first deployment)
async function initializeDatabase() {
  try {
    // Create registrations table
    await sql`
      CREATE TABLE IF NOT EXISTS registrations (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP DEFAULT NOW(),
        lang VARCHAR(10) DEFAULT 'en',
        email VARCHAR(255) NOT NULL,
        student_name VARCHAR(255) NOT NULL,
        age INTEGER NOT NULL,
        phone VARCHAR(20) NOT NULL,
        course_id INTEGER NOT NULL,
        course_title VARCHAR(255) NOT NULL,
        comment TEXT,
        child_name VARCHAR(255) NOT NULL,
        child_dob VARCHAR(255) NOT NULL,
        event_date VARCHAR(255),
        parent_name VARCHAR(255) NOT NULL,
        parent_phone VARCHAR(20) NOT NULL,
        emergency_phone VARCHAR(20) NOT NULL,
        signature TEXT NOT NULL,
        submitted_date VARCHAR(255) NOT NULL
      );
    `;

    // Rename legacy columns if present
    const legacyDate = await sql`SELECT 1 FROM information_schema.columns WHERE table_name = 'registrations' AND column_name = 'date' LIMIT 1;`;
    if (legacyDate.rowCount > 0) {
      await sql`ALTER TABLE registrations RENAME COLUMN "date" TO event_date;`;
    }
    const legacyCurrentDate = await sql`SELECT 1 FROM information_schema.columns WHERE table_name = 'registrations' AND column_name = 'current_date' LIMIT 1;`;
    if (legacyCurrentDate.rowCount > 0) {
      await sql`ALTER TABLE registrations RENAME COLUMN "current_date" TO submitted_date;`;
    }

    // Create courses table
    await sql`
      CREATE TABLE IF NOT EXISTS courses (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        spots_left INTEGER NOT NULL
      );
    `;

    // Seed courses if empty
    const courseCount = await sql`SELECT COUNT(*) as count FROM courses;`;
    if (Number(courseCount.rows[0].count) === 0) {
      await sql`
        INSERT INTO courses (id, title, spots_left) 
        VALUES 
          (2, 'Course 2', 20),
          (3, 'Course 3', 20),
          (7, 'Activity 1', 20),
          (8, 'Activity 2', 20);
      `;
    }

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
    // Don't throw - allow server to continue
  }
}

// Configure mail transport
const gmailUser = process.env.GMAIL_USER || 'avenirsouriant313@gmail.com';
const gmailPass = (process.env.GMAIL_PASS || 'pjrm voqt ahjf yyzs').replace(/\s+/g, '');
const adminEmail = process.env.ADMIN_EMAIL || 'administration@avenirsouriant.com';
const appDomain = process.env.APP_DOMAIN || 'https://avenirsouriant.com';
const mailer = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { user: gmailUser, pass: gmailPass },
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

// Initialize database on startup
initializeDatabase().catch(console.error);

// Email subscribers table (created in initializeDatabase if missing)
async function ensureSubscribersTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP DEFAULT NOW(),
        email VARCHAR(255) NOT NULL,
        lang VARCHAR(10) DEFAULT 'en',
        source VARCHAR(50),
        course_id INTEGER,
        course_title VARCHAR(255),
        page_path VARCHAR(255)
      );
    `;
  } catch (e) {
    console.error('Failed to create subscribers table:', e);
  }
}
ensureSubscribersTable().catch(console.error);

app.post('/api/register', async (req, res) => {
  const b = req.body || {};
  const required = ['email','student_name','age','phone','course_id','course_title','child_name','child_dob','parent_name','parent_phone','emergency_phone','signature','submitted_date'];
  for (const key of required) {
    if (!b[key]) {
      return res.status(400).json({ error: `Missing field: ${key}` });
    }
  }

  try {
    // Insert registration
    const result = await sql`
      INSERT INTO registrations (
        lang, email, student_name, age, phone, course_id, course_title, 
        comment, child_name, child_dob, event_date, parent_name, parent_phone, 
        emergency_phone, signature, submitted_date
      ) VALUES (
        ${b.lang || 'en'},
        ${String(b.email)},
        ${String(b.student_name)},
        ${Number(b.age)},
        ${String(b.phone)},
        ${Number(b.course_id)},
        ${String(b.course_title)},
        ${b.comment ? String(b.comment) : null},
        ${String(b.child_name)},
        ${String(b.child_dob)},
        ${b.event_date ? String(b.event_date) : null},
        ${String(b.parent_name)},
        ${String(b.parent_phone)},
        ${String(b.emergency_phone)},
        ${String(b.signature)},
        ${String(b.submitted_date)}
      )
      RETURNING id;
    `;

    // Send simple confirmation email (non-blocking)
    const unsubscribeUrl = `${appDomain}/unsubscribe?email=${encodeURIComponent(String(b.email).toLowerCase())}`;
    let emailSent = false;
    try {
      await mailer.sendMail({
        from: `Avenir Souriant Academy <${gmailUser}>`,
        to: String(b.email),
        subject: 'Avenir Souriant: Registration Received',
        text: `Hello ${b.student_name},\n\nThank you for registering for ${b.course_title}. Your registration has been received. Our team will review your submission and get back to you shortly with all the details.\n\nIf you have any questions, reply to this email.\n\nIf you prefer not to receive updates, unsubscribe here:\n${unsubscribeUrl}\n\nRegards,\nAvenir Souriant Academy`,
        html: `<p>Hello ${b.student_name},</p><p>Thank you for registering for <strong>${b.course_title}</strong>. Your registration has been received.</p><p>Our team will review your submission and get back to you shortly with all the details.</p><p>If you have any questions, just reply to this email.</p><p><a href="${unsubscribeUrl}" style="display:inline-block;padding:10px 16px;border-radius:8px;background:#0ea5e9;color:white;text-decoration:none;font-weight:bold;">Unsubscribe</a></p><p>If the button does not work, copy and paste this link:<br/><a href="${unsubscribeUrl}">${unsubscribeUrl}</a></p><p>Regards,<br/>Avenir Souriant Academy</p>`,
      });
      emailSent = true;
    } catch (mailErr) {
      console.error('Email send failed:', mailErr);
    }

    // Send admin notification email (non-blocking)
    try {
      await mailer.sendMail({
        from: `Avenir Souriant Academy <${gmailUser}>`,
        to: adminEmail,
        subject: 'New Registration: ' + b.student_name,
        html: `
          <h2>New Registration Received</h2>
          <p><strong>Course/Activity:</strong> ${b.course_title}</p>
          <hr/>
          <h3>Student Information</h3>
          <p><strong>Student Name:</strong> ${b.student_name}</p>
          <p><strong>Age:</strong> ${b.age}</p>
          <p><strong>Date of Birth:</strong> ${b.child_dob}</p>
          <hr/>
          <h3>Parent Information</h3>
          <p><strong>Parent Name:</strong> ${b.parent_name}</p>
          <p><strong>Email:</strong> ${b.email}</p>
          <p><strong>Parent Phone:</strong> ${b.parent_phone}</p>
          <p><strong>Emergency Phone:</strong> ${b.emergency_phone}</p>
          <hr/>
          <h3>Additional Information</h3>
          <p><strong>Signature:</strong> ${b.signature}</p>
          <p><strong>Comments:</strong> ${b.comment || 'None'}</p>
          <p><strong>Registration Date:</strong> ${b.submitted_date}</p>
        `,
      });
    } catch (adminEmailErr) {
      console.error('Admin email send failed:', adminEmailErr);
    }

    res.status(201).json({ 
      id: result.rows[0].id, 
      emailSent 
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to save registration' });
  }
});

// Capture email for notifications (non-popup inline)
app.post('/api/notify', async (req, res) => {
  const b = req.body || {};
  const email = (b.email || '').toString().trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }
  try {
    await sql`
      INSERT INTO subscribers (email, lang, source, course_id, course_title, page_path)
      VALUES (${email}, ${b.lang || 'en'}, ${b.source || null}, ${b.course_id || null}, ${b.course_title || null}, ${b.page_path || null});
    `;
    // Fire-and-forget confirmation email
    try {
      const subjects = {
        en: 'You’re on the list – Avenir Souriant',
        fr: "Vous êtes inscrit(e) – Avenir Souriant",
        ar: "تم تسجيلك في القائمة – أكاديمية المستقبل الباسم",
      };
      const unsubscribeUrl = `${appDomain}/unsubscribe?email=${encodeURIComponent(email)}`;
      const bodies = {
        en: `Thanks for subscribing! We'll email you when ${b.course_title ? '"' + b.course_title + '"' : 'new courses'} open or when we have schedule updates and offers.\n\nClick the link below to unsubscribe:\n${unsubscribeUrl}`,
        fr: `Merci pour votre inscription! Nous vous écrirons lorsque ${b.course_title ? '« ' + b.course_title + ' »' : 'de nouveaux cours'} ouvriront ou lorsque nous aurons des mises à jour d'horaires et des offres.\n\nCliquez sur le lien ci-dessous pour vous désabonner:\n${unsubscribeUrl}`,
        ar: `شكراً لاشتراكك! سنراسلك عند فتح ${b.course_title ? '« ' + b.course_title + ' »' : 'دورات جديدة'} أو عند وجود تحديثات للمواعيد والعروض.\n\nانقر على الرابط أدناه لإلغاء الاشتراك:\n${unsubscribeUrl}`,
      };
      const htmlBodies = {
        en: `<p>Thanks for subscribing! We'll email you when ${b.course_title ? '&ldquo;' + b.course_title + '&rdquo;' : 'new courses'} open or when we have schedule updates and offers.</p><p><a href="${unsubscribeUrl}" style="display:inline-block;padding:10px 16px;border-radius:8px;background:#0ea5e9;color:white;text-decoration:none;font-weight:bold;">Unsubscribe</a></p><p>If the button doesn't work, copy and paste this link:<br/><a href="${unsubscribeUrl}">${unsubscribeUrl}</a></p>`,
        fr: `<p>Merci pour votre inscription! Nous vous écrirons lorsque ${b.course_title ? '« ' + b.course_title + ' »' : 'de nouveaux cours'} ouvriront ou lorsque nous aurons des mises à jour d'horaires et des offres.</p><p><a href="${unsubscribeUrl}" style="display:inline-block;padding:10px 16px;border-radius:8px;background:#0ea5e9;color:white;text-decoration:none;font-weight:bold;">Se désabonner</a></p><p>Si le bouton ne fonctionne pas, copiez et collez ce lien:<br/><a href="${unsubscribeUrl}">${unsubscribeUrl}</a></p>`,
        ar: `<p>شكراً لاشتراكك! سنراسلك عند فتح ${b.course_title ? '« ' + b.course_title + ' »' : 'دورات جديدة'} أو عند وجود تحديثات للمواعيد والعروض.</p><p><a href="${unsubscribeUrl}" style="display:inline-block;padding:10px 16px;border-radius:8px;background:#0ea5e9;color:white;text-decoration:none;font-weight:bold;">إلغاء الاشتراك</a></p><p>إذا لم يعمل الزر، انسخ الرابط التالي:<br/><a href="${unsubscribeUrl}">${unsubscribeUrl}</a></p>`,
      };
      const l = (b.lang || 'en');
      await mailer.sendMail({
        from: `Avenir Souriant Academy <${gmailUser}>`,
        to: email,
        subject: subjects[l] || subjects.en,
        text: bodies[l] || bodies.en,
        html: htmlBodies[l] || htmlBodies.en,
      });
    } catch (mailErr) {
      console.error('Notify confirmation email failed:', mailErr);
    }
    res.status(201).json({ ok: true });
  } catch (e) {
    console.error('Failed to save subscriber', e);
    res.status(500).json({ error: 'Failed to save subscriber' });
  }
});

// Unsubscribe endpoint
app.delete('/api/unsubscribe', async (req, res) => {
  const email = (req.query.email || '').toString().trim().toLowerCase();
  const lang = (req.query.lang || 'en').toString();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }
  try {
    await ensureSubscribersTable();
  } catch (tableErr) {
    console.error('Failed to ensure subscribers table', tableErr);
  }
  const subjects = {
    en: 'You have been unsubscribed',
    fr: 'Vous êtes désinscrit(e)',
    ar: 'تم إلغاء اشتراكك'
  };
  const texts = {
    en: 'You have been removed from our notifications list. You will no longer receive course or activity updates. If this was a mistake, you can subscribe again anytime on our site.',
    fr: "Vous avez été retiré(e) de notre liste d'envoi. Vous ne recevrez plus de mises à jour. Si c'était une erreur, vous pouvez vous réabonner à tout moment sur notre site.",
    ar: 'تمت إزالتك من قائمة الإشعارات لدينا. لن تتلقى تحديثات بعد الآن. إذا كان ذلك عن طريق الخطأ، يمكنك الاشتراك مرة أخرى من موقعنا.'
  };
  const htmls = {
    en: '<p>You have been removed from our notifications list. You will no longer receive course or activity updates.</p><p>If this was a mistake, you can subscribe again anytime from our site.</p>',
    fr: "<p>Vous avez été retiré(e) de notre liste d'envoi. Vous ne recevrez plus de mises à jour.</p><p>Si c'était une erreur, vous pouvez vous réabonner à tout moment depuis notre site.</p>",
    ar: '<p>تمت إزالتك من قائمة الإشعارات لدينا. لن تتلقى تحديثات بعد الآن.</p><p>إذا كان ذلك عن طريق الخطأ، يمكنك الاشتراك مرة أخرى من موقعنا.</p>'
  };
  try {
    const result = await sql`
      DELETE FROM subscribers WHERE LOWER(email) = ${email};
    `;

    // Send confirmation email (fire-and-forget)
    try {
      const l = subjects[lang] ? lang : 'en';
      await mailer.sendMail({
        from: `Avenir Souriant Academy <${gmailUser}>`,
        to: email,
        subject: subjects[l],
        text: texts[l],
        html: htmls[l],
      });
    } catch (mailErr) {
      console.error('Unsubscribe confirmation email failed:', mailErr);
    }

    // Always return ok even if nothing was deleted, to avoid leaking subscription state
    res.json({ ok: true, deleted: result.rowCount });
  } catch (e) {
    console.error('Failed to unsubscribe', e);
    res.status(500).json({ error: 'Failed to unsubscribe' });
  }
});

app.get('/api/registrations', async (req, res) => {
  try {
    const result = await sql`SELECT * FROM registrations ORDER BY created_at DESC;`;
    res.json(result.rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch registrations' });
  }
});

app.get('/api/registrations.csv', async (req, res) => {
  try {
    const result = await sql`SELECT * FROM registrations ORDER BY created_at DESC;`;
    const rows = result.rows;
    
    if (rows.length === 0) {
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="registrations.csv"');
      res.send('No registrations found');
      return;
    }

    const headers = Object.keys(rows[0]);
    const csv = [
      headers.join(','),
      ...rows.map(r => headers.map(h => {
        const v = r[h];
        if (v == null) return '';
        const s = String(v).replace(/"/g, '""');
        return /[",\n]/.test(s) ? `"${s}"` : s;
      }).join(','))
    ].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="registrations.csv"');
    res.send(csv);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to export registrations' });
  }
});

app.get('/api/courses', async (req, res) => {
  try {
    const result = await sql`SELECT id, spots_left FROM courses ORDER BY id;`;
    res.json(result.rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
