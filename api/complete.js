// POST /api/complete
// Appends a resolution line to rancho-done-log.md via GitHub Contents API.
//
// Body: { id, title, system, note? }
// Auth: Authorization: Bearer <BRIEFING_AUTH_TOKEN>
//
// Env vars (set on Vercel for the rancho-moonrise project):
//   BRIEFING_AUTH_TOKEN — shared secret Adam enters once on the improvement-plan page
//                        (same token name as client-ops so he can paste the same value on both)
//   GITHUB_TOKEN        — fine-grained PAT with contents:write on AStyer8345/rancho-moonrise
//   GITHUB_OWNER        — default "AStyer8345"
//   GITHUB_REPO         — default "rancho-moonrise"
//   GITHUB_BRANCH       — default "main"

const OWNER  = process.env.GITHUB_OWNER  || 'AStyer8345';
const REPO   = process.env.GITHUB_REPO   || 'rancho-moonrise';
const BRANCH = process.env.GITHUB_BRANCH || 'main';
const FILE   = 'rancho-done-log.md';

const GH_HEADERS = () => ({
  'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
  'Accept':        'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent':    'rancho-moonrise-improvement-plan',
});

function nowStamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const y = d.getFullYear();
  const m = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hh = pad(d.getHours());
  const mm = pad(d.getMinutes());
  return `${y}-${m}-${day} ${hh}:${mm}`;
}

function sanitize(s, max = 200) {
  if (typeof s !== 'string') return '';
  return s.replace(/[\r\n|]+/g, ' ').trim().slice(0, max);
}

async function getFile() {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE}?ref=${BRANCH}`;
  const r = await fetch(url, { headers: GH_HEADERS() });
  if (!r.ok) {
    const body = await r.text();
    throw new Error(`GitHub GET ${r.status}: ${body}`);
  }
  const json = await r.json();
  const content = Buffer.from(json.content, 'base64').toString('utf-8');
  return { content, sha: json.sha };
}

async function putFile(content, sha, message) {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE}`;
  const r = await fetch(url, {
    method: 'PUT',
    headers: { ...GH_HEADERS(), 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message,
      content: Buffer.from(content, 'utf-8').toString('base64'),
      sha,
      branch: BRANCH,
      committer: { name: 'rancho-mark-done', email: 'noreply@ranchomoonrise.com' },
    }),
  });
  if (!r.ok) {
    const body = await r.text();
    throw new Error(`GitHub PUT ${r.status}: ${body}`);
  }
  return r.json();
}

module.exports = async (req, res) => {
  // CORS — same origin in practice, permissive for local dev
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST')    return res.status(405).json({ error: 'Method not allowed' });

  // Auth
  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  const expected = process.env.BRIEFING_AUTH_TOKEN;
  if (!expected) {
    return res.status(500).json({ error: 'Server missing BRIEFING_AUTH_TOKEN' });
  }
  if (!token || token !== expected) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Parse body (Vercel Node runtime auto-parses JSON when Content-Type is set)
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const id     = sanitize(body.id, 80);
  const title  = sanitize(body.title, 200);
  const system = sanitize(body.system, 40) || 'rancho-plan';
  const note   = sanitize(body.note, 200);

  if (!id) return res.status(400).json({ error: 'Missing id' });

  const stamp = nowStamp();
  const noteSuffix = note ? ` | ${note}` : '';
  const line = `[${stamp}] [${system}] ${id} — RESOLVED | marked done by Adam from improvement-plan page${title ? ' | ' + title : ''}${noteSuffix}\n`;

  try {
    const { content, sha } = await getFile();
    // Idempotency: if this id already appears as RESOLVED on any date, don't double-log.
    // (Unlike briefing where items can recur daily, rancho improvement tasks are
    // one-and-done — once a task is RESOLVED it stays resolved.)
    const alreadyDone = content
      .split('\n')
      .some(l => l.includes(` ${id} `) && l.includes('RESOLVED'));
    if (alreadyDone) {
      return res.status(200).json({ ok: true, idempotent: true, line });
    }

    // Append line, preserving trailing newline structure
    const trimmed = content.endsWith('\n') ? content : content + '\n';
    const updated = trimmed + line;

    await putFile(updated, sha, `rancho: mark ${id} done`);
    return res.status(200).json({ ok: true, line });
  } catch (err) {
    console.error('complete handler error:', err);
    return res.status(500).json({ error: String(err.message || err) });
  }
};
