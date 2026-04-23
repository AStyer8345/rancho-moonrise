# Site Copy Editor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Site Copy admin tab so Ashley can edit the events AEO block and homepage hero text without touching code.

**Architecture:** New `site_content` Supabase table (one row per editable block). Admin gets a new tab that fetches all blocks grouped by page and renders a labeled textarea + Save button per block. Public pages add `data-copy-key` attributes to target elements and a non-blocking IIFE hydrator that swaps hardcoded text at runtime. Hardcoded HTML stays in place as SEO fallback.

**Tech Stack:** Vanilla JS, Supabase REST API (anon key, no SDK), static HTML, Supabase MCP (`project_id: uuqedsvjlkeszrbwzizl`)

---

## File Map

| File | Change |
|---|---|
| Supabase (MCP) | Create `site_content` table + RLS + seed 4 rows |
| `site/admin/index.html` | Add tab button, tab content div, `loadSiteCopy()`, `saveCopyBlock()`, hook into `showDashboard()` |
| `site/pages/events.html` | Move `.aeo-block` to bottom, add `data-copy-key` attrs, add hydrator |
| `site/index.html` | Add `data-copy-key` attrs to hero h1 + p, add hydrator |

---

## Task 1: Create site_content table in Supabase

**Files:**
- Supabase migration via MCP (`project_id: uuqedsvjlkeszrbwzizl`)

- [ ] **Step 1: Apply the migration**

Use the Supabase MCP `apply_migration` tool with `project_id: uuqedsvjlkeszrbwzizl` and `name: create_site_content` and the following SQL:

```sql
-- Create table
CREATE TABLE site_content (
  block_key  TEXT PRIMARY KEY,
  page       TEXT NOT NULL,
  label      TEXT NOT NULL,
  body       TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- RLS
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_read_site_content" ON site_content
  FOR SELECT TO anon USING (true);

CREATE POLICY "auth_write_site_content" ON site_content
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Seed 4 blocks (pre-populated with current hardcoded text)
INSERT INTO site_content (block_key, page, label, body) VALUES
  (
    'events_aeo_heading',
    'events',
    E'\u26A0\uFE0F Events \u2014 AEO heading (SEO-sensitive \u2014 changing keyword phrasing may affect search rankings)',
    'What Kinds of Events Happen at Rancho Moonrise Near Austin?'
  ),
  (
    'events_aeo_body',
    'events',
    'Events \u2014 AEO body (separate paragraphs with a blank line between them)',
    E'Rancho Moonrise hosts public ranch events year-round on its 36-acre property 20 minutes from downtown Austin, TX. The regular lineup includes live music nights, yoga and bottomless mimosas poolside, crawfish boils, monthly honky-tonk parties (the Rancho Rodeo Sun Series), seasonal dinner parties under the stars, and holiday celebrations. Events are open to the public \u2014 you don\'t need to be a ranch guest to attend, but booking a cabin or safari tent turns any event into a full ranch weekend.\n\nIn addition to the public event calendar, Rancho Moonrise is available for private events including weddings (up to 200 guests), corporate retreats, bachelorette parties, and milestone celebrations. Private events have exclusive full-ranch access with no overlap with public programming.'
  ),
  (
    'home_hero_headline',
    'home',
    'Homepage \u2014 hero headline',
    'Austin''s Glamping & Events Ranch'
  ),
  (
    'home_hero_subtitle',
    'home',
    'Homepage \u2014 hero subtitle',
    'Safari tents, hand-crafted cabins, destination weddings, and unforgettable events \u2014 all on 36 acres, 20 minutes from downtown Austin.'
  );
```

- [ ] **Step 2: Verify table and seed data**

Use the Supabase MCP `execute_sql` tool:

```sql
SELECT block_key, page, length(body) as body_len FROM site_content ORDER BY page, block_key;
```

Expected output — 4 rows:

| block_key | page | body_len |
|---|---|---|
| events_aeo_body | events | ~480 |
| events_aeo_heading | events | 55 |
| home_hero_headline | home | 32 |
| home_hero_subtitle | home | ~120 |

---

## Task 2: Admin — add Site Copy tab UI

**Files:**
- Modify: `site/admin/index.html`

