# RUN_045 raw cache — 2026-06-05

## Live fetches this run
- `curl -I https://ranchomoonrise.com` → 200, server: Vercel, x-vercel-cache: HIT, age 23128s
- `curl -I https://www.ranchomoonrise.com` → 308 → https://ranchomoonrise.com/
- `curl -I https://ranchomoonrise.com/sitemap.xml` → 200
- WebSearch "Rancho Moonrise Manor TX Google reviews rating" → inline "175 reviews on Google" (no explicit star rating); Expedia "8.0" surfaced inline; The Knot "4.5 out of 5 stars and 8 reviews"
- WebSearch "Rancho Moonrise tripadvisor reviews" → TripAdvisor listing present, no review count surfaced (0/unclaimed)
- WebSearch "Rancho Moonrise The Knot review loud amplified music neighboring property" (NAME-FREE) → Haylee L. body indexed verbatim; result did not name reviewer
- WebSearch "Rancho Moonrise Manor Facebook reviews recommend" → "100% recommendation rate based on 5 reviews on Facebook"; Hipcamp listing URL surfaced in result set

## Platform snapshot
| Platform | Value | vs RUN_044 | Method |
|---|---|---|---|
| Google (authoritative) | 130 / 4.9★ | unchanged (17d stale) | RUN_034 Chrome read |
| Google (snippet) | 175 | null → 175 (non-authoritative) | WebSearch |
| TripAdvisor | 0 / unclaimed, $63-$181 | stable 5th consec | WebSearch |
| Expedia | 8.0 | inline 15th consec | WebSearch |
| Facebook | 5 / 100% | inline 26th consec | WebSearch |
| The Knot | 8 / 4.5★ (Haylee 1★ unreplied ~99d) | no new review | WebSearch |
| Hipcamp | 0 (STALE:2026-05-26) | BLOCKER 2nd no-attempt run | — |
| Airbnb | unverifiable | BLOCKER 44th no-attempt | — |

## Carry-forward URGENT (day 18)
- Cassie Butterfield Google 5★ — draft at brand/review-reports/2026-05-19-review-report.md
- Haylee L. The Knot 1★ — draft at brand/review-reports/2026-05-19-review-report.md

No new reviews → no new drafts. 12th consecutive quiet sweep.
