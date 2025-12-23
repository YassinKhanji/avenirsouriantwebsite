# Vercel Postgres Setup Guide

## Changes Made

Your project has been migrated from SQLite (`better-sqlite3`) to **Vercel Postgres** for deployment.

### Files Changed:
- ✓ `package.json` - Replaced `better-sqlite3` with `@vercel/postgres`, added Node.js engine constraint
- ✓ `server/index.mjs` - Updated to use Vercel Postgres SQL queries
- ✓ `vercel.json` - Created deployment configuration
- ✓ `server/migrate.mjs` - Database migration script

## Steps to Deploy

### 1. Create Vercel Postgres Database

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Click on your project
3. Go to **Storage** tab (or **Integrations** if you're in an older dashboard)
4. Click **Create Database** → Select **Postgres**
5. Name it something like `courses-db`
6. Select your region (closest to your users)
7. Click **Create**

### 2. Get Database Connection String

After creating the database:
1. Click on the database you just created
2. Go to the **.env.local** tab
3. Copy the entire `POSTGRES_URL` value
4. Keep this safe - you'll need it

### 3. Set Environment Variables

In your Vercel project:
1. Go to **Settings** → **Environment Variables**
2. Add a new variable:
   - **Name:** `POSTGRES_URL`
   - **Value:** Paste the connection string from step 2
   - **Environments:** All (Development, Preview, Production)
3. Click **Save**

### 4. Verify Local .env (Optional)

If you want to test locally, create/update `server/.env`:

```
POSTGRES_URL=your_connection_string_here
GMAIL_USER=avenirsouriant313@gmail.com
GMAIL_PASS=pjrm voqt ahjf yyzs
```

### 5. Install Dependencies

```bash
npm install
```

This will install `@vercel/postgres` and remove `better-sqlite3`.

### 6. (Optional) Run Migration Script Locally

To set up the database schema locally:

```bash
node server/migrate.mjs
```

This creates tables and seeds initial course data.

### 7. Deploy to Vercel

```bash
git add .
git commit -m "Migrate to Vercel Postgres"
git push
```

The deployment will:
1. Install dependencies
2. Build your frontend
3. Deploy the server
4. Automatically initialize database tables on first startup

## API Endpoints (Same as Before)

- `POST /api/register` - Register for a course
- `GET /api/registrations` - List all registrations (JSON)
- `GET /api/registrations.csv` - Export registrations (CSV)
- `GET /api/courses` - List available courses
- `GET /api/health` - Health check

## Benefits Over SQLite

✓ **Persistent storage** - Data survives deployments
✓ **Scalable** - Works with unlimited users
✓ **No native compilation** - No build errors like `better-sqlite3`
✓ **Integrated with Vercel** - Works seamlessly with your frontend
✓ **Automatic backups** - Vercel handles database maintenance
✓ **Free tier** - Generous free allowances

## Troubleshooting

### "POSTGRES_URL is undefined" Error

- Check that you added the environment variable in Vercel Settings
- The variable must be in **all environments** (Development, Preview, Production)
- Redeploy after adding the variable

### Tables not created automatically?

- Run the migration script: `node server/migrate.mjs`
- Or manually call the initialization endpoint by visiting `/api/health` after deployment

### Can't connect locally?

- Make sure your `POSTGRES_URL` in `server/.env` is correct
- Test with: `node server/migrate.mjs`

## Database Schema

### registrations table
```sql
id: SERIAL PRIMARY KEY
created_at: TIMESTAMP DEFAULT NOW()
lang: VARCHAR(10) DEFAULT 'en'
email: VARCHAR(255) NOT NULL
student_name: VARCHAR(255) NOT NULL
age: INTEGER NOT NULL
phone: VARCHAR(20) NOT NULL
course_id: INTEGER NOT NULL
course_title: VARCHAR(255) NOT NULL
comment: TEXT
child_name: VARCHAR(255) NOT NULL
child_dob: VARCHAR(255) NOT NULL
date: VARCHAR(255)
parent_name: VARCHAR(255) NOT NULL
parent_phone: VARCHAR(20) NOT NULL
emergency_phone: VARCHAR(20) NOT NULL
signature: TEXT NOT NULL
current_date: VARCHAR(255) NOT NULL
```

### courses table
```sql
id: SERIAL PRIMARY KEY
title: VARCHAR(255) NOT NULL
spots_left: INTEGER NOT NULL
```

## Support

If you encounter issues:
1. Check Vercel logs: Dashboard → Project → Deployments → View logs
2. Check function logs: Dashboard → Project → Settings → Functions
3. Test locally with migration script
4. Verify POSTGRES_URL environment variable is set correctly
