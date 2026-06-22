# rancho-review-monitor — RUN_057 — 2026-06-22 11:05 CT

**Status:** ok (quiet sweep) · **New reviews:** 0 · **Drafts produced:** 0 · **Stale claims auto-resolved:** 0 · **New BLOCKER:** none

Twenty-fourth consecutive quiet sweep. No new reviews on any monitorable platform; no rating drops, no count drops, no new ≤3★. Cruise-control maintenance run under GOALS.md week-of-5/18 broad Rancho pause (review-monitor not in the Scheduled-Tasks Pause List; monitoring ≠ active work — same posture as site-daily/competitive-weekly). RUN_056 (6/21) is the prior run. No orphaned prior run-log this cycle (RUN_056's log + state both committed cleanly); CHANGELOG.md HEAD matched working tree (no concurrent-writer stale-revert this run).

## Live verification (cheap working paths only; established BLOCKERS no-attempt)

- **TripAdvisor (DIRECT WebFetch — succeeded):** "No reviews for this property yet" / "Claim Your Listing" (unclaimed) / no star rating / price range **$66 – $165** ("Based on Average Rates for a Standard Room"). 0/unclaimed **unchanged**. **Price band SHIFTED** $67–$166 → $66–$165 vs RUN_056 (floor −$1 to $66, ceiling −$1 to $165). Immaterial — algorithmic standard-room rate estimate, not a review signal; within the stable oscillation band. 42-run net drift: floor $77→$66 (−$11) / ceiling $181→$165 (−$16). Pattern holds: minor oscillation within a stable band.
  - **URL note (records correction for future runs):** the first WebFetch this run used a non-canonical URL `g55819-d27521234` which resolves to an unrelated Kyiv hostel ("Khostel na Saksahanskoho"). The canonical Rancho listing is **`g56224-d33307272`** (already stored in `tripadvisor.listing_url`; now also captured in `tripadvisor.canonical_url_note`). Fall back path: the canonical URL re-surfaces reliably via WebSearch ("RANCHO MOONRISE - Prices & Campground Reviews (Manor, TX)"). Future runs should fetch `g56224-d33307272` only.
- **Google (WebSearch snippet):** inline count + rating **held at 126 / 4.9★** this run ("Google rating of 4.9 stars based on 126 reviews"). 2-run hold (RUN_056 126, RUN_057 126). Snippet remains **non-authoritative** (126 ≠ live-authoritative 130). Live count 130/4.9★ carries from RUN_034 Chrome read (now **34 days old, STALE**). Oscillation history: 126/175/null/126/175/126/126/126/126/126/not-surfaced/126/126.
- **Expedia (WebSearch snippet):** targeted Hotels.com/Expedia query **CONFIRMS** "solid guest review rating of 8.0". **8.0 anchor holds** (27th consecutive inline run). No 9.0 "Wonderful" artifact this run — 3rd consecutive run without it. No rating change asserted per the Re-Verify Gate (snippet reliability remains downgraded since RUN_050).
- **Facebook (WebSearch snippet):** 5 reviews / 100% recommend ("100% recommend with 5 reviews") — **38th consecutive inline**.
- **The Knot (WebSearch name-free query):** Haylee L. review body still indexed verbatim ("neighboring property played extremely loud amplified music from early afternoon until after midnight"; venue cannot control it; risk not disclosed pre-booking; "would have easily ruined the entire event"). Query was name-free; reviewer name NOT surfaced → name-surfacing not asserted; no owner-response indexed; 8/4.5★ carried (count not surfaced this run, no contradicting signal). **116 days unreplied** (2026-02-26). Direct fetch not attempted (BLOCKER `theknot-direct-fetch`, 23rd no-attempt run, 7 prior timeouts).
- **Hipcamp:** direct fetch not attempted (BLOCKER `hipcamp-direct-fetch`, 14th no-attempt-cycle run); 0 reviews presumed; voice/data violations carry STALE:2026-05-26 (not re-confirmable on-page under BLOCKER). No separate existence query this sweep — no contradicting signal; listing presumed unchanged at known URL `texas-rancho-moonrise-dw9hklej`.
- **Airbnb:** 403 BLOCKER `airbnb-listing-existence`, 56th no-attempt run. FLAG_FOR_ADAM standing.
- **Hotels.com:** timeout BLOCKER `hotels-com-direct-fetch`, not attempted (counter holds 42; cruise-control). 8.0 anchor cross-confirmed via the Expedia/Hotels.com targeted query above.

## Re-Verify Gate ledger

```
[2026-06-22 11:05] re-verify tripadvisor-reviews — still_true — live=0/unclaimed prior=0/unclaimed
[2026-06-22 11:05] re-verify tripadvisor-price-range — changed — live=$66-$165 prior=$67-$166 (floor -$1 / ceiling -$1; immaterial rate-estimate oscillation, not a review signal)
[2026-06-22 11:05] re-verify google-snippet-count — still_true — live=126/4.9 prior=126 (2-run hold; non-authoritative, live-authoritative=130 STALE 34d)
[2026-06-22 11:05] re-verify expedia-rating — still_true — live=8.0(confirmed) prior=8.0 (27th inline; no 9.0 artifact, 3rd consecutive run without it; no change asserted)
[2026-06-22 11:05] re-verify facebook-reviews — still_true — live=5/100% prior=5/100% (38th inline)
[2026-06-22 11:05] re-verify theknot-haylee-l-live — still_true — live=body-indexed prior=body-indexed (116d unreplied)
[2026-06-22 11:05] re-verify google-unreplied — still_true — live=1 prior=1 (Cassie carry, done-log signal)
[2026-06-22 11:05] re-verify theknot-unreplied — still_true — live=1 prior=1 (Haylee carry, done-log signal)
```

0 claims resolved → no done-log RESOLVED line written this run. The one CHANGED claim (TripAdvisor price band) is an immaterial rate-estimate oscillation, not a review-state change — recorded in the aggregate, no done-log action.

## Carry-forward (unposted)

Both RUN_034 drafts still unposted — done-log shows no review-related entry since 2026-04-15 22:12 (grep-confirmed this run; last review entry `rancho-review-replies` RESOLVED 2026-04-15):
- **Cassie Butterfield** · Google 5★ · day 35 unposted in monitor — 30s in GBP dashboard.
- **Haylee L.** · The Knot 1★ · 2026-02-26 · 116 days unreplied · day 35 unposted in monitor — 2-min one-sentence edit.

Both drafts at `brand/review-reports/2026-05-19-review-report.md`. Mark Done via briefing page after posting (`rancho-review-replies-2026-05-20`).

## State written

- `brand/review-aggregate.json` — advanced 56 → 57, all platform live-verify fields refreshed; RUN_056 folded into `note_prior_run_056` (replacing the now-stale `note_prior_run_055`). Added `tripadvisor.canonical_url_note` documenting the bad-URL gotcha.
- `site/admin/dashboard-state.json` — advanced 56 → 57, status held `pending` (2 carry-forward drafts + open BLOCKERs; no rating/count drop, no new ≤3★).
- `CONTEXT.md` Last Worked On — RUN_057 bullet prepended. `CHANGELOG.md` — RUN_057 entry appended. `TODO.md` — carry-forward day-count bumped to day 35 / 116d.
- Committed by explicit path; pre-existing prior-session changes (api/inquiry.js, styles.css, main.js, contact.html, weddings.html) + concurrent-writer artifacts (`* 2`/`* 3`, AGENTS*.md, TODO.md.tmp.*, duplicated images, rancho-moonrise-assets/) intentionally NOT staged.
