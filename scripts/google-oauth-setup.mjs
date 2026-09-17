/**
 * One off: mint the Google refresh token the booking API needs.
 *
 *   node scripts/google-oauth-setup.mjs
 *
 * Before running, in Google Cloud Console (console.cloud.google.com):
 *   1. Create a project, or reuse one.
 *   2. APIs and Services, Library, enable "Google Calendar API".
 *   3. APIs and Services, Credentials, Create credentials,
 *      OAuth client ID, application type "Web application".
 *   4. Add this Authorised redirect URI exactly:
 *        http://localhost:5178/oauth2callback
 *   5. On the OAuth consent screen add yourself as a Test user
 *      (or publish the app, otherwise the token expires after 7 days).
 *
 * Then run this with the client id and secret to hand. It prints the three
 * values to paste into Vercel.
 */
import http from 'node:http';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const PORT = 5178;
const REDIRECT = `http://localhost:${PORT}/oauth2callback`;
const SCOPE = 'https://www.googleapis.com/auth/calendar';

const rl = readline.createInterface({ input, output });
const clientId = (await rl.question('GOOGLE_CLIENT_ID: ')).trim();
const clientSecret = (await rl.question('GOOGLE_CLIENT_SECRET: ')).trim();
rl.close();

if (!clientId || !clientSecret) {
  console.error('\nBoth values are required. Stopping.');
  process.exit(1);
}

const authUrl =
  'https://accounts.google.com/o/oauth2/v2/auth?' +
  new URLSearchParams({
    client_id: clientId,
    redirect_uri: REDIRECT,
    response_type: 'code',
    scope: SCOPE,
    access_type: 'offline',
    prompt: 'consent',
  });

console.log('\nOpen this in the browser signed in to the calendar account:\n');
console.log(authUrl + '\n');

const code = await new Promise((resolve, reject) => {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    if (url.pathname !== '/oauth2callback') { res.writeHead(404).end(); return; }
    const c = url.searchParams.get('code');
    const err = url.searchParams.get('error');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<p style="font:16px system-ui;padding:2rem">${c ? 'Done. You can close this tab.' : 'Failed: ' + err}</p>`);
    server.close();
    c ? resolve(c) : reject(new Error(err || 'no code returned'));
  });
  server.listen(PORT, () => console.log(`Waiting for the redirect on ${REDIRECT} ...`));
});

const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    code, client_id: clientId, client_secret: clientSecret,
    redirect_uri: REDIRECT, grant_type: 'authorization_code',
  }),
});
const token = await tokenRes.json();

if (!token.refresh_token) {
  console.error('\nNo refresh token came back. Google only sends one on the first consent.');
  console.error('Revoke the app at myaccount.google.com/permissions and run this again.');
  console.error('Response was:', token);
  process.exit(1);
}

console.log('\nPaste these into Vercel, Settings, Environment Variables, Production:\n');
console.log(`GOOGLE_CLIENT_ID=${clientId}`);
console.log(`GOOGLE_CLIENT_SECRET=${clientSecret}`);
console.log(`GOOGLE_REFRESH_TOKEN=${token.refresh_token}`);
console.log('\nOptional:');
console.log('GOOGLE_CALENDAR_ID=primary');
console.log('BOOKING_TIMEZONE=Europe/London');
console.log('BOOKING_NOTIFY_EMAIL=info@calpir.com');
console.log('\nKeep the refresh token secret. It is full access to that calendar.\n');
