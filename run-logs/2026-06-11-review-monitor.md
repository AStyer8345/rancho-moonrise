# rancho-review-monitor — RUN_049 — 2026-06-11 06:40 CT

**Status:** ok (quiet sweep) · **New reviews:** 0 · **Drafts produced:** 0 · **Stale claims auto-resolved:** 0 · **New BLOCKER:** none

Sixteenth consecutive quiet sweep. No new reviews on any monitorable platform; no rating drops, no count drops, no new ≤3★. Cruise-control maintenance run under GOALS.md week-of-5/18 broad Rancho pause (review-monitor not in the Scheduled-Tasks Pause List; monitoring ≠ active work — same posture as competitive-weekly).

## Live verification (cheap working paths only; established BLOCKERS no-attempt)

- **apex/www/sitemap (curl):** apex 200 + `server: Vercel` + `x-vercel-cache: HIT` (age 468s ≈ 7.8 min); www 308 → apex (`location: https://ranchomoonrise.com/`); sitemap 200.
- **TripAdvisor (DIRECT WebFetch — succeeded):** "No reviews for this property yet" / "Claim Your Listing" (unclaimed) / price range **$64–$180** ("Based on Average Rates for a Standard Room") — **identical to RUN_047 + RUN_048**, now **held a 3rd consecutive run**. 0/unclaimed unchanged. Immaterial (algorithmic average-rate estimate, not a review).
- **Google (WebSearch snippet):** **175** this run — snippet **flipped from 126** (which was stable RUN_046–048). Oscillation history now 126→175→null→126→175; snippet remains **non-authoritative** (175 ≠ live 130, 175 ≠ prior 126). No rating surfaced this run. Live count 130/4.9★ carries from RUN_034 Chrome read (now **23 days old, STALE**). stable-run counter reset 3→1.
- **Expedia (WebSearch snippet):** 8.0 inline ("solid guest review rating of 8.0 on Expedia") — **19th consecutive inline**.
- **Facebook (WebSearch snippet):** 5 / 100% recommend ("100% recommend rating based on 5 reviews") — **30th consecutive inline**.
- **The Knot (WebSearch name-free query):** Haylee L. review body still indexed verbatim ("neighboring property played extremely loud amplified music from early afternoon until after midnight"). Query was name-free; reviewer name NOT surfaced → name-surfacing not asserted; no owner-response indexed; 8/4.5★ carried (count not surfaced this run, no contradicting signal). **105 days unreplied** (2026-02-26). Direct fetch not attempted (BLOCKER `theknot-direct-fetch`, 15th no-attempt run, 7 prior timeouts).
- **Hipcamp (WebSearch existence):** listing still indexed in results at known URL `texas-rancho-moonrise-dw9hklej`. Direct fetch not attempted (BLOCKER `hipcamp-direct-fetch`, 6th no-attempt-cycle run); 0 reviews presumed; voice/data violations carry STALE:2026-05-26.
- **Airbnb:** 403 BLOCKER `airbnb-listing-existence`, 48th no-attempt run. FLAG_FOR_ADAM standing.
- **Hotels.com:** timeout BLOCKER `hotels-com-direct-fetch`, not attempted (counter holds 42; cruise-control).

## Re-Verify Gate ledger

```
[2026-06-11 06:40] re-verify tripadvisor-reviews — still_true — live=0/unclaimed prior=0/unclaimed
[2026-06-11 06:40] re-verify tripadvisor-price-range — still_true — live=$64-$180 prior=$64-$180 (3rd consecutive)
[2026-06-11 06:40] re-verify google-snippet-count — still_true(non-authoritative) — live=175 prior=126 (oscillation, live-authoritative=130 STALE)
[2026-06-11 06:40] re-verify expedia-rating — still_true — live=8.0 prior=8.0 (19th inline)
[2026-06-11 06:40] re-verify facebook-reviews — still_true — live=5/100% prior=5/100% (30th inline)
[2026-06-11 06:40] re-verify theknot-haylee-l-live — still_true — live=body-indexed prior=body-indexed (105d unreplied)
[2026-06-11 06:40] re-verify google-unreplied — still_true — live=1 prior=1 (Cassie carry, done-log signal)
[2026-06-11 06:40] re-verify theknot-unreplied — still_true — live=1 prior=1 (Haylee carry, done-log signal)
```

0 claims resolved → no done-log RESOLVED line written this run.

## Carry-forward (unposted)

Both RUN_034 drafts still presumed unposted — done-log grep returns no review-related entry since 2026-04-15 22:12:
- **Cassie Butterfield** · Google 5★ · ~day 26 since posting · day 24 unposted in monitor — 30s in GBP dashboard.
- **Haylee L.** · The Knot 1★ · 2026-02-26 · 105 days unreplied · day 24 unposted in monitor — 2-min one-sentence edit.

Both drafts at `brand/review-reports/2026-05-19-review-report.md`. Mark Done via briefing page after posting.

## Dashboard status: `pending`

No rating drop / count drop / new ≤3★, but 2 outstanding carry-forward drafts + The Knot BLOCKER (15-run no-attempt) + Hipcamp BLOCKER (6th no-attempt-cycle run) keep status at `pending`.

## Incident discipline

All file ops this run used explicit paths inside `rancho-moonrise/` — no `git add -A`, no chained `rm`. Pre-existing prior-session changes (api/inquiry.js, styles.css, main.js, contact.html, weddings.html) and concurrent-writer artifacts (`* 2`/`* 3` files, `AGENTS*.md`, `TODO.md.tmp.*`, duplicated images) intentionally NOT staged.
