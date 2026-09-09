# Review Monitor — RUN_074 — 2026-09-09

## Landing RUN_073

RUN_073 (2026-09-07) had written its full four-file update but never committed it. Flagged by `rancho-site-daily`'s 2026-09-09 run, which found the tree uncommitted at its own run start and left it for this task to land. Staged and committed by explicit pathspec (`brand/review-aggregate.json`, `site/admin/dashboard-state.json`, `tasks/review-monitor/BLOCKERS.md`, `tasks/review-monitor/session-log.md`, `run-logs/2026-09-07-review-monitor.md`, `tasks/review-monitor/raw/2026-09-07/`) — the unrelated 5-file NEEDS OWNER set from other workstreams (`api/inquiry.js`, `site/css/styles.css`, `site/js/main.js`, `site/pages/contact.html`, `site/pages/weddings.html`) was left untouched, same discipline prior runs have used. Commit `1e26d81`, pushed, confirmed `origin/main` matches before proceeding.

## Structural defect found and fixed

While landing RUN_073, `site/admin/dashboard-state.json` was found to carry a **duplicate top-level block** — `last_run`, `run_number`, `status`, `status_reason`, `oldest_unreplied_days`, `drafts_unposted_days`, `flags` all appeared a second time as siblings of the `review_monitor` key instead of as fields inside it. This is a JSON-shape defect, not a data error — RUN_073 appears to have appended new fields at the wrong nesting level. Fixed this run by merging the duplicate content back into `review_monitor`, preserving RUN_073's actual data (status_reason, oldest_unreplied_days=193, drafts_unposted_days=111, flags) as history rather than discarding it.

## Re-Verify Gate

Brand canary: PASSED — own-name query returned ranchomoonrise.com plus hotels.com/agoda/tripadvisor/apple-maps/theknot/yelp/wheree, correct 20-minute distance from downtown Austin. Session not degraded.

| Claim | Live check | Result |
|---|---|---|
| facebook-aggregate (6/86%) | facebook.com-restricted WebSearch | NOT surfaced 2nd consecutive run — verification_gap_count 1→2 of 3. HELD, not assumed changed. |
| hipcamp-voice-violations | hipcamp.com-restricted WebSearch | Both strings reproduced verbatim ("34-acre ranch... Austin, Texas"; "an inviting pool, a bar, and a cozy lounge area"). RUN_073's inconclusive read resolved as a different excerpt slice, not drift. |
| expedia-rating | expedia.com-restricted WebSearch | 8.0 "Very Good" re-confirmed. Direct fetch not re-attempted — path (d) stays closed, count-promotion stays a rule question with Adam. |
| theknot-haylee | theknot.com-restricted WebSearch | Review body still indexed verbatim, no owner-response. Unreplied day count 193→195 (27.9 weeks). No new reviews or rating movement. |
| tripadvisor-status | tripadvisor.com-restricted WebSearch | Canonical g56224-d33307272 still indexed, no count/rating in snippet — 0/unclaimed HELD. No cross-property bleed artifacts this run. |
| google-reviews-count | deliberately NOT re-run | Contamination discipline from RUN_070-072 (snippet echoes site's own `reviewCount:"125"` schema) — re-running would re-inject a self-referential number. Authoritative 130/4.9★ (2026-05-19) now 113 days stale, unchanged. |

## Done-log

Re-read `rancho-done-log.md` at repo root. No new review-reply RESOLVED entries since RUN_073 (last is still 2026-04-15, "Post 9 Google review replies via GBP"). Google unreplied=1, Facebook unreplied≥1, Knot unreplied=1 all HELD. Two drafts (Cassie Google 5★, Haylee Knot 1★) remain UNPOSTED, day count 111→113.

## Not touched this run

Airbnb (403 pattern, no-attempt cycle continues), ResortPass/Yelp/Agoda (out of this task's scope), Apple Maps (already stability-confirmed 3× at RUN_073, no urgent re-read needed).

## Status

URGENT — standing condition (Haylee unreplied + 2 unposted drafts), not a new one. No claim fully resolved this run; no done-log write required.
