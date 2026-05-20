# Rancho Moonrise — Review Monitor Report

**Run:** RUN_035 · **Date:** 2026-05-20 · **Prior report on disk:** 2026-05-19 (1 day ago)

---

## TL;DR

- **Quiet platform sweep — no new reviews detected on any monitorable platform today.** TripAdvisor 0 / unclaimed, Hipcamp 0, Facebook 5/100%, Expedia 8.0, all unchanged.
- **Two URGENT items from RUN_034 still need Adam — neither posted yet.** Done-log shows no review-related action since 2026-04-15. Both drafts from yesterday carry forward as-is.
- **Live verification today is degraded — no Chrome MCP, no Apify pull, The Knot WebFetch timed out twice.** Google live count + GBP reply state cannot be re-verified today; relying on RUN_034's live-verified 130 / 4.9★ as the most recent ground truth (1 day old).
- **TripAdvisor price ceiling drifted +$1: $178 → $179.** First $179 ceiling since RUN_024 (4 weeks ago). Floor unchanged at $63 cumulative low. 23-run net drift floor $77 → $63 (-$14), ceiling $181 → $179 (-$2 — net erosion narrowed further from -$3 last run).
- **No removals detectable this run** (no fresh Apify pull this week, same as RUN_034). Recommendation from yesterday stands: run `compass/Google-Maps-Reviews-Scraper` (dataset ID `fGpERg1UsXZiGebTa`) on the Rancho GBP and save to `brand/review-reports/raw-data/`.

---

## URGENT — Carry-forward from RUN_034 (drafts ready, neither posted)

### 1. Reply to Cassie Butterfield (Google, 5★, posted ~2026-05-16, UNREPLIED as of 2026-05-19)

Done-log has no review-related action since 2026-04-15 22:12 — so per the only signal available today, this remains unposted. Direct verification (GBP dashboard / Places API / public scrape) all unavailable this run. **Treating as still_true unreplied with `last_verified=2026-05-19` (RUN_034).**

The drafted reply is in `brand/review-reports/2026-05-19-review-report.md` at the "Google · Cassie Butterfield" section — voice-clean, 4 sentences, ready to paste. 30 seconds in GBP dashboard.

### 2. Reply to Haylee L. (The Knot, 1★, posted 2026-02-26, UNREPLIED — now ~12 weeks)

WebSearch today confirms Haylee L.'s review text still surfaces in The Knot's indexed content for `rancho-moonrise-manor-tx-2087722` — the review is still live. WebFetch on the full listing page timed out twice today, so the presence/absence of an owner reply cannot be re-verified directly. **Treating as still_true unreplied with `last_verified=2026-05-19` (RUN_034 confirmed no reply visible).**

The drafted reply (with edit-flag on the "we're flagging neighboring-property activity..." sentence) is in `brand/review-reports/2026-05-19-review-report.md` at the "The Knot · Haylee L." section. Adam: still needs the 2-minute decision on whether to commit publicly to that operational change before posting.

### 3. Run a fresh Apify GBP pull this week

Same recommendation as RUN_034. `raw-data/` had no JSON cache before yesterday's run created the directory. Without a fresh JSON pull, the monitor still cannot reliably detect single-reviewer removals between runs. 5 minutes if the Apify token + dataset ID are already wired.

---

## Platform-by-platform diff table (RUN_035 vs RUN_034)

