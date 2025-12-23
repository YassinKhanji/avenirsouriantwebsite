#!/usr/bin/env node
/**
 * Database Migration Script for Vercel Postgres
 * Run this once after setting up Vercel Postgres database
 * Usage: node server/migrate.mjs
 */

import { sql } from '@vercel/postgres';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envCandidates = [
  path.resolve(__dirname, '../.env'),
  path.resolve(__dirname, '.env'),
  path.resolve(process.cwd(), '.env')
];
for (const p of envCandidates) {
  if (fs.existsSync(p)) {
    dotenv.config({ path: p });
    break;
  }
}

async function migrate() {
  console.log('Starting database migration...');

  try {
    // Create registrations table
    console.log('Creating registrations table...');
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
    console.log('✓ Registrations table created');

    // Create courses table
    console.log('Creating courses table...');
    await sql`
      CREATE TABLE IF NOT EXISTS courses (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        spots_left INTEGER NOT NULL
      );
    `;
    console.log('✓ Courses table created');

    // Seed courses if empty
    console.log('Checking if courses need to be seeded...');
    const courseCount = await sql`SELECT COUNT(*) as count FROM courses;`;
    
    if (courseCount.rows[0].count === 0) {
      console.log('Seeding courses...');
      await sql`
        INSERT INTO courses (id, title, spots_left) 
        VALUES 
          (2, 'Course 2', 20),
          (3, 'Course 3', 20),
          (7, 'Activity 1', 20),
          (8, 'Activity 2', 20);
      `;
      console.log('✓ Courses seeded');
    } else {
      console.log(`✓ Courses already exist (${courseCount.rows[0].count} courses)`);
    }

    console.log('\n✓ Database migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('✗ Migration failed:', error);
    process.exit(1);
  }
}

migrate();
