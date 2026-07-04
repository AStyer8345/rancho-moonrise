# rancho-review-monitor — RUN_063 — 2026-07-04 06:30 CT

**Status:** ok (quiet sweep) · **New reviews:** 0 · **Drafts produced:** 0 · **Stale claims auto-resolved:** 0 · **New watch:** tripadvisor-direct-fetch 403 (1st failure of a previously-reliable path)

Thirtieth consecutive quiet sweep. No new reviews on any monitorable platform; no rating drops, no count drops, no new ≤3★. Cruise-control maintenance run under GOALS.md week-of-5/18 broad Rancho pause (review-monitor is NOT in the Scheduled-Tasks Pause List; monitoring ≠ active work — same posture as site-daily/competitive-weekly, the cleanest cruise-control candidate of the four Rancho tasks). Done-log grep this run confirms no review-related entry since 2026-04-15 22:12 (`rancho-review-replies` RESOLVED) — both RUN_034 drafts remain unposted. Clean continuity: RUN_062 (6/30) committed its run-log + aggregate (61→62) + dashboard (61→62); working tree carried no orphaned review-monitor state into this run (only the standard non-review prior-session changes — api/inquiry.js, styles.css, main.js, contact.html, weddings.html — plus concurrent-writer artifacts, all left unstaged). Note: today's `rancho-site-daily` (33rd firing) already committed CONTEXT/CHANGELOG/TODO (`cb3046a`, then notebooklm-sync `f6b71ea` on top) before this run; those three were clean in the working tree — this run edits them fresh and commits by explicit path.

## Live verification (cheap working paths only; established BLOCKERS no-attempt)

