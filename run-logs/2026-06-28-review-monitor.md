# rancho-review-monitor — RUN_060 — 2026-06-28 06:30 CT

**Status:** ok (quiet sweep) · **New reviews:** 0 · **Drafts produced:** 0 · **Stale claims auto-resolved:** 0 · **New BLOCKER:** none

Twenty-seventh consecutive quiet sweep. No new reviews on any monitorable platform; no rating drops, no count drops, no new ≤3★. Cruise-control maintenance run under GOALS.md week-of-5/18 broad Rancho pause (review-monitor not in the Scheduled-Tasks Pause List; monitoring ≠ active work — same posture as site-daily/competitive-weekly). Done-log grep this run confirms no review-related entry since 2026-04-15 22:12 (`rancho-review-replies` RESOLVED) — both RUN_034 drafts remain unposted. Clean continuity: RUN_059 (`491021b`, 6/27) committed its run-log + aggregate (58→59) + dashboard (57→59); working tree carried no orphaned review-monitor state into this run.

## Live verification (cheap working paths only; established BLOCKERS no-attempt)

- **TripAdvisor (DIRECT WebFetch of canonical `g56224-d33307272` — succeeded):** "No reviews for this property yet" / "Claim Your Listing" (unclaimed) / no star rating / price range **$54 – $156** ("Based on Average Rates for a Standard Room"). 0/unclaimed **unchanged**. **Price band SHIFTED** $63–$156 → **$54–$156** (floor −$9, ceiling held). Immaterial — algorithmic standard-room rate estimate, not a review signal. 44-run net drift: floor $77→$54 (−$23) / ceiling $181→$156 (−$25). Fetched canonical URL only (non-canonical `g55819-d27521234` is an unrelated Kyiv hostel).
- **Google (WebSearch snippet):** inline count **126** + rating **4.9★** surfaced this run. **HELD at 126** — 2nd consecutive run at the recent hold value (RUN_059 126, RUN_060 126). Snippet remains **non-authoritative** (≠ live-authoritative 130). Live count 130/4.9★ carries from RUN_034 Chrome read (now **40 days old, STALE**). No review-state action — snippet is not a reliable count proxy.
- **Expedia (WebSearch snippet):** targeted Hotels.com/Expedia query **CONFIRMS** "solid guest review rating of 8.0". **8.0 anchor holds** (30th consecutive inline run). No 9.0 "Wonderful" artifact this run — 6th consecutive run without it. No rating change asserted per the Re-Verify Gate (snippet reliability remains downgraded since RUN_050).
- **Facebook (WebSearch snippet):** 5 reviews / 100% recommend ("100% recommend rating with 5 reviews") — **41st consecutive inline**.
- **The Knot (WebSearch name-free query):** Haylee L. review body still indexed verbatim ("neighboring property played extremely loud amplified music from early afternoon until after midnight"; venue cannot control it; risk not disclosed pre-booking; "would have easily ruined the entire event"). Query was name-free; reviewer name NOT surfaced → name-surfacing not asserted; no owner-response indexed. Listing count not surfaced inline this run (no contradicting signal — 8 reviews / 4.5★ carried). **122 days unreplied** (2026-02-26). Direct fetch not attempted (BLOCKER `theknot-direct-fetch`, 26th no-attempt run, 7 prior timeouts).
- **Hipcamp:** direct fetch not attempted (BLOCKER `hipcamp-direct-fetch`, 17th no-attempt-cycle run); 0 reviews presumed; voice/data violations carry STALE:2026-05-26 (not re-confirmable on-page under BLOCKER). No separate existence query this sweep — no contradicting signal; listing presumed unchanged at known URL `texas-rancho-moonrise-dw9hklej`.
- **Airbnb:** 403 BLOCKER `airbnb-listing-existence`, 59th no-attempt run. FLAG_FOR_ADAM standing.
- **Hotels.com:** timeout BLOCKER `hotels-com-direct-fetch`, not attempted (counter holds 42; cruise-control). 8.0 anchor cross-confirmed via the Expedia/Hotels.com targeted query above.

## Re-Verify Gate ledger

```
[2026-06-28 06:30] re-verify tripadvisor-reviews — still_true — live=0/unclaimed prior=0/unclaimed
[2026-06-28 06:30] re-verify tripadvisor-price-range — changed — live=$54-$156 prior=$63-$156 (floor -$9, ceiling held; immaterial rate estimate, not a review signal)
[2026-06-28 06:30] re-verify google-snippet-count — still_true — live=126 prior=126 (2-run hold; non-authoritative, live-authoritative=130 STALE 40d; no review-state action)
[2026-06-28 06:30] re-verify expedia-rating — still_true — live=8.0(confirmed) prior=8.0 (30th inline; no 9.0 artifact, 6th consecutive run without it; no change asserted)
[2026-06-28 06:30] re-verify facebook-reviews — still_true — live=5/100% prior=5/100% (41st inline)
[2026-06-28 06:30] re-verify theknot-haylee-l-live — still_true — live=body-indexed prior=body-indexed (122d unreplied; count not surfaced, 8/4.5star carried)
[2026-06-28 06:30] re-verify google-unreplied — still_true — live=1 prior=1 (Cassie carry, done-log signal)
[2026-06-28 06:30] re-verify theknot-unreplied — still_true — live=1 prior=1 (Haylee carry, done-log signal)
```

0 claims resolved → no done-log RESOLVED line written this run. The one CHANGED claim (TripAdvisor price band) is immaterial — an algorithmic standard-room rate estimate, not a review-state change. Recorded in the aggregate; no done-log action.

## Carry-forward (unposted)

Both RUN_034 drafts still unposted — done-log shows no review-related entry since 2026-04-15 22:12 (grep-confirmed this run):
- **Cassie Butterfield** · Google 5★ · ~2026-05-16 (~43 days old) · day 41 unposted in monitor — 30s in GBP dashboard.
- **Haylee L.** · The Knot 1★ · 2026-02-26 · 122 days unreplied · day 41 unposted in monitor — 2-min one-sentence edit.

Both drafts at `brand/review-reports/2026-05-19-review-report.md`. Mark Done via briefing page after posting (`rancho-review-replies-2026-05-20`).

## State written

- `brand/review-aggregate.json` — advanced 59 → 60, all platform live-verify fields refreshed; RUN_059 folded into `note_prior_run_059` (replacing the now-stale `note_prior_run_058`, which remains preserved in git at `491021b`).
- `site/admin/dashboard-state.json` — advanced 59 → 60, status held `pending` (2 carry-forward drafts + open BLOCKERs; no rating/count drop, no new ≤3★).
- Today's `run-logs/2026-06-28-review-monitor.md` written; no orphaned prior-run log to reconcile this cycle.
- `CONTEXT.md` Last Worked On — RUN_060 bullet prepended. `CHANGELOG.md` — RUN_060 entry appended. `TODO.md` — carry-forward day-count bumped to day 41 / 122d.
- Committed by explicit path; pre-existing prior-session changes (api/inquiry.js, styles.css, main.js, contact.html, weddings.html) + concurrent-writer artifacts (`* 2`/`* 3`, AGENTS*.md, TODO.md.tmp.*, duplicated images, rancho-moonrise-assets/) intentionally NOT staged.
