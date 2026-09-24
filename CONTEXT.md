# Rancho Moonrise — Project Context

**Last updated:** 2026-09-24 (rancho-biweekly-audit — **Bi-weekly business audit #3 shipped: `site/audits/2026-09-24-business-audit.html`.** Grades: Website A, GBP B-, Social B-, Reviews D, Booking B+, HoneyBook B, Operations B. Build side keeps improving (Lighthouse 99, 4/10 non-brand keywords, ResortPass 57 @ 9.4/10, CRM live). Owner push stalled: 2 drafted replies unposted 122+ days, Knot 1★ unreplied 204+ days, TripAdvisor unclaimed, Airbnb 3★ reviews unread, Apple Maps hours wrong, GA4 ID blank. Worked from a worktree off `origin/main`; the main checkout is still mid-rebase and untouched.)

**Latest audit:** `site/audits/2026-09-24-business-audit.html` (2026-09-24) — Website A · GBP B- · Social B- · Reviews D · Booking B+ · HoneyBook B · Operations B. Baseline: `site/audits/2026-04-09-business-audit.html`.

**Prior entry:** 2026-09-24 (rancho-site-daily — **No on-page defect found, none invented.** Re-Verify Gate 5/5 still_true: `/safari-tents-near-austin/` still absent from `site:` (owner GSC action), sitemap 31/31 200, dead `/videos/` card `_klefu2vTwM` (~day 63), `/host-your-event/` "1,000+ guests" still live, main checkout still mid-rebase (worked from a worktree off `origin/main`). First-ever image-dimension (CLS) and live canonical/robots sweeps: both clean. Closed 5 stale TODO items after live checks. Full detail: `run-logs/2026-09-24-seo.md`.)

**Prior entry (2):** 2026-09-21 (rancho-site-daily — **Shipped one small consistency fix: `/website-credits/` (new page from another writer, 9/19–20) was the only one of 31 sitemap pages with no `BreadcrumbList` — added, matching the `Home > Page` pattern every sibling page uses.** Consistency, not a ranking lever, and deliberately no `speakable` (a credits page isn't voice-answer content). Found by a live per-page JSON-LD type matrix: 30/31 already had breadcrumb + WebPage-family + speakable. **Re-Verify Gate 5 claims:** brand canary passed; safari-tents still absent from the same 9-owned-URL `site:` result (~147 days, owner GSC action, on-site diagnosis stays closed) — *still_true*; sitemap 31/31 200 — *still_true*; TODO "Schema gaps" #1–#3 (videos / accessibility / policies) — *resolved* (all carry breadcrumb + WebPage + speakable live; s4 was already RESOLVED 8/16, section was stale); "RUN_078 isn't on `origin/main`" — *resolved* (landed as `1ffb25a`). Main checkout still mid-rebase (*still_true*, untouched; worked in worktree `../rancho-moonrise-daily-20260921`). Rejected a lever: sitemap `lastmod` looked stale on 30/31 pages by git date, but the 9/19–20 footer-link commit touched every page, so git dates are polluted — bumping all `lastmod`s would fake freshness; left alone. Full detail: `run-logs/2026-09-21-seo.md`.)

*(Older entries back to 2026-09-10 (rancho-site-daily / rancho-competitive-weekly) trimmed from this rotating header to keep it bounded — full text is append-only in `CHANGELOG.md`.)*

---

## What This Is

Advisory engagement for Rancho Moonrise — glamping, events, and retreat ranch on 36 acres, 20 minutes from downtown Austin (street address 20117 Lockwood Rd, 78653 — operational only; never use "Manor" as a location descriptor in copy). Adam runs deal structuring (buyout + new partner) and builds digital/operational systems. Ashley runs day-to-day operations.

**Brand facts (authoritative):** See `VOICE-GUIDE.md` → "Property Facts" section. Never use "luxury", "Hill Country", "Manor", "General Store", or cite a specific unit count. The Neon Moon Barn Lounge is event-only, not a walk-in bar.

**Repo:** `AStyer8345/rancho-moonrise`, branch `main`, deploys to Vercel **Live site:** [ranchomoonrise.com](http://ranchomoonrise.com) (BofillTech hosting — OLD, not editable by Claude) **New site:** rancho-moonrise.vercel.app (Vercel — all dev work happens here) **Improvement plan dashboard:** <https://rancho-moonrise.vercel.app/improvement-plan.html>

---

## Active Blockers

- **Main checkout stuck mid-rebase since 2026-09-18 (found 2026-09-20 by `rancho-site-daily`).** `/Users/adamstyer/Documents/rancho-moonrise` is a detached HEAD in an interrupted `git rebase` (finalization never ran). Real `main` = `ab1b210`: 8 commits **unpushed** (7 notebooklm-sync + `ab1b210` = review-monitor RUN_078, **whose content already landed on `origin/main` as `1ffb25a`** — re-verified 2026-09-21; only the 7 benign sync commits are actually stranded) and 10+ behind `origin/main`. Every task that commits from that checkout (notebooklm-sync every ~4h, review-monitor) is now blocked from pushing. **The 5-file NEEDS OWNER set (api/inquiry.js, styles.css, main.js, contact.html, weddings.html) is in `stash@{0}`, byte-identical to the 8/31 baseline** — apply it deliberately; don't pop blindly (stash stack is shared). Needs Adam or a dedicated session: finish or abort the rebase, then push the 8 commits. Until then, work from a fresh worktree off `origin/main`.
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

- 2026-09-21 — rancho-competitive-weekly: brand-query answer carries the banned Knot copy again (2-read clean streak broken, uncontaminated read); The Knot confirmed 5th read (direct fetch now 403); WeddingWire hypothesis not reproduced (0/3, downgraded to unconfirmed); new lead Yodel; ResortPass moved to 10-pt display (Rancho 9.4/57, Lucky Arrow 9.2/217, prices unchanged); Lucky Arrow buyout "from $19,500/night" recorded. 10-keyword baseline 3/10 (was 4/10). **Main checkout is a detached HEAD diverged from origin/main and holds an unpushed `Weekly metrics update — 2026-09-20` commit (`157efd1`) — do not reset it.** Full detail: `run-logs/2026-09-21-competitive.md`.
- 2026-09-20 — review-monitor RUN_079: **Airbnb is a real, unmonitored review surface — two Rancho-hosted listings, 10 reviews, reply coverage never checked.** Direct fetch of `/rooms/1284193976615696223` (safari tent) reads 3.67★ / 3 reviews (1×5★, 2×3★); `/rooms/1277623094650338119` (tiny home cabin) reads 4.71★ / 7; host total 15 @ 4.47 (5 reviews on an unlocated listing). Ends the 72-run "403 / NEEDS_ADAM_VERIFY" blocker (April-era WebFetch 403 no longer occurs). Review text unreadable by fetch, so no draft (deliberate). Also 2nd consecutive Facebook 6/86% confirmation. RUN_078 (stranded in the broken main-checkout rebase) landed via cherry-pick. Full detail `tasks/review-monitor/session-log.md`, `run-logs/2026-09-20-review-monitor.md`.
- 2026-09-21 — rancho-site-daily: added `BreadcrumbList` to `/website-credits/` (the one page of 31 without it); Gate 5 claims (2 resolved: TODO schema-gaps #1–#3 and the RUN_078-not-on-origin sub-claim). Main checkout still mid-rebase, untouched. Full detail `run-logs/2026-09-21-seo.md`.
- 2026-09-20 — rancho-site-daily: added OG/Twitter tags to `/blog/` + `/policies/` (`2f30443`, live, deployment READY); Gate 4/4 (1 partial: 5-file set moved to `stash@{0}`); found main checkout mid-rebase (see Active Blockers). Worked in worktree `../rancho-moonrise-daily-20260920`. Full detail `run-logs/2026-09-20-seo.md`.
- 2026-09-20 — Added `/website-credits/` with an accurate Adam Styer website-contributor bio and a visible link to `https://styermortgage.com/`. Footer-only discovery; main navigation, booking, inquiry forms, guest content and Ashley bylines unchanged. Added canonical, matching Person/WebPage data and sitemap entry.
- Worked from current remote main in an isolated clone. All 30 affected existing public pages matched production byte-for-byte before editing. Site validation and offline runtime checks pass; browser and release verification recorded with this change.
- Ashley’s private Friday training packet remains in `/Users/adamstyer/Documents/Rancho Moonrise Ashley Training/`. Admin routing plan remains a separate workstream; guest replies remain reviewed Gmail drafts and Ashley’s access/delivery need verification.
- Vercel CLI access works; website GitHub repository is public and CRM private. Prior audit evidence: `docs/website-audit-2026-09-16.md`. Earlier operational and review-monitor history remains in CHANGELOG.md and run-logs.

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
