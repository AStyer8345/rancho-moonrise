# RUN_041 — 2026-06-01 raw scrape cache

Wall clock: 2026-06-01 ~06:30 CT (scheduled task fire).
Days since last run (RUN_040, 2026-05-26): 6.

## Live verification attempts

| Platform | Path | Result |
|---|---|---|
| Hipcamp | WebFetch direct listing URL | **FAILED** — model returned Texas guide content, not Rancho-specific listing. Failure counter 0 → 1. |
| TripAdvisor | WebFetch listing URL | OK — 0 reviews, unclaimed, **price range $63 - $181** (was $63-$180 RUN_038/039/040; back to RUN_001 baseline of $181). |
| Google | WebSearch | Snippet = **126 reviews / 4.9★** (RUN_038 baseline 126 stable 12 runs → RUN_039 175 → RUN_040 null → RUN_041 126). Returned to baseline after two-run divergence. |
| Facebook | WebSearch | "100% recommend with 5 reviews" inline — 22nd consecutive run stable. |
| Expedia | WebSearch | "solid guest review rating of 8.0" inline + Dec 2025 pool quote — 11th consecutive run inline. |
| The Knot | WebFetch (direct) | **TIMEOUT** — 7th consecutive (BLOCKER since RUN_037). |
| The Knot | WebSearch fallback | Haylee L. review body text **STILL LIVE**, reviewer name + full body surfaced in Rancho-attributed snippet (visibility continues to widen). |
| Hotels.com | not attempted | BLOCKER ongoing — 39th run no-attempt. |
| Airbnb | not attempted | 403 BLOCKER — 39th run no-attempt. |

## Key state changes vs. RUN_040

1. **TripAdvisor price ceiling**: $180 → $181 (+$1). The $180 stabilization (RUN_038/039/040) broken; drift back to RUN_001 baseline ($181). 26-run net drift: floor -$14 ($77→$63), ceiling 0 ($181→$181, full round trip).
2. **Google snippet**: returned to 126 after two-run divergence (175 → null → 126). Snippet is unreliable as authoritative count source — confirmed.
3. **Hipcamp**: scrape failed (1st failure after two consecutive successes RUN_039/040). Voice/data violations not re-verifiable today.

## Carry-forward URGENT (drafted RUN_034, still unposted)

1. **Cassie Butterfield Google 5★** (corporate retreat) — day 14 unposted in monitor (since 2026-05-19). Draft: `brand/review-reports/2026-05-19-review-report.md`.
2. **Haylee L. The Knot 1★** (2026-02-26) — now **~95 days unreplied** (RUN_040 logged 96; recalc against today gives 95 from 2026-02-26 to 2026-06-01 = 95 days). 14 days drafted unposted in monitor.

## No new reviews on any monitored platform

8th consecutive quiet sweep. No new reviews on Google (per snippet vs RUN_040 of null/175/126 ambiguity, no authoritative new count today), no new Hipcamp reviews (per RUN_040 — scrape failed today so cannot re-confirm), no new TripAdvisor (still 0), no new Expedia indication (single Dec 2025 quote surfaced — same as RUN_040), no new Facebook (5 stable).
