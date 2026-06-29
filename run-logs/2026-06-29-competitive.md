# rancho-competitive-weekly — 2026-06-29

**Cadence:** weekly. Prior run 2026-06-15 (June 22 run did not fire — two-week gap).
**GOALS.md:** week of 5/18, Rancho paused / cruise control. Competitive monitoring is read-only — continues.
**Method:** 4 parallel research agents (live SERP + competitor fetches). US logged-out non-geo proxy; ranks directional, presence/absence reliable.

## Re-Verify Gate — prior claims (from June 15) checked live

| # | Claim | Result | live vs prior |
|---|---|---|---|
| 1 | Rancho ResortPass dormant | still_true | 0 products, pool 10–6, 20117 Lockwood — unchanged |
| 2 | Lucky Arrow ResortPass dormant | still_true | 0 products, pool 12–10 + Fri–Sun bar 2–6 — unchanged |
| 3 | Hipcamp curated set (LA #9, Rancho absent) | still_true | set did NOT rotate again; Urban Hideout #1 / Cozy Cactus #2 / LA #9 held; Rancho absent 6th read |
| 4 | Camp Lucy corporate page live | still_true (page) / SERP changed | 282 ac, 50k sqft, six venues; re-entered corporate SERP #9 |
| 5 | Walden 15 tents, copy clean | still_true | unchanged |
| 6 | Safari for the Soul count ambiguous | still_true / SERP up | 6 units / 2 loc; jumped to #1 on safari-tent SERP (was ~#5) |
| 7 | Spoon Mountain romantic page; 3 tents $245 | **CHANGED** | old URL 404s → new `/travel-to-wimberley/...`; price ~$245 → "starting $300–500" |
| 8 | Yurtopian corporate page; re-entered SERP ~#3 | still_true (page) / SERP changed | DROPPED BACK OFF corporate SERP — 6/15 re-entry reverted |
| 9 | Hotels.com banned "20 cabins / 50 guests" copy | UNVERIFIED-ON-PAGE | fetch blocked (2×60s timeout; Expedia 429); banned copy verbatim in live snippet — 7th wk |
| 10 | Rancho not ranking non-brand; 2 landing pages not surfacing | still_true | 0/4 non-brand; neither URL surfaces; ~59d / ~64d; rest of site indexed (homepage #1, blog/events/videos) |
| 11 | Brand SERP ~#7 below aggregators (UNVERIFIED watch) | **RESOLVED** | ranchomoonrise.com is #1 on brand term, above all aggregators — logged-out artifact, dismissed |

**Summary:** 7 still_true, 3 routine SERP-position changes (Camp Lucy #9 re-enter, SFTS to #1, Yurtopian off), 1 genuine competitor change (Spoon Mountain URL move + price up), 1 UNVERIFIED-on-page (Hotels.com), **1 auto-resolved** (brand-SERP watch item).

**Auto-resolutions → done-log:**
- brand-serp-7 watch item — RESOLVED (owned site #1 live; 6/15 ~#7 was logged-out artifact)
- spoon-romantic-url — RESOLVED (old `/romantic-weekend-getaways-near-austin/` 404; content relocated to `/travel-to-wimberley/...`)

## New findings
1. **6/15 aggregator surge reversed** — one-week artifact. Property domains reclaimed top: Udoscape #1 glamping, SFTS #1 safari-tent, Spoon Mountain #1 romantic. Hipcamp/Glamping Hub below property sites on core glamping term. NOT carried forward as trend.
2. **"Publish your own listicle" lever** — Spoon Mountain (#1 romantic, own 2026 Guide), Cameron Ranch (#3 weekend getaway, own roundup), Udoscape rank via own-domain guide pages. Highest-value content gap for Rancho's paused blog cluster.
3. **Spoon Mountain price up + page relocated** (see gate #7).
4. **Corporate cluster churn** — Sage Hill #1; Crystal Creek #2 + Lucky Arrow #7 re-entered; Camp Lucy #9; Yurtopian off.
5. **Brand SERP healthy** — owned site #1.

## Stable / no change
- Glamping Hub absence ~11 weeks; Hipcamp curation gap 6th read; Hotels.com banned copy 7th wk; ResortPass both dormant.

## Day counts (June 29)
- ResortPass decision drift: 42 days since 5/18 surface.
- `/corporate-retreats/` ~59 days since launch; `/safari-tents-near-austin/` ~64 days. (+14d each vs 6/15.)

## Outputs
- Intel card dual-written byte-identical to both improvement-plan.html files (verified via diff).
- `site/competitive-intelligence.md` rewritten for June 29.
- done-log: 2 RESOLVED entries.
- No subject-property edits (Rancho paused). No SEO task IDs touched beyond logging.
</content>
