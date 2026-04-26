// POST /api/inquiry
// Relays a webform submission to the Rancho Moonrise CRM webhook, server-side,
// so the API key never ships to the browser.
//
// Body: { inquiry_type, name, email, phone?, ...any other form fields }
//   - inquiry_type: 'wedding' | 'event' | 'general' (from hidden input)
//   - Every other field is passed through in `form_data` to the CRM.
//
// Env vars (set on Vercel for the rancho-moonrise project):
//   RANCHO_CRM_WEBHOOK_URL — full URL, e.g. https://rancho-crm.vercel.app/api/crm/webhook/inquiry
//   RANCHO_API_KEY         — shared secret matching the CRM's RANCHO_API_KEY

const CRM_URL = () => process.env.RANCHO_CRM_WEBHOOK_URL;
const CRM_KEY = () => process.env.RANCHO_API_KEY;

// CRM `event_type` is a free-form text column but the TypeScript types only
// know wedding|private_event|glamping|pool_day_pass|corporate|other. Map every
// form-side value into one of those so Pipeline/Today/reporting stay clean.
const CRM_EVENT_TYPES = new Set([
  'wedding',
  'private_event',
  'glamping',
  'pool_day_pass',
  'corporate',
  'other',
]);

// Form dropdown values → CRM enum. Anything not in this map falls through to 'other'.
const FORM_EVENT_TYPE_MAP = {
  corporate:  'corporate',
  conference: 'corporate',
  private:    'private_event',
  birthday:   'private_event',
  festival:   'other',
  retreat:    'other',
  other:      'other',
};

function mapEventType(inquiryType, formEventType) {
  if (inquiryType === 'wedding') return 'wedding';
  if (inquiryType === 'pool')    return 'pool_day_pass';
  if (inquiryType === 'accommodation' || inquiryType === 'stay' || inquiryType === 'glamping') {
    return 'glamping';
  }
  if (inquiryType === 'event') {
    const v = (formEventType || '').trim().toLowerCase();
    if (FORM_EVENT_TYPE_MAP[v]) return FORM_EVENT_TYPE_MAP[v];
    // Event inquiry without a dropdown choice — default to private_event (the
    // most common bucket) instead of the old 'event_other' which the CRM rejects.
    return 'private_event';
  }
  // Last-ditch: if a future form ever sends a CRM-valid value directly, honor it.
  if (CRM_EVENT_TYPES.has(inquiryType)) return inquiryType;
  return 'other';
}

function sanitize(s, max = 500) {
  if (s == null) return '';
  return String(s).replace(/[\u0000-\u001f\u007f]+/g, ' ').trim().slice(0, max);
}

// Strip hard PII-type fields out before stuffing the rest into form_data JSON.
// Keeps the CRM top-level columns tidy; everything else still gets captured.
const TOP_LEVEL_KEYS = new Set(['name', 'email', 'phone', 'inquiry_type']);

function buildFormData(body) {
  const out = {};
  for (const [k, v] of Object.entries(body || {})) {
    if (TOP_LEVEL_KEYS.has(k)) continue;
    if (v == null || v === '') continue;
    out[k] = typeof v === 'string' ? sanitize(v, 2000) : v;
  }
  return out;
}

function isValidEmail(email) {
  // Intentionally loose — full RFC validation is a tarpit. The browser already
  // enforced `type="email"`; this is a last-line defense against blanks.
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = async (req, res) => {
  // CORS — same-origin in production, but permissive for local dev and
  // for the rare case we want to POST from another Rancho property.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!CRM_URL() || !CRM_KEY()) {
    console.error('inquiry relay: missing RANCHO_CRM_WEBHOOK_URL or RANCHO_API_KEY');
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  // Parse body (Vercel's Node runtime auto-parses JSON when Content-Type is set)
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const name  = sanitize(body.name, 200);
  const email = sanitize(body.email, 200).toLowerCase();
  const phone = sanitize(body.phone, 40);
  const inquiryType = sanitize(body.inquiry_type, 40) || 'general';

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const payload = {
    name,
    email,
    phone: phone || null,
    event_type: mapEventType(inquiryType, body.event_type),
    source: 'webform',
    form_data: buildFormData(body),
    // raw_email stays null — this didn't come from an email parse.
    raw_email: null,
  };

  try {
    const r = await fetch(CRM_URL(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-rancho-api-key': CRM_KEY(),
      },
      body: JSON.stringify(payload),
      // Protect against a hung CRM not blocking the user forever.
      signal: AbortSignal.timeout(8000),
    });

    const text = await r.text();
    let json = null;
    try { json = text ? JSON.parse(text) : null; } catch { /* leave json null */ }

    if (!r.ok) {
      console.error('inquiry relay: CRM returned', r.status, text);
      // Don't leak CRM internals to the browser.
      return res.status(502).json({ error: 'Could not save inquiry. Please try again or call 737-291-1260.' });
    }

    return res.status(201).json({
      ok: true,
      inquiry_id: json && json.inquiry_id ? json.inquiry_id : null,
    });
  } catch (err) {
    console.error('inquiry relay: fetch failed', err);
    return res.status(502).json({ error: 'Could not reach our inquiry system. Please call 737-291-1260 or email events@ranchomoonrise.com.' });
  }
};
