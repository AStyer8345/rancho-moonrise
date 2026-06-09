# Homepage Events Popup — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an admin-controlled, dismissible, frequency-capped popup to the Rancho Moonrise homepage that features up to 3 upcoming events.

**Architecture:** One new boolean column (`show_in_popup`) on `rancho_events`. Ashley flags events in the existing admin Events tab (same Show/Hide muscle). A self-contained `event-popup.js` on the homepage queries featured + active + upcoming events via the same anon REST pattern as `cms.js`, then renders a modal that's capped per visitor (3 days, reset when the featured set changes).

**Tech Stack:** Static HTML/CSS/JS (no framework, no test runner), Supabase (anon REST read + authenticated admin via supabase-js), Vercel push-to-deploy.

**Spec:** `docs/superpowers/specs/2026-06-09-events-popup-design.md`

**Note on testing:** This repo has no automated test harness. "Verification" steps are concrete browser checks and Supabase MCP queries instead of unit tests. Each task ends with an atomic commit (the repo has concurrent git writers — commit your file fast, never leave edits across turns).

**Refinement vs spec:** `event-popup.js` injects its own `<style>` (no separate CSS file) so the whole feature is one script + one `<script>` tag — trivial to roll back. This satisfies the spec's "new file or appended" CSS note.

---

### Task 1: Add the `show_in_popup` column

**Files:**
- Migration: applied via Supabase MCP (`apply_migration`, project `uuqedsvjlkeszrbwzizl`)

- [ ] **Step 1: Apply the migration**

Use the Supabase MCP `apply_migration` tool, name `add_show_in_popup_to_rancho_events`:

```sql
alter table rancho_events
  add column if not exists show_in_popup boolean not null default false;
```

- [ ] **Step 2: Verify the column exists and existing rows defaulted to false**

Run via Supabase MCP `execute_sql`:

```sql
select column_name, data_type, column_default
from information_schema.columns
where table_name = 'rancho_events' and column_name = 'show_in_popup';

select count(*) as total, count(*) filter (where show_in_popup) as featured
from rancho_events;
```

Expected: one column row (`boolean`, default `false`); `featured = 0`.

- [ ] **Step 3: No commit** (schema change lives in Supabase, not the repo). Proceed.

---

### Task 2: Add the "Feature in Popup" checkbox to the event form

**Files:**
- Modify: `site/admin/index.html` (event form, after the Ticket Link `form-group`, ~line 593)

- [ ] **Step 1: Insert the checkbox `form-group`**

Find this block (the Ticket Link group) and insert the new group immediately after its closing `</div>`:

```html
            <div class="form-group">
                <label for="eventTicketUrl">Ticket Link (optional)</label>
                <input type="url" id="eventTicketUrl" placeholder="https://...">
            </div>
```

Insert after it:

```html
            <div class="form-group">
                <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:normal;">
                    <input type="checkbox" id="eventFeatured" style="width:auto;margin:0;">
                    <span>⭐ Feature in homepage popup</span>
                </label>
                <p style="color:var(--text-muted);font-size:0.8rem;margin:4px 0 0;">Shows this event in the homepage popup. The popup displays up to 3 featured upcoming events (soonest first). The event must also be set to <strong>Active</strong> to appear.</p>
            </div>
```

- [ ] **Step 2: Verify in browser**

Open `site/admin/index.html` (logged in), click **+ Add Event**. Expected: the "⭐ Feature in homepage popup" checkbox appears below Ticket Link with helper text, unchecked by default.

- [ ] **Step 3: Commit**

```bash
cd /Users/adamstyer/Documents/rancho-moonrise
git add site/admin/index.html
git commit -m "feat(admin): add Feature-in-Popup checkbox to event form"
```

---

### Task 3: Wire the checkbox into save + edit

**Files:**
- Modify: `site/admin/index.html` (`editEvent()` ~line 1111; `#eventForm` submit handler `row` object ~line 1167)

- [ ] **Step 1: Pre-fill the checkbox in `editEvent()`**

In `editEvent(id)`, find:

```javascript
    $('#eventOrder').value = data.sort_order;
```

Add immediately after it:

```javascript
    $('#eventFeatured').checked = !!data.show_in_popup;
```

(The Add path calls `$('#eventForm').reset()`, which clears the checkbox to unchecked — no extra code needed there.)

