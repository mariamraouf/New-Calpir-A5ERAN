# Booking setup

The booking flow now creates a real Google Calendar event with a Google Meet
link and invites the visitor. Google sends the invitation email itself, so
there is no separate email service to pay for.

Until the environment variables below are set, `/api/book` returns a clear
"booking is not available, email us" message rather than pretending to work.

## 1. Google Cloud, about ten minutes

At <https://console.cloud.google.com>, signed in as the account whose calendar
should hold the bookings:

1. Create a project, or reuse one.
2. **APIs and Services**, **Library**, search **Google Calendar API**, Enable.
3. **APIs and Services**, **OAuth consent screen**. External. Fill in the app
   name and support email. Under **Test users**, add your own Google address.
   - A token issued while the app is in Testing expires after 7 days. Once the
     flow works, click **Publish app** so the refresh token stops expiring.
     You do not need Google verification for a calendar scope used only by you.
4. **APIs and Services**, **Credentials**, **Create credentials**,
   **OAuth client ID**, application type **Web application**.
5. Under **Authorised redirect URIs** add **both** of these, exactly:

   ```
   https://developers.google.com/oauthplayground
   http://localhost:5178/oauth2callback
   ```

6. Copy the client ID and client secret.

## 2. Mint the refresh token, about two minutes

Two ways. The first needs no terminal.

### Option A: OAuth Playground, browser only

1. Go to <https://developers.google.com/oauthplayground>.
2. Click the **gear icon**, top right.
3. Tick **Use your own OAuth credentials** and paste the client ID and secret.
4. In the left list, find **Calendar API v3** and select
   `https://www.googleapis.com/auth/calendar`.
5. **Authorize APIs**, sign in as the calendar account, allow.
6. **Exchange authorization code for tokens**.
7. Copy the **Refresh token**.

### Option B: the script

From the project folder, in a terminal on your own machine:

```
node scripts/google-oauth-setup.mjs
```

Paste the client ID and secret when asked, open the URL it prints, approve the
calendar permission, and it prints the three values to copy.

This one has to run on the machine whose browser you will approve in. The
script starts a small server on `localhost:5178` and Google redirects the
browser back to it, so both have to be the same computer.

## 3. Vercel

Project **new-calpir-a5-eran**, **Settings**, **Environment Variables**, add to
**Production**:

| Name | Value |
| --- | --- |
| `GOOGLE_CLIENT_ID` | from step 1 |
| `GOOGLE_CLIENT_SECRET` | from step 1 |
| `GOOGLE_REFRESH_TOKEN` | from step 2 |

Optional:

| Name | Default | What it does |
| --- | --- | --- |
| `GOOGLE_CALENDAR_ID` | `primary` | Use a specific calendar instead of the main one |
| `BOOKING_TIMEZONE` | `Europe/London` | The zone the 10:00 to 19:30 slots are defined in |
| `BOOKING_NOTIFY_EMAIL` | none | An extra address added as a guest on every booking, so you get the invite too |

Redeploy after adding them. Environment variables are only picked up by a new
build.

## 4. Check it

Book a slot on the live site. You should get:

- An event in the calendar at the right time
- A Google Meet link shown on the confirmation screen
- A calendar invitation email to the visitor, sent by Google
- The same invitation to `BOOKING_NOTIFY_EMAIL` if you set it
- `generate_lead` in GA4 Realtime with `form_location: booking_system`

Book the same slot twice in two tabs. The second should be refused with
"Someone just took that slot", not double booked.

## How it works

- `api/availability.ts` queries the calendar's free/busy and returns which of
  the 10:00 to 19:30 slots are free. Taken slots render struck through and
  cannot be clicked. Slots less than an hour away are hidden.
- `api/book.ts` re-checks free/busy server side, then creates the event with
  `conferenceDataVersion=1` for the Meet link and `sendUpdates=all` so Google
  emails the invitations.
- `api/_google.ts` swaps the refresh token for an access token on each request.
  No SDK: the whole thing is two REST calls, so it uses `fetch` directly and
  adds no dependencies.

If Google is unreachable, availability falls back to offering every slot rather
than showing an empty calendar. A double booking is recoverable by hand. A page
that looks broken loses the lead.

## Notes

- The refresh token is full read and write access to that calendar. It belongs
  in Vercel's environment variables and nowhere else. Never commit it.
- The booking form no longer posts to Formspree. The Formspree form `xwleyvaj`
  can be retired once you are happy this works.
- Slot times are defined in `api/_google.ts` (`SLOT_TIMES`) and mirrored in
  `BookingSystem.tsx` (`generateTimeSlots`). Change both together.