- [ ] **Step 1: Add tab button between Galleries and Reviews**

Find this block (around line 444–449):

```html
    <div class="tabs">
        <button class="tab-btn is-active" data-tab="events">Events</button>
        <button class="tab-btn" data-tab="photos">Photos</button>
        <button class="tab-btn" data-tab="galleries">Galleries</button>
        <button class="tab-btn" data-tab="reviews">Reviews</button>
    </div>
```

Replace with:

```html
    <div class="tabs">
        <button class="tab-btn is-active" data-tab="events">Events</button>
        <button class="tab-btn" data-tab="photos">Photos</button>
        <button class="tab-btn" data-tab="galleries">Galleries</button>
        <button class="tab-btn" data-tab="site-copy">Site Copy</button>
        <button class="tab-btn" data-tab="reviews">Reviews</button>
    </div>
```

- [ ] **Step 2: Add tab content div before the Reviews tab content**

Find this comment (around line 488):

```html
    <!-- REVIEWS TAB -->
```

Insert the following block immediately before it:

```html
    <!-- SITE COPY TAB -->
    <div class="tab-content" id="tab-site-copy">
        <div class="section-header">
            <h2>Site Copy</h2>
        </div>
        <p style="color: var(--text-muted); margin-bottom: var(--space-md); font-size: 0.9rem;">Edit text blocks on the public site. Changes go live immediately on next page load — no deploy needed.</p>
        <div id="siteCopyList" class="loading">Loading site copy...</div>
    </div>

```

- [ ] **Step 3: Verify in browser**