- [ ] **Step 2: Include `show_in_popup` in the saved `row`**

In the submit handler, find the `row` object:

```javascript
    var row = {
        title: $('#eventTitle').value.trim(),
        event_date: $('#eventDate').value,
        event_time: $('#eventTime').value.trim() || null,
        description: $('#eventDesc').value.trim(),
        price: $('#eventPrice').value.trim() || null,
        ticket_url: $('#eventTicketUrl').value.trim() || null,
        sort_order: parseInt($('#eventOrder').value) || 0,
    };
```

Add the `show_in_popup` line:

```javascript
    var row = {
        title: $('#eventTitle').value.trim(),
        event_date: $('#eventDate').value,
        event_time: $('#eventTime').value.trim() || null,
        description: $('#eventDesc').value.trim(),
        price: $('#eventPrice').value.trim() || null,
        ticket_url: $('#eventTicketUrl').value.trim() || null,
        sort_order: parseInt($('#eventOrder').value) || 0,
        show_in_popup: $('#eventFeatured').checked,
    };
```

- [ ] **Step 3: Verify round-trip in browser + MCP**

In admin: edit an existing event, check the box, Save. Then run via Supabase MCP `execute_sql`:

```sql
select title, show_in_popup from rancho_events where show_in_popup = true;
```

Expected: the event you checked appears with `show_in_popup = true`. Re-open it in admin → the checkbox is still checked.

- [ ] **Step 4: Commit**

```bash
git add site/admin/index.html
git commit -m "feat(admin): persist and pre-fill show_in_popup on event save/edit"
```

---

### Task 4: Featured badge, status lines, quick-toggle, and Events-tab hint

**Files:**
- Modify: `site/admin/index.html` — add CSS before `<!-- EVENTS TAB -->` (~line 497); rewrite `loadEvents()` (~line 1074); add `toggleFeatured()` near `toggleEvent()` (~line 1138)

- [ ] **Step 1: Add styles for the featured badge + status lines**

Find `<!-- EVENTS TAB -->` and insert this `<style>` block immediately before it:

```html
<style>
  .badge--featured { background: #fff3e0; color: #b4531f; border: 1px solid #f0c9a4; }
  .popup-status { font-size: 0.8rem; font-weight: 600; margin: 6px 0 0; }
  .popup-status--ok { color: #2e7d32; }
  .popup-status--warn { color: #b4531f; }
  .popup-status--muted { color: var(--text-muted); }
  .events-hint { color: var(--text-muted); font-size: 0.85rem; margin: 0 0 12px; }
</style>
```

- [ ] **Step 2: Replace `loadEvents()` with the status-aware version**

Replace the entire existing `async function loadEvents() { ... }` with:

