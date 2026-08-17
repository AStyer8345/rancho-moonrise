# rancho-review-monitor — RUN_068 — 2026-08-17

**Status: urgent.** The 34-run quiet streak is broken. Two platforms moved, and the more
important one is a platform this task was never watching.

25-day coverage gap since RUN_067 (2026-07-23) — the task did not fire 7/24 → 8/16.

---

## Headline

**ResortPass carries 53 reviews at 4.8★ and is not in monitored scope.**

That is Rancho's second-largest review pool after Google — four times The Knot (8) and
Facebook (6) combined — and it has been accumulating unwatched. It moved +8 reviews and
−0.1★ since 2026-07-15.

The structural finding underneath it is the one worth Adam's attention:

> **`resortpass.com` returns HTTP 200 to a plain fetch and parses cleanly. Six of the
> eight in-scope platforms are hard-blocked. The one review surface that is actually
> scrapeable is the one nobody was scraping.**

Blocked in-scope: Google (JS/API-gated), Airbnb (403), Hotels.com (timeout), The Knot
(timeout), Hipcamp (render-fail), TripAdvisor (403/domain-block). Six BLOCKERS, all
logged, all with no resolution path short of an API key or a rendering scraper.
Meanwhile the platform with a clean 200 was outside the ownership table.

This was surfaced by `rancho-competitive-weekly`, which read ResortPass the same morning
for *pricing* reasons and incidentally printed a review count. Two independent fetches on
2026-08-17 — that task's and this one's — returned identical values, which is what made
the finding safe to record rather than a single-source snippet.

## The second move: Facebook went negative

**5 → 6 reviews. 100% → 86% recommend.** First movement in 48 consecutive runs.

Facebook had been byte-stable long enough that a single snippet would not have been
trustworthy, so it was confirmed across three independent queries before anything was
written. All three returned the same pair.

A drop from 100% means **at least one non-recommend now exists where there were zero.**

**Recorded caveat, not smoothed over:** 5 of 6 is 83.3%, not 86% (6 of 7 is 85.7%). The
displayed percentage does not divide cleanly into 6 reviews. Both figures are stored
as-displayed rather than reconciled to whichever guess looked tidier. The direction is
not in doubt; the exact composition is.

### Why there is no draft for it

Facebook's page is JS-gated — a direct fetch returns the page title and nothing else —
and no search query surfaced the review body. **The review text could not be obtained.**

Writing a response draft would have meant inventing what the guest said. That does not
happen here, so no draft was written. This is the correct output, not a shortfall: a
fabricated draft in Ashley's voice responding to a complaint nobody has read would be
worse than an empty slot.

**60 seconds of Adam's time unblocks it:** open the FB Reviews tab, paste the text into
the repo, and a real draft follows next run.

## Everything else held

| Claim | Result |
|---|---|
| Google | snippet 126/4.9★ (oscillated back down from 175). Has now printed 126, 130, **and** 175 — not a proxy in either direction. Live-authoritative 130 is **90 days stale**. |
| The Knot — Haylee L. 1★ | Still live, body still indexed verbatim, **no owner response anywhere**. **172 days / ~24.6 weeks unreplied.** |
| Expedia / Hotels.com / Agoda | Split holds a **3rd consecutive run** and gains a third value: 8.0 / 9.0 / 8.6. Agoda now carries its own distinct review quote. 8.0 anchor **not** overwritten — no fresh direct scrape. |
| Hotels.com | **New dated review 2026-07-11** — positive, above the ≤4★ draft threshold, no draft required. |
| TripAdvisor | 0 / unclaimed **held** via search corroboration. |
| Hipcamp | 0 **held**. Voice violations "34-acre" and "a bar" **re-confirmed live**. |
| Airbnb | 403, 67th no-attempt run. |

## Re-Verify Gate

**13 claims: 10 still_true · 2 new_signal · 1 unknown · 1 verification-failure · 0 partial · 0 resolved.**

Nothing auto-resolved this run — no claim became false. Per-claim lines are in
`tasks/review-monitor/session-log.md` under RUN_068.

The gate earned its keep in the opposite direction from usual this time. Its normal job
is killing stale claims; here it did two things:

1. **Stopped a single-snippet Facebook change from being written on one read.** Three
   confirmations were required because the prior value had 48 runs of stability behind it.
2. **Stopped a fabricated draft.** The gate's "do not assume, do not extrapolate" rule is
   what produced "no draft" instead of a plausible-sounding invention.

## Two drafts still unposted — day 90

Cassie Butterfield (Google 5★) and Haylee L. (The Knot 1★), both drafted RUN_034 on
2026-05-19, both still in `brand/review-reports/2026-05-19-review-report.md`.

Re-verified against the operative done-log at repo root (`rancho-done-log.md`): last
review-reply resolution is still **2026-04-15** (9 Google replies). No Cassie entry, no
Haylee entry. Genuinely unposted, 90 days on.

## FLAG_FOR_ADAM

1. **ResortPass — 53 reviews, 4.8★, zero monitoring, unknown reply coverage.** ~2 min in
   the host dashboard: are reviews sitting unreplied, and is there a specific bad one
   behind the 4.9 → 4.8 drift? There is no per-review enumeration path from outside
   (`/reviews` is a 404), so this genuinely cannot be answered without the dashboard.
2. **A negative Facebook review is live, unanswered, and unread.** 60 seconds → paste
   the text → real draft next run.
3. **Three OTA entities, three ratings, third consecutive run.** If the split is real,
   hotels.com and agoda are accumulating reviews on surfaces nobody monitors for replies —
   the same failure mode ResortPass just demonstrated, and the reason that finding matters
   beyond ResortPass itself.

## Recommendation (not executed)

**Add ResortPass to the live-claim ownership table in `tasks/review-monitor/master-agent.md`.**
It is the only working direct path available and it carries the second-largest review pool.

Not done this run: editing the ownership table is a scope change, not a data write, and
this task's hard rules put scope decisions with Adam. Logged to TODO.md.

## What did not happen

- No response auto-published (hard rule).
- No draft fabricated where review text was unavailable.
- `review-aggregate.json` written only from today's fresh scrape — the 8.0 Expedia anchor
  and the 130 Google count were **not** overwritten from snippets.
- No scope change made unilaterally.
