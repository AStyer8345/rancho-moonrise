# rancho-review-monitor — RUN_048 — 2026-06-10 06:38 CT

**Status:** ok (quiet sweep) · **New reviews:** 0 · **Drafts produced:** 0 · **Stale claims auto-resolved:** 0 · **New BLOCKER:** none

Fifteenth consecutive quiet sweep. No new reviews on any monitorable platform; no rating drops, no count drops, no new ≤3★. Cruise-control maintenance run under GOALS.md week-of-5/18 broad Rancho pause (review-monitor not in the Scheduled-Tasks Pause List; monitoring ≠ active work).

## Live verification (cheap working paths only; established BLOCKERS no-attempt)

- **apex/www/sitemap (curl):** apex 200 + `server: Vercel` + `x-vercel-cache: HIT` (age 2846s ≈ 47 min); www 308 → apex; sitemap 200.
- **TripAdvisor (DIRECT WebFetch — succeeded):** 0 reviews / unclaimed / price range **$64–$180** — identical to RUN_047. The RUN_047 drift ($63–$181 → $64–$180) now held a 2nd consecutive run. Immaterial (algorithmic average-rate estimate, not a review).
- **Google (WebSearch snippet):** 126 / 4.9★ — same as RUN_046+047, **stable 3 consecutive runs**. 126 ≠ live authoritative 130 (RUN_034 Chrome read, 22 days old) → snippet remains non-authoritative.
- **Expedia (WebSearch snippet):** 8.0 — 18th consecutive inline.
- **Facebook (WebSearch snippet):** 5 / 100% — 29th consecutive inline.
- **The Knot (WebSearch name-free query):** Haylee L. review body still indexed verbatim; reviewer name NOT in query and NOT surfaced → name-surfacing not asserted; no owner-response indexed; 8/4.5★ carried (count not surfaced this run, no contradicting signal); ~day 104 unreplied. Direct fetch not attempted (BLOCKER).
- **Hipcamp (WebSearch existence):** listing still indexed at known URL; '34-acre' + 'a bar' references surfaced (search-cached) → voice/data violations carry STALE:2026-05-26; 0 reviews presumed. Direct fetch not attempted (BLOCKER, 5th no-attempt-cycle run).

## Carry-forward (unposted)

Both RUN_034 drafts still presumed unposted — done-log grep returns no review-related entry since 2026-04-15 22:12:
- **Cassie Butterfield** · Google 5★ · ~day 25 since posting · day 23 unposted in monitor — 30s in GBP dashboard.
- **Haylee L.** · The Knot 1★ · 2026-02-26 · 104 days unreplied · day 23 unposted in monitor — 2-min one-sentence edit.

Both drafts at `brand/review-reports/2026-05-19-review-report.md`. Mark Done via briefing page after posting.

## Dashboard status: `pending`

No rating drop / count drop / new ≤3★, but 2 outstanding carry-forward drafts + The Knot BLOCKER (14-run no-attempt) + Hipcamp BLOCKER (5th no-attempt-cycle run) keep status at `pending`.

## Incident discipline

All file ops this run used explicit paths inside `rancho-moonrise/` — no `git add -A`, no chained `rm` (RUN_047 deleted `/Users/adamstyer/Documents/tasks` via a chained `rm -rf`; that folder remains Adam's to recover from iCloud Recently Deleted).
