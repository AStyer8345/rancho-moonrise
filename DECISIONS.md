# Rancho Moonrise — Decisions

---

## 2026-04-10 — Buttons Must Be Self-Contained, Not Context-Assumed

**Decision:** `.btn--primary` and `.btn--outline` carry their own solid fill color, text color, and border. They no longer assume they are sitting on a dark hero-background where a transparent fill + white text would be readable.

**Over:** the previous cascade where `.btn--primary = transparent / white text / white border`, which relied on every consumer to only ever place primary buttons on a dark background. In practice the same class was used on cream sections, cream cards, and event cards — where white-on-cream was invisible.

**Why:** The invisible-button bug was catastrophic in effect but subtle on inspection — DOM lint was clean, CSS was valid, but entire sections looked empty because every CTA in them was white-on-cream. Making buttons self-contained means a developer dropping a `btn btn--primary` anywhere on the site gets a visible button by default. The only explicit override left is `.nav__links .btn` (white pill / terracotta text) because the nav bar background is terracotta and the inverse makes visual sense there. If a future section wants a transparent-on-dark button, it should use a new modifier class (e.g. `.btn--ghost`), not re-hijack the primary.

**Context:** Fix shipped in commit `ddf556e` in `site/css/styles.css`. Verified live via Playwright — hero Book Your Stay (terracotta) and Plan a Wedding (charcoal) render correctly, and all previously-empty cream sections now show their CTAs.

---

## 2026-04-10 — `.reveal` Must Be Registered With The Same Observer As `.fade-in`

**Decision:** `main.js`'s IntersectionObserver query selector is `.fade-in, .reveal`. Any class that starts at `opacity: 0` in CSS and expects a scroll-triggered reveal MUST be listed in that selector, or it will never become visible.

**Over:** (a) Giving `.reveal` its own separate observer, or (b) removing the `opacity: 0` default from `.reveal` so the problem can't happen again.

**Why:** The pre-existing bug was that `.reveal { opacity: 0 }` was defined in CSS but no JS ever added `.is-visible` to those elements — the observer only watched `.fade-in`. Section labels ("Our Spaces", "Upcoming Events", "@rancho_moonrise", etc.) were permanently hidden on every page for however long this has been live. A single shared observer is the simplest fix (one line, one observer, two classes) and a pure copy-paste of the existing pattern — cheaper than a second observer, and safer than dropping the `opacity: 0` default, which would remove the fade-in animation entirely from elements that currently rely on it. The rule now is: if you invent a new scroll-reveal class, add it to this selector. Full stop.

**Context:** Fix shipped in commit `36fb00d` in `site/js/main.js`. Verified via Playwright that after a natural scroll-through of the homepage, zero `.reveal` or `.fade-in` elements remain at `opacity: 0`. Bug was pre-existing — not introduced in this session — but surfaced because the button-visibility investigation forced a close look at "why do these sections look empty?"

---

## 2026-04-10 — Ship Wedding Gallery As Placeholder, Don't Block Sweep

**Decision:** `site/pages/weddings.html` gets a 6-tile `.wedding-gallery` placeholder section with a visible "photos coming soon" note, `aria-hidden="true"` on the empty grid, and a TODO comment pointing at the missing asset. Shipped in the same commit as the brand-facts sweep.

**Over:** (a) blocking the entire sweep until Ashley delivers curated wedding photos, or (b) omitting the gallery entirely and adding it as a separate future task.

**Why:** The sweep was the #1 unlock for DNS cutover (a brand-correct Vercel site is the gate to pointing `ranchomoonrise.com` at it). Holding the whole sweep for a photo asset that Ashley hasn't curated would delay cutover by days or weeks. Omitting the gallery would leave weddings.html structurally incomplete relative to the user's stated design (wedding page needs a gallery per the 2026-04-10 Ashley call), and future-Adam would have to remember to add the section back — easy to miss. The placeholder is the compromise: the structure is already in the HTML/CSS/DOM where real photos slot in as a one-commit swap later, and the visible "photos coming soon" note is honest with visitors instead of leaving a broken-looking empty row.

**Context:** Revisit when Ashley delivers the photo set (tracked in TODO.md "Open asset gap"). Replacement is mechanical: swap the 6 `<div class="wedding-gallery__tile"></div>` placeholders for `<img>` tags, drop `aria-hidden="true"`, delete the `.wedding-gallery__note` paragraph. CSS for the grid already lives in the committed stylesheet so no styling work is needed on delivery.

---

## 2026-04-10 — Website Copy Uses "36 Acres" (Ashley's Number)

**Decision:** All customer-facing site copy, GBP posts, social content, and brand materials will say **36 acres**. This is Ashley's number from the 2026-04-10 brand-facts call and it's the authoritative figure for anything the public sees.

**Over:** 31.6 acres (the per-tract sum in `CONTEXT.md`: Tract I 9.9 + Tract II 11 + Tract III 10.7).

**Why:** Ashley runs the business and is the operator of record. Her stated acreage is what shows up in every other Rancho-operated touchpoint (GBP, Instagram, conversations with guests), so having the website disagree with her would create a "what do you actually own?" confusion on tours and inquiries. The 4.4-acre gap is small enough that the most likely explanation is rounding, an easement, or a parcel measurement that didn't land in the three tracts — none of which matter for marketing.