- **TripAdvisor (DIRECT WebFetch of canonical `g56224-d33307272` — FAILED 403 this run):** the previously-reliable direct-fetch path returned **HTTP 403 Forbidden** — 1st consecutive failure (RUN_060/061/062 all succeeded). Fell back to WebSearch, which still indexes the canonical listing ("RANCHO MOONRISE - Prices & Campground Reviews (Manor, TX)" → `tripadvisor.com/Hotel_Review-g56224-d33307272-...`) with **no review count or star rating in the snippet** — consistent with 0/unclaimed. **0/unclaimed held** (still_true via search corroboration; not a review-state change). **Price band NOT re-confirmable this run** — carries `$45–$154` **STALE:2026-06-30** (last successful direct fetch, RUN_062). Logged as `tripadvisor-direct-fetch` 1st-consecutive failure; BLOCKER threshold is 3 — no blocker opened. If the 403 recurs RUN_064 + RUN_065, open a BLOCKER (WebSearch is the documented working fallback, same as Hotels.com / The Knot).
- **Google (WebSearch snippet):** count surfaced inline **126/4.9★** ("Google rating of 4.9 (Excellent) based on 126 reviews"). **HELD at 126** (2-run hold: RUN_062 also 126). Snippet remains **non-authoritative** (≠ live-authoritative 130). Live count 130/4.9★ carries from RUN_034 Chrome read (now **46 days old, STALE**). No review-state action — snippet is not a reliable count proxy.
- **Expedia (WebSearch snippet):** targeted Hotels.com/Expedia query **did NOT surface a numeric rating inline this run** ("the search results don't display a specific numerical rating"). **8.0 anchor carried** from RUN_062 — absence of the inline number is NOT asserted as a rating change (snippet reliability downgraded since RUN_050; the Re-Verify Gate rule for failed verification is carry-as-is, don't assume change). Breaks the 32-run inline-confirmed streak on the number surfacing, but no change asserted. Hotels.com listing `ho2867109568` still active in results; two Expedia entities persist (`h89565924` + Hotels.com-shared `ho2867109568`).
- **Facebook (WebSearch snippet):** 5 reviews / 100% recommend ("100% recommendation rating based on 5 reviews") — **44th consecutive inline**.
- **The Knot (WebSearch name-free query):** Haylee L. review body still indexed verbatim ("neighboring property played extremely loud amplified music from early afternoon until after midnight"; venue cannot control it; risk not disclosed pre-booking; "would easily ruin the entire event"). Query was name-free; reviewer name NOT surfaced → name-surfacing not asserted; no owner-response indexed. Listing count/rating did NOT surface inline this run — 8 reviews / 4.5★ carried from RUN_062. **128 days unreplied** (2026-02-26, ~18.3 weeks). Direct fetch not attempted (BLOCKER `theknot-direct-fetch`, 29th no-attempt run, 7 prior timeouts).
- **Hipcamp:** direct fetch not attempted (BLOCKER `hipcamp-direct-fetch`, 20th no-attempt-cycle run); 0 reviews presumed; voice/data violations carry STALE:2026-05-26. Listing presumed unchanged at known URL `texas-rancho-moonrise-dw9hklej` (surfaced in this run's Expedia-query result set, no contradicting signal).
- **Airbnb:** 403 BLOCKER `airbnb-listing-existence`, 62nd no-attempt run. FLAG_FOR_ADAM standing.
- **Hotels.com:** timeout BLOCKER `hotels-com-direct-fetch`, not attempted (counter holds 42; cruise-control). Listing `ho2867109568` still active in search results; 8.0 anchor not re-confirmed inline this run (see Expedia).

## Re-Verify Gate ledger

```
[2026-07-04 06:30] re-verify tripadvisor-reviews — still_true — live=0/unclaimed(via-search) prior=0/unclaimed (DIRECT fetch 403 this run; WebSearch corroborates listing indexed/unclaimed; 1st failure of tripadvisor-direct-fetch path)
[2026-07-04 06:30] re-verify tripadvisor-price-range — STALE:2026-06-30 — live=unverifiable(403) prior=$45-$154 (direct fetch 403; not re-confirmable; carried, flagged stale)
[2026-07-04 06:30] re-verify google-snippet-count — still_true — live=126 prior=126 (held 2 runs; non-authoritative, live-authoritative=130 STALE 46d; no review-state action)
[2026-07-04 06:30] re-verify expedia-rating — still_true — live=8.0(carried; not surfaced inline this run) prior=8.0 (absence of inline number not asserted as change per gate; reliability downgraded)
[2026-07-04 06:30] re-verify facebook-reviews — still_true — live=5/100% prior=5/100% (44th inline)
[2026-07-04 06:30] re-verify theknot-haylee-l-live — still_true — live=body-indexed prior=body-indexed (128d unreplied; count not surfaced inline, 8/4.5star carried)
[2026-07-04 06:30] re-verify google-unreplied — still_true — live=1 prior=1 (Cassie carry, done-log signal)
[2026-07-04 06:30] re-verify theknot-unreplied — still_true — live=1 prior=1 (Haylee carry, done-log signal)
```

0 claims resolved → no done-log RESOLVED line written this run. 7 still_true, 1 STALE (TripAdvisor price band — direct-fetch 403, not re-confirmable; carried). No claim materially changed: TripAdvisor 0/unclaimed corroborated via WebSearch; the price band is an algorithmic standard-room rate estimate, not a review signal, and is only stale not changed; Google snippet is a known-unreliable value (≠ live-authoritative 130); Expedia 8.0 carried per gate. Recorded in the aggregate; no done-log action.

## Carry-forward (unposted)

Both RUN_034 drafts still unposted — done-log shows no review-related entry since 2026-04-15 22:12 (grep-confirmed this run):
- **Cassie Butterfield** · Google 5★ · ~2026-05-16 (~49 days old) · day 47 unposted in monitor — 30s in GBP dashboard.
- **Haylee L.** · The Knot 1★ · 2026-02-26 · 128 days unreplied · day 47 unposted in monitor — 2-min one-sentence edit.

Both drafts at `brand/review-reports/2026-05-19-review-report.md`. Mark Done via briefing page after posting (`rancho-review-replies-2026-05-20`).

## State written

- `brand/review-aggregate.json` — advanced 62 → 63, all platform live-verify fields refreshed; RUN_062 folded into `note_prior_run_062` (replacing the now-stale `note_prior_run_061`, which remains preserved in git).
- `site/admin/dashboard-state.json` — advanced 62 → 63, status held `pending` (2 carry-forward drafts + open BLOCKERs; no rating/count drop, no new ≤3★; TripAdvisor 403 is a path failure, not a review-state change).
- Today's `run-logs/2026-07-04-review-monitor.md` written; no orphaned prior-run log to reconcile this cycle.
- `CONTEXT.md` Last Worked On — RUN_063 bullet prepended. `CHANGELOG.md` — RUN_063 entry appended. `TODO.md` — carry-forward day-count bumped to day 47 / 128d.
- Committed by explicit path; pre-existing prior-session changes (api/inquiry.js, styles.css, main.js, contact.html, weddings.html) + concurrent-writer artifacts (`* 2`/`* 3`, AGENTS*.md, TODO.md.tmp.*, duplicated images, rancho-moonrise-assets/) intentionally NOT staged.