| Platform | RUN_034 (yesterday) | RUN_035 (today) | Change | Source |
|----------|---------------------|-----------------|--------|--------|
| Google reviews | 130 / 4.9★ (live via GBP dashboard) | not re-verified today; snippet says 126 / 4.9★ | Carry-forward live 130; snippet still lagging by 4 | WebSearch (snippet only) |
| Google unreplied | 1 visible (Cassie) | not re-verified; carry-forward 1 | Flat (done-log signal: no reply posted) | done-log + WebSearch |
| Google "Scott Morgan 1★" baseline | UNVERIFIED (modal scroll failed) | UNVERIFIED (no Chrome MCP this run) | Flat — 2 runs unverified | n/a |
| TripAdvisor reviews | 0, unclaimed | 0, unclaimed | Flat | web-fetch (tripadvisor.com) |
| TripAdvisor price ceiling | $63–$178 | **$63–$179** | **+$1 ceiling — first $179 since RUN_024** | web-fetch |
| TripAdvisor Travelers' Choice | not attributed | still not attributed | Flat — 12th consecutive run | web-fetch |
| Hipcamp reviews | 0, "Booked 1 time" | 0, "Booked 1 time" | Flat | web-fetch (hipcamp.com) |
| Hipcamp host + join date | "Rancho M.", March 2024 | "Rancho M.", March 2024 | Flat | web-fetch |
| Hipcamp "34-acre" + "drink at our bar" violations | both present | both still present | Flat — voice violation persists | web-fetch |
| The Knot rating + count | 4.5(8) per direct fetch | not re-verified (WebFetch timed out 2x) | Carry-forward 4.5(8) | WebSearch only |
| The Knot Haylee L. 1★ visibility | live on listing | review text still surfaces in WebSearch | Flat — still live | WebSearch |
| The Knot "20 luxury cabins…50 guests" | violation present | not re-fetched (timeout) | Carry-forward | n/a today |
| Facebook | 5 reviews, 100% recommend | 5 reviews, 100% recommend (inline) | Flat — 16th consecutive run | WebSearch |
| Expedia | 8.0 rating (inline) | 8.0 rating (inline) | Flat — 5th consecutive run inline | WebSearch |
| Hotels.com (ho2867109568) | active | active (listing surfaces #1 for direct query) | Flat | WebSearch |
| Airbnb | 403 (BLOCKER 33rd) | 403 pattern (no live attempt) | Flat — 34th consecutive | n/a |

---

## New reviews — none detected this run

No platform sweep surfaced a new review since RUN_034. Cassie Butterfield (Google) and Haylee L. (The Knot) both carry forward from yesterday's report with drafts already prepared.

---

## Removed reviews — none detectable this run

Same status as RUN_034: no fresh Apify cache on disk for reviewer-name diffing. Aggregate count can only be verified at the GBP dashboard level (130 yesterday); a single-reviewer removal masked by ≥1 addition in the same window would not be detectable.

---

## Still-pending replies carried forward

1. **Cassie Butterfield (Google)** — draft from 2026-05-19 report, unposted per done-log.
2. **Haylee L. (The Knot)** — draft from 2026-05-19 report, unposted per done-log. Adam edit-decision on "we're flagging neighboring-property activity..." sentence still open.

---

## What I checked today

**Web-fetch (live HTML):**
- `tripadvisor.com/Hotel_Review-g56224-d33307272-Reviews-Rancho_Moonrise-Manor_Texas.html` → 0 reviews, unclaimed, **$63–$179** (ceiling +$1 vs yesterday).
- `hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej` → 0 reviews, "Be the first to review," "Booked 1 time," host "Rancho M.", joined March 2024. Voice/data violations still present ("34-acre" + "drink at our bar").
- `theknot.com/marketplace/rancho-moonrise-manor-tx-2087722` → **timed out twice (60s each)**. First Knot direct-fetch failure since RUN_034 succeeded. Not yet a 3-consecutive blocker.

**WebSearch (queries):**
- `"Rancho Moonrise" Manor Texas Google reviews count rating 4.9 stars 2026` → snippet still says 126 / 4.9★ (lagging live 130 confirmed yesterday).
- `"Rancho Moonrise" Manor TX 130 Google reviews` → no surface of the 130 value; snippets continue to anchor on 126.
- `"Rancho Moonrise" "reviews" "4.9" Google Manor Texas glamping` → "4.9 rating with 126 reviews on Google" inline.
- `"Rancho Moonrise" site:theknot.com Haylee review` → Haylee L. review text still indexed and surfaces inline; no owner reply text indexed.
- `"Rancho Moonrise" "response" "Haylee" theknot reply owner` → no Rancho-Moonrise-attributed owner response indexed (search returned "The Old Rancho" hits from Carlsbad CA, not relevant).
- `"Rancho Moonrise" Expedia "8.0" OR "8.6" rating Manor Texas` → "solid guest review rating of 8.0" inline.
- `"Rancho Moonrise" Facebook "5 reviews" "100%" recommend Manor` → "100% recommendation rating with 5 reviews on Facebook" inline.
- `"Rancho Moonrise" "Cassie" team retreat Google review Manor` → no surface of Cassie's review text in WebSearch.
- `"rancho-moonrise-manor-tx-2087722" theknot rating "4.5" reviews count` → no inline count surface.

**Done-log grep (review/reply signal):**
- Most recent review-related entry remains `rancho-review-replies` RESOLVED 2026-04-15 22:12. No new review-related entries this week. Cassie + Haylee drafts are both presumed unposted.

**Blockers (for next run to act on):**
- Chrome MCP not available this run — GBP modal-scroll retry from RUN_034 carries forward.
- Apify GBP pull still not run — reviewer-removal detection still dormant.
- The Knot direct fetch: first timeout today. If it fails again the next two consecutive runs, log to `BLOCKERS.md`.

---

## Re-Verify Gate outcomes

```
[2026-05-20 15:16 UTC] re-verify google-count-rating         — partial (live stale) — live=130@4.9 (1d old, RUN_034) snippet=126 prior=130@4.9
[2026-05-20 15:16 UTC] re-verify google-unreplied            — still_true (done-log) — live=1 (Cassie, carry-forward) prior=1
[2026-05-20 15:16 UTC] re-verify tripadvisor-status          — still_true — live=0 unclaimed prior=0 unclaimed
[2026-05-20 15:16 UTC] re-verify tripadvisor-price-range     — partial — live=$63-$179 prior=$63-$178
[2026-05-20 15:16 UTC] re-verify tripadvisor-travelers-choice — still_true — live=boilerplate prior=boilerplate
[2026-05-20 15:16 UTC] re-verify hipcamp-state               — still_true — live=0 reviews / 1 booking prior=0 reviews / 1 booking
[2026-05-20 15:16 UTC] re-verify expedia-rating              — still_true (inline) — live=8.0 prior=8.0
[2026-05-20 15:16 UTC] re-verify facebook-state              — still_true (inline) — live=5/100% prior=5/100%
[2026-05-20 15:16 UTC] re-verify theknot-haylee-unreplied    — still_true (search-only) — live=review-text-surfaced no-reply-indexed prior=unreplied(RUN_034 direct fetch)
[2026-05-20 15:16 UTC] re-verify airbnb-existence            — BLOCKED — 34th consecutive failure (no live attempt)
[2026-05-20 15:16 UTC] re-verify hotels-com-direct           — BLOCKED — 34th consecutive (no live attempt)
[2026-05-20 15:16 UTC] re-verify theknot-direct-fetch        — failed (1st timeout, not blocker yet)
```

**Stale claims auto-resolved this run:** 0 (no done-log writes — nothing crossed from claimed to resolved).

---

## Next action for Adam — ranked

1. **Post Cassie Butterfield Google reply** (drafted in 2026-05-19 report). 30 seconds.
2. **Decide + post Haylee L. Knot reply** (drafted in 2026-05-19 report, edit-flag on neighboring-property sentence). 5 minutes.
3. **Run Apify GBP scrape** into `brand/review-reports/raw-data/2026-05-20-gbp-all-reviews.json` so reviewer-removal detection becomes possible. 5 minutes.
4. **30-second confirm with Ashley** — Scott Morgan 1★ baseline (referenced in SKILL.md) still applies, or was it removed at some point? Unverified 2 consecutive runs.
5. **Chrome MCP sign-in confirmation** so next run can retry GBP modal-scroll for the top-20 reviewer list.
