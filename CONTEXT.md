# Rancho Moonrise — Project Context

**Last updated:** 2026-04-21 (Pre-DNS-cutover event sweep: verified Ashley admin login via pgcrypto password reset, diff'd old-site events vs Vercel events.html, cleaned past events, added Rosés + Sunday Funday (May 24), fixed 4 title mismatches in Supabase, wired events.html to Supabase hydration (client-side JS fetch), posted 12 backlog events to GBP via Publer staggered 15 min apart.)

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

- **8 low-res source JPGs cap image quality** — see "Low-res source JPGs" section below. Responsive pipeline can't generate variants bigger than the source; 4 venue photos cap at 1024w and 4 accommodation photos cap at 480w (actually 340×340 thumbnails). Needs re-upload from Ashley's originals.
- **DNS cutover not done** — New Vercel site not live on main domain. ALL SEO/AEO impact blocked until this happens. This is the #1 unlock.
- **Exhibit A missing** — Cannot model buyout without ownership percentages from Nancy/Ashley.
- **GITHUB_TOKEN on Vercel is broad-scoped** — using `gh auth token` bootstrap. TODO: swap for fine-grained PAT scoped only to `AStyer8345/rancho-moonrise` contents:write.
- ~~GBP access~~ ✅ **UNBLOCKED 2026-04-10** — Adam has Manager access. Tasks #1, #2, #3, #7, #15, #27 now owned by Adam, not Ashley.

## What's Next

- **DNS cutover (Adam, Apr 22):** events.html now hydrates from Supabase client-side while keeping the hardcoded cards as SEO fallback. Ashley's admin login at `/admin` is verified working (password `RanchoMoonrise2026!` for `admin@ranchomoonrise.com`, reset recovery email queued to `howdy@ranchomoonrise.com`). 12 upcoming events now live on GBP via Publer staggered posts (Cinco De Mayo → Aug 30 Yoga).
- **Next SEO run:** Events.html: update Event schema startDate/endDate for April 24/26 events after they pass (May 30 Free Friday, May 31 Yoga & Mimosas) — do on/after April 27. Pool-day-pass: add ReservePage schema (ResortPass live, Lucky Arrow window expires May 1). Blog #17 candidate: "Yoga Retreat Near Austin Texas" or "Birthday Party Venue Near Austin". S1 now at 16 posts.
- Adam: Re-upload the 8 low-res source JPGs at 2560px+ width (especially `feature-wedding.jpg` — bride-critical) so the responsive ladder can generate 1920/2560/3840 variants. See "Low-res source JPGs" below.
- Adam: Wire up a backend handler for the wedding inquiry forms on both contact.html and weddings.html (Formspree / Netlify Forms / Vercel serverless → email + Salesforce create_lead). Both currently `action="#"`. Flag on the DNS cutover checklist.
- Adam: Curate real-wedding photo set to replace weddings.html gallery placeholder (6 tiles, aria-hidden, "photos coming soon" note live now)
- Adam: Remaining GBP tasks — #3 (answer pending Q&A + seed 10 FAQs), #15 (enable Chat), #27 (upload photos). #1 reviews RESOLVED 2026-04-14; #2 RESOLVED 2026-04-15.
- Adam: DNS cutover from BofillTech to Vercel (#1 overall unlock — Vercel site is brand-correct, cutover is low-risk)
- Adam: Rotate GITHUB_TOKEN on Vercel to a fine-grained PAT (5 min)
- Claude (auto): SEO/AEO prep work on Vercel site — Mon/Wed/Fri at 5 AM
- Claude (auto): Weekly GBP posts — drafts saved to `brand/gbp-posts/` for Adam to review

## Low-res source JPGs (data blocker, not code blocker)

The responsive image pipeline is live and working. But `scripts/generate-responsive-images.sh` refuses to upscale (correctly — cwebp q88 of upscaled pixels just bakes in blur), so the ladder caps at the source dimensions. These 8 files need higher-resolution originals:

| File | Current source | Ladder generated | Where it lands |
|------|---------------|------------------|----------------|
| `feature-wedding.jpg` | 1060×651 | 480w, 1024w | **weddings.html feature section — bride-critical** |
| `venue-event-barn.jpg` | 1067×1600 (portrait) | 480w, 1024w | host-your-event.html hero + index split section |
| `about-ranch-aerial.jpg` | 1600×1067 | 480w, 1024w | index.html about split section |
| `feature-safari-tent.jpg` | 1706×1017 | 480w, 1024w | index.html feature split section |
| `accommodation-cabin.jpg` | 336×338 | 480w only (upscaled) | accommodations.html card |
| `accommodation-double-safari.jpg` | 350×349 | 480w only | accommodations.html card |
| `accommodation-family-safari.jpg` | 339×339 | 480w only | accommodations.html card |
| `accommodation-premium-safari.jpg` | 342×340 | 480w only | accommodations.html card |

The 4 accommodation files are literally 340×340 thumbnails masquerading as content photos — re-upload priority is HIGH. Re-upload at 1600×1600+ minimum. Once re-uploaded: rerun `./scripts/generate-responsive-images.sh` and commit — no HTML changes needed.

## Last Worked On

- 2026-04-21 (pre-cutover event sweep): **Events + GBP backlog cleared ahead of DNS cutover.** (1) Ashley admin login verified — pgcrypto bcrypt password reset against `auth.users.encrypted_password` (no service_role key needed), login test via `/auth/v1/token` grant_type=password returned valid access_token; password recovery email drafted in Outlook to `howdy@ranchomoonrise.com`. (2) events.html cleaned — removed past April 11 Lone Star + April 12 Bridal Sip & See cards, added Rosés Around the World (May 24) + Sunday Funday: Memorial Weekend (May 24), fixed May 2 title to "Rancho Rodeo: Cinco De Mayo", added `data-events-month="YYYY-MM"` attributes to list divs, updated JS EVENTS array, added 130-line Supabase hydration block (fetches `rancho_events` WHERE is_active=true AND event_date >= today, replaces hardcoded cards while preserving them as SEO fallback). (3) Supabase data cleanup — 4 title mismatches fixed, 2 new events inserted with start_time/end_time. (4) GBP backlog — 12 unposted events pushed to Publer queue for GBP account 69d83e6e, staggered 15 min apart from 16:01Z to 18:47Z (UTC). Marked gbp_posted=true in Supabase for all 12; `still_unposted=0`. Logged run to n8n_run_logs table. Previous automation only caught 1 event because of the 7-day lookahead window — working as designed, just needed manual backlog clear.
- 2026-04-21 (SEO daily): **Blog #15 committed** (corporate-retreat-ranch-vs-hotel.html — was untracked). **Blog #16 published:** mothers-day-near-austin.html — seasonal post targeting Mother's Day May 11, 3 weeks out. AEO block, FAQPage (4 Q&A), SpeakableSpecification, BreadcrumbList. Cross-links to pool-day-pass, accommodations, events, faqs, weekend-getaways. Sitemap updated (both new entries). S1 now 16 posts. Re-Verify Gate: sitemap 200 ✓, DNS Flywheel ✓.
- 2026-04-21 (review-monitor): **RUN_006.** No new reviews on any platform. Unreplied=0 maintained. TripAdvisor and Hipcamp live-verified at 0 reviews. Facebook 5/100% confirmed via WebSearch. Expedia 8.0 confirmed via WebSearch (Hotels.com snippet still active). 3 BLOCKERS ongoing: Google JS-blocked (run 6), Hotels.com timeout (run 6), Airbnb 403 (FLAG_FOR_ADAM). Dashboard status: ok.
- 2026-04-20 (competitive-weekly): **April 20 intel run.** 7 prior claims re-verified live. Lucky Arrow ResortPass has no active products through May 1 — time-sensitive window. Two new SERP entrants: The Yurtopian (16 yurts, Dripping Springs/Wimberley) and Spoon Mountain Glamping (Wimberley safari tents). Intel card dual-written. DNS cutover urgency elevated.
- 2026-04-19 (SEO daily): **Blog #14 published.** `austin-bachelorette-ranch-vs-bar-crawl.html`. Comparison post targeting bachelorette planners. AEO block, comparison table, FAQPage (4 Q&A), SpeakableSpecification. Commit `2a4837a`.
- 2026-04-18 (SEO daily): **Blog #13 published.** `summer-glamping-near-austin.html`. Targets summer glamping keyword cluster — seasonal timing (6 weeks before peak season). AEO block, FAQPage, SpeakableSpecification, BreadcrumbList.
- 2026-04-17 (SEO daily): **S2 RESOLVED.** AEO pass on final 4 landing pages (wedding-venues-near-austin, corporate-retreat-near-austin, ranch-wedding-texas, things-to-do-manor-tx). FAQPage (4 Q&A each) + SpeakableSpecification + aeo-block. Commit `e570002`.
- 2026-04-15 (GBP profile): **Task #2 RESOLVED.** Adam swapped primary category Hotel → Event venue, posted 738-char description, set hours (Mon/Tue closed, Wed–Sun 9–8), added opening date, flipped website to HTTPS. Task card moved to Done.
- 2026-04-15 (weekly content): **Blog #12 published** — `corporate-retreat-planning-guide-texas.html`. AEO block, FAQPage (4 Q&A), BlogPosting schema. Hub-and-spoke cross-link from `corporate-retreat-near-austin.html`.
- 2026-04-15 (grade-stepper UX): 5-stop grade journey visual + clickable progress links on every improvement-plan.html scorecard. Canonical at `client-ops/clients/_shared/grade-progress.{css,js}`, mirrored inline in sovereign rancho. Commits: `dccfbc7` + `81cb9f2`.

---

## Mark Done System — How It Works

1. Adam clicks "Mark done" on a task at `/improvement-plan.html`
2. Client POSTs to `/api/complete` with Bearer auth token (stored in localStorage, same secret as client-ops briefing)
3. Serverless function appends a RESOLVED line to `rancho-done-log.md` via GitHub Contents API, commits as `rancho-mark-done` bot
4. Client optimistically moves the task div into `#done-tasks-container` and recomputes grades
5. `rancho-apply-done` scheduled task (daily 5:33 AM local) reconciles log → HTML, physically moving any task divs that are still on the Plan tab into the Done tab container, then commits + pushes
6. Vercel redeploys on push → all devices converge on the same state

---

## Key Metrics (updated April 15, 2026 — week 1 vs. baseline)

| Metric | Value | Delta vs. Apr 9 |
|--------|-------|-----------------|
| Google reviews | 125 (4.9★) (unverified) | Flat |
| GBP views | 50,500 (stale — March email) | Awaiting April email |
| GBP search impressions | 6,967 | Baseline filled Apr 14 |
| GBP profile views | 15,053 | Baseline filled Apr 14 |
| GBP clicks | 554 | Baseline filled Apr 14 |
| GBP directions | 513 | Baseline filled Apr 14 |
| GBP calls | 44 | Baseline filled Apr 14 |
| Instagram | ~13K followers | Flat |
| Facebook | 864 followers, 5 reviews | Flat |
| TikTok | 1,408 followers | Flat |
| LinkedIn | **106 followers** | NEW — was "Page exists" |
| TripAdvisor | 0 reviews, NOT claimed | Flat |
| Expedia | 8.0 rating | Flat |
| Google ranking (non-brand) | NOT ranking (0/10 keywords) | Flat |
| AI engine citations | NOT cited (0/10) | Flat |
| Google indexed pages (old site) | ~10 | Flat — new site not live |
| Next metrics update | April 22, 2026 | |
| Improvement tasks done | 3/35 (#4, #6, #10) | Flat |

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
