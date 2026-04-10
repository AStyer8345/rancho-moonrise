# Rancho Moonrise — Decisions

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