**Context:** The per-tract math in the deal file is separately load-bearing for the Exhibit A buyout modeling — that's a finance concern, not a website concern, and stays flagged in `TODO.md` for reconciliation before the buyout modeling is final. Marketing copy ships now; finance reconciliation happens on its own track.

---

## 2026-04-10 — DOM Location Is Source of Truth for "Done"

**Decision:** A task is considered done if and only if its `<div class="task" data-item-id="...">` element lives inside `#done-tasks-container` in `improvement-plan.html`. Not a class, not a data attribute, not localStorage.

**Over:** (a) adding a `data-done="true"` attribute, (b) using `class="task completed"` as the canonical marker, (c) reading from `ranchoPlanCompletedItems` localStorage.

**Why:** A task card can only be in one place in the DOM, so "is it done?" becomes a single `task.closest('#done-tasks-container')` check — no risk of class/attribute/storage drifting out of sync. localStorage is still used as an optimistic UI cache on the marking device so the next page load on that browser doesn't flash the task back to the Plan tab before the scheduled reconciler catches up, but it's never the authority. Multi-device convergence happens via `rancho-apply-done` rewriting the source HTML from `rancho-done-log.md` each morning; Vercel redeploys; all browsers see the same DOM on next load.

**Context:** This is what lets the grade calculator, the Done tab badge, and the scorecards all stay correct without a shared state blob. Everything reads `isTaskDone(id)` which queries the DOM.

---

## 2026-04-10 — Option C Phase-Gated Grade Progression (Empty Phases Pass Through)

**Decision:** Each area's headline grade on the scorecard snaps to the highest phase where ALL required tasks for that area are complete. Phases with zero required tasks for an area are skipped (grade does not advance into them). Mini-progress "(X/Y toward <next grade>)" shows underneath.

**Over:** (a) Option A — percent-complete weighted score, (b) Option B — strict phase gating where empty phases still block progression until the next populated phase completes.

**Why:**
- Option A makes grades move too smoothly — every task bump looks like progress even if nothing meaningful shipped for that area. It also made it impossible to map back to the 4-phase plan structure.
- Option B was the initial instinct but produced a subtle bug: Operations has no P1 or P2 tasks, so at baseline Operations would show "C+" (the P2 grade from the trajectory table) simply because "all 0 P1 tasks are done." That's wrong — Operations hasn't improved, we just don't have Ops work scheduled until P3/P4.
- Option C fixes this: empty phases `continue` without updating `completePhase`, so Operations correctly stays at the baseline "C" grade until the first real Ops task (#20 conversion tracking) ships. A post-loop check rolls `completePhase` forward to P4 only if *all* remaining phases are also empty, so a fully-done area still hits the terminal grade.

**Context:** Algorithm lives in `computeAreaProgress()` in `site/improvement-plan.html`. `AREA_PLAN` constant near the top of the script block maps each area to `{label, grades[5], phases{1,2,3,4}}`. Baseline (no tasks done) traced manually for all 8 areas before shipping to confirm no area auto-advanced.

---

## 2026-04-07 — Adam Running Point on Christopher (Not Nancy)

**Decision:** Adam handles all communication and deal presentation to Christopher, the potential incoming 45% partner.

**Why:** Nancy deferred to Adam. Christopher will want real numbers, a professional deal summary, and a structured conversation — not a casual owner pitch. Nancy is the idea person, not the numbers person. A clean, credible presentation increases the odds Christopher commits.

---

## 2026-04-08 — Keep Playfair Display for Headings (Americane Not Available)

**Decision:** Keep Playfair Display as the heading font. Add Overpass (body) and Lora (accent) from Google Fonts per brand guide. Americane (brand guide primary heading font) is skipped.

**Why:** Americane is Adobe-only — requires an Adobe Fonts subscription and web project setup. Playfair Display is a reasonable serif substitute already in use. Overpass and Lora are both brand guide fonts available on Google Fonts, so those were added. If Ashley has Adobe Fonts access, Americane can be added later as a single CSS change.

---

## 2026-04-06 — Static HTML/CSS/JS (No Framework)

**Decision:** Pure HTML/CSS/JS with no build step. No React, no Next.js, no WordPress.

**Why:** Adam's rule — all web assets in HTML/CSS/JS. Site is content-driven with no dynamic data needs. Static files deploy instantly on Vercel with zero build complexity.

---

## 2026-04-06 — WebP Images Only

**Decision:** All images converted to WebP. Originals kept in `images/original/` (gitignored).

**Why:** 90% size reduction (74MB → 7.2MB). WebP has 98%+ browser support. Originals preserved locally for future re-exports.

---

## 2026-04-06 — Cloudbeds for Booking (Not Custom)

**Decision:** Booking links point to Cloudbeds hosted reservation page. No custom booking flow on the site.

**Why:** Cloudbeds handles availability, payments, and channel management (Airbnb, Booking.com). Building a custom booking UI would duplicate existing functionality and create sync issues.

---

## 2026-04-06 — No CMS for Events

**Decision:** Events page uses static HTML cards. No headless CMS or database.

**Why:** Events change infrequently. A CMS adds complexity without proportional value at this stage. If event volume increases, revisit with a lightweight JSON file or Supabase table.
