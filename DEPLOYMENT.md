# AverniSouriant Learning Center

A modern, AI-powered learning platform for Arabic courses and enrichment activities.

## Features

✅ **Fully Functional Navigation** - Browse courses, activities, and contact information
✅ **Individual Course Pages** - Detailed information for each Arabic course
✅ **Activity Detail Pages** - Complete information about enrichment programs
✅ **Contact Page** - Get in touch with administration
✅ **Registration System** - Direct link to registration form
✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
✅ **Modern UI** - Beautiful animations and gradients

## Setup Instructions

### 1. Install Dependencies

First, you need to install the required packages, including React Router:

```bash
npm install
```

If `npm` doesn't work, try:
```bash
pnpm install
```

### 2. Run Development Server

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is busy).

### 3. Build for Production

To create a production build:

```bash
npm run build
```

This creates optimized files in the `dist/` folder.

## Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "Import Project"
5. Select your repository
6. Vercel will auto-detect Vite and deploy!

### Option 2: Netlify (Also Free)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up and click "Add new site"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

### Option 3: GitHub Pages

1. Install the GitHub Pages plugin:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Add `base` to `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Site Structure

```
/                  → Home page with all courses and activities
/courses           → List of all Arabic courses
/course/:id        → Individual course details (IDs: 1-6)
/activities        → List of all enrichment activities
/activity/:id      → Individual activity details (IDs: 7-8)
/contact           → Contact information and form
```

## Available Courses

1. AI-Powered Arabic for Beginners
2. Arabic for Kids
3. Advanced Arabic Literature
4. Conversational Arabic with AI
5. Teen Arabic Course
6. Business Arabic

## Available Activities

7. Youth Soccer Program
8. Robotics & Coding Club

## Contact Information

**Email:** administration@avernisouriant.com

**Registration:** Click any "Register" button or visit the registration form directly.

## Technologies Used

- **React 18** - Modern UI library
- **TypeScript** - Type-safe code
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Radix UI** - Accessible components
- **Lucide React** - Beautiful icons

## Troubleshooting

### React Router not found?
Run: `npm install react-router-dom`

### Build fails?
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again
4. Run `npm run build`

### Port already in use?
Vite will automatically use the next available port.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 AverniSouriant. All rights reserved.
