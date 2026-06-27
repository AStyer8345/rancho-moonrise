# rancho-review-monitor — RUN_058 — 2026-06-26 06:30 CT

**Status:** ok (quiet sweep) · **New reviews:** 0 · **Drafts produced:** 0 · **Stale claims auto-resolved:** 0 · **New BLOCKER:** none

Twenty-fifth consecutive quiet sweep. No new reviews on any monitorable platform; no rating drops, no count drops, no new ≤3★. Cruise-control maintenance run under GOALS.md week-of-5/18 broad Rancho pause (review-monitor not in the Scheduled-Tasks Pause List; monitoring ≠ active work — same posture as site-daily/competitive-weekly; review-monitor is the cleanest cruise-control candidate, producing no Adam-facing artifacts beyond the two carry-forward drafts already raised). RUN_057 (6/22) is the prior run. Done-log grep this run confirms no review-related entry since 2026-04-15 22:12 (`rancho-review-replies` RESOLVED) — both RUN_034 drafts remain unposted.

## Live verification (cheap working paths only; established BLOCKERS no-attempt)

- **TripAdvisor (DIRECT WebFetch of canonical `g56224-d33307272` — succeeded):** "No reviews for this property yet" / "Claim Your Listing" (unclaimed) / no star rating / price range **$63 – $156** ("Based on Average Rates for a Standard Room"). 0/unclaimed **unchanged**. **Price band SHIFTED** $66–$165 → $63–$156 vs RUN_057 (floor −$3 to $63, ceiling −$9 to $156). Immaterial — algorithmic standard-room rate estimate, not a review signal; within the stable oscillation band. 43-run net drift: floor $77→$63 (−$14) / ceiling $181→$156 (−$25). Pattern holds: minor oscillation within a stable band. Fetched canonical URL only this run (per RUN_057's URL-gotcha note — non-canonical `g55819-d27521234` is an unrelated Kyiv hostel).
- **Google (WebSearch snippet):** inline count surfaced **175** this run (rating not surfaced). **CHANGED** from the RUN_056/057 2-run hold at 126 — snippet jumped 126 → 175. 175 is a prior oscillation value, not a new high. Snippet remains **non-authoritative** (≠ live-authoritative 130). Live count 130/4.9★ carries from RUN_034 Chrome read (now **38 days old, STALE**). Oscillation history: 126/175/null/126/175/126/126/126/126/126/not-surfaced/126/126/**175**. No review-state action — snippet is not a reliable count proxy; aggregate records the oscillation, dashboard unaffected.
- **Expedia (WebSearch snippet):** targeted Hotels.com/Expedia query **CONFIRMS** "solid guest review rating of 8.0". **8.0 anchor holds** (28th consecutive inline run). No 9.0 "Wonderful" artifact this run — 4th consecutive run without it. No rating change asserted per the Re-Verify Gate (snippet reliability remains downgraded since RUN_050).
- **Facebook (WebSearch snippet):** 5 reviews / 100% recommend ("100% recommend with 5 reviews") — **39th consecutive inline**.
- **The Knot (WebSearch name-free query):** Haylee L. review body still indexed verbatim ("neighboring property played extremely loud amplified music from early afternoon until after midnight"; venue cannot control it; risk not disclosed pre-booking; "would have easily ruined the entire event"). Query was name-free; reviewer name NOT surfaced → name-surfacing not asserted; no owner-response indexed. Listing **8 reviews / 4.5★** surfaced inline this run ("4.5 out of 5 stars with 8 reviews"). **120 days unreplied** (2026-02-26). Direct fetch not attempted (BLOCKER `theknot-direct-fetch`, 24th no-attempt run, 7 prior timeouts).
- **Hipcamp:** direct fetch not attempted (BLOCKER `hipcamp-direct-fetch`, 15th no-attempt-cycle run); 0 reviews presumed; voice/data violations carry STALE:2026-05-26 (not re-confirmable on-page under BLOCKER). No separate existence query this sweep — no contradicting signal; listing presumed unchanged at known URL `texas-rancho-moonrise-dw9hklej`.
- **Airbnb:** 403 BLOCKER `airbnb-listing-existence`, 57th no-attempt run. FLAG_FOR_ADAM standing.
- **Hotels.com:** timeout BLOCKER `hotels-com-direct-fetch`, not attempted (counter holds 42; cruise-control). 8.0 anchor cross-confirmed via the Expedia/Hotels.com targeted query above.

## Re-Verify Gate ledger

```
[2026-06-26 06:30] re-verify tripadvisor-reviews — still_true — live=0/unclaimed prior=0/unclaimed
[2026-06-26 06:30] re-verify tripadvisor-price-range — changed — live=$63-$156 prior=$66-$165 (floor -$3 / ceiling -$9; immaterial rate-estimate oscillation, not a review signal)
[2026-06-26 06:30] re-verify google-snippet-count — changed — live=175 prior=126 (snippet jumped 126->175, breaks 2-run hold; non-authoritative, live-authoritative=130 STALE 38d; no review-state action)
[2026-06-26 06:30] re-verify expedia-rating — still_true — live=8.0(confirmed) prior=8.0 (28th inline; no 9.0 artifact, 4th consecutive run without it; no change asserted)
[2026-06-26 06:30] re-verify facebook-reviews — still_true — live=5/100% prior=5/100% (39th inline)
[2026-06-26 06:30] re-verify theknot-haylee-l-live — still_true — live=body-indexed prior=body-indexed (120d unreplied; 8/4.5star surfaced inline)
[2026-06-26 06:30] re-verify google-unreplied — still_true — live=1 prior=1 (Cassie carry, done-log signal)
[2026-06-26 06:30] re-verify theknot-unreplied — still_true — live=1 prior=1 (Haylee carry, done-log signal)
```

0 claims resolved → no done-log RESOLVED line written this run. The two CHANGED claims (TripAdvisor price band, Google snippet count) are both immaterial — a rate-estimate oscillation and a non-authoritative snippet oscillation, neither a review-state change. Recorded in the aggregate; no done-log action.

## Carry-forward (unposted)

Both RUN_034 drafts still unposted — done-log shows no review-related entry since 2026-04-15 22:12 (grep-confirmed this run):
- **Cassie Butterfield** · Google 5★ · ~2026-05-16 (~41 days old) · day 39 unposted in monitor — 30s in GBP dashboard.
- **Haylee L.** · The Knot 1★ · 2026-02-26 · 120 days unreplied · day 39 unposted in monitor — 2-min one-sentence edit.

Both drafts at `brand/review-reports/2026-05-19-review-report.md`. Mark Done via briefing page after posting (`rancho-review-replies-2026-05-20`).

## State written

- `brand/review-aggregate.json` — advanced 57 → 58, all platform live-verify fields refreshed; RUN_057 folded into `note_prior_run_057` (replacing the now-stale `note_prior_run_056`).
- `site/admin/dashboard-state.json` — advanced 57 → 58, status held `pending` (2 carry-forward drafts + open BLOCKERs; no rating/count drop, no new ≤3★).
- `CONTEXT.md` Last Worked On — RUN_058 bullet prepended. `CHANGELOG.md` — RUN_058 entry prepended above the 6/26 site-daily entry. `TODO.md` — carry-forward day-count bumped to day 39 / 120d.
- Committed by explicit path; pre-existing prior-session changes (api/inquiry.js, styles.css, main.js, contact.html, weddings.html) + concurrent-writer artifacts (`* 2`/`* 3`, AGENTS*.md, TODO.md.tmp.*, duplicated images, rancho-moonrise-assets/) intentionally NOT staged.
