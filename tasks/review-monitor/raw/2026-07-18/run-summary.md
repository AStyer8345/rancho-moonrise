# RUN_065 — 2026-07-18 06:30 CT — raw scrape cache

Quiet sweep (32nd consecutive). One material change: **tripadvisor-direct-fetch BLOCKER opened** (3rd consecutive failure).

## Live probes this run

| Probe | Method | Result |
|---|---|---|
| apex liveness | `curl -I https://ranchomoonrise.com` | HTTP/2 200 · `server: Vercel` · `x-vercel-cache: HIT` · `age: 974` (~16 min) |
| TripAdvisor `g56224-d33307272` | WebFetch (direct) | **FAILED** — "Unable to verify if domain www.tripadvisor.com is safe to fetch" (domain-safety/network block); 3rd consecutive direct-fetch failure (RUN_063 403, RUN_064 403, RUN_065 block) → **BLOCKER opened** |
| TripAdvisor (fallback) | WebSearch | Canonical listing indexed: "RANCHO MOONRISE - Prices & Campground Reviews (Manor, TX)", no count/rating in snippet → **0/unclaimed HELD** |
| Google reviews | WebSearch snippet | "4.9 (Excellent) based on **126** reviews" — oscillated 175→126 (back to common hold value); 4.9★ surfaced inline; non-authoritative (live=130 STALE 60d) |
| Expedia | WebSearch snippet | "guest review rating of **8.0** on Expedia" — inline; no 9.0 artifact (10th consecutive run without); h89565924 + ho2867109568 active |
| Facebook | WebSearch snippet | "**100% recommendation rate with 5 reviews**" — inline (46th consecutive run) |
| The Knot `manor-tx-2087722` | WebSearch (fallback) | Haylee L. loud-music review body STILL indexed verbatim in Rancho-attributed snippet; no owner-response indexed; listing count/rating not surfaced inline this run → 8/4.5★ carried |
| done-log | `grep brand/rancho-done-log.md` | file MISSING — no review RESOLVED entry exists → both carry-forward drafts remain unposted (unreplied Google=1, Knot=1) |

## No-attempt / blocked (cruise-control, per BLOCKERS.md)

- google-reviews-count (live scrape) — BLOCKER since 2026-04-17; 64th no-attempt run; live=130 STALE 60d
- airbnb-listing-existence — 403 BLOCKER; 64th no-attempt run
- hotels-com-direct-fetch — timeout BLOCKER; not attempted (counter holds 42)
- theknot-direct-fetch — timeout BLOCKER; 31st no-attempt run (7 prior timeouts)
- hipcamp-direct-fetch — BLOCKER; 22nd no-attempt-cycle run; voice/data violations carry STALE:2026-05-26

## Diff vs review-aggregate.json (RUN_064 baseline)

- **No new reviews** on any monitorable platform. No rating drops. No count drops. No new ≤3★.
- Google snippet 175 → 126 (non-authoritative oscillation; no action).
- TripAdvisor direct-fetch 403-watch 2-of-3 → **3-of-3 = BLOCKER opened**; 0/unclaimed unchanged; price band STALE carry (immaterial).
- Carry-forward drafts age: Cassie Butterfield Google 5★ day 61 in monitor (~63d old review); Haylee L. Knot 1★ 142d unreplied (20wk), day 61 in monitor.

## Verdict

Quiet sweep. Dashboard status `pending` (2 outstanding drafts + blockers; no rating/count drop, no fresh ≤3★). Committed for the BLOCKER + routine state bump.