```javascript
async function loadEvents() {
    var container = $('#eventsList');
    var { data, error } = await sb.from('rancho_events')
        .select('*').order('event_date', { ascending: true }).order('sort_order', { ascending: true });

    if (error) { container.innerHTML = '<p class="empty-state">Error loading events.</p>'; return; }
    if (!data.length) { container.innerHTML = '<div class="empty-state"><p>No events yet.</p></div>'; return; }

    var todayStr = new Date().toISOString().slice(0, 10);

    // Which featured events actually appear in the popup: active + upcoming, soonest first, top 3.
    var inPopup = {};
    data.filter(function(ev){ return ev.show_in_popup && ev.is_active && ev.event_date >= todayStr; })
        .slice(0, 3)
        .forEach(function(ev){ inPopup[ev.id] = true; });

    container.innerHTML =
        '<p class="events-hint">The homepage popup shows up to 3 featured upcoming events, soonest first. An event must be <strong>Active</strong> and dated today or later to appear.</p>' +
        data.map(function(ev) {
        var thumb = ev.artwork_url
            ? '<img class="content-card__thumb" src="' + escapeHtml(ev.artwork_url) + '" alt="">'
            : '<div class="content-card__thumb" style="display:flex;align-items:center;justify-content:center;font-size:2rem;">📅</div>';

        var featuredBadge = ev.show_in_popup ? ' <span class="badge badge--featured">★ Featured</span>' : '';

        var statusLine = '';
        if (ev.show_in_popup) {
            if (!ev.is_active) {
                statusLine = '<p class="popup-status popup-status--warn">★ Featured, but Hidden — click "Show" to display it in the popup.</p>';
            } else if (ev.event_date < todayStr) {
                statusLine = '<p class="popup-status popup-status--muted">★ Featured, but the date has passed — won\'t show.</p>';
            } else if (inPopup[ev.id]) {
                statusLine = '<p class="popup-status popup-status--ok">★ Showing in homepage popup.</p>';
            } else {
                statusLine = '<p class="popup-status popup-status--muted">★ Featured — popup is full (shows soonest 3).</p>';
            }
        }

        return '<div class="content-card">' +
            thumb +
            '<div class="content-card__info">' +
                '<h3>' + escapeHtml(ev.title) + ' <span class="badge ' + (ev.is_active ? 'badge--active' : 'badge--inactive') + '">' + (ev.is_active ? 'Active' : 'Hidden') + '</span>' + featuredBadge + '</h3>' +
                '<p style="color:var(--orange);font-size:0.8rem;font-weight:600;margin-bottom:4px;">' + formatDate(ev.event_date) + (ev.event_time ? ' · ' + escapeHtml(ev.event_time) : '') + '</p>' +
                '<p>' + escapeHtml(ev.description) + '</p>' +
                statusLine +
            '</div>' +
            '<div class="content-card__actions">' +
                '<button class="btn btn--secondary btn--sm" onclick="editEvent(\'' + ev.id + '\')">Edit</button>' +
                '<button class="btn btn--secondary btn--sm" onclick="toggleFeatured(\'' + ev.id + '\',' + !ev.show_in_popup + ',' + ev.is_active + ')">' + (ev.show_in_popup ? 'Unfeature' : 'Feature') + '</button>' +
                '<button class="btn btn--danger btn--sm" onclick="toggleEvent(\'' + ev.id + '\',' + !ev.is_active + ')">' + (ev.is_active ? 'Hide' : 'Show') + '</button>' +
                '<button class="btn btn--danger btn--sm" onclick="deleteEvent(\'' + ev.id + '\')">Delete</button>' +
            '</div>' +
        '</div>';
    }).join('');
}
```

- [ ] **Step 3: Add the `toggleFeatured()` helper**

Find the existing `toggleEvent` function:

```javascript
async function toggleEvent(id, active) {
    await sb.from('rancho_events').update({ is_active: active }).eq('id', id);
    toast(active ? 'Event shown on site' : 'Event hidden from site');
    loadEvents();
}
```

Insert immediately after it:

```javascript
async function toggleFeatured(id, next, isActive) {
    await sb.from('rancho_events').update({ show_in_popup: next }).eq('id', id);
    if (next && !isActive) {
        toast("Featured — but it's Hidden, so click Show to make it appear in the popup.");
    } else {
        toast(next ? 'Added to homepage popup' : 'Removed from homepage popup');
    }
    loadEvents();
}
```

- [ ] **Step 4: Verify all four status states in the browser**

In admin Events tab:
1. Feature an **Active, upcoming** event → green "★ Showing in homepage popup" + "★ Featured" badge.
2. Feature a **Hidden** event (or Hide a featured one) → amber "Featured, but Hidden" line + a toast nudging to click Show.
3. Feature a **past-dated** event → grey "date has passed" line.
4. Feature a **4th** active upcoming event → grey "popup is full (shows soonest 3)" line.
5. The hint paragraph shows at the top of the list.

- [ ] **Step 5: Commit**

```bash
git add site/admin/index.html
git commit -m "feat(admin): featured badge, popup status lines, Feature/Unfeature toggle, hint"
```

---

### Task 5: Create the homepage popup script

**Files:**
- Create: `site/js/event-popup.js`

- [ ] **Step 1: Create `site/js/event-popup.js`**

Copy `SUPABASE_ANON_KEY` **verbatim** from `site/js/cms.js` (do not retype it) into the marked spot:

