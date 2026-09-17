/**
 * Google Calendar helpers for the booking endpoints.
 *
 * No SDK on purpose. googleapis pulls in a large dependency tree for what is
 * really two REST calls, so this talks to the endpoints directly with fetch.
 *
 * Auth is an OAuth2 refresh token belonging to the account that owns the
 * calendar. A service account is not used deliberately: service accounts
 * cannot create Google Meet links on a consumer Google account without
 * Workspace domain wide delegation, and a refresh token works either way.
 *
 * Required environment variables (set these in Vercel):
 *   GOOGLE_CLIENT_ID
 *   GOOGLE_CLIENT_SECRET
 *   GOOGLE_REFRESH_TOKEN
 * Optional:
 *   GOOGLE_CALENDAR_ID   default "primary"
 *   BOOKING_TIMEZONE     default "Europe/London"
 *   BOOKING_NOTIFY_EMAIL an extra address added to every booking
 */

export const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'primary';
export const BOOKING_TIMEZONE = process.env.BOOKING_TIMEZONE || 'Europe/London';
export const SLOT_MINUTES = 30;

/** Slot grid, in booking-timezone local time. Matches the front end. */
export const SLOT_TIMES = (() => {
  const out: string[] = [];
  for (let m = 10 * 60; m <= 19 * 60 + 30; m += SLOT_MINUTES) {
    out.push(`${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`);
  }
  return out;
})();

export function missingEnv(): string[] {
  return ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_REFRESH_TOKEN']
    .filter((k) => !process.env[k]);
}

/** Exchange the long lived refresh token for a short lived access token. */
export async function getAccessToken(): Promise<string> {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID as string,
      client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN as string,
      grant_type: 'refresh_token',
    }),
  });
  const data: any = await res.json().catch(() => ({}));
  if (!res.ok || !data.access_token) {
    throw new Error(
      `Google token refresh failed (${res.status}): ${data.error_description || data.error || 'unknown'}`
    );
  }
  return data.access_token as string;
}

/**
 * The UTC offset of a timezone at a given instant, as "+01:00".
 * Lets us build an RFC3339 timestamp for a wall clock time in that zone
 * without pulling in a date library on the server.
 */
function offsetFor(date: Date, timeZone: string): string {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour12: false,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  });
  const p: Record<string, string> = {};
  for (const { type, value } of dtf.formatToParts(date)) p[type] = value;
  const asUTC = Date.UTC(
    Number(p.year), Number(p.month) - 1, Number(p.day),
    Number(p.hour === '24' ? '00' : p.hour), Number(p.minute), Number(p.second)
  );
  const mins = Math.round((asUTC - date.getTime()) / 60000);
  const sign = mins >= 0 ? '+' : '-';
  const abs = Math.abs(mins);
  return `${sign}${String(Math.floor(abs / 60)).padStart(2, '0')}:${String(abs % 60).padStart(2, '0')}`;
}

/** "2026-09-20" + "14:30" in BOOKING_TIMEZONE -> RFC3339 with the right offset. */
export function toRfc3339(dateStr: string, timeStr: string, timeZone = BOOKING_TIMEZONE): string {
  const [y, mo, d] = dateStr.split('-').map(Number);
  const [h, mi] = timeStr.split(':').map(Number);
  // Guess the instant, then correct using the offset that actually applies.
  let guess = new Date(Date.UTC(y, mo - 1, d, h, mi, 0));
  for (let i = 0; i < 2; i++) {
    const off = offsetFor(guess, timeZone);
    const sign = off[0] === '-' ? 1 : -1;
    const offMins = sign * (Number(off.slice(1, 3)) * 60 + Number(off.slice(4, 6)));
    guess = new Date(Date.UTC(y, mo - 1, d, h, mi, 0) + offMins * 60000);
  }
  return `${dateStr}T${timeStr}:00${offsetFor(guess, timeZone)}`;
}

export function addMinutesRfc(rfc: string, minutes: number): string {
  const base = new Date(rfc);
  const shifted = new Date(base.getTime() + minutes * 60000);
  const off = rfc.slice(-6);
  const sign = off[0] === '+' ? 1 : -1;
  const offMins = sign * (Number(off.slice(1, 3)) * 60 + Number(off.slice(4, 6)));
  const local = new Date(shifted.getTime() + offMins * 60000);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${local.getUTCFullYear()}-${p(local.getUTCMonth() + 1)}-${p(local.getUTCDate())}` +
    `T${p(local.getUTCHours())}:${p(local.getUTCMinutes())}:00${off}`;
}

export function isValidEmail(v: unknown): v is string {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
}

export function isValidDate(v: unknown): v is string {
  return typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v));
}
