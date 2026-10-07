/**
 * Helper script to generate a Google Calendar OAuth Refresh Token
 * 
 * Usage:
 *   node scripts/get-google-tokens.mjs
 */

import http from 'http';
import url from 'url';
import readline from 'readline';
import { exec } from 'child_process';
import { google } from 'googleapis';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

// Open URL in default browser across Windows, macOS, and Linux
function openBrowser(targetUrl) {
  const platform = process.platform;
  let cmd = '';
  if (platform === 'win32') {
    cmd = `start "" "${targetUrl}"`;
  } else if (platform === 'darwin') {
    cmd = `open "${targetUrl}"`;
  } else {
    cmd = `xdg-open "${targetUrl}"`;
  }
  exec(cmd, (err) => {
    if (err) {
      console.log('   (Could not automatically launch browser; please copy/paste the link above)');
    }
  });
}

async function main() {
  console.log('\n======================================================');
  console.log('   Google Calendar & Meet OAuth Token Setup Helper    ');
  console.log('======================================================\n');

  // Read from environment variables or prompt interactively
  const clientId =
    process.env.GOOGLE_CLIENT_ID ||
    (await question('Enter your Google Client ID: ')).trim();

  const clientSecret =
    process.env.GOOGLE_CLIENT_SECRET ||
    (await question('Enter your Google Client Secret: ')).trim();

  console.log(`Using Client ID: ${clientId.substring(0, 20)}...`);

  const PORT = 3456;
  const redirectUri = `http://localhost:${PORT}/oauth2callback`;

  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUri
  );

  const scopes = [
    'https://www.googleapis.com/auth/calendar.events',
  ];

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent', // Ensures refresh_token is returned
    scope: scopes,
  });

  console.log('\n------------------------------------------------------');
  console.log('IMPORTANT: In Google Cloud Console (Credentials > your OAuth Client):');
  console.log('If your client type is "Web application", ensure:');
  console.log(`👉 ${redirectUri}`);
  console.log('is added under "Authorized redirect URIs".');
  console.log('(If your client is "Desktop app", this is allowed automatically).');
  console.log('------------------------------------------------------\n');

  console.log('Opening your browser to authorize access...\n');
  console.log('If the browser does not open automatically, visit this URL:');
  console.log(`\n${authUrl}\n`);

  openBrowser(authUrl);

  let finished = false;

  async function handleCode(code) {
    if (finished) return;
    finished = true;
    try {
      console.log('\nExchanging authorization code for tokens...');
      const { tokens } = await oauth2Client.getToken(code);

      console.log('\n======================================================');
      console.log('  SUCCESS! Add the following to your .env.local file:');
      console.log('======================================================\n');
      console.log(`GOOGLE_CLIENT_ID=${clientId}`);
      console.log(`GOOGLE_CLIENT_SECRET=${clientSecret}`);
      console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`);
      console.log(`GOOGLE_CALENDAR_ID=primary`);
      console.log('\n======================================================\n');

      server.close();
      rl.close();
      process.exit(0);
    } catch (err) {
      console.error('\n❌ Token exchange error:', err?.message || err);
      console.log('Please verify your credentials and try again.');
      server.close();
      rl.close();
      process.exit(1);
    }
  }

  // Start temporary local server to capture redirect
  const server = http.createServer(async (req, res) => {
    try {
      if (req.url.startsWith('/oauth2callback')) {
        const queryParams = new url.URL(req.url, `http://localhost:${PORT}`).searchParams;
        const code = queryParams.get('code');
        const error = queryParams.get('error');

        if (error) {
          res.writeHead(400, { 'Content-Type': 'text/html' });
          res.end(`<h2>Authorization Error: ${error}</h2>`);
          console.error(`\n❌ Authorization error from Google: ${error}`);
          return;
        }

        if (!code) {
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          res.end('Missing code parameter.');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <div style="font-family: sans-serif; text-align: center; padding: 50px;">
            <h2 style="color: #16a34a; font-size: 24px;">Authorization Successful!</h2>
            <p style="color: #4b5563; font-size: 16px;">You can close this tab and return to your terminal.</p>
          </div>
        `);

        await handleCode(code);
      }
    } catch (err) {
      console.error('Error handling request:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal server error');
    }
  });

  server.listen(PORT, () => {
    console.log(`Listening for authorization response on ${redirectUri}...`);
  });

  // Fallback: also accept pasting the code or redirect URL into the console
  setTimeout(async () => {
    if (!finished) {
      console.log('Tip: If the browser redirected to an address like:');
      console.log('http://localhost:3456/oauth2callback?code=4/0A... but didn\'t finish,');
      const pasted = await question('Paste the full redirected URL or the code here (or press Enter to keep waiting): ');
      if (pasted && pasted.trim()) {
        const trimmed = pasted.trim();
        let extractedCode = trimmed;
        if (trimmed.includes('code=')) {
          const match = trimmed.match(/code=([^&]+)/);
          if (match && match[1]) {
            extractedCode = decodeURIComponent(match[1]);
          }
        }
        await handleCode(extractedCode);
      }
    }
  }, 3000);
}

main().catch((err) => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