```javascript
/* ============================================================
   Rancho Moonrise — Homepage Events Popup
   Shows up to 3 featured, active, upcoming events in a modal.
   Controlled by Ashley via the admin "Feature in Popup" toggle.
   Self-contained: injects its own styles. Homepage only.
   ============================================================ */
(function () {
    'use strict';

    var SUPABASE_URL = 'https://uuqedsvjlkeszrbwzizl.supabase.co';
    var SUPABASE_ANON_KEY = 'PASTE_FROM_cms.js'; // <-- copy verbatim from site/js/cms.js
    var REST = SUPABASE_URL + '/rest/v1/';
    var HEADERS = { 'apikey': SUPABASE_ANON_KEY, 'Authorization': 'Bearer ' + SUPABASE_ANON_KEY };

    var STORAGE_KEY = 'rmEventsPopup';
    var CAP_MS = 3 * 24 * 60 * 60 * 1000; // 3 days
    var SHOW_DELAY_MS = 2000;
    var lastFocus = null;

    function escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
    }
    function formatDate(d) {
        if (!d) return '';
        var dt = new Date(d + 'T00:00:00');
        return dt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
    function readCap() {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; } catch (e) { return null; }
    }
    function writeCap(obj) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); } catch (e) {}
    }
    function shouldShow(signature) {
        var rec = readCap();
        if (!rec) return true;                          // never dismissed, or storage blocked -> fail open
        if (rec.signature !== signature) return true;   // a new event was featured
        if (!rec.dismissedAt) return true;
        return (Date.now() - rec.dismissedAt) > CAP_MS;
    }

    function injectStyles() {
        if (document.getElementById('rm-popup-styles')) return;
        var css =
        '.rm-popup-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(30,22,14,0.55);opacity:0;transition:opacity .3s ease;}' +
        '.rm-popup-overlay.is-open{opacity:1;}' +
        '.rm-popup{position:relative;background:#fff;max-width:460px;width:100%;max-height:90vh;overflow-y:auto;border-radius:14px;box-shadow:0 20px 60px rgba(0,0,0,.35);transform:translateY(12px) scale(.98);transition:transform .3s ease;}' +
        '.rm-popup-overlay.is-open .rm-popup{transform:none;}' +
        '.rm-popup-close{position:absolute;top:10px;right:12px;z-index:2;background:rgba(255,255,255,.9);border:none;width:34px;height:34px;border-radius:50%;font-size:1.5rem;line-height:1;cursor:pointer;color:#333;box-shadow:0 1px 4px rgba(0,0,0,.2);}' +
        '.rm-popup-art img{display:block;width:100%;height:auto;border-radius:14px 14px 0 0;}' +
        '.rm-popup-body{padding:22px 24px 26px;}' +
        '.rm-popup-eyebrow{text-transform:uppercase;letter-spacing:.08em;font-size:.72rem;font-weight:700;color:#b4531f;margin:0 0 6px;}' +
        '.rm-popup-title{font-size:1.5rem;line-height:1.2;margin:0 0 8px;color:#2b2118;}' +
        '.rm-popup-meta{font-weight:600;color:#b4531f;margin:0 0 10px;font-size:.95rem;}' +
        '.rm-popup-desc{color:#4a4035;font-size:.95rem;line-height:1.5;margin:0 0 12px;}' +
        '.rm-popup-price{font-weight:700;color:#2b2118;margin:0 0 14px;}' +
        '.rm-popup-btn{display:inline-block;background:#b4531f;color:#fff;text-decoration:none;padding:11px 22px;border-radius:8px;font-weight:600;font-size:.95rem;}' +
        '.rm-popup-btn:hover{background:#9a4419;}' +
        '.rm-popup-more{margin-top:18px;border-top:1px solid #eee;padding-top:14px;}' +
        '.rm-popup-more__label{text-transform:uppercase;letter-spacing:.06em;font-size:.72rem;font-weight:700;color:#8a7d6c;margin:0 0 8px;}' +
        '.rm-popup-more ul{list-style:none;margin:0;padding:0;}' +
        '.rm-popup-more li{display:flex;justify-content:space-between;gap:12px;font-size:.9rem;padding:5px 0;color:#3a3128;}' +
        '.rm-popup-more__date{color:#8a7d6c;white-space:nowrap;}' +
        '@media (prefers-reduced-motion: reduce){.rm-popup-overlay,.rm-popup{transition:none;}.rm-popup{transform:none;}}';
        var style = document.createElement('style');
        style.id = 'rm-popup-styles';
        style.textContent = css;
        document.head.appendChild(style);
    }

    function ticketLink(ev) {
        if (ev.ticket_url) {
            return '<a class="rm-popup-btn" href="' + escapeHtml(ev.ticket_url) + '" target="_blank" rel="noopener">Get Tickets</a>';
        }
        return '<a class="rm-popup-btn" href="/pages/events.html">Learn More</a>';
    }

    function buildMarkup(events) {
        var f = events[0];
        var art = f.artwork_url
            ? '<div class="rm-popup-art"><img src="' + escapeHtml(f.artwork_url) + '" alt="' + escapeHtml(f.title) + '" onerror="this.parentNode.style.display=\'none\'"></div>'
            : '';
        var meta = formatDate(f.event_date) + (f.event_time ? ' · ' + escapeHtml(f.event_time) : '');
        var price = f.price ? '<p class="rm-popup-price">' + escapeHtml(f.price) + '</p>' : '';
        var more = '';
        if (events.length > 1) {
            more = '<div class="rm-popup-more"><p class="rm-popup-more__label">Also coming up</p><ul>' +
                events.slice(1).map(function (ev) {
                    return '<li><span>' + escapeHtml(ev.title) + '</span><span class="rm-popup-more__date">' + formatDate(ev.event_date) + '</span></li>';
                }).join('') + '</ul></div>';
        }
        return '<div class="rm-popup">' +
            '<button class="rm-popup-close" aria-label="Close">&times;</button>' +
            art +
            '<div class="rm-popup-body">' +
                '<p class="rm-popup-eyebrow">Upcoming at Rancho Moonrise</p>' +
                '<h2 id="rmPopupTitle" class="rm-popup-title">' + escapeHtml(f.title) + '</h2>' +
                '<p class="rm-popup-meta">' + meta + '</p>' +
                (f.description ? '<p class="rm-popup-desc">' + escapeHtml(f.description) + '</p>' : '') +
                price +
                ticketLink(f) +
                more +
            '</div>' +
        '</div>';
    }

    function trapFocus(modal, e) {
        var focusable = modal.querySelectorAll('a[href], button:not([disabled])');
        if (!focusable.length) return;
        var first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    function open(events, signature) {
        injectStyles();
        lastFocus = document.activeElement;
        var overlay = document.createElement('div');
        overlay.className = 'rm-popup-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-labelledby', 'rmPopupTitle');
        overlay.innerHTML = buildMarkup(events);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        function close() {
            writeCap({ signature: signature, dismissedAt: Date.now() });
            document.body.style.overflow = '';
            document.removeEventListener('keydown', onKey);
            overlay.remove();
            if (lastFocus && lastFocus.focus) { lastFocus.focus(); }
        }
        function onKey(e) {
            if (e.key === 'Escape') { close(); }
            else if (e.key === 'Tab') { trapFocus(overlay, e); }
        }
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay || e.target.classList.contains('rm-popup-close')) { close(); }
        });
        document.addEventListener('keydown', onKey);

        requestAnimationFrame(function () { overlay.classList.add('is-open'); });
        var closeBtn = overlay.querySelector('.rm-popup-close');
        if (closeBtn) { closeBtn.focus(); }
    }

    function init() {
        var today = new Date().toISOString().slice(0, 10);
        var params = 'is_active=eq.true&show_in_popup=eq.true&event_date=gte.' + today +
                     '&order=event_date.asc,sort_order.asc&limit=3&select=*';
        fetch(REST + 'rancho_events?' + params, { headers: HEADERS })
            .then(function (r) { return r.ok ? r.json() : []; })
            .catch(function () { return []; })
            .then(function (events) {
                if (!events || !events.length) { return; }
                var signature = events.map(function (e) { return e.id; }).sort().join(',');
                if (!shouldShow(signature)) { return; }
                setTimeout(function () { open(events, signature); }, SHOW_DELAY_MS);
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
```

