# Rancho Moonrise — Project Context

**Last updated:** 2026-04-10 (Phase 3.1 — header layout pass: logo 140px, full-width nav, social pinned to right corner)

---

## What This Is

Advisory engagement for Rancho Moonrise — glamping, events, and retreat ranch on 36 acres, 20 minutes from downtown Austin (street address 20117 Lockwood Rd, 78653 — operational only; never use "Manor" as a location descriptor in copy). Adam runs deal structuring (buyout + new partner) and builds digital/operational systems. Ashley runs day-to-day operations.

**Brand facts (authoritative):** See `VOICE-GUIDE.md` → "Property Facts" section. Never use "luxury", "Hill Country", "Manor", "General Store", or cite a specific unit count. The Neon Moon Barn Lounge is event-only, not a walk-in bar.

**Repo:** `AStyer8345/rancho-moonrise`, branch `main`, deploys to Vercel
**Live site:** ranchomoonrise.com (BofillTech hosting — OLD, not editable by Claude)
**New site:** rancho-moonrise.vercel.app (Vercel — all dev work happens here)
**Improvement plan dashboard:** https://rancho-moonrise.vercel.app/improvement-plan.html

---

## Active Blockers

- **DNS cutover not done** — New Vercel site not live on main domain. ALL SEO/AEO impact blocked until this happens. This is the #1 unlock.
- **Exhibit A missing** — Cannot model buyout without ownership percentages from Nancy/Ashley.
- **GITHUB_TOKEN on Vercel is broad-scoped** — using `gh auth token` bootstrap. TODO: swap for fine-grained PAT scoped only to `AStyer8345/rancho-moonrise` contents:write.
- ~~GBP access~~ ✅ **UNBLOCKED 2026-04-10** — Adam has Manager access. Tasks #1, #2, #3, #7, #15, #27 now owned by Adam, not Ashley.

## What's Next

