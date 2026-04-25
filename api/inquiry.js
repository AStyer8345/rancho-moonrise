// POST /api/inquiry
// Relays a webform submission as an email to events@ranchomoonrise.com.
// The Gmail Poller (n8n workflow Ky5foSIFqMmYuny0) ingests this email,
// parses it, and creates the inquiry row in Supabase via the CRM webhook.
// The draft-reply workflow then generates an AI Gmail draft for Ashley.
//
// Why email-not-direct-CRM-POST:
// Gmail is the durable inflow point — every webform submission AND every
// direct email to events@ ends up in the same place. Single source of
// truth, no parallel-path duplication, Ashley sees everything where she
// already works.
//
// Body: { name, email, phone?, inquiry_type, ...any other form fields }
//   - inquiry_type: 'wedding' | 'event' | 'general' (from hidden input)
//   - Other fields (guest count, event date, message, hear-about-us) are
//     supported by a permissive set of aliases since the HTML form fields
//     may be named differently in different page sections.
//
// Env vars (set on Vercel for the rancho-moonrise project):
//   RESEND_API_KEY     — Resend API key
//   INQUIRY_FROM_EMAIL — defaults to "wordpress@ranchomoonrise.com"
//                        (matches the Gmail Poller's `from:` filter exactly,
//                        so no n8n changes needed when this goes live)
//   INQUIRY_TO_EMAIL   — defaults to "events@ranchomoonrise.com"
//
// Resend domain setup (required before this function works):
//   1. Add ranchomoonrise.com to Resend → verify with the SPF/DKIM TXT records
//      Resend issues. These are TXT records and don't conflict with the
//      website's A/CNAME — safe to add today, even before DNS cutover.
//   2. Once verified, the configured FROM_EMAIL resolves and Resend will
//      deliver. Until then, this function returns 502 and the form shows
//      a friendly "please call" fallback.

const RESEND_KEY = () => process.env.RESEND_API_KEY;
const FROM_EMAIL = () => process.env.INQUIRY_FROM_EMAIL || 'wordpress@ranchomoonrise.com';
const TO_EMAIL   = () => process.env.INQUIRY_TO_EMAIL   || 'events@ranchomoonrise.com';

// Strip control characters (0x00-0x1f and 0x7f) from a value, then trim
// and bound. Control chars in the email body would break the line-anchored
// "Field: value" parser the Gmail Poller uses; control chars in the Subject
// header are also disallowed by RFC.
function sanitize(s, max) {
  if (s == null) return '';
  if (max == null) max = 500;
  let out = '';
  const str = String(s);
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    // Keep printable + non-control. Replace control chars with a space so
    // adjacent words don't get glued together.
    if (code >= 32 && code !== 127) {
      out += str[i];
    } else {
      out += ' ';
    }
  }
  // Collapse runs of whitespace into single spaces, then trim and clip.
  return out.replace(/\s+/g, ' ').trim().slice(0, max);
}