- [ ] **Step 2: Confirm the anon key was pasted**

Run:

```bash
cd /Users/adamstyer/Documents/rancho-moonrise
grep -c "PASTE_FROM_cms.js" site/js/event-popup.js
```

Expected: `0` (placeholder replaced). Then confirm the keys match:

```bash
grep -o "SUPABASE_ANON_KEY = '[^']*'" site/js/cms.js site/js/event-popup.js
```

Expected: the two printed values are identical.

- [ ] **Step 3: Commit**

```bash
git add site/js/event-popup.js
git commit -m "feat: homepage events popup script (query, cap, a11y modal)"
```

---

### Task 6: Load the popup on the homepage only

**Files:**
- Modify: `site/index.html` (script includes, ~line 659)

- [ ] **Step 1: Add the script tag after `cms.js`**

Find:

```html
<script src="js/main.js" defer></script>
<script src="js/cms.js" defer></script>
<script src="js/scroll-effects.js" defer></script>
```

Insert the popup script after `cms.js`:

```html
<script src="js/main.js" defer></script>
<script src="js/cms.js" defer></script>
<script src="js/event-popup.js" defer></script>
<script src="js/scroll-effects.js" defer></script>
```

- [ ] **Step 2: Verify locally (clean state)**

Serve the site (`cd site && python3 -m http.server 8000`), open `http://localhost:8000/` in a fresh/incognito window. Pre-req: at least one event is Featured + Active + upcoming (set in Task 4 verification).
Expected: popup fades in ~2s with the featured event, artwork, date, and a working Tickets/Learn More button. Console shows no errors.