- Adam: Wire up a backend handler for the wedding inquiry forms on both contact.html and weddings.html (Formspree / Netlify Forms / Vercel serverless → email + Salesforce create_lead). Both currently `action="#"`. Flag on the DNS cutover checklist.
- Adam: Curate real-wedding photo set to replace weddings.html gallery placeholder (6 tiles, aria-hidden, "photos coming soon" note live now)
- Adam: Execute the 5 DRAFT→POST GBP tasks now that he has access — #1 (reply to 9 reviews, Claude drafts), #2 (replace blog-post description + amenities + hours, Claude drafts), #3 (answer pending Q&A + seed 10 FAQs, Claude drafts), plus pure-manual #7 (verify social links) and #15 (enable Chat) and #27 (upload photos)
- Adam: DNS cutover from BofillTech to Vercel (#1 overall unlock — NOW the Vercel site is brand-correct so cutover is low-risk)
- Adam: Rotate GITHUB_TOKEN on Vercel to a fine-grained PAT (5 min)
- Claude (auto): SEO/AEO prep work on Vercel site — Mon/Wed/Fri at 5 AM
- Claude (auto): Weekly GBP posts — drafts saved to `brand/gbp-posts/` for Adam to review

## Last Worked On

- 2026-04-10: **Phase 3.1 header layout pass.** Logo 112→140 px desktop, 68→92 px scrolled (Adam said the previous bump still wasn't enough). Dropped `.nav__inner max-width: 1200px → none` so the nav spans the full viewport — the previous Phase 3 had `margin-left: auto` on `.nav__social-group` but the icons were only being pushed to the right edge of a centered 1200px box, not the actual viewport corner. Bumped `.nav__links` gap from `space-sm → space-md` so Accommodations/Weddings/RM Events/Private Events/Contact/Book Now/Pool Passes have visible breathing room. Reinforced `margin-left: auto` on the second `.nav__social-group` rule (line 2224 was missing it). CSS cache-bust v=10→v=11 across 15 pages. Live-verified: logo 140px, max-width none, social pinned to right corner. Commit `a6e4171`.
- 2026-04-10: **Phase 3 UI refinements shipped.** (1) Logo bumped site-wide: `.nav__logo-img` 72→112 px desktop, 44→68 px when scrolled, 32→48 px tablet, 30→44 px very-narrow mobile. Tertiary Clay wordmark now reads cleanly in the nav without feeling cramped. (2) Replaced the custom wedding inquiry form on `weddings.html` with the EXACT contact.html wedding form markup (Full Name / Partner's Name / Email / Phone / Preferred Date Range / Estimated Guest Count / Total Wedding Budget * / Tell Us About Your Vision / How Did You Hear About Us? / Send Wedding Inquiry) and repositioned the section `#wedding-inquiry` to sit directly under the "Schedule a Venue Tour" section, above the FAQ. Single form schema across both pages means one future form-handler wire-up covers contact and weddings. (3) Converted the 5 weddings.html FAQs from plain `<h3>+<p>` into `.faq-item > button.faq-question + .faq-answer > .faq-answer__inner > p` markup — the existing main.js accordion handler (lines 79-103) automatically picks them up, so they now behave identically to the faqs.html accordions (only the question is visible by default; click to expand, closes any previously open item). (4) CSS cache-bust `?v=9 → ?v=10` across all 15 HTML pages. Verified live at `rancho-moonrise.vercel.app`: served CSS shows `.nav__logo-img { height: 112px }`, weddings.html contains 5 `faq-item` + the new form. Commit `e9fb9e3` pushed.
- 2026-04-10: **Phase 2 UI fixes shipped.** (1) `.btn--primary` and `.btn--outline` rewritten from transparent/white-border to solid Clay terracotta and solid charcoal fills — this was the root cause of apparently-empty cream sections (buttons invisible on cream bg). (2) Nav logo swapped site-wide from the Secondary Clay lockup (busy 360×360 square) to the cleaner Tertiary Clay wordmark (88×88) — renders cleanly at nav height. (3) Nav social icons (IG/FB/TikTok/LinkedIn) moved to the RIGHT of Book Now / Pool Passes on all 15 pages. (4) Weddings FAQ: "What You Need to Know" → "Frequently Asked Questions", H3 labels shortened (no location stuffing in visible text), answer paragraphs preserved, added FAQPage JSON-LD schema for AEO. (5) New `#wedding-inquiry` form on weddings.html above the CTA banner — First/Last Name, Email, Phone, Wedding Date, Guest Count, Budget (required), Referral Source, Message, "Send Inquiry" CTA. Uses `action="#"` placeholder pattern matching contact.html (no backend handler yet). (6) **Discovered + fixed pre-existing `.reveal` bug**: CSS had `.reveal { opacity: 0 }` but the IntersectionObserver in `main.js` only watched `.fade-in`. Section labels ("Our Spaces", "Upcoming Events", "@rancho_moonrise", etc.) were permanently hidden on every page. One-line fix: extended the selector to `.fade-in, .reveal`. Commits `ddf556e` + `36fb00d` pushed. Verified live at rancho-moonrise.vercel.app via Playwright: header layout correct, all sections rendered, wedding form visible, FAQ renamed.
- 2026-04-10: **Brand-facts site sweep shipped.** All 17 customer-facing HTML pages + `js/main.js` swept clean of banned terms (luxury, Hill Country, General Store, 20/31 acres, Manor-as-descriptor, Neon Moon walk-in framing, 4 ceremony sites, premier, oak trees, specific unit counts, private-fire-pit-per-site). Header logo swapped to brand-pack Clay SVG on every page. 4-icon social group (Instagram-priority + FB/TikTok/LinkedIn) added to nav + mobile menu. Events → "RM Events" rename propagated across nav, mobile, and all footers. Wedding budget dropdown (required, 4 tiers $5K-$60K+) added to contact form wedding inquiry section. Placeholder wedding gallery section added to weddings.html with "photos coming soon" note (asset gap — real-wedding photo curation still pending). CSS cache bust v=7 → v=8. Footer description replaced with 36-acre framing on every page. 2 commits pushed: `59beb4b` (main sweep, 373 files) + `5bbf84d` (4 footer fixes the subagent missed). Verified live on rancho-moonrise.vercel.app: RM Events × 3 on homepage, wedding gallery + Unlimited Ceremony Options on weddings, budget dropdown on contact, zero banned terms across 7 spot-checked pages, logo SVG returns 200.
- 2026-04-10: **Ashley brand-facts call processed + acreage locked at 36.** Updated `VOICE-GUIDE.md` (root) and `brand/voice-guide.md` with Ashley's corrections: banned "luxury", "Texas Hill Country", "Manor" (as copy descriptor), "General Store" (→ "The Lodge"), walk-in bar framing for Neon Moon Barn Lounge (event-only). Removed specific unit count (fluctuates 15/18/19), oak references (no oak trees), and corrected "fire pits throughout the property" (not every unit). Added wedding budget dropdown, "unlimited ceremony options", "Our Venues" → "Our Spaces" rename, Events → "RM Events" rename. New "Property Facts (authoritative)" section in VOICE-GUIDE.md. Official brand pack imported: web-ready subset committed at `site/images/brand/`, full 1 GB pack at `rancho-moonrise-assets/brand-pack-2026-04-10/` (outside repo), index at `brand/BRAND-ASSETS.md`, update prompt rewritten at `brand/CLAUDE-CODE-WEBSITE-UPDATE-PROMPT.md`. **Acreage resolved to 36** for all customer-facing copy (DECISIONS.md 2026-04-10); deal-file per-tract reconciliation (31.6) left open for buyout modeling as non-blocking. Site sweep itself (~109 banned-term matches across 22 files) deferred to a fresh session using the rewritten prompt.
- 2026-04-10: **3-disposition tag sweep + GBP access unblock.** Adam confirmed GBP Manager access (can post, reply, edit, view performance). Added `tag-draft-post` CSS class + new `.disposition-legend` intro block on `improvement-plan.html` explicitly defining AUTO / DRAFT→POST / MANUAL. Re-tagged every one of the 35 tasks so each carries exactly ONE disposition: 12 AUTO, 5 DRAFT→POST (#1 review replies, #2 GBP description, #3 Q&A seed, #12 Hipcamp, #22 SOPs), 18 MANUAL. Shifted GBP tasks (#1, #2, #7, #15, #27) from Ashley → Adam; #1 and #2 also gained Claude as co-owner (drafts the copy). HTML balance 243/243 divs, 35 tasks preserved.
- 2026-04-10 (SEO run): Published blog #6 (`ranch-wedding-texas.html` — "Planning a Ranch Wedding in Texas"). Added SpeakableSpecification schema to homepage. Fixed AggregateRating count 122→125 (homepage + accommodations). Updated sitemap with new entry + lastmods. Blog index now shows 6 published articles.
- 2026-04-10: Added **Links tab** and **Voice tab** to improvement-plan.html. Links tab is a mind-map-style grid of 8 category cards (Websites, Booking, Social, GBP, Reviews, OTAs, Wedding Directories, Internal) with status tags (Primary/Live/Gap/Verify) — doubles as a visible gap audit. Voice tab is a condensed render of `VOICE-GUIDE.md` (three words, tone table, key phrases, never-say table, writing patterns, Instagram voice, personas, brand details). Tab order now: Plan · Metrics · Audits · Intel · Done · Links · Voice. Hash routing added for `#links` and `#voice`. 239/239 div balance verified.
- 2026-04-10: Added Done tab to improvement-plan.html — completed tasks now physically relocate into `#done-tasks-container` (newest on top) rather than fading in place on the Plan tab. Backfilled tasks 4, 6, 10 moved at rest. Deploy live at commit 01319c8.
- 2026-04-10: Built Option C grade progression calculator. Headline grade snaps to the highest phase where all required tasks for that area are complete; empty phases pass through without advancing the grade (so Operations stays at C until task #20 ships, not C+ just because P1/P2 are empty for Ops). Mini-progress "(X/Y toward <next grade>)" shows under each scorecard. Scorecards + Grade Trajectory table recompute on load and after every mark-done click.
- 2026-04-10: Updated `rancho-apply-done` scheduled task SKILL.md to physically move task divs into the Done tab instead of just applying a class in place.
- 2026-04-10: Source of truth for "is done?" is now DOM location (inside Done tab container). localStorage is just optimistic UI cache for the marking device until the server-side reconciler catches up.
- 2026-04-09: Mark Done system shipped — `/api/complete` serverless function on Vercel writes to `rancho-done-log.md` via GitHub Contents API, auth via shared `BRIEFING_AUTH_TOKEN` (same as client-ops briefing page).

---

## Mark Done System — How It Works

1. Adam clicks "Mark done" on a task at `/improvement-plan.html`
2. Client POSTs to `/api/complete` with Bearer auth token (stored in localStorage, same secret as client-ops briefing)
3. Serverless function appends a RESOLVED line to `rancho-done-log.md` via GitHub Contents API, commits as `rancho-mark-done` bot
4. Client optimistically moves the task div into `#done-tasks-container` and recomputes grades
5. `rancho-apply-done` scheduled task (daily 5:33 AM local) reconciles log → HTML, physically moving any task divs that are still on the Plan tab into the Done tab container, then commits + pushes
6. Vercel redeploys on push → all devices converge on the same state

---

## Key Metrics (confirmed April 9, 2026 — baseline week)

| Metric | Value |
|--------|-------|
| Google reviews | ~125 (4.9★) — 9/10 unreplied |
| GBP views | 50,500 |
| Instagram | ~13K followers, 279 posts |
| Facebook | 864 followers, 5 reviews (100%) |
| TikTok | 1,408 followers |
| TripAdvisor | 0 reviews, NOT claimed |
| Expedia | 8.0 rating |
| Google ranking (non-brand) | NOT ranking (0/10 keywords) |
| AI engine citations | NOT cited (0/10) |
| Google indexed pages (old site) | ~10 |
| Next metrics update | April 16, 2026 |
| Improvement tasks done | 3/35 (#4, #6, #10 — backfilled) |

---

## Property & Deal Summary

- **3 tracts** in same LLC, free and clear (~$4.2M invested)
- Tract I (9.9 ac) — improved, all operations
- Tract II (11 ac) + III (10.7 ac) — vacant, landlocked
- **Revenue:** 2025 = $350K, 2026 target $500-650K
- Private events 46%, rooms 31%, POS/bar 22%
- **Buyout:** Paul & Donna want out (~$2M invested). Blocked on Exhibit A.
- **Christopher:** potential incoming partner, Adam running point

## People

| Who | Role |
|-----|------|
| Nancy | Co-owner |
| Ashley | Runs everything — GBP access, operations |
| Monet | Staff ($28/hr) |
| Arlen | Maintenance ($170/day) |
| Kylie | Part-time social ($18/hr) |

## Key Files

- `api/complete.js` — Mark Done serverless function (Vercel, Node 20.x)
- `rancho-done-log.md` — append-only log, source of truth for done state
- `site/improvement-plan.html` — 35 task cards + Plan/Metrics/Audits/Intel/Done tabs
- `brand/2026-04-09-metrics-baseline.md` — live-verified platform data
- `tasks/seo-aeo/` — autonomous SEO/AEO agent workspace
- `site/` — Vercel site (new build, not yet live on main domain)
