// Offline runtime compatibility checks. Every upstream request is intercepted.
const assert = require('node:assert/strict');
const inquiry = require('../api/inquiry.js');
const complete = require('../api/complete.js');
function response() {
  return { code: null, body: null, setHeader() {}, status(code) { this.code = code; return this; }, json(body) { this.body = body; return this; }, end() { return this; } };
}
(async () => {
  process.env.RANCHO_CRM_WEBHOOK_URL = 'https://crm.example.invalid/inquiry';
  process.env.RANCHO_API_KEY = 'offline-test';
  process.env.BRIEFING_AUTH_TOKEN = 'offline-test';
  process.env.GITHUB_TOKEN = 'offline-test';
  let calls = [];
  global.fetch = async (url, options) => {
    calls.push({ url, options });
    return { ok: true, text: async () => JSON.stringify({ inquiry_id: 'offline-test' }) };
  };
  let res = response();
  await inquiry({ method: 'POST', body: { name: 'Test', email: 'test@example.invalid', inquiry_type: 'event', event_type: 'corporate', guests: '100-150', date_range: 'Fall 2026', details: 'Offline only' } }, res);
  assert.equal(res.code, 201);
  const forwarded = JSON.parse(calls[0].options.body);
  assert.equal(forwarded.event_type, 'corporate');
  assert.equal(forwarded.guest_count, 100);
  assert.equal(forwarded.form_data.desired_date_1, 'Fall 2026');
  assert.equal(forwarded.form_data.message, 'Offline only');
  assert.ok(calls[0].options.signal instanceof AbortSignal);
  calls = []; res = response();
  await inquiry({ method: 'POST', body: { name: 'Test', email: 'invalid' } }, res);
  assert.equal(res.code, 400); assert.equal(calls.length, 0);
  res = response();
  await complete({ method: 'POST', headers: {}, body: { id: 'offline' } }, res);
  assert.equal(res.code, 401); assert.equal(calls.length, 0);
  global.fetch = async (url, options) => {
    calls.push({ url, options });
    if (options.method === 'PUT') return { ok: true, json: async () => ({ content: { sha: 'offline-updated' } }) };
    return { ok: true, json: async () => ({ content: Buffer.from('Existing log\n').toString('base64'), sha: 'offline-sha' }) };
  };
  res = response();
  await complete({ method: 'POST', headers: { authorization: 'Bearer offline-test' }, body: { id: 'offline', title: 'Offline test' } }, res);
  assert.equal(res.code, 200); assert.equal(calls.length, 2);
  const write = JSON.parse(calls[1].options.body);
  assert.match(Buffer.from(write.content, 'base64').toString(), /offline — RESOLVED/);
  assert.equal(write.sha, 'offline-sha');
  console.log('Offline Node runtime checks passed: inquiry mapping/validation and authenticated completion.');
})().catch(error => { console.error(error); process.exitCode = 1; });
