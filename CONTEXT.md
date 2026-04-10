# Rancho Moonrise — Project Context

**Last updated:** 2026-04-10 (3-disposition tag sweep; Adam now has GBP Manager access)

---

## What This Is

Advisory engagement for Rancho Moonrise — glamping, events, and retreat ranch in Manor, TX (20117 Lockwood Rd, Manor TX 78653). Adam runs deal structuring (buyout + new partner) and builds digital/operational systems. Ashley runs day-to-day operations.

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

- Adam: Execute the 5 DRAFT→POST GBP tasks now that he has access — #1 (reply to 9 reviews, Claude drafts), #2 (replace blog-post description + amenities + hours, Claude drafts), #3 (answer pending Q&A + seed 10 FAQs, Claude drafts), plus pure-manual #7 (verify social links) and #15 (enable Chat) and #27 (upload photos)
- Adam: DNS cutover from BofillTech to Vercel (#1 overall unlock)
- Adam: Rotate GITHUB_TOKEN on Vercel to a fine-grained PAT (5 min)
- Claude (auto): SEO/AEO prep work on Vercel site — Mon/Wed/Fri at 5 AM
- Claude (auto): Weekly GBP posts — drafts saved to `brand/gbp-posts/` for Adam to review

## Last Worked On

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
