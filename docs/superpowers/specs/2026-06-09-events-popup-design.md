# Homepage Events Popup — Design Spec

**Date:** 2026-06-09
**Status:** Approved for planning
**Repo:** `rancho-moonrise` (static HTML/CSS/JS, Vercel)

## Goal

Add a dismissible, frequency-capped popup to the Rancho Moonrise homepage that
features upcoming events. Ashley controls which events appear (and whether the
popup shows at all) from the existing admin panel — no developer involvement
needed after launch.

## Context / What already exists

- `rancho_events` Supabase table already holds events:
  `title, event_date, event_time, start_time, end_time, description, artwork_url,
  ticket_url, price, is_active, sort_order`.
- `site/js/cms.js` already queries upcoming active events
  (`is_active=eq.true & event_date>=today`) for the homepage slideshow + cards.
  The popup reuses this same anon-key REST query pattern.
- `site/admin/index.html` has an Events tab where Ashley adds/edits events
  (title, date, time, description, price, ticket link, artwork, sort order) and
  toggles each event Active/Hidden via a one-click Show/Hide button (`is_active`).

## Decisions (confirmed with Adam)

| Decision | Choice |
|---|---|
| Trigger | Auto-popup, dismissible, frequency-capped |
| Scope | Homepage only (`site/index.html`) |
| Control | Per-event "Feature in Popup" toggle in admin |
| Featured count | Up to 3 featured events |
| Cap window | 3 days after dismissal |

## Architecture

### 1. Data layer — one new column

Add to `rancho_events`:

```sql
alter table rancho_events
  add column if not exists show_in_popup boolean not null default false;
```

`show_in_popup` is independent of `is_active`. An event only appears in the
popup when **both** `is_active = true` AND `show_in_popup = true` AND
`event_date >= today`.

This single flag is Ashley's complete control surface:
- Feature 1–3 events → they show in the popup.
- Feature nothing → no popup renders. That is the off switch.

### 2. Admin layer — mirror the existing Show/Hide pattern

`site/admin/index.html` changes only:

- **Event form (`#eventForm`):** add a checkbox
  `⭐ Feature in homepage popup` bound to a new `#eventFeatured` input
  (placed after the Ticket Link field).
  - `addEventBtn` handler: `$('#eventForm').reset()` already clears it to
    unchecked — no extra code.
  - `editEvent()` MUST explicitly set `$('#eventFeatured').checked = !!data.show_in_popup;`
    (reset() clears it, so without this an edited featured event would lose the flag).
  - The submit handler's `row` object includes
    `show_in_popup: $('#eventFeatured').checked`.
- **Events list (`loadEvents()`):** when `ev.show_in_popup` is true, render a
  `★ Featured` badge next to the existing Active/Hidden badge, plus a
  quick-toggle button `Feature` / `Unfeature` calling a new
  `toggleFeatured(id, next)` helper (mirrors `toggleEvent`).

**Status clarity — the critical usability piece (Issue 1).**
Because the popup requires BOTH `is_active` AND `show_in_popup` AND a future
date, a featured event can still fail to appear. Ashley must never be left
guessing. So each featured card shows an explicit, plain-English status line:

| Event state | Status line shown on the card |
|---|---|
| Featured + Active + upcoming | `★ Showing in homepage popup` (green) |
| Featured + Hidden | `★ Featured, but Hidden — click "Show" to display it` (amber) |
| Featured + past date | `★ Featured, but the date has passed — won't show` (grey) |
| Featured + Active + upcoming, but 4th+ soonest | `★ Featured — popup is full (shows soonest 3)` (grey) |

Additionally, `toggleFeatured()` gives an honest toast: if the event is
currently Hidden, toast = `"Featured — but it's Hidden, so click Show to make
it appear in the popup."` Otherwise `"Added to homepage popup."`

A one-line helper hint sits at the top of the Events tab:
`The homepage popup shows up to 3 featured upcoming events, soonest first.`

No new tab, no new table, no new mental model — same muscle as Show/Hide, with
the visibility needed so "I featured it but nothing happened" can never occur.

### 3. Frontend layer — `site/js/event-popup.js` (new, homepage only)

Self-contained IIFE, loaded only from `site/index.html`. Responsibilities:

1. **Query:** fetch
   `rancho_events?is_active=eq.true&show_in_popup=eq.true&event_date=gte.<today>&order=event_date&order=sort_order&limit=3`
   via the same anon key/REST pattern as `cms.js`.
   - `today` is computed **exactly as `cms.js` does** —
     `new Date().toISOString().slice(0,10)` — so the popup and the existing
     homepage slideshow always agree on what "upcoming" means. (Known shared
     quirk: this is UTC, so after ~6pm Central a same-day event drops a few
     hours early. Out of scope to fix here; matching `cms.js` is the right call
     so the two never disagree on one page.)
