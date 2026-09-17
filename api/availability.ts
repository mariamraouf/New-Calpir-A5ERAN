/**
 * GET /api/availability?date=YYYY-MM-DD
 *
 * Returns the slots that are actually free on the booking calendar for that
 * day, so the front end can only offer times that exist. Without this the UI
 * happily offers a slot that is already taken.
 *
 * Response: { date, timezone, slots: [{ time, available }] }
 *
 * If Google is not configured yet, every slot is returned as available and
 * `configured: false` is set, so the page keeps working during setup.
 */
import {
  CALENDAR_ID, BOOKING_TIMEZONE, SLOT_TIMES, SLOT_MINUTES,
  getAccessToken, toRfc3339, addMinutesRfc, isValidDate, missingEnv,
} from './_google';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const date = String(req.query?.date || '');
  if (!isValidDate(date)) {
    res.status(400).json({ error: 'Pass ?date=YYYY-MM-DD' });
    return;
  }

  const allFree = SLOT_TIMES.map((time) => ({ time, available: true }));

  if (missingEnv().length) {
    res.status(200).json({ date, timezone: BOOKING_TIMEZONE, configured: false, slots: allFree });
    return;
  }

  try {
    const dayStart = toRfc3339(date, SLOT_TIMES[0]);
    const dayEnd = addMinutesRfc(toRfc3339(date, SLOT_TIMES[SLOT_TIMES.length - 1]), SLOT_MINUTES);

    const token = await getAccessToken();
    const fb = await fetch('https://www.googleapis.com/calendar/v3/freeBusy', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timeMin: dayStart,
        timeMax: dayEnd,
        timeZone: BOOKING_TIMEZONE,
        items: [{ id: CALENDAR_ID }],
      }),
    });
    const data: any = await fb.json().catch(() => ({}));
    if (!fb.ok) throw new Error(data?.error?.message || `freeBusy ${fb.status}`);

    const busy: Array<{ start: string; end: string }> =
      data?.calendars?.[CALENDAR_ID]?.busy || [];
    const busyRanges = busy.map((b) => [Date.parse(b.start), Date.parse(b.end)] as const);

    const now = Date.now();
    const slots = SLOT_TIMES.map((time) => {
      const start = Date.parse(toRfc3339(date, time));
      const end = start + SLOT_MINUTES * 60000;
      const clashes = busyRanges.some(([bs, be]) => start < be && end > bs);
      // Never offer a slot in the past, and give an hour of lead time.
      const tooSoon = start < now + 60 * 60000;
      return { time, available: !clashes && !tooSoon };
    });

    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=120');
    res.status(200).json({ date, timezone: BOOKING_TIMEZONE, configured: true, slots });
  } catch (err: any) {
    // Availability is a nicety. If Google is unreachable, let people book and
    // sort out a clash by hand rather than showing an empty calendar.
    console.error('availability failed:', err?.message || err);
    res.status(200).json({
      date, timezone: BOOKING_TIMEZONE, configured: true, degraded: true, slots: allFree,
    });
  }
}