- [ ] **Step 3: Commit**

```bash
git add site/index.html
git commit -m "feat: load events popup on homepage"
```

---

### Task 7: Full behavior verification + deploy

**Files:** none (verification + deploy)

- [ ] **Step 1: Cap holds**

After the popup shows, close it (X). Reload the homepage. Expected: popup does NOT reappear (localStorage `rmEventsPopup` set, signature unchanged).

- [ ] **Step 2: New featured event resets the cap**

In admin, feature a *different* upcoming event (so the featured set changes). Reload the same browser (no storage clear). Expected: popup reappears (signature changed).

- [ ] **Step 3: Empty state**

In admin, Unfeature all events. Reload homepage. Expected: no popup, no console errors.

- [ ] **Step 4: Multi-event layout**

Feature 3 active upcoming events. Clear `localStorage` (DevTools → Application → Local Storage → delete `rmEventsPopup`) and reload. Expected: featured poster card for the soonest + "Also coming up" list of the other 2, ordered by date.

- [ ] **Step 5: Accessibility smoke check**

With the popup open: Tab cycles only within the modal; Esc closes it; on close, focus returns to the page; background does not scroll while open.

- [ ] **Step 6: Push and verify deploy**

```bash
git push
```

Then verify via Vercel MCP that the latest `rancho-moonrise` deployment reaches **READY**, and load the live homepage to confirm the popup behaves as in local testing.

- [ ] **Step 7: Update four-file system**

Per repo `CLAUDE.md` end-of-session rule: append a dated bullet to `CHANGELOG.md`, update `CONTEXT.md` (Last worked on / What's next), mark the popup task in `TODO.md`. Commit:

```bash
git add CHANGELOG.md CONTEXT.md TODO.md
git commit -m "docs: log events popup feature"
git push
```

---

## Self-Review

**Spec coverage:**
- Data column → Task 1 ✓
- Admin checkbox + save/edit wiring → Tasks 2, 3 ✓
- Status lines / badge / toggle / hint (Issues 1, 2) → Task 4 ✓
- Popup query matching cms.js `today` (§3.1) → Task 5 `init()` ✓
- Frequency cap + signature + localStorage try/catch (§3.3, Issue 4) → Task 5 `shouldShow/readCap/writeCap` ✓
- Render: single + multi, artwork onerror, ticket target/rel (§3.4, Issues 5, 6) → Task 5 `buildMarkup/ticketLink` ✓
- a11y + scroll lock (§3.6, Issue 3) → Task 5 `open/trapFocus` ✓
- Homepage-only include → Task 6 ✓
- Verification matrix → Task 7 ✓

**Placeholder scan:** The only literal placeholder is the anon key (`PASTE_FROM_cms.js`), intentionally copied from `cms.js` to avoid key drift; Task 5 Step 2 verifies it's replaced and matches. No other TBDs.

**Type/name consistency:** `toggleFeatured(id, next, isActive)` signature matches its call in `loadEvents` (`toggleFeatured('<id>', <bool>, <bool>)`). `signature`, `STORAGE_KEY`, `rmEventsPopup`, `show_in_popup`, `inPopup`, `rm-popup-*` classes used consistently across tasks.