2. **Guard:** if zero rows → do nothing, render nothing, no errors. Zero visual impact.
3. **Frequency cap (the smart part):**
   - Compute a `signature` = sorted, joined list of featured event IDs.
   - Read `localStorage['rmEventsPopup']` = `{ signature, dismissedAt }`.
   - **Show** the popup if EITHER:
     - no stored record, OR
     - stored `signature` ≠ current `signature` (Ashley featured something
       new → resurface even for returning visitors), OR
     - `now - dismissedAt > 3 days`.
   - Otherwise stay hidden.
   - **All localStorage access wrapped in try/catch (Issue 4):** if storage is
     unavailable (private mode / disabled), fail OPEN — show the popup that page
     load rather than throwing. Never let the cap crash the page.
4. **Render:** build modal DOM (escape every untrusted field with an
   `escapeHtml` helper like cms.js).
   - 1 event → poster card: artwork, title, formatted date + time, price,
     `Get Tickets` / `Learn More` button (ticket_url, else `/pages/events.html`).
   - 2–3 events → featured poster card (soonest) + a compact "Also coming up"
     list of the rest (title + date + link).
   - **Artwork (Issue 5):** add an `onerror` fallback like `cms.js` so a broken
     `artwork_url` collapses gracefully instead of leaving an empty frame; a
     card with no artwork still renders cleanly (text-only).
   - **Ticket links (Issue 6):** external `ticket_url` opens with
     `target="_blank" rel="noopener"`. The internal `/pages/events.html`
     fallback opens in the same tab.
5. **Show timing:** fade in ~2s after `DOMContentLoaded`.
6. **Accessibility & body (Issue 3):** modal container gets `role="dialog"`,
   `aria-modal="true"`, `aria-labelledby` pointing at the title. On open: move
   focus to the close button, trap Tab focus within the modal, and lock body
   scroll (`overflow:hidden`). On close: restore body scroll and return focus to
   `document.body`. Respect `prefers-reduced-motion` (skip the scale animation).
7. **Dismiss:** X button, click on backdrop, and Esc all close it. On close,
   write `{ signature, dismissedAt: Date.now() }` to localStorage (in try/catch).

### 4. Styling — `site/css/`

Popup styles matching the site's existing visual language (fonts, colors,
button styles, border radius). Modal: centered card, max-width ~480px,
dimmed backdrop, subtle fade/scale transition, mobile-responsive
(full-width-ish with margins on small screens). Respects
`prefers-reduced-motion` (skip the scale animation).

## Files touched

| File | Change |
|---|---|
| Supabase migration | Add `show_in_popup` column |
| `site/admin/index.html` | Checkbox in form + featured badge/quick-toggle + save/edit wiring |
| `site/js/event-popup.js` | **New** — query, cap logic, render, dismiss |
| `site/css/<popup styles>` | New popup styles (new file or appended to existing) |
| `site/index.html` | `<script src="/js/event-popup.js" defer>` (homepage only) |

## Review findings (2026-06-09, pre-implementation)

Caught by reading the live `admin/index.html` and `cms.js` against the design:

1. **Featured-but-Hidden silent failure (High):** popup needs `is_active` AND
   `show_in_popup`. Resolved with per-card status lines + honest toast (§2).
2. **4th+ featured silently dropped (Med):** resolved with the `popup is full`
   status line + Events-tab hint (§2).
3. **Modal a11y / scroll-lock missing (Med):** added focus trap, ARIA roles,
   body scroll lock (§3.6).
4. **localStorage can throw (Low):** wrapped, fail-open (§3.3).
5. **Broken artwork URL (Low):** `onerror` fallback (§3.4).
6. **Ticket link tab/rel (Low):** `target="_blank" rel="noopener"` (§3.4).
7. **`today` timezone (noted):** match `cms.js` UTC calc for page consistency;
   not fixed here (§3.1).

Content edits to an already-featured event (e.g. changing its date or artwork)
do NOT change the signature, so a visitor who dismissed within 3 days won't see
the edit until the window lapses. Accepted — only *new* featured events should
re-surface the popup.

## Out of scope (YAGNI)

- No custom popup headline/copy editor — the event content is the content.
- No popup on any page other than the homepage.
- No analytics/impression tracking.
- No scheduling of *when* the popup is allowed to run (it's purely driven by
  whether upcoming featured events exist).

## Verification

1. **Migration:** `show_in_popup` column exists, defaults false, existing rows
   unaffected (query `information_schema.columns`).
2. **Admin round-trip:** in admin, feature an event → reload → checkbox still
   checked and `★ Featured` badge shows; unfeature → badge gone. Confirm via a
   Supabase `select` that `show_in_popup` flipped.
2a. **Status clarity:** feature a **Hidden** event → card shows the amber
   `Featured, but Hidden` line and the toast nudges her. Feature a **past-dated**
   event → grey `date has passed` line. Feature a 4th upcoming event → it shows
   the grey `popup is full` line. No state leaves her guessing.
3. **Popup shows:** feature 1 event, open homepage in a clean browser
   (cleared localStorage) → popup fades in after ~2s with correct event data
   and working ticket link.
4. **Cap holds:** dismiss → reload homepage → popup does NOT reappear.
5. **New event resets cap:** feature a *different* event in admin → reload the
   same browser → popup reappears (signature changed).
6. **Empty state:** unfeature all events → reload → no popup, no console errors.
7. **Multi-event:** feature 3 events → popup shows featured card + "also coming
   up" list, ordered by soonest date.
8. **Deploy:** push → Vercel reaches READY → verify on live homepage.
