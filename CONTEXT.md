# Rancho Moonrise — Project Context

**Last updated:** 2026-09-12 (rancho-site-daily — **Clean cruise-control run: repo started synced with `origin/main` (no stranded commits to land this time), Re-Verify Gate 2/2 still_true.** Brand canary passed, `/safari-tents-near-austin/` re-checked via `site:ranchomoonrise.com safari tents`, still absent from the same 8-owned-URL result as 8/31–9/11 (~138 days by the established count) — on-site diagnosis stays closed, no further on-site work queued; 5-file NEEDS OWNER uncommitted set confirmed byte-identical (`git diff --stat` + `git log` per-file) to the 8/31 baseline. Site health clean (30/30 sitemap URLs 200, `validate:site` passes, TTFB 0.20-0.33s across 6 spot-checked routes). PageSpeed API still quota-exceeded — same known blocker family, not a new finding. **Two more on-page levers checked for the first time in this task's run history and both came back clean:** broken internal links (965 `<a href>` links across 32 public pages resolved against sitemap + `vercel.json` rewrite routes, 0 broken) and duplicate title/meta description (only duplicate pair is the known untracked `weddings 2.html` file-sync copy, never deployed or crawlable — no real duplicate-content defect). `site/pages/weddings 2.html` duplicate still present, still not actioned. Full detail: `run-logs/2026-09-12-seo.md`.)

**Prior entry:** 2026-09-11 (rancho-site-daily — **Repo started with 2 stranded local commits (notebooklm sync, benign) never pushed to `origin/main` — pushed at run start rather than carried another day; that's this run's actual shipped action.** Re-Verify Gate 2/2 still_true: brand canary passed, `/safari-tents-near-austin/` re-checked via `site:ranchomoonrise.com safari tents`, still absent from the same 8-owned-URL result as 8/31–9/10 (~137 days by the established count) — on-site diagnosis stays closed, no further on-site work queued; 5-file NEEDS OWNER uncommitted set confirmed byte-identical (`git diff --stat`) to the 8/31 baseline. Site health clean (30/30 sitemap URLs 200, `validate:site` passes, TTFB 0.22-0.43s across 6 spot-checked routes). **Two on-page levers checked for the first time in this run's history and both came back clean:** alt-text coverage (251/251 `<img>` tags across 31 public pages carry an `alt` attribute; the only 2 empty `alt=""` are a JS-templated lightbox placeholder in `weddings.html`/its untracked duplicate, not content images) and H1 uniqueness (31/31 pages exactly one `<h1>`). PageSpeed API still quota-exceeded — same known blocker family, not a new finding. `site/pages/weddings 2.html` duplicate still present, still not actioned. Full detail: `run-logs/2026-09-11-seo.md`.)

**Prior entry (2):** 2026-09-10 (rancho-site-daily — **Clean cruise-control run: repo started fully clean for the first time in several runs (HEAD == `origin/main`, only the standing 5-file NEEDS OWNER set present), site health clean (30/30 sitemap URLs 200), Re-Verify Gate 2/2 still_true.** Given two consecutive prior runs (9/7, 9/9) each found a real SERP meta-description overflow, re-swept the description length on **every** page rather than assume the lever was exhausted after two fixes — longest is `host-your-event.html` at 158 chars, under the ~155-160 truncation ceiling; nothing found over 160. No fix made because the lever produced nothing to fix, not because it was skipped. `/safari-tents-near-austin/` re-checked via `site:` query, still absent from the same 8-owned-URL set as 8/31–9/9 — on-site diagnosis stays closed, no further on-site work queued. Minor, not actioned: `site/pages/weddings 2.html` is an untracked, byte-identical, unreferenced file-sync duplicate (same family as the " 2.mp4" duplicates already logged 8/31) — zero SEO/functional impact, left alone. Full detail: `run-logs/2026-09-10-seo.md`.)

**Prior entry (3):** 2026-09-09 (rancho-site-daily — **Found and fixed a second SERP meta-description overflow, a page the 9/7 pass didn't cover: `safari-tents-near-austin.html` at 163 chars** (over the ~155-160 truncation point), trimmed to 129 chars, no VOICE-GUIDE violations, `validate:site` passes. Re-Verify Gate 2/2 still_true, brand canary passed first: `/safari-tents-near-austin/` still absent from an 8-owned-URL `site:` result (same URL set as 8/31) — on-site diagnosis stays closed, no further on-site work queued against it; the 5-file NEEDS OWNER uncommitted set confirmed unchanged via `git status`. **New, not this task's:** `rancho-review-monitor`'s 2026-09-07 RUN_073 four-file update (`CONTEXT.md` bullet, `brand/review-aggregate.json`, `site/admin/dashboard-state.json`, `tasks/review-monitor/BLOCKERS.md`, `tasks/review-monitor/session-log.md`, plus an untracked run-log and raw-data dir) sat uncommitted at run start — the same "reported shipped, never committed" pattern this property has hit 3+ times before, this time one task over. Isolated via `git stash` before editing `CONTEXT.md` so this commit carries only site-daily's line, then reapplied uncommitted so review-monitor's content is untouched; the other 5 files remain uncommitted and are flagged in TODO.md for that task or Adam to land. Committed, pushed, confirmed live. Full detail: `run-logs/2026-09-09-seo.md`.)

**Prior entry (4):** 2026-09-07 (rancho-competitive-weekly — **The single most actionable number in this report is unfrozen: ResortPass access is back after two blocked reads, and the day-pass underpricing finding is re-verified live rather than held.** Rancho: $20/$15, 4.8★/53, unchanged from the 8/25 held value. Lucky Arrow: rating held at 4.6★ but review count moved **201 → 209** (+8) during the blackout, plus a new $75/4-guest bundle. Logged `resortpass-access-blocked-2026-08-31` RESOLVED. **The broad-glamping regression flagged 8/31 as "one read, don't act on it" is confirmed, not escalated:** re-ran the identical tracked query and got the same reduced count (1 owned URL) a second time, six days apart — a settled floor. **New hypothesis, snippet-level only:** two independent search reads returned the same banned Knot sentence ("20 luxury cabins and safari tents for up to 50 guests") attributed to Rancho's WeddingWire listing — direct fetch still doesn't render the actual page, so this is not yet a confirmed page-level defect, just two reads pointing the same way. The Knot itself reproduced verbatim a 4th time; Hotels.com still hasn't in 5 reads. Brand snippet clean for a 2nd consecutive read (watched, not claimed). Hipcamp curated absence 11th read (Lucky Arrow #8, Ranch 3232 #16, unchanged); Glamping Hub ~21 weeks absent. Serana re-confirmed still publishing no price. Intel card inserted byte-identically into both improvement-plan files, verified live at `origin/main` on both repos and on both deployed URLs before calling it shipped. Full detail: `run-logs/2026-09-07-competitive.md`.)

**Prior entry (5):** 2026-09-07 (rancho-site-daily — **Found and fixed a genuine on-page defect after two quiet cruise-control days: 4 pages carried SERP meta descriptions past Google's ~155-160 char truncation point** (`blog.html` 172, `faqs.html` 171, `videos.html` 167, `wedding-venues-near-austin.html` 180) — trimmed to 121-132 chars, no voice violations, `validate:site` passes, committed (`4f4534f`), pushed, and confirmed live on all 4 URLs. Re-Verify Gate 2/2 still_true: `/safari-tents-near-austin/` still unindexed (on-site diagnosis stays closed), 5-file NEEDS OWNER set unchanged. Also noted, not actioned: the brand-canary AI answer still echoes the banned Knot/Hotels.com syndicated line — existing NEEDS ADAM item, not new. Full detail: `run-logs/2026-09-07-seo.md`.)

**Prior entry (6):** 2026-09-05 (rancho-site-daily — **Quiet cruise-control run: site health clean (30/30 sitemap URLs 200), repo clean (HEAD == origin/main, nothing pending to land), Re-Verify Gate 2/2 still_true (`/safari-tents-near-austin/` still unindexed at ~131 days, 5-file NEEDS OWNER set unchanged), no on-page defect found and none manufactured.** Full detail: `run-logs/2026-09-05-seo.md`.)

**Prior entry (7):** 2026-09-04 (rancho-site-daily — **WeddingWire's `sameAs` contradiction, open since 8/19, is resolved (14 → 15) by varying the query, not retrying the known-403 fetch, and cross-matched to the property's address.** Today's assigned top-autonomous-slot item — "extend AEO measurement to a second answer engine" — closed negative and useful: `WebFetch` on Bing and Google both failed the brand-canary guard identically to 8/17's bare-curl failure, closing the "different fetch mechanism" hypothesis for good — real second-engine AEO measurement needs a paid API key. Logged as MEASUREMENT BLOCKED, not "0 citations," and the shared `client-ops` dead-paths runbook extended with the finding. Apple Maps re-read via a third tool path cross-verifies review-monitor's 8/30 figures (80%, 5 ratings) and surfaces one new item in this task's own remit: listed hours read **"3:00 PM – 5:00 PM daily,"** almost certainly wrong for an events venue — flagged NEEDS ADAM (Apple Business Connect). Everything else unchanged: site health, safari-tents still uncrawled (closed on-site since 8/31), 5-file NEEDS OWNER set untouched. Gate: 4 claims — 1 resolved, 3 still_true. Full detail: `run-logs/2026-09-04-seo.md`.)

*(Older entries back to 2026-08-31 (rancho-site-daily / rancho-competitive-weekly) trimmed from this rotating header to keep it bounded — full text is append-only in `CHANGELOG.md`.)*

---

## What This Is

Advisory engagement for Rancho Moonrise — glamping, events, and retreat ranch on 36 acres, 20 minutes from downtown Austin (street address 20117 Lockwood Rd, 78653 — operational only; never use "Manor" as a location descriptor in copy). Adam runs deal structuring (buyout + new partner) and builds digital/operational systems. Ashley runs day-to-day operations.

**Brand facts (authoritative):** See `VOICE-GUIDE.md` → "Property Facts" section. Never use "luxury", "Hill Country", "Manor", "General Store", or cite a specific unit count. The Neon Moon Barn Lounge is event-only, not a walk-in bar.

**Repo:** `AStyer8345/rancho-moonrise`, branch `main`, deploys to Vercel **Live site:** [ranchomoonrise.com](http://ranchomoonrise.com) (BofillTech hosting — OLD, not editable by Claude) **New site:** rancho-moonrise.vercel.app (Vercel — all dev work happens here) **Improvement plan dashboard:** <https://rancho-moonrise.vercel.app/improvement-plan.html>

---

## Active Blockers

- **Paul/Donna step-away in flight (2026-04-23)** — Paul and Donna emailed that they want to step away; Ben and Robert countered "hand over the books and financials, we're taking control." Donna hasn't replied and is still acting unilaterally (renewing insurance, micromanaging Ashley). Governance conflict in the open until Nancy weighs in. See `meetings/2026-04-23-ashley-onsite.md` in the Cowork workspace for the full record.
- **Beth (bookkeeper) cannot be a QuickBooks channel** — she's a Donna loyalist, reports everything back to the Hirschmans. Even Beth thinks Donna is unreasonable. Need an alternate path to books/financials.
- **Bar manager role unfilled** — effectively full-time (25 distributors, minimums, tracking). Currently on Ashley on top of events/laundry/design/inquiries/two babies. Biggest single operational risk.
- **Ashley handoff verification (2026-09-16):** CRM and draft automation exist; the old no-CRM statement is obsolete. Guest replies require review/send. Verify Ashley’s named access, inbox delivery, follow-up timestamp semantics and Flodesk signup behavior before independent operation.
- **8 low-res source JPGs cap image quality** — see "Low-res source JPGs" section below. Responsive pipeline can't generate variants bigger than the source; 4 venue photos cap at 1024w and 4 accommodation photos cap at 480w (actually 340×340 thumbnails). Needs re-upload from Ashley's originals.
- ~~DNS cutover not done~~ ✅ **RESOLVED 2026-04-30** — `curl -I ranchomoonrise.com` returns `server: Vercel`. 2026-04-30 repair pass flipped Vercel primary domain to apex, so `www.ranchomoonrise.com` now permanently redirects to `https://ranchomoonrise.com/`. The #1 SEO blocker is unblocked. Next: submit apex sitemap in GSC.
- **Exhibit A missing** — Cannot model buyout without ownership percentages. Cannot go through Beth; need an alternate path.
- **GITHUB_TOKEN on Vercel is broad-scoped** — using `gh auth token` bootstrap. TODO: swap for fine-grained PAT scoped only to `AStyer8345/rancho-moonrise` contents:write.
- ~~GBP access~~ ✅ **UNBLOCKED 2026-04-10** — Adam has Manager access. Tasks #1, #2, #3, #7, #15, #27 now owned by Adam, not Ashley.

## What's Next

- Finish Friday September 18 handoff: named access, one inquiry/draft review and one website preview; explain the actual custom-admin edit map. Training materials remain private.
- Verify GA4/GTM destination and Search Console access; establish current clicks, queries, indexing and qualified-inquiry measurements. Blank analytics IDs remain a blocker. Use URL Inspection for `/safari-tents-near-austin/`; prior search snippets are not definitive indexing evidence.
- Wire and verify the remaining admin copy controls and define how CMS edits publish to static HTML. Current home/accommodations loaders and events/wedding-specific loaders are not equivalent.
- Review the original checkout’s five unpublished files separately, including the wedding guest-accommodations deletion. Do not overwrite or silently publish them.
- Obtain high-resolution originals for remaining small accommodation photos and verify current review count/quote sources. Existing wedding gallery has 17 real photos; older “six placeholders” notes are obsolete.
- Complete outstanding GBP/OTA description and photo tasks; review Glamping Hub/Hipcamp listings. Past ranking/citation counts in this file are historical snapshots, not September 16 measurements.
- Rotate the broad Vercel GitHub token to a scoped credential; reconnect the AI connector to the existing Vercel team.
- Continue scheduled SEO and draft GBP work within current GOALS.md. Avoid additional schema work without a guest-facing or measured search benefit.

## Low-res source JPGs (data blocker, not code blocker)

The responsive image pipeline is live and working. But `scripts/generate-responsive-images.sh` refuses to upscale (correctly — cwebp q88 of upscaled pixels just bakes in blur), so the ladder caps at the source dimensions. These 8 files need higher-resolution originals:

FileCurrent sourceLadder generatedWhere it lands`feature-wedding.jpg`1060×651480w, 1024w**weddings.html feature section — bride-critical**`venue-event-barn.jpg`1067×1600 (portrait)480w, 1024whost-your-event.html hero + index split section`about-ranch-aerial.jpg`1600×1067480w, 1024windex.html about split section`feature-safari-tent.jpg`1706×1017480w, 1024windex.html feature split section`accommodation-cabin.jpg`336×338480w only (upscaled)accommodations.html card`accommodation-double-safari.jpg`350×349480w onlyaccommodations.html card`accommodation-family-safari.jpg`339×339480w onlyaccommodations.html card`accommodation-premium-safari.jpg`342×340480w onlyaccommodations.html card

The 4 accommodation files are literally 340×340 thumbnails masquerading as content photos — re-upload priority is HIGH. Re-upload at 1600×1600+ minimum. Once re-uploaded: rerun `./scripts/generate-responsive-images.sh` and commit — no HTML changes needed.

## Last Worked On

- 2026-09-16 — Website audit and focused repairs published in isolated `codex/rancho-site-audit-2026-09-16`; original five-file uncommitted set preserved. Report: `docs/website-audit-2026-09-16.md`. Baseline mobile Lighthouse 70 performance / 93 accessibility / 100 best practices / 92 SEO; live recheck improved to 99 / 100 / 100 / 100, with LCP 5.4s → 2.1s (one lab pair).
- Repaired responsive photo delivery, photo/alt mismatches, expired event fallbacks, slideshow controls, navigation/FAQ accessibility, mobile chat overlap and client-side inquiry feedback. All 30 live sitemap routes healthy; all-30-page local browser checks and mocked form tests pass; nested blog asset 404s and comparison-card overflow repaired. Node 24 runtime upgrade and offline API checks address the October 1 hosting cutoff. No live test inquiries or guest messages.
- Ashley’s private Friday training packet remains in `/Users/adamstyer/Documents/Rancho Moonrise Ashley Training/`. Audit correction: the custom admin edits selected content; page-specific wiring must be taught accurately. Guest replies remain reviewed Gmail drafts; Ashley’s access and delivery need verification.
- Vercel CLI access works; connector team scope returned 403. Website GitHub repository public, CRM private. Older operational and review-monitor history remains in CHANGELOG.md and run-logs.

## Mark Done System — How It Works

1. Adam clicks "Mark done" on a task at `/improvement-plan.html`
2. Client POSTs to `/api/complete` with Bearer auth token (stored in localStorage, same secret as client-ops briefing)
3. Serverless function appends a RESOLVED line to `rancho-done-log.md` via GitHub Contents API, commits as `rancho-mark-done` bot
4. Client optimistically moves the task div into `#done-tasks-container` and recomputes grades
5. `rancho-apply-done` scheduled task (daily 5:33 AM local) reconciles log → HTML, physically moving any task divs that are still on the Plan tab into the Done tab container, then commits + pushes
6. Vercel redeploys on push → all devices converge on the same state

---

## Key Metrics (updated April 30, 2026 — week 3 vs. baseline)

| Metric | Value | Delta vs. Apr 9 |
|---|---|---|
| Google reviews | **130 (4.9★)** (live-verified RUN_034 via GBP dashboard; WebSearch snippet still lags at 126) | +5 |
| GBP search impressions | 6,967 (April 14 backfill) | Awaiting next dashboard export |
| GBP profile views | 15,053 (April 14 backfill) | Awaiting next dashboard export |
| GBP clicks | 554 | Flat |
| GBP directions | 513 | Flat |
| GBP calls | 44 | Flat |
| GBP weekly posts | **Yes (Publer auto)** | NEW — 12-event backlog cleared 4/21 |
| Instagram | ~13K followers | Flat |
| Facebook | 864 followers, 5 reviews | Flat |
| TikTok | 1,408 followers | Flat |
| LinkedIn | 106 followers | Flat |
| TripAdvisor | 0 reviews, NOT claimed | Flat |
| Hipcamp | Listed, 0 reviews | Flat |
| Expedia | 8.0 rating | Flat |
| Google ranking (non-brand) | **4 / 10 keywords ranking** (baselined 2026-08-18) | **+4** — first measurement; prior 0/10 carried since April |
| AI engine citations | **4 / 10 cited** (one engine — harness synthesis) | **+4** — ChatGPT/Perplexity/AI Overview still unmeasured |
| Google indexed pages (old site) | ~10 | Flat |
| **DNS cutover** | **✅ Live (4/30)** | NEW — Vercel is now production origin |
| Schema coverage (new site) | **17 / 17 pages** (+`/corporate-retreats/` = 18/18 incl. new landing) | +5 vs. Apr 9 (12/14) |
| Blog individual URLs | **18 posts** | +18 vs. Apr 9 (was 0) |
| Next metrics update | May 7, 2026 | — |
| Improvement tasks done | 3/35 (#4, #6, #10) | Flat |

---

## Property & Deal Summary

- **3 tracts** in same LLC, free and clear (\~$4.2M invested)
- Tract I (9.9 ac) — improved, all operations
- Tract II (11 ac) + III (10.7 ac) — vacant, landlocked
- **Revenue:** 2025 = $350K, 2026 target $500–650K, **Q1 2026 = $61K (on pace)**. Ashley's "safe" mental model is $1M/year.
- Private events 46%, rooms 31%, POS/bar 22%
- **Target event profile:** private party 100+ people, open bar, overnight stays (most profitable configuration per Ashley 2026-04-23)
- **Alcohol:** mandatory through venue (open bar per-person per-hour) as of 2026. Never BYOB. Ordering is a full-time operation (25 distributors).
- **Buyout:** Paul & Donna sent a step-away email 2026-04-23; Ben & Robert countered demanding books/financials; Donna silent but acting unilaterally. Blocked on Exhibit A. Ashley floated a lowball option so remaining members own outright.
- **Christopher:** potential incoming partner, Adam running point. Per Ashley, business plan with realistic projections is the next move to close him.

## People

WhoRoleNancyCo-owner. Deal decision-maker. Needs the Paul/Donna-exit summary.AshleyRuns everything — GBP access, operations. Stretched thin. Target for inquiry-responder voice training.MonetStaff ($28/hr). Target co-owner of shared inquiry inbox.ArlenMaintenance ($170/day)KyliePart-time social ($18/hr)Britney JoGood fit for tours/inquiries per Ashley; has not committedBethBookkeeper (hired via Brian/Paul). **Donna loyalist — do not use as a channel for books/financials.** Even Beth thinks Donna is unreasonable.Paul & Donna (Herchman)Sent step-away email 2026-04-23. Donna still acting unilaterally.Ben & RobertCountered Paul/Donna exit with demand for books. Willing to add capital if needed.ChristopherAdam's potential equity partner. Not yet in; needs business-plan pitch.

## Key Files

- `api/complete.js` — Mark Done serverless function (Vercel, Node 20.x)
- `rancho-done-log.md` — append-only log, source of truth for done state
- `site/improvement-plan.html` — 35 task cards + Plan/Metrics/Audits/Intel/Done tabs
- `brand/2026-04-09-metrics-baseline.md` — live-verified platform data
- `tasks/seo-aeo/` — autonomous SEO/AEO agent workspace
- `site/` — Vercel site (new build, not yet live on main domain)
