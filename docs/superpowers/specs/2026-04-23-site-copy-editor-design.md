# Site Copy Editor — Design Spec
**Date:** 2026-04-23
**Repo:** `AStyer8345/rancho-moonrise`
**Status:** Approved — ready for implementation planning

---

## Problem

Page text (intro paragraphs, hero headlines, AEO blocks) is hardcoded in HTML files. Ashley cannot update copy without a developer. The events page AEO block is the primary motivating example.

---

## Scope

### In
- New `site_content` Supabase table with 4 seeded blocks
- New "Site Copy" admin tab in `/admin/index.html`
- Non-blocking Supabase hydration on `events.html` and `index.html`
- Move `.aeo-block` section on `events.html` from near-top to near-bottom (above CTA banner)
- RLS: authenticated write, anon read

### Out
- Rich text / HTML editing
- Free creation of new blocks from admin UI
- Pages other than events + homepage in this pass
- Announcement banner (can be added as a row later — zero code changes needed)

---

## Database

### Table: `site_content`

```sql
CREATE TABLE site_content (
  block_key  TEXT PRIMARY KEY,
  page       TEXT NOT NULL,
  label      TEXT NOT NULL,
  body       TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### Seed data (pre-populated with current hardcoded text)

| block_key | page | label | body (initial value) |
|---|---|---|---|
| `events_aeo_heading` | events | ⚠️ Events — AEO heading (SEO-sensitive — changing keyword phrasing may affect search rankings) | What Kinds of Events Happen at Rancho Moonrise Near Austin? |
| `events_aeo_body` | events | Events — AEO body (separate paragraphs with a blank line between them) | Rancho Moonrise hosts public ranch events year-round on its 36-acre property 20 minutes from downtown Austin, TX. The regular lineup includes live music nights, yoga and bottomless mimosas poolside, crawfish boils, monthly honky-tonk parties (the Rancho Rodeo Sun Series), seasonal dinner parties under the stars, and holiday celebrations. Events are open to the public — you don't need to be a ranch guest to attend, but booking a cabin or safari tent turns any event into a full ranch weekend.\n\nIn addition to the public event calendar, Rancho Moonrise is available for private events including weddings (up to 200 guests), corporate retreats, bachelorette parties, and milestone celebrations. Private events have exclusive full-ranch access with no overlap with public programming. |
| `home_hero_headline` | home | Homepage — hero headline | Austin's Glamping & Events Ranch |
| `home_hero_subtitle` | home | Homepage — hero subtitle | Safari tents, hand-crafted cabins, destination weddings, and unforgettable events — all on 36 acres, 20 minutes from downtown Austin. |

### RLS policies

- `SELECT`: public anon key allowed (same pattern as `rancho_events`)
- `INSERT` / `UPDATE` / `DELETE`: authenticated users only

---

## Admin UI

### Tab placement
New "Site Copy" tab inserted between "Galleries" and "Reviews" in `/admin/index.html`.

### Behavior
- On tab load: fetch all rows from `site_content` ordered by `page`, then `block_key`
- Group rows by `page` with a section heading (e.g. "Events", "Homepage")
- Each block renders as:
  ```
  [label text]
  [textarea — auto-height, full width]
  [Save button]
  ```
- Save: `UPDATE site_content SET body = :body, updated_at = NOW() WHERE block_key = :key`
- On success: button text → "Saved ✓" for 2 seconds, then reverts to "Save"
- On error: button text → "Error — try again" in red

### No create / delete UI
Blocks are fixed in this pass. Adding a new block = add a row via Supabase migration; no admin UI needed for that.

---

## Page Changes

### `events.html`

**1. Move AEO block**
Move `<section class="section aeo-block">` (currently lines ~188–194, just below the hero/AEO FAQ section) to just above the `.cta-banner` section near the bottom of the page.

**2. Add `data-copy-key` attributes**
```html
<h2 data-copy-key="events_aeo_heading">What Kinds of Events Happen...</h2>
<!-- replace the two static <p> tags with a single container -->
<div data-copy-key="events_aeo_body">
  <p>Rancho Moonrise hosts public ranch events...</p>
  <p>In addition to the public event calendar...</p>
</div>
```

**3. Hydrator (non-blocking)**
Added at bottom of `<body>`, after existing Supabase hydrators:
```js
(function() {
  var SUPABASE_URL = '...';
  var SUPABASE_ANON_KEY = '...';
  fetch(SUPABASE_URL + '/rest/v1/site_content?page=eq.events&select=block_key,body', {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: 'Bearer ' + SUPABASE_ANON_KEY }
  })
  .then(function(r) { return r.json(); })
  .then(function(rows) {
    rows.forEach(function(row) {
      var el = document.querySelector('[data-copy-key="' + row.block_key + '"]');
      if (!el || !row.body) return;
      var tag = el.tagName;
      if (tag === 'H1' || tag === 'H2' || tag === 'P') {
        // Simple text element — set content directly (avoids nested <p> in <p>)
        el.textContent = row.body;
      } else {
        // DIV container for multi-paragraph body — split on blank lines → <p> tags
        el.innerHTML = row.body.split(/\n\n+/).map(function(p) {
          return '<p>' + p.trim() + '</p>';
        }).join('');
      }
    });
  })
  .catch(function() {}); // silent fail — hardcoded text stays
})();
```

### `index.html`

**1. Add `data-copy-key` attributes**
```html
<h1 class="hero__title" data-copy-key="home_hero_headline">Austin's Glamping & Events Ranch</h1>
<p class="hero__subtitle" data-copy-key="home_hero_subtitle">Safari tents...</p>
```

**2. Hydrator (non-blocking)**
Same pattern as events.html, with `page=eq.home`.

---

## Error Handling / Fallback

- Hydrators are wrapped in IIFE with `.catch(function() {})` — any fetch failure leaves hardcoded text in place
- No loading spinner or blank flash — hardcoded text is visible from first paint
- If a `body` field is empty string, the hydrator skips that block (preserves hardcoded text)

---

## Testing

1. Open `/admin` → Site Copy tab → verify 4 blocks load with current copy
2. Edit `events_aeo_body` — change one word, Save → confirm "Saved ✓"
3. Open `https://rancho-moonrise.vercel.app/pages/events.html` → verify updated text appears (allow ~1s for hydration)
4. Disable JS in browser → verify hardcoded fallback text renders correctly
5. Confirm AEO block now appears near bottom of events page, above CTA banner
6. Open `index.html` → edit hero headline → verify it hydrates on homepage

---

## Files Changed

| File | Change |
|---|---|
| Supabase migration | CREATE TABLE + seed + RLS |
| `site/admin/index.html` | Add Site Copy tab + JS handlers |
| `site/pages/events.html` | Move AEO block, add data-copy-key attrs, add hydrator |
| `site/index.html` | Add data-copy-key attrs to hero, add hydrator |
