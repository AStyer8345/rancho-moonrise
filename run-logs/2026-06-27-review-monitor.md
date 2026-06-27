# rancho-review-monitor — RUN_059 — 2026-06-27 06:30 CT

**Status:** ok (quiet sweep) · **New reviews:** 0 · **Drafts produced:** 0 · **Stale claims auto-resolved:** 0 · **New BLOCKER:** none

Twenty-sixth consecutive quiet sweep. No new reviews on any monitorable platform; no rating drops, no count drops, no new ≤3★. Cruise-control maintenance run under GOALS.md week-of-5/18 broad Rancho pause (review-monitor not in the Scheduled-Tasks Pause List; monitoring ≠ active work — same posture as site-daily/competitive-weekly). Done-log grep this run confirms no review-related entry since 2026-04-15 22:12 (`rancho-review-replies` RESOLVED) — both RUN_034 drafts remain unposted.

## Continuity fix — orphaned RUN_058

RUN_058 (6/26) was orphaned: its run-log `run-logs/2026-06-26-review-monitor.md` was written to disk but never committed; its `brand/review-aggregate.json` edit (57→58) sat uncommitted in the working tree; and its `site/admin/dashboard-state.json` / CONTEXT.md / CHANGELOG.md / TODO.md edits were reverted by the concurrent 6/26 `rancho-site-daily` commit (dashboard never advanced past 57; CONTEXT.md "Last Worked On" had no RUN_058 entry). RUN_059 commits the orphaned RUN_058 log by explicit path and reconciles all shared state 57→59 (a phantom 58 was never persisted to the dashboard). The last committed prior review-monitor run is RUN_057 (`f1b948a`, 6/22).

## Live verification (cheap working paths only; established BLOCKERS no-attempt)

- **TripAdvisor (DIRECT WebFetch of canonical `g56224-d33307272` — succeeded):** "No reviews for this property yet" / "Claim Your Listing" (unclaimed) / no star rating / price range **$63 – $156** ("Based on Average Rates for a Standard Room"). 0/unclaimed **unchanged**. **Price band HELD** $63–$156 — no drift vs RUN_058. Immaterial — algorithmic standard-room rate estimate, not a review signal. 43-run net drift: floor $77→$63 (−$14) / ceiling $181→$156 (−$25). Fetched canonical URL only (non-canonical `g55819-d27521234` is an unrelated Kyiv hostel).
- **Google (WebSearch snippet):** inline count **126** + rating **4.9★** surfaced this run. **OSCILLATED** back from RUN_058's 175 to the recent 126 hold value. Snippet remains **non-authoritative** (≠ live-authoritative 130). Live count 130/4.9★ carries from RUN_034 Chrome read (now **39 days old, STALE**). Oscillation history: 126/175/null/126/175/126/126/126/126/126/not-surfaced/126/126/**175**/**126**. No review-state action — snippet is not a reliable count proxy.
- **Expedia (WebSearch snippet):** targeted Hotels.com/Expedia query **CONFIRMS** "solid guest review rating of 8.0". **8.0 anchor holds** (29th consecutive inline run). No 9.0 "Wonderful" artifact this run — 5th consecutive run without it. No rating change asserted per the Re-Verify Gate (snippet reliability remains downgraded since RUN_050).
- **Facebook (WebSearch snippet):** 5 reviews / 100% recommend ("100% recommendation rate with 5 reviews") — **40th consecutive inline**.
- **The Knot (WebSearch name-free query):** Haylee L. review body still indexed verbatim ("neighboring property played extremely loud amplified music from early afternoon until after midnight"; venue cannot control it; risk not disclosed pre-booking; "would have easily ruined the entire event"). Query was name-free; reviewer name NOT surfaced → name-surfacing not asserted; no owner-response indexed. Listing count not surfaced inline this run (no contradicting signal — 8 reviews / 4.5★ carried). **121 days unreplied** (2026-02-26). Direct fetch not attempted (BLOCKER `theknot-direct-fetch`, 25th no-attempt run, 7 prior timeouts).
- **Hipcamp:** direct fetch not attempted (BLOCKER `hipcamp-direct-fetch`, 16th no-attempt-cycle run); 0 reviews presumed; voice/data violations carry STALE:2026-05-26 (not re-confirmable on-page under BLOCKER). No separate existence query this sweep — no contradicting signal; listing presumed unchanged at known URL `texas-rancho-moonrise-dw9hklej`.
- **Airbnb:** 403 BLOCKER `airbnb-listing-existence`, 58th no-attempt run. FLAG_FOR_ADAM standing.
- **Hotels.com:** timeout BLOCKER `hotels-com-direct-fetch`, not attempted (counter holds 42; cruise-control). 8.0 anchor cross-confirmed via the Expedia/Hotels.com targeted query above.

