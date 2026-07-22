# Review Monitor — RUN_066 — 2026-07-22

**Status:** ok (33rd consecutive quiet sweep — 0 new reviews — but **2 material data events**)
**Gap:** 4 days since RUN_065 (2026-07-18). Task did not fire 7/19–7/21.

## Gate check

GOALS.md re-read from disk (mtime 2026-07-20 11:19). `rancho-review-monitor` is **not** on the Pause List; the Rancho pause is narrowed to **outreach only** (Christopher Gill), with site/content work RESUMED 2026-07-15. Task runs. Standing correction observed: pause verdict read from GOALS.md live, not inherited from CONTEXT.md.

## Re-Verify Gate — 11 live claims

```
[2026-07-22 06:30] re-verify google-snippet-count — still_true — live=126 prior=126 (2 runs stable at the common hold value; 4.9★ inline)
[2026-07-22 06:30] re-verify google-unreplied — still_true (done-log brand/rancho-done-log.md still does not exist) — live=1 prior=1 (Cassie carry)
[2026-07-22 06:30] re-verify expedia-rating — PARTIAL/divergent — live=8.0(h89565924 inline)+9.0(hotels.com ho2867109568, 3 independent queries) prior=8.0 (9.0 artifact RETURNS after 10 runs absent)
[2026-07-22 06:30] re-verify expedia-count — NEW SIGNAL, unconfirmed — live=13(hotels.com query)/20(travel-guide query, "8.6 out of 10 from 20 reviews") prior=null
[2026-07-22 06:30] re-verify facebook-reviews — still_true — live=5/100% prior=5/100% (47th consecutive inline)
[2026-07-22 06:30] re-verify theknot-haylee-l-live — still_true — live=body-indexed verbatim prior=body-indexed (146d / ~21wk unreplied; no owner-response indexed on any query)
[2026-07-22 06:30] re-verify theknot-unreplied — still_true — live=1 prior=1 (Haylee carry)
[2026-07-22 06:30] re-verify theknot-voice-violation — still_true — live="20 luxury cabins…up to 50 guests" inline prior=same
[2026-07-22 06:30] re-verify tripadvisor-reviews — still_true (WebSearch corroboration; canonical g56224-d33307272 indexed, no count/rating in snippet) — live=0/unclaimed prior=0/unclaimed
[2026-07-22 06:30] re-verify hipcamp-voice-violations — RESOLVED-STALENESS, still_true — live="34-acre ranch"+"a bar" both surfaced in snippet prior=STALE:2026-05-26 (re-confirmed after 57 days)
[2026-07-22 06:30] re-verify hipcamp-count — verification FAILED (direct re-attempt, "Loading…") — live=unverifiable prior=0 → holds 0, STALE:2026-05-26
```

**Totals:** 8 still_true · 1 partial/divergent · 1 new-signal · 1 failed · 0 fully resolved (no done-log entry to write).

## Material event 1 — Expedia/Hotels.com two-entity split (upgraded from "artifact")

For 10 consecutive runs the 9.0 value was treated as a transient snippet artifact against an 8.0 anchor. This run it surfaced **three times across independent queries**, and — for the first time — **consistently attributed to a specific entity**:

- `expedia.com/Manor-Hotels-Rancho-Moonrise.h89565924` → **8.0** ("a solid guest review rating of 8.0")
- `hotels.com/ho2867109568` (shared entity) → **9.0 "Wonderful"** ("2.5 star property with reviews rated 9.0 out of 10")

That is no longer noise-shaped. The most parsimonious reading is that the two entities carry genuinely different ratings and the monitor has been collapsing them into one anchor. **The 8.0 anchor is NOT overwritten** — hard rule, no fresh direct scrape (hotels.com direct fetch remains a 42-timeout BLOCKER, not attempted). Recorded as a per-entity split with today's date, pending Adam confirmation.

Two review **counts** also surfaced for the cluster for the first time since the null baseline (2026-04-09): **13** (hotels.com query) and **"8.6 out of 10 from 20 reviews"** (Manor RV-parks travel-guide query). Both unconfirmed and mutually inconsistent; the 8.6/20 came off an aggregate travel-guide page and carries the same cross-listing smell as the RUN_061 "Travelers' Choice" artifact. Logged, **not** written as the count.

## Material event 2 — Hipcamp no-attempt cycle broken on a contradicting signal

The hipcamp-direct-fetch BLOCKER (open since 2026-06-03) had run 22 consecutive no-attempt runs. This run a WebSearch snippet surfaced **apparent review content** against a claimed `0 reviews` baseline:

- "The most magical place we've ever stayed. The tents are gorgeous, the staff is incredible…"
- "Glamping cabins have bathroom and shower but LOTS of mosquitoes. No coffee pot or way to make coffee so plan accordingly."

Per the Re-Verify Gate ("do NOT assume the claim is still true"), the no-attempt cycle was **deliberately broken** and a direct fetch attempted. It **failed again** — `"Loading…"`, identical to the RUN_043 failure mode. Failure count 3 → 4.

**Count held at 0.** The quotes are not attributable to Hipcamp: the same query returned an unrelated `Stargazing @ Moonrise Ranch` (Mountain Center, **California**) listing, and the second quote resurfaced in a Hotels.com-dominated result set. Reading: the summarizer blended Hipcamp *listing copy* with Expedia/Hotels.com *review content*. Not written to the aggregate.

**Upside:** the same snippets re-confirmed both long-stale Hipcamp voice violations live — **"34-acre ranch"** (VOICE-GUIDE says 36) and **"a bar"**. Those had carried `STALE:2026-05-26` for 57 days and are now current.

## Carry-forward — 2 replies still unposted, day 65

No auto-publish. Drafts remain at `brand/review-reports/2026-05-19-review-report.md`.

1. **Cassie Butterfield — Google 5★** (~2026-05-16, ~67d old). Paste-ready, voice-clean, 30 seconds in the GBP dashboard.
2. **Haylee L. — The Knot 1★** (2026-02-26, **146 days / ~21 weeks unreplied**). Draft carries an edit-flag on the neighboring-property mitigation sentence — needs Adam's 2-minute call before posting. Her review body still surfaces **verbatim in Rancho-attributed snippets on name-free queries**; exposure is ongoing and the cost of continued non-reply keeps rising.

`brand/rancho-done-log.md` still does not exist — no review RESOLVED entry has ever been logged, so both unreplied counts hold on the done-log-absence signal.

## BLOCKERS

No new blocker opened. No-attempt counters: airbnb (65) · hotels.com (42, held) · theknot-direct (32) · tripadvisor-direct (1st no-attempt run since opening 7/18) · google-count (standing). hipcamp-direct: **cycle broken, re-attempted, failed** → failure count 4, cycle resets.

## Standing recommendations for Adam

1. **Google authoritative count is 64 days stale** (130/4.9★, Chrome read 2026-05-19). Snippet has printed 126, 130 and 175 — not a proxy in either direction. Resolves only via a Places API key or a 30-second GBP dashboard re-confirm.
2. **Expedia vs Hotels.com — is it 8.0 or 9.0?** 30 seconds in either extranet settles a divergence the monitor cannot settle from outside. If they genuinely differ, the monitor should track them as two platforms, not one.
3. Post the 2 replies. Unchanged, still the highest-leverage 5 minutes on the board.

**State written:** aggregate 65→66 · dashboard-state 65→66 · session-log RUN_066 · CONTEXT (Last Worked On) · CHANGELOG.
