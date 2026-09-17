/**
 * POST /api/book
 *
 * Creates a real Google Calendar event with a Google Meet link and invites the
 * visitor. Google sends the invitation email itself, so no separate email
 * provider is needed for bookings.
 *
 * Body: { name, email, date: "YYYY-MM-DD", time: "HH:MM", timezone?, notes?, _gotcha? }
 * Response: { ok: true, meetLink, eventId, startsAt } or { ok: false, error }
 */
import {
  CALENDAR_ID, BOOKING_TIMEZONE, SLOT_TIMES, SLOT_MINUTES,
  getAccessToken, toRfc3339, addMinutesRfc, isValidEmail, isValidDate, missingEnv,
} from './_google';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const { name, email, date, time, timezone, notes } = body;

  // Honeypot. Answer 200 so a bot cannot tell it was rejected.
  if (typeof body._gotcha === 'string' && body._gotcha.trim() !== '') {
    res.status(200).json({ ok: true });
    return;
  }

  if (typeof name !== 'string' || name.trim().length < 2) {
    res.status(400).json({ ok: false, error: 'Please give your name.' });
    return;
  }
  if (!isValidEmail(email)) {
    res.status(400).json({ ok: false, error: 'That email address does not look right.' });
    return;
  }
  if (!isValidDate(date) || !SLOT_TIMES.includes(String(time))) {
    res.status(400).json({ ok: false, error: 'Pick a date and time from the calendar.' });
    return;
  }

  const gaps = missingEnv();
  if (gaps.length) {
    console.error('booking not configured, missing:', gaps.join(', '));
    res.status(503).json({
      ok: false,
      error: 'Booking is not available right now. Please email info@calpir.com and we will sort a time.',
    });
    return;
  }

  const start = toRfc3339(date, String(time));
  const end = addMinutesRfc(start, SLOT_MINUTES);

  if (Date.parse(start) < Date.now()) {
    res.status(400).json({ ok: false, error: 'That time has already passed. Please pick another.' });
    return;
  }

  try {
    const token = await getAccessToken();

    // Re-check the slot server side. The browser may be working from a stale
    // availability response, and two people can pick the same slot at once.
    const fb = await fetch('https://www.googleapis.com/calendar/v3/freeBusy', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ timeMin: start, timeMax: end, items: [{ id: CALENDAR_ID }] }),
    });
    const fbData: any = await fb.json().catch(() => ({}));
    if (fb.ok && (fbData?.calendars?.[CALENDAR_ID]?.busy || []).length > 0) {
      res.status(409).json({ ok: false, error: 'Someone just took that slot. Please pick another time.' });
      return;
    }

    const attendees: Array<{ email: string }> = [{ email: String(email).trim() }];
    if (process.env.BOOKING_NOTIFY_EMAIL) {
      attendees.push({ email: process.env.BOOKING_NOTIFY_EMAIL });
    }

    const visitorTz = typeof timezone === 'string' && timezone ? timezone : BOOKING_TIMEZONE;
    const description = [
      `Strategy call booked from calpir.com.`,
      ``,
      `Name: ${String(name).trim()}`,
      `Email: ${String(email).trim()}`,
      `Their timezone: ${visitorTz}`,
      ``,
      `What they said:`,
      notes && String(notes).trim() ? String(notes).trim() : 'No notes provided.',
    ].join('\n');

    const create = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events` +
      `?conferenceDataVersion=1&sendUpdates=all`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          summary: `Calpir strategy call: ${String(name).trim()}`,
          description,
          start: { dateTime: start, timeZone: BOOKING_TIMEZONE },
          end: { dateTime: end, timeZone: BOOKING_TIMEZONE },
          attendees,
          guestsCanInviteOthers: false,
          guestsCanModify: false,
          reminders: {
            useDefault: false,
            overrides: [
              { method: 'email', minutes: 24 * 60 },
              { method: 'popup', minutes: 15 },
            ],
          },
          conferenceData: {
            createRequest: {
              requestId: `calpir-${date}-${String(time).replace(':', '')}-${Date.now()}`,
              conferenceSolutionKey: { type: 'hangoutsMeet' },
            },
          },
        }),
      }
    );

    const event: any = await create.json().catch(() => ({}));
    if (!create.ok) {
      throw new Error(event?.error?.message || `calendar insert ${create.status}`);
    }

    const meetLink =
      event.hangoutLink ||
      event.conferenceData?.entryPoints?.find((e: any) => e.entryPointType === 'video')?.uri ||
      null;

    res.status(200).json({ ok: true, eventId: event.id, meetLink, startsAt: start });
  } catch (err: any) {
    console.error('booking failed:', err?.message || err);
    res.status(502).json({
      ok: false,
      error: 'We could not confirm that booking. Please email info@calpir.com and we will lock in a time.',
    });
  }
}
