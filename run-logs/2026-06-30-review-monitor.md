# rancho-review-monitor — RUN_062 — 2026-06-30 06:30 CT

**Status:** ok (quiet sweep) · **New reviews:** 0 · **Drafts produced:** 0 · **Stale claims auto-resolved:** 0 · **New BLOCKER:** none

Twenty-ninth consecutive quiet sweep. No new reviews on any monitorable platform; no rating drops, no count drops, no new ≤3★. Cruise-control maintenance run under GOALS.md week-of-5/18 broad Rancho pause (review-monitor not in the Scheduled-Tasks Pause List; monitoring ≠ active work — same posture as site-daily/competitive-weekly). Done-log grep this run confirms no review-related entry since 2026-04-15 22:12 (`rancho-review-replies` RESOLVED) — both RUN_034 drafts remain unposted. Clean continuity: RUN_061 (6/29) committed its run-log + aggregate (60→61) + dashboard (60→61); working tree carried no orphaned review-monitor state into this run (only the standard non-review prior-session changes — api/inquiry.js, styles.css, main.js, contact.html, weddings.html — plus concurrent-writer artifacts, all left unstaged). Note: today's `rancho-site-daily` (30th firing) already committed CONTEXT/CHANGELOG/TODO (`9dca613`) before this run; those three were clean (not in working-tree diff) — this run edits them fresh and commits by explicit path.

## Live verification (cheap working paths only; established BLOCKERS no-attempt)