## Re-Verify Gate ledger

```
[2026-06-27 06:30] re-verify tripadvisor-reviews — still_true — live=0/unclaimed prior=0/unclaimed
[2026-06-27 06:30] re-verify tripadvisor-price-range — still_true — live=$63-$156 prior=$63-$156 (held flat, no drift)
[2026-06-27 06:30] re-verify google-snippet-count — changed — live=126 prior=175 (oscillated back to recent hold; non-authoritative, live-authoritative=130 STALE 39d; no review-state action)
[2026-06-27 06:30] re-verify expedia-rating — still_true — live=8.0(confirmed) prior=8.0 (29th inline; no 9.0 artifact, 5th consecutive run without it; no change asserted)
[2026-06-27 06:30] re-verify facebook-reviews — still_true — live=5/100% prior=5/100% (40th inline)
[2026-06-27 06:30] re-verify theknot-haylee-l-live — still_true — live=body-indexed prior=body-indexed (121d unreplied; count not surfaced, 8/4.5star carried)
[2026-06-27 06:30] re-verify google-unreplied — still_true — live=1 prior=1 (Cassie carry, done-log signal)
[2026-06-27 06:30] re-verify theknot-unreplied — still_true — live=1 prior=1 (Haylee carry, done-log signal)
```

0 claims resolved → no done-log RESOLVED line written this run. The one CHANGED claim (Google snippet count) is immaterial — a non-authoritative snippet oscillation, not a review-state change. Recorded in the aggregate; no done-log action.

## Carry-forward (unposted)

Both RUN_034 drafts still unposted — done-log shows no review-related entry since 2026-04-15 22:12 (grep-confirmed this run):
- **Cassie Butterfield** · Google 5★ · ~2026-05-16 (~42 days old) · day 40 unposted in monitor — 30s in GBP dashboard.
- **Haylee L.** · The Knot 1★ · 2026-02-26 · 121 days unreplied · day 40 unposted in monitor — 2-min one-sentence edit.

Both drafts at `brand/review-reports/2026-05-19-review-report.md`. Mark Done via briefing page after posting (`rancho-review-replies-2026-05-20`).

## State written

- `brand/review-aggregate.json` — advanced 58 → 59, all platform live-verify fields refreshed; RUN_058 folded into `note_prior_run_058` (replacing the now-stale `note_prior_run_057`, which remains preserved in git at `f1b948a`).
- `site/admin/dashboard-state.json` — reconciled 57 → 59 (phantom 58 never persisted), status held `pending` (2 carry-forward drafts + open BLOCKERs; no rating/count drop, no new ≤3★).
- Orphaned `run-logs/2026-06-26-review-monitor.md` (RUN_058) committed by explicit path for audit continuity; today's `run-logs/2026-06-27-review-monitor.md` written.
- `CONTEXT.md` Last Worked On — RUN_059 bullet prepended (notes RUN_058 reconciliation). `CHANGELOG.md` — RUN_059 entry appended. `TODO.md` — carry-forward day-count bumped to day 40 / 121d.
- Committed by explicit path; pre-existing prior-session changes (api/inquiry.js, styles.css, main.js, contact.html, weddings.html) + concurrent-writer artifacts (`* 2`/`* 3`, AGENTS*.md, TODO.md.tmp.*, duplicated images, rancho-moonrise-assets/, youtube-uploads/) intentionally NOT staged.
