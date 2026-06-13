# rancho-review-monitor — RUN_050 — 2026-06-13 06:30 CT

**Status:** ok (quiet sweep) · **New reviews:** 0 · **Drafts produced:** 0 · **Stale claims auto-resolved:** 0 · **New BLOCKER:** none

Seventeenth consecutive quiet sweep. No new reviews on any monitorable platform; no rating drops, no count drops, no new ≤3★. Cruise-control maintenance run under GOALS.md week-of-5/18 broad Rancho pause (review-monitor not in the Scheduled-Tasks Pause List; monitoring ≠ active work — same posture as competitive-weekly). No 6/12 review-monitor firing; RUN_049 (6/11) is the prior run.

## Live verification (cheap working paths only; established BLOCKERS no-attempt)

- **apex/www/sitemap (curl):** apex 200 + `server: Vercel` + `x-vercel-cache: HIT` (`age: 1520` ≈ 25 min); www 308 → apex (`location: https://ranchomoonrise.com/`); sitemap 200.
- **TripAdvisor (DIRECT WebFetch — succeeded):** "No reviews for this property yet" / "Claim Your Listing" (unclaimed) / price range **$64–$179** ("Based on Average Rates for a Standard Room"). 0/unclaimed unchanged. **Ceiling ticked $180 → $179** after a 3-run hold at $64–$180 (RUN_047–049) — immaterial (algorithmic average-rate estimate, not a review); minor oscillation within the stable band.
- **Google (WebSearch snippet):** **126** this run + rating **4.9★** surfaced — snippet **flipped back from 175** (RUN_049). Oscillation history now 126→175→null→126→175→**126**; snippet remains **non-authoritative**. Live count 130/4.9★ carries from RUN_034 Chrome read (now **25 days old, STALE**).
- **Expedia (WebSearch snippet):** **DIVERGENT this run** — a single sweep surfaced THREE conflicting values: "solid guest review rating of **8.0**", one page "review score of **9.0** labeled 'Wonderful'", and another listing "**8.6** out of 10, rated 'Excellent'". Two distinct Expedia entities appear in results (`h89565924` + Hotels.com-shared `ho2867109568`). **8.0 anchor holds** (surfaced in both queries, consistent with the 19-run inline history); the 9.0/8.6 readings are treated as snippet/listing-variant artifacts, NOT a confirmed rating change. **First run multiple conflicting Expedia values appeared in the same sweep — snippet reliability downgraded** (same treatment as the Google snippet). No rating change asserted per the Re-Verify Gate.
- **Facebook (WebSearch snippet):** 5 / 100% recommend ("100% recommend rating based on 5 reviews") — **31st consecutive inline**.
- **The Knot (WebSearch name-free query):** Haylee L. review body still indexed verbatim ("neighboring property played extremely loud amplified music from early afternoon until after midnight"). Query was name-free; reviewer name NOT surfaced → name-surfacing not asserted; no owner-response indexed; 8/4.5★ carried (count not surfaced this run, no contradicting signal). **107 days unreplied** (2026-02-26). Direct fetch not attempted (BLOCKER `theknot-direct-fetch`, 16th no-attempt run, 7 prior timeouts).
- **Hipcamp (WebSearch existence):** listing still indexed at known URL `texas-rancho-moonrise-dw9hklej`. Direct fetch not attempted (BLOCKER `hipcamp-direct-fetch`, 7th no-attempt-cycle run); 0 reviews presumed; voice/data violations ("34-acre" vs VOICE-GUIDE 36; "a bar" reference) re-surfaced in snippet, carry STALE:2026-05-26.
- **Airbnb:** 403 BLOCKER `airbnb-listing-existence`, 49th no-attempt run. FLAG_FOR_ADAM standing.
- **Hotels.com:** timeout BLOCKER `hotels-com-direct-fetch`, not attempted (counter holds 42; cruise-control).

## Re-Verify Gate ledger

```
[2026-06-13 06:30] re-verify tripadvisor-reviews — still_true — live=0/unclaimed prior=0/unclaimed
[2026-06-13 06:30] re-verify tripadvisor-price-range — still_true — live=$64-$179 prior=$64-$180 (ceiling -$1, immaterial)
[2026-06-13 06:30] re-verify google-snippet-count — still_true(non-authoritative) — live=126 prior=175 (oscillation back to 126; live-authoritative=130 STALE 25d)
[2026-06-13 06:30] re-verify expedia-rating — still_true(divergent) — live=8.0/9.0/8.6 prior=8.0 (multiple conflicting values same sweep; 8.0 anchor holds, no change asserted)
[2026-06-13 06:30] re-verify facebook-reviews — still_true — live=5/100% prior=5/100% (31st inline)
[2026-06-13 06:30] re-verify theknot-haylee-l-live — still_true — live=body-indexed prior=body-indexed (107d unreplied)
[2026-06-13 06:30] re-verify google-unreplied — still_true — live=1 prior=1 (Cassie carry, done-log signal)
[2026-06-13 06:30] re-verify theknot-unreplied — still_true — live=1 prior=1 (Haylee carry, done-log signal)
```

0 claims resolved → no done-log RESOLVED line written this run.

## Carry-forward (unposted)

Both RUN_034 drafts still presumed unposted — done-log grep returns no review-related entry since 2026-04-15 22:12:
- **Cassie Butterfield** · Google 5★ · ~day 28 since posting · day 26 unposted in monitor — 30s in GBP dashboard.
- **Haylee L.** · The Knot 1★ · 2026-02-26 · 107 days unreplied · day 26 unposted in monitor — 2-min one-sentence edit.

Both drafts at `brand/review-reports/2026-05-19-review-report.md`. Mark Done via briefing page after posting (`rancho-review-replies-2026-05-20`).

## Dashboard status: `pending`

No rating drop / count drop / new ≤3★, but 2 outstanding carry-forward drafts + The Knot BLOCKER (16-run no-attempt) + Hipcamp BLOCKER (7th no-attempt-cycle run) keep status at `pending`.

## Incident discipline

All file ops this run used explicit paths inside `rancho-moonrise/` — no `git add -A`, no chained `rm`. Pre-existing prior-session changes (api/inquiry.js, styles.css, main.js, contact.html, weddings.html) and concurrent-writer artifacts (`* 2`/`* 3` files, `AGENTS*.md`, `TODO.md.tmp.*`, `rancho-moonrise-assets/`, duplicated images) intentionally NOT staged.