- **TripAdvisor (DIRECT WebFetch of canonical `g56224-d33307272` — succeeded):** "No reviews for this property yet" / "Claim Your Listing" (unclaimed) / no star rating / price range **$45 – $154** ("Based on Average Rates for a Standard Room"). 0/unclaimed **unchanged**. **Price band SHIFTED** $51–$156 → **$45–$154** (floor −$6, ceiling −$2). Immaterial — algorithmic standard-room rate estimate, not a review signal. 46-run net drift: floor $77→$45 (−$32) / ceiling $181→$154 (−$27). No Travelers' Choice award string attached to the listing this run (page carried only generic award boilerplate — the RUN_061 artifact string did not recur). Fetched canonical URL only (non-canonical `g55819-d27521234` is an unrelated Kyiv hostel).
- **Google (WebSearch snippet):** count surfaced inline **126/4.9★** ("Google rating of 4.9 out of 5 ... based on 126 reviews"). **OSCILLATED 175 → 126** — back to the common hold value. Snippet remains **non-authoritative** (≠ live-authoritative 130). Live count 130/4.9★ carries from RUN_034 Chrome read (now **42 days old, STALE**). No review-state action — snippet is not a reliable count proxy.
- **Expedia (WebSearch snippet):** targeted Hotels.com/Expedia query **CONFIRMS** "solid guest review rating of 8.0 on Expedia". **8.0 anchor holds** (32nd consecutive inline run). No 9.0 "Wonderful" artifact this run — 8th consecutive run without it. No rating change asserted per the Re-Verify Gate (snippet reliability remains downgraded since RUN_050). Hotels.com listing `ho2867109568` still active.
- **Facebook (WebSearch snippet):** 5 reviews / 100% recommend ("100% recommendation rating from 5 reviews") — **43rd consecutive inline**.
- **The Knot (WebSearch name-free query):** Haylee L. review body still indexed verbatim ("neighboring property played extremely loud amplified music from early afternoon until after midnight"; venue cannot control it; risk not disclosed pre-booking; "would easily ruin the entire event"). Query was name-free; reviewer name NOT surfaced → name-surfacing not asserted; no owner-response indexed. Listing count/rating did NOT surface inline this run — 8 reviews / 4.5★ carried from RUN_061. **124 days unreplied** (2026-02-26, ~17.7 weeks). Direct fetch not attempted (BLOCKER `theknot-direct-fetch`, 28th no-attempt run, 7 prior timeouts).
- **Hipcamp:** direct fetch not attempted (BLOCKER `hipcamp-direct-fetch`, 19th no-attempt-cycle run); 0 reviews presumed; voice/data violations carry STALE:2026-05-26 (not re-confirmable on-page under BLOCKER). Listing presumed unchanged at known URL `texas-rancho-moonrise-dw9hklej` (surfaced in this run's Facebook-query result set, no contradicting signal).
- **Airbnb:** 403 BLOCKER `airbnb-listing-existence`, 61st no-attempt run. FLAG_FOR_ADAM standing.
- **Hotels.com:** timeout BLOCKER `hotels-com-direct-fetch`, not attempted (counter holds 42; cruise-control). 8.0 anchor cross-confirmed via the Expedia/Hotels.com targeted query above.

## Re-Verify Gate ledger

```
[2026-06-30 06:30] re-verify tripadvisor-reviews — still_true — live=0/unclaimed prior=0/unclaimed
[2026-06-30 06:30] re-verify tripadvisor-price-range — changed — live=$45-$154 prior=$51-$156 (floor -$6, ceiling -$2; immaterial rate estimate, not a review signal)
[2026-06-30 06:30] re-verify google-snippet-count — changed — live=126 prior=175 (oscillated back to common hold value; non-authoritative, live-authoritative=130 STALE 42d; no review-state action)
[2026-06-30 06:30] re-verify expedia-rating — still_true — live=8.0(confirmed) prior=8.0 (32nd inline; no 9.0 artifact, 8th consecutive run without it; no change asserted)
[2026-06-30 06:30] re-verify facebook-reviews — still_true — live=5/100% prior=5/100% (43rd inline)
[2026-06-30 06:30] re-verify theknot-haylee-l-live — still_true — live=body-indexed prior=body-indexed (124d unreplied; count not surfaced inline, 8/4.5star carried)
[2026-06-30 06:30] re-verify google-unreplied — still_true — live=1 prior=1 (Cassie carry, done-log signal)
[2026-06-30 06:30] re-verify theknot-unreplied — still_true — live=1 prior=1 (Haylee carry, done-log signal)
```

0 claims resolved → no done-log RESOLVED line written this run. The two CHANGED claims are both immaterial/non-authoritative — TripAdvisor price band is an algorithmic standard-room rate estimate (not a review-state change); Google snippet is a known-unreliable oscillating value (≠ live-authoritative 130). Recorded in the aggregate; no done-log action.

## Carry-forward (unposted)

Both RUN_034 drafts still unposted — done-log shows no review-related entry since 2026-04-15 22:12 (grep-confirmed this run):
- **Cassie Butterfield** · Google 5★ · ~2026-05-16 (~45 days old) · day 43 unposted in monitor — 30s in GBP dashboard.
- **Haylee L.** · The Knot 1★ · 2026-02-26 · 124 days unreplied · day 43 unposted in monitor — 2-min one-sentence edit.

Both drafts at `brand/review-reports/2026-05-19-review-report.md`. Mark Done via briefing page after posting (`rancho-review-replies-2026-05-20`).

## State written

- `brand/review-aggregate.json` — advanced 61 → 62, all platform live-verify fields refreshed; RUN_061 folded into `note_prior_run_061` (replacing the now-stale `note_prior_run_060`, which remains preserved in git).
- `site/admin/dashboard-state.json` — advanced 61 → 62, status held `pending` (2 carry-forward drafts + open BLOCKERs; no rating/count drop, no new ≤3★).
- Today's `run-logs/2026-06-30-review-monitor.md` written; no orphaned prior-run log to reconcile this cycle.
- `CONTEXT.md` Last Worked On — RUN_062 bullet prepended. `CHANGELOG.md` — RUN_062 entry appended. `TODO.md` — carry-forward day-count bumped to day 43 / 124d.
- Committed by explicit path; pre-existing prior-session changes (api/inquiry.js, styles.css, main.js, contact.html, weddings.html) + concurrent-writer artifacts (`* 2`/`* 3`, AGENTS*.md, TODO.md.tmp.*, duplicated images, rancho-moonrise-assets/) intentionally NOT staged.
