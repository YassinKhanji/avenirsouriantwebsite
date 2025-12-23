# Code Review & Hardcoding Fixes

## Issues Found & Fixed

### 1. Backend - Hardcoded Domain URLs (index.mjs)
**Issue**: The unsubscribe links in confirmation emails were hardcoded with `https://avenirsouriant.com`

**Fix**: 
- Added `appDomain` environment variable with default: `process.env.APP_DOMAIN || 'https://avenirsouriant.com'`
- Updated all three email templates (EN, FR, AR) to use `${appDomain}/unsubscribe?email=...` instead of hardcoded URLs

**Files Changed**: `backend/server/index.mjs`

### 2. Backend - Hardcoded Admin Email (index.mjs)
**Issue**: Admin notification emails were sent to hardcoded `'administration@avenirsouriant.com'`

**Fix**:
- Added `adminEmail` environment variable with default: `process.env.ADMIN_EMAIL || 'administration@avenirsouriant.com'`
- Updated the admin notification email to use `to: adminEmail`

**Files Changed**: `backend/server/index.mjs`

### 3. Frontend - Hardcoded Google Form URL (App.tsx)
**Issue**: The Google Form link was hardcoded in the App.tsx CTA button

**Fix**:
- Created new `frontend/src/app/config.ts` file with `config` object
- Added `googleFormUrl` with environment variable support: `import.meta.env.VITE_GOOGLE_FORM_URL`
- Updated App.tsx to import and use `config.googleFormUrl`

**Files Changed**: 
- `frontend/src/app/App.tsx` (added import, updated href)
- `frontend/src/app/config.ts` (new file)

## Environment Variables to Configure

### Backend (.env)
```
APP_DOMAIN=https://yourdomain.com
ADMIN_EMAIL=admin@yourdomain.com
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
```

### Frontend (.env or .env.local in frontend folder)
```
VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/YOUR_FORM_ID/viewform
```

## What Was Already Good
✅ Contact information (phone, email, address) properly in i18n.tsx for translations  
✅ Database configuration uses environment variables  
✅ Email credentials use environment variables with fallbacks  
✅ Theme persistence uses localStorage (appropriate use case)  
✅ Course/activity data uses i18n translations  
✅ Layout and styling doesn't have hardcoded business logic

## Testing Recommendations
1. Verify unsubscribe emails contain the correct domain from APP_DOMAIN env var
2. Test admin notification email is sent to correct ADMIN_EMAIL
3. Verify Google Form CTA link works with VITE_GOOGLE_FORM_URL
4. Test all three languages for email templates still work correctly