Open `https://rancho-moonrise.vercel.app/admin/` (or local equivalent), log in, click the new "Site Copy" tab. Expected: tab activates, shows "Loading site copy..." (will error until JS is added in Task 3 — that's fine).

---

## Task 3: Admin — implement loadSiteCopy() and saveCopyBlock()

**Files:**
- Modify: `site/admin/index.html`

- [ ] **Step 1: Add loadSiteCopy() call to showDashboard()**

Find (around line 744–752):

```js
function showDashboard(user) {
    $('#loginScreen').style.display = 'none';
    $('#dashboard').style.display = 'block';
    $('#userEmail').textContent = user.email;
    loadEvents();
    loadPhotos();
    loadGalleryPhotos();
    loadReviews();
}
```

Replace with:

```js
function showDashboard(user) {
    $('#loginScreen').style.display = 'none';
    $('#dashboard').style.display = 'block';
    $('#userEmail').textContent = user.email;
    loadEvents();
    loadPhotos();
    loadGalleryPhotos();
    loadSiteCopy();
    loadReviews();
}
```

- [ ] **Step 2: Add the two JS functions**

Find the REVIEWS section header (around line 1183):

```js
// ============================================================
// REVIEWS
// ============================================================
```

Insert the following block immediately before that header:

```js
// ============================================================
// SITE COPY
// ============================================================
async function loadSiteCopy() {
    var container = $('#siteCopyList');
    var { data, error } = await sb.from('site_content')
        .select('*').order('page').order('block_key');
    if (error) {
        container.innerHTML = '<p class="empty-state">Error loading site copy.</p>';
        return;
    }
    if (!data.length) {
        container.innerHTML = '<p class="empty-state">No content blocks found.</p>';
        return;
    }

    // Group rows by page
    var byPage = {};
    data.forEach(function(row) {
        if (!byPage[row.page]) byPage[row.page] = [];
        byPage[row.page].push(row);
    });

    var html = '';
    Object.keys(byPage).sort().forEach(function(page) {
        var pageTitle = page.charAt(0).toUpperCase() + page.slice(1);
        html += '<h3 style="margin: 24px 0 12px; color: var(--orange); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;">' + escapeHtml(pageTitle) + '</h3>';
        byPage[page].forEach(function(row) {
            html +=
                '<div class="form-group" style="margin-bottom: 24px;">' +
                    '<label style="display:block; margin-bottom:6px;">' + escapeHtml(row.label) + '</label>' +
                    '<textarea id="copy-' + escapeHtml(row.block_key) + '" style="width:100%; min-height:80px; padding:10px; border:1px solid var(--border); border-radius:6px; font-family:inherit; font-size:0.9rem; resize:vertical;">' + escapeHtml(row.body) + '</textarea>' +
                    '<button class="btn btn--primary" style="margin-top:8px;" onclick="saveCopyBlock(\'' + escapeHtml(row.block_key) + '\')">Save</button>' +
                '</div>';
        });
    });
    container.innerHTML = html;
}

async function saveCopyBlock(key) {
    var textarea = document.getElementById('copy-' + key);
    var btn = textarea.nextElementSibling;
    var body = textarea.value;
    btn.textContent = 'Saving\u2026';
    btn.disabled = true;
    var { error } = await sb.from('site_content')
        .update({ body: body, updated_at: new Date().toISOString() })
        .eq('block_key', key);
    if (error) {
        btn.textContent = 'Error \u2014 try again';
        btn.style.background = 'var(--danger)';
        btn.disabled = false;
    } else {
        btn.textContent = 'Saved \u2713';
        btn.style.background = 'var(--success)';
        setTimeout(function() {
            btn.textContent = 'Save';
            btn.style.background = '';
            btn.disabled = false;
        }, 2000);
    }
}

```

- [ ] **Step 3: Verify in browser**

Open `/admin/`, log in, click "Site Copy" tab. Expected:
- Two page groups render: "Events" and "Home"
- "Events" group shows 2 blocks: the ⚠️ AEO heading and AEO body
- "Home" group shows 2 blocks: hero headline and hero subtitle
- Each has a pre-filled textarea with the current copy and a "Save" button

- [ ] **Step 4: Test save**

Edit any textarea — change one word. Click Save. Expected:
- Button shows "Saving…" briefly, then "Saved ✓" with green background
- After 2 seconds button reverts to "Save"
- Re-open the tab (refresh page, log in again) — edited text persists in the textarea

- [ ] **Step 5: Commit**

```bash
cd /Users/adamstyer/Documents/rancho-moonrise
git add site/admin/index.html
git commit -m "feat: add Site Copy admin tab with loadSiteCopy and saveCopyBlock"
```

---

## Task 4: events.html — move AEO block + data-copy-key attrs + hydrator

**Files:**
- Modify: `site/pages/events.html`

- [ ] **Step 1: Remove the AEO block from its current location**

Find and remove this entire section (currently around lines 188–194). The old_string to match:

```html
<section class="section aeo-block" aria-label="What events happen at Rancho Moonrise">
    <div class="container container--narrow">
        <h2>What Kinds of Events Happen at Rancho Moonrise Near Austin?</h2>
        <p>Rancho Moonrise hosts public ranch events year-round on its 36-acre property 20 minutes from downtown Austin, TX. The regular lineup includes live music nights, yoga and bottomless mimosas poolside, crawfish boils, monthly honky-tonk parties (the Rancho Rodeo Sun Series), seasonal dinner parties under the stars, and holiday celebrations. Events are open to the public — you don't need to be a ranch guest to attend, but booking a cabin or safari tent turns any event into a full ranch weekend.</p>
        <p>In addition to the public event calendar, Rancho Moonrise is available for private events including weddings (up to 200 guests), corporate retreats, bachelorette parties, and milestone celebrations. Private events have exclusive full-ranch access with no overlap with public programming.</p>
    </div>
</section>
```

Replace with an empty string (delete it entirely).

- [ ] **Step 2: Insert updated AEO block before the CTA banner**

Find this comment + opening tag (around line 496 after the deletion):

```html
<!-- Stay + Attend CTA -->
<section class="cta-banner" aria-label="Stay and attend events">
```

Replace with:

```html
<!-- About Events (AEO block — hydrated from site_content) -->
<section class="section aeo-block" aria-label="What events happen at Rancho Moonrise">
    <div class="container container--narrow">
        <h2 data-copy-key="events_aeo_heading">What Kinds of Events Happen at Rancho Moonrise Near Austin?</h2>
        <div data-copy-key="events_aeo_body">
            <p>Rancho Moonrise hosts public ranch events year-round on its 36-acre property 20 minutes from downtown Austin, TX. The regular lineup includes live music nights, yoga and bottomless mimosas poolside, crawfish boils, monthly honky-tonk parties (the Rancho Rodeo Sun Series), seasonal dinner parties under the stars, and holiday celebrations. Events are open to the public — you don't need to be a ranch guest to attend, but booking a cabin or safari tent turns any event into a full ranch weekend.</p>
            <p>In addition to the public event calendar, Rancho Moonrise is available for private events including weddings (up to 200 guests), corporate retreats, bachelorette parties, and milestone celebrations. Private events have exclusive full-ranch access with no overlap with public programming.</p>
        </div>
    </div>
</section>

<!-- Stay + Attend CTA -->
<section class="cta-banner" aria-label="Stay and attend events">
```

- [ ] **Step 3: Add the site copy hydrator at the bottom of the body**

Find the closing scroll-reveal script at the very bottom of the file (around lines 1031–1042):

```html
<!-- Scroll Reveal -->
<script>
(function() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.15 });
    reveals.forEach(function(el) { observer.observe(el); });
})();
</script>
</body>
</html>
```

Replace with:

```html
<!-- Scroll Reveal -->
<script>
(function() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.15 });
    reveals.forEach(function(el) { observer.observe(el); });
})();
</script>

<!-- Site Copy Hydration (non-blocking — hardcoded text is SEO fallback) -->
<script>
(function() {
    var SUPABASE_URL = 'https://uuqedsvjlkeszrbwzizl.supabase.co';
    var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1cWVkc3ZqbGtlc3pyYnd6aXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5ODcwMjYsImV4cCI6MjA4ODU2MzAyNn0.Wu1DKotPPigTpVpQvmdRMpa7NW9-WnEou6bTV3kakFM';
    fetch(SUPABASE_URL + '/rest/v1/site_content?page=eq.events&select=block_key,body', {
        headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: 'Bearer ' + SUPABASE_ANON_KEY
        }
    })
    .then(function(r) { return r.json(); })
    .then(function(rows) {
        rows.forEach(function(row) {
            var el = document.querySelector('[data-copy-key="' + row.block_key + '"]');
            if (!el || !row.body) return;
            var tag = el.tagName;
            if (tag === 'H1' || tag === 'H2' || tag === 'P') {
                // Simple text element — set directly to avoid nested <p> in <p>
                el.textContent = row.body;
            } else {
                // DIV container — split on blank lines and wrap each chunk in <p>
                el.innerHTML = row.body.split(/\n\n+/).map(function(p) {
                    return '<p>' + p.trim() + '</p>';
                }).join('');
            }
        });
    })
    .catch(function() {}); // silent fail — hardcoded text stays visible
})();
</script>
</body>
</html>
```

- [ ] **Step 4: Verify in browser**

Open `https://rancho-moonrise.vercel.app/pages/events.html` (or deploy first — see Task 6).

- AEO block no longer appears near the top (between hero and event list)
- Scroll to bottom — AEO block now appears just above the "Stay the Night, Catch the Show" CTA banner
- Text in the block matches what's in the Supabase `events_aeo_body` row

- [ ] **Step 5: Verify fallback**

In browser DevTools, go to Network tab, set throttle to Offline, reload. Expected:
- Hardcoded text renders immediately from the HTML — no blank flash, no broken layout
- AEO block still visible at bottom of page with original copy

- [ ] **Step 6: Verify schema markup still works**

In browser: View Source → search for `SpeakableSpecification`. Confirm the `cssSelector` values (`.aeo-block h2`, `.aeo-block p`) still resolve correctly with the block in its new position. The selectors are class-based, not position-based, so they should work — just confirm.

- [ ] **Step 7: Commit**

```bash
cd /Users/adamstyer/Documents/rancho-moonrise
git add site/pages/events.html
git commit -m "feat: move AEO block to page bottom, add data-copy-key attrs and site copy hydrator"
```

---

## Task 5: index.html — data-copy-key attrs + hydrator

**Files:**
- Modify: `site/index.html`

- [ ] **Step 1: Add data-copy-key to hero headline**

Find (around line 215):

```html
        <h1 class="hero__title">Austin's Glamping &amp; Events Ranch</h1>
```

Replace with:

```html
        <h1 class="hero__title" data-copy-key="home_hero_headline">Austin's Glamping &amp; Events Ranch</h1>
```

- [ ] **Step 2: Add data-copy-key to hero subtitle**

Find (around line 216):

```html
        <p class="hero__subtitle">Safari tents, hand-crafted cabins, destination weddings, and unforgettable events — all on 36 acres, 20 minutes from downtown Austin.</p>
```

Replace with:

```html
        <p class="hero__subtitle" data-copy-key="home_hero_subtitle">Safari tents, hand-crafted cabins, destination weddings, and unforgettable events — all on 36 acres, 20 minutes from downtown Austin.</p>
```

- [ ] **Step 3: Add the site copy hydrator at the bottom of the body**

Find the closing scroll-reveal script at the very bottom of `site/index.html`:

```html
<!-- Scroll Reveal -->
<script>
(function() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.15 });
    reveals.forEach(function(el) { observer.observe(el); });
})();
</script>
</body>
</html>
```

Replace with:

```html
<!-- Scroll Reveal -->
<script>
(function() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.15 });
    reveals.forEach(function(el) { observer.observe(el); });
})();
</script>

<!-- Site Copy Hydration (non-blocking — hardcoded text is SEO fallback) -->
<script>
(function() {
    var SUPABASE_URL = 'https://uuqedsvjlkeszrbwzizl.supabase.co';
    var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1cWVkc3ZqbGtlc3pyYnd6aXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5ODcwMjYsImV4cCI6MjA4ODU2MzAyNn0.Wu1DKotPPigTpVpQvmdRMpa7NW9-WnEou6bTV3kakFM';
    fetch(SUPABASE_URL + '/rest/v1/site_content?page=eq.home&select=block_key,body', {
        headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: 'Bearer ' + SUPABASE_ANON_KEY
        }
    })
    .then(function(r) { return r.json(); })
    .then(function(rows) {
        rows.forEach(function(row) {
            var el = document.querySelector('[data-copy-key="' + row.block_key + '"]');
            if (!el || !row.body) return;
            var tag = el.tagName;
            if (tag === 'H1' || tag === 'H2' || tag === 'P') {
                el.textContent = row.body;
            } else {
                el.innerHTML = row.body.split(/\n\n+/).map(function(p) {
                    return '<p>' + p.trim() + '</p>';
                }).join('');
            }
        });
    })
    .catch(function() {});
})();
</script>
</body>
</html>
```

- [ ] **Step 4: Verify in browser**

Open `https://rancho-moonrise.vercel.app/` (after deploy). Expected:
- Hero headline reads "Austin's Glamping & Events Ranch" — hydrated from Supabase (same as hardcoded, so no visual change)
- Open admin → Site Copy → Home group → edit hero headline (e.g. add "— Test" at end) → Save
- Reload homepage — updated headline appears within ~500ms of page load
- Revert the change in admin

- [ ] **Step 5: Commit**

```bash
cd /Users/adamstyer/Documents/rancho-moonrise
git add site/index.html
git commit -m "feat: add data-copy-key attrs and site copy hydrator to homepage"
```

---

## Task 6: Push + verify Vercel deploy

- [ ] **Step 1: Push to main**

```bash
cd /Users/adamstyer/Documents/rancho-moonrise
git push origin main
```

- [ ] **Step 2: Confirm Vercel deploy reaches READY**

Use the Vercel MCP `list_deployments` tool or check https://vercel.com/dashboard. Wait for the deployment triggered by the push to reach status `READY` (typically 30–60 seconds for a static site).

- [ ] **Step 3: Full end-to-end smoke test**

1. Open `https://rancho-moonrise.vercel.app/admin/` → log in → click Site Copy tab → all 4 blocks load with current copy ✓
2. Open `https://rancho-moonrise.vercel.app/pages/events.html` → AEO block at bottom of page (above CTA banner), not near the top ✓
3. In admin, edit `events_aeo_body` — append " Updated." to the first sentence → Save ✓
4. Reload events.html → updated sentence appears in the block ✓
5. In admin, revert the text → Save ✓
6. Open `https://rancho-moonrise.vercel.app/` → hero text hydrates correctly ✓
