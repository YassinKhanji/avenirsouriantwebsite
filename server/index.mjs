import express from 'express';
import cors from 'cors';
import { sql } from '@vercel/postgres';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ path: './server/.env' });

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
        date VARCHAR(255),
        parent_name VARCHAR(255) NOT NULL,
        parent_phone VARCHAR(20) NOT NULL,
        emergency_phone VARCHAR(20) NOT NULL,
        signature TEXT NOT NULL,
        current_date VARCHAR(255) NOT NULL
      );
    `;

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
    if (courseCount.rows[0].count === 0) {
      await sql`
        INSERT INTO courses (id, title, spots_left) 
        VALUES 
          (1, 'Course 1', 8),
          (2, 'Course 2', 12),
          (3, 'Course 3', 5);
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

app.post('/api/register', async (req, res) => {
  const b = req.body || {};
  const required = ['email','student_name','age','phone','course_id','course_title','child_name','child_dob','parent_name','parent_phone','emergency_phone','signature','current_date'];
  for (const key of required) {
    if (!b[key]) {
      return res.status(400).json({ error: `Missing field: ${key}` });
    }
  }

  try {
    // Check if course exists and has spots
    const courseResult = await sql`SELECT id, spots_left FROM courses WHERE id = ${Number(b.course_id)};`;
    
    if (courseResult.rows.length === 0) {
      return res.status(404).json({ error: 'Course not found.' });
    }

    const course = courseResult.rows[0];
    if (course.spots_left <= 0) {
      return res.status(409).json({ error: 'No spots left for this course.' });
    }

    // Insert registration
    const result = await sql`
      INSERT INTO registrations (
        lang, email, student_name, age, phone, course_id, course_title, 
        comment, child_name, child_dob, date, parent_name, parent_phone, 
        emergency_phone, signature, current_date
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
        ${b.date ? String(b.date) : null},
        ${String(b.parent_name)},
        ${String(b.parent_phone)},
        ${String(b.emergency_phone)},
        ${String(b.signature)},
        ${String(b.current_date)}
      )
      RETURNING id;
    `;

    // Update course spots
    await sql`
      UPDATE courses SET spots_left = spots_left - 1 WHERE id = ${Number(b.course_id)};
    `;

    const updatedCourse = await sql`SELECT spots_left FROM courses WHERE id = ${Number(b.course_id)};`;

    // Send waiver email (non-blocking)
    let emailSent = false;
    try {
      await mailer.sendMail({
        from: `Avenir Souriant <${gmailUser}>`,
        to: String(b.email),
        subject: 'Avenir Souriant: Waiver Signature Required',
        text: `Hello ${b.student_name},\n\nThank you for registering for ${b.course_title}. Before we can finalize your registration, please sign the waiver at the link below:\n\nhttps://forms.gle/RqNCqDbe99bxRNzw6\n\nIf you have any questions, reply to this email.\n\nRegards,\nAvenir Souriant Academy`,
        html: `<p>Hello ${b.student_name},</p><p>Thank you for registering for <strong>${b.course_title}</strong>. Before we can finalize your registration, please sign the waiver at the link below:</p><p><a href="https://forms.gle/RqNCqDbe99bxRNzw6" target="_blank">Sign the waiver</a></p><p>If you have any questions, reply to this email.</p><p>Regards,<br/>Avenir Souriant Academy</p>`,
      });
      emailSent = true;
    } catch (mailErr) {
      console.error('Email send failed:', mailErr);
    }

    res.status(201).json({ 
      id: result.rows[0].id, 
      spots_left: updatedCourse.rows[0].spots_left, 
      emailSent 
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to save registration' });
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