function isValidEmail(email) {
  // Intentionally loose — full RFC validation is a tarpit. The browser already
  // enforced `type="email"`; this is a last-line defense against blanks.
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Read a field from the body, trying each alias in order. Returns first
// non-empty match or empty string. Lets the HTML form name fields whatever
// makes sense in markup ("guest_count_range" or "guests" or "# of Guests")
// without forcing parity with the parser's WordPress-format names.
function pick(body, ...aliases) {
  for (const key of aliases) {
    const v = body[key];
    if (v != null && String(v).trim() !== '') return String(v);
  }
  return '';
}

function inquiryLabel(inquiryType) {
  if (inquiryType === 'wedding') return 'Wedding Inquiry';
  if (inquiryType === 'event')   return 'Event Inquiry';
  return 'Inquiry';
}

// Format the email exactly like the WordPress form-relay so the existing
// Gmail Poller parser (regex-based, expects "Name:" / "Email:" / "Tel:"
// / "# of Guests:" / "Desired Date #1:" / "Desired Date #2:" / "Traffic
// Source:" / "Message:" line labels and the trailing signature block)
// works unchanged.
function buildEmail(body) {
  const name        = sanitize(body.name, 200);
  const email       = sanitize(body.email, 200).toLowerCase();
  const phone       = sanitize(pick(body, 'phone', 'tel', 'Tel'), 40);
  const guestRange  = sanitize(pick(body, 'guest_count_range', 'guests', '# of Guests'), 60);
  const date1       = sanitize(pick(body, 'desired_date_1', 'event_date', 'date_1', 'Desired Date #1'), 60);
  const date2       = sanitize(pick(body, 'desired_date_2', 'date_2', 'Desired Date #2'), 60);
  const traffic     = sanitize(pick(body, 'traffic_source', 'hear_about_us', 'how_heard', 'Traffic Source'), 200);
  const message     = sanitize(pick(body, 'message', 'vision', 'notes', 'Message'), 2000);
  const inquiryType = sanitize(body.inquiry_type, 40) || 'wedding';
  const label       = inquiryLabel(inquiryType);

  // Subject line on the email itself. Matches WordPress format ("Rancho
  // Moonrise <Label> form from <Name>; ...") so anyone scanning Gmail
  // sees a familiar shape.
  const subject =
    'Rancho Moonrise ' + label + ' form from ' + name +
    (guestRange ? '; # of Guests: ' + guestRange : '') +
    ((date1 || date2) ? '; Dates: ' + date1 + (date2 ? ' & ' + date2 : '') : '');

  // Body matches WordPress emit format exactly. Gmail Poller's parser keys
  // on these field labels and the trailing "This e-mail was sent from..."
  // signature for message-block boundary detection.
  const lines = [
    'From: ' + name + ' <' + email + '>',
    'Subject: ' + label + ' form from ' + name +
      (guestRange ? '; # of Guests: ' + guestRange : '') +
      ((date1 || date2) ? '; Dates: ' + date1 + (date2 ? ' & ' + date2 : '') : ''),
    '',
    'Message Body:',
    'Name: ' + name,
    'Tel: ' + phone,
    'Email: ' + email,
    '# of Guests: ' + guestRange,
    'Desired Date #1: ' + date1,
    'Desired Date #2: ' + date2,
    'Traffic Source: ' + traffic,
    'Message: ',
    message,
    '',
    '-- ',
    'This e-mail was sent from the wedding inquiry form on Rancho Moonrise (https://ranchomoonrise.com)',
  ];

  return { subject, text: lines.join('\n'), replyTo: email };
}

module.exports = async (req, res) => {
  // CORS — same-origin in production, permissive for local dev and
  // for the rare case we want to POST from another Rancho property.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!RESEND_KEY()) {
    console.error('inquiry relay: missing RESEND_API_KEY');
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  // Parse body (Vercel Node runtime auto-parses JSON when Content-Type is set)
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const name  = sanitize(body.name, 200);
  const email = sanitize(body.email, 200).toLowerCase();

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const { subject, text, replyTo } = buildEmail(body);

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + RESEND_KEY(),
      },
      body: JSON.stringify({
        from: FROM_EMAIL(),
        to: [TO_EMAIL()],
        subject,
        text,
        // Reply-To is the lead's actual email so Ashley/Monet can hit
        // Reply directly on the AI draft and have it go to the lead, not
        // back to events@.
        reply_to: replyTo,
      }),
      // Don't let a slow/hung Resend block the user forever.
      signal: AbortSignal.timeout(8000),
    });

    if (!r.ok) {
      const errText = await r.text();
      console.error('inquiry relay: Resend returned', r.status, errText);
      // Don't leak Resend internals to the browser.
      return res.status(502).json({
        error: 'Could not send your inquiry. Please try again or call 737-291-1260.',
      });
    }

    const data = await r.json().catch(() => ({}));
    return res.status(201).json({
      ok: true,
      id: data.id || null,
    });
  } catch (err) {
    console.error('inquiry relay: fetch failed', err);
    return res.status(502).json({
      error: 'Could not reach our inquiry system. Please call 737-291-1260 or email events@ranchomoonrise.com.',
    });
  }
};
