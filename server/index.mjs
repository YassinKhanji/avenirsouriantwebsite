import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ path: './server/.env' });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize DB
const db = new Database('./server/data.sqlite');
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT DEFAULT (datetime('now')),
    lang TEXT,
    email TEXT NOT NULL,
    student_name TEXT NOT NULL,
    age INTEGER NOT NULL,
    phone TEXT NOT NULL,
    course_id INTEGER NOT NULL,
    course_title TEXT NOT NULL,
    comment TEXT,
    child_name TEXT NOT NULL,
    child_dob TEXT NOT NULL,
    date TEXT,
    parent_name TEXT NOT NULL,
    parent_phone TEXT NOT NULL,
    emergency_phone TEXT NOT NULL,
    signature TEXT NOT NULL,
    current_date TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY,
    title TEXT,
    spots_left INTEGER NOT NULL
  );
`);

// Seed courses if empty
const countCourses = db.prepare('SELECT COUNT(*) AS c FROM courses').get();
if (countCourses.c === 0) {
  const seed = db.prepare('INSERT INTO courses (id, title, spots_left) VALUES (?, ?, ?)');
  seed.run(1, 'Course 1', 8);
  seed.run(2, 'Course 2', 12);
  seed.run(3, 'Course 3', 5);
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

app.post('/api/register', async (req, res) => {
  const b = req.body || {};
  const required = ['email','student_name','age','phone','course_id','course_title','child_name','child_dob','parent_name','parent_phone','emergency_phone','signature','current_date'];
  for (const key of required) {
    if (!b[key]) {
      return res.status(400).json({ error: `Missing field: ${key}` });
    }
  }
  const insertStmt = db.prepare(`INSERT INTO registrations (lang,email,student_name,age,phone,course_id,course_title,comment,child_name,child_dob,date,parent_name,parent_phone,emergency_phone,signature,current_date)
    VALUES (@lang,@email,@student_name,@age,@phone,@course_id,@course_title,@comment,@child_name,@child_dob,@date,@parent_name,@parent_phone,@emergency_phone,@signature,@current_date)`);
  const getCourse = db.prepare('SELECT id, spots_left FROM courses WHERE id = ?');
  const updateCourse = db.prepare('UPDATE courses SET spots_left = spots_left - 1 WHERE id = ?');

  const tx = db.transaction(() => {
    const course = getCourse.get(Number(b.course_id));
    if (!course) {
      throw new Error('COURSE_NOT_FOUND');
    }
    if (course.spots_left <= 0) {
      throw new Error('NO_SPOTS_LEFT');
    }
    const info = insertStmt.run({
      lang: b.lang || 'en',
      email: String(b.email),
      student_name: String(b.student_name),
      age: Number(b.age),
      phone: String(b.phone),
      course_id: Number(b.course_id),
      course_title: String(b.course_title),
      comment: b.comment ? String(b.comment) : null,
      child_name: String(b.child_name),
      child_dob: String(b.child_dob),
      date: b.date ? String(b.date) : null,
      parent_name: String(b.parent_name),
      parent_phone: String(b.parent_phone),
      emergency_phone: String(b.emergency_phone),
      signature: String(b.signature),
      current_date: String(b.current_date)
    });
    updateCourse.run(Number(b.course_id));
    return info.lastInsertRowid;
  });

  try {
    const id = tx();
    const updated = getCourse.get(Number(b.course_id));

    // Send waiver email (non-blocking response)
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

    res.status(201).json({ id, spots_left: updated.spots_left, emailSent });
  } catch (e) {
    if (e && e.message === 'NO_SPOTS_LEFT') {
      return res.status(409).json({ error: 'No spots left for this course.' });
    }
    if (e && e.message === 'COURSE_NOT_FOUND') {
      return res.status(404).json({ error: 'Course not found.' });
    }
    console.error(e);
    res.status(500).json({ error: 'Failed to save registration' });
  }
});

app.get('/api/registrations', (req, res) => {
  const rows = db.prepare('SELECT * FROM registrations ORDER BY created_at DESC').all();
  res.json(rows);
});

app.get('/api/registrations.csv', (req, res) => {
  const rows = db.prepare('SELECT * FROM registrations ORDER BY created_at DESC').all();
  const headers = Object.keys(rows[0] || {});
  const csv = [headers.join(','), ...rows.map(r => headers.map(h => {
    const v = r[h];
    if (v == null) return '';
    const s = String(v).replace(/"/g, '""');
    return /[",\n]/.test(s) ? `"${s}"` : s;
  }).join(','))].join('\n');
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="registrations.csv"');
  res.send(csv);
});

app.get('/api/courses', (req, res) => {
  const rows = db.prepare('SELECT id, spots_left FROM courses ORDER BY id').all();
  res.json(rows);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
