# RUN_047 raw cache — 2026-06-09 06:30 CT

14th consecutive quiet sweep. No new reviews on any monitored platform.

## Live paths swept (cheap working paths only; established BLOCKERS no-attempt)

### apex liveness (curl)
- `https://ranchomoonrise.com` → HTTP/2 200, `server: Vercel`, `x-vercel-cache: HIT`, `age: 173`
- `https://www.ranchomoonrise.com` → HTTP/2 308 → `https://ranchomoonrise.com/`
- `https://ranchomoonrise.com/sitemap.xml` → HTTP/2 200

### TripAdvisor — DIRECT WebFetch (its working, non-blocked path)
- "No reviews for this property yet"
- "Is this your business? Claim your listing" → unclaimed
- **Price range: "$64 - $180 (Based on Average Rates for a Standard Room)"**
- STATE CHANGE vs RUN_046: $63-$181 → $64-$180 (floor +$1, ceiling -$1). Breaks the 6-consecutive-run stability at $63-$181. Immaterial — algorithmic average-rate estimate, not a review or rating.

### Google — WebSearch snippet (count BLOCKER; live authoritative path unavailable)
- Snippet: 4.9★, 126 reviews. Same 126 as RUN_046 → snippet now stable at 126 two consecutive runs (history …→175→126→126).
- Live authoritative count remains 130/4.9★ from RUN_034 Chrome read (now 21 days old, STALE). 126 ≠ 130 → snippet remains non-authoritative.

### Expedia — WebSearch snippet
- "solid guest review rating of 8.0 on Expedia" surfaced inline — 17th consecutive run inline.
- Banned VOICE-GUIDE strings still in Hotels.com third-party listing copy ("20 luxury cabins and safari tents for up to 50 guests"). Third-party listing issue, not Rancho's site.

### Facebook — WebSearch snippet
- "100% recommendation rating based on 5 reviews" surfaced inline — 28th consecutive run inline.

### The Knot — WebSearch fallback (direct fetch BLOCKER, 13th no-attempt)
- Haylee L. review body STILL LIVE in Rancho-attributed snippet: "neighboring property played extremely loud amplified music from early afternoon until after midnight." Query was name-free; reviewer name not surfaced. No owner-response indexed in any query.
- No new review evident; listing holds 8 reviews / 4.5★ (carry from RUN_034, no contradicting signal this run).

### Hipcamp — WebSearch listing-existence (direct fetch BLOCKER, 4th no-attempt-cycle run)
- Listing still indexed at `texas-rancho-moonrise-dw9hklej`. Snippet surfaced cross-platform aggregated positive content (not Hipcamp's own review count). 0 reviews still presumed. Voice/data violations ("34-acre" / bar reference) carry STALE:2026-05-26 — not re-surfaced explicitly this run, not re-confirmable on-page under BLOCKER.

### No-attempt (established BLOCKERS — no value re-confirming)
- Google count/rating live scrape (JS-render; needs Places API key) — 46th consecutive
- Hotels.com direct fetch (timeout) — counter holds 42
- Airbnb listing existence (403) — 46th consecutive
- The Knot direct fetch (timeout) — 13th no-attempt; 7 prior timeouts
- Hipcamp direct fetch (JS-render) — 4th no-attempt-cycle run

## Carry-forward URGENT drafts (still unposted — done-log grep: no review entry since 2026-04-15 22:12)
- Cassie Butterfield Google 5★ (posted ~2026-05-16) — ~day 24 since posting, day 22 unposted in monitor. Draft: `brand/review-reports/2026-05-19-review-report.md`.
- Haylee L. The Knot 1★ (posted 2026-02-26) — 103 days unreplied, day 22 unposted in monitor. Draft: `brand/review-reports/2026-05-19-review-report.md`.

## Net
No new reviews, no rating drop, no review-count drop, no new ≤3★. One immaterial fresh-scrape state change (TripAdvisor price range). Dashboard status: pending (2 outstanding carry-forward drafts + 2 active no-attempt BLOCKERS).
