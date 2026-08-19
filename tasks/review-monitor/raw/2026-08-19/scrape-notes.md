# RUN_070 — raw scrape notes (2026-08-19)

All paths below are the **harness tools** (`WebFetch` / `WebSearch`), never bare `curl`, per
`client-ops/templates/re-verify-before-report.md`.

**Brand canary: PASSED.** An unrestricted `Rancho Moonrise Manor Texas glamping ranch` query
returned `ranchomoonrise.com` (home, accommodations, blog, blog/things-to-do-manor-tx, contact)
plus the correctly-attributed third-party listings (hipcamp `dw9hklej`, facebook
`100083582071947`, linkedin `rancho-moonrise`). Session is **not** degraded — absence findings
below are recordable.

**Housekeeping finding recorded first because it changes what this run is:**
**RUN_069 (2026-08-18) never completed its writes.** Its raw notes exist at
`tasks/review-monitor/raw/2026-08-18/scrape-notes.md` and are **untracked in git**. There is no
`RUN_069` heading in `session-log.md`, no `run-logs/2026-08-18-review-monitor.md`,
`review-aggregate.json` still reads `run_number: 68` / `last_updated: 2026-08-17T11:30:00Z`, and
`dashboard-state.json` still reads `last_run: 2026-08-17T11:30:00Z`. The run scraped and then
died before step 6. **This run commits those notes and folds RUN_069's findings into the
session-log so they are not lost.** Nothing in RUN_069's notes is treated as live state — every
claim below was re-fetched today.

---

## ResortPass — HTTP 200, but the rating block did NOT render this run

`https://www.resortpass.com/hotels/rancho-moonrise`

Verbatim returned:
- `3 star property`, `Trendy` designation
- Products: `Half-Day Pass — From $15`, `Day Pass — From $20` (**2 products — unchanged**)
- **Rating block: ABSENT.** No `4.8`, no `(53)`, no numerical review count anywhere in the fetch.
- Individual review text: absent. Owner responses: absent.

**This is an extraction failure, not a data change.** The page loaded (products, star class and
pool-pass copy all rendered identically to RUN_068/069) — only the aggregate rating block failed
to survive the markdown conversion. A follow-up WebSearch on
`Rancho Moonrise ResortPass day pass reviews rating` returned the correct listing URL but
surfaced only *ResortPass-the-platform's* own reputation data (PissedConsumer 1.3/69,
Trustpilot) — **not** Rancho's listing rating. That is a different entity and was **not** recorded.

**53 @ 4.8★ is HELD as `STALE:2026-08-18`, not re-confirmed today, and not changed.**
Recording "no rating found" as a drop would be exactly the false-negative the gate exists to stop.
`resortpass-rating-extraction` failure count: **1**.

Per-review enumeration remains blocked (`/hotels/rancho-moonrise/reviews` = 404, unchanged since
RUN_068). Reply coverage stays `null` — **not** zero.

---

## Facebook — 6 / 86% HELD (3rd consecutive confirmation); text unobtainable, now a BLOCKER

WebSearch `"Rancho Moonrise" Facebook reviews recommendation rate` returned:
> **"86% recommendation rate based on 6 Facebook reviews."**

Identical to RUN_068 and RUN_069. The movement first recorded on 8/17 (5→6 reviews,
100%→86% recommend) has now **settled at the new value across three consecutive independent
reads**. It was real, and it is stable.

Direct fetch `https://www.facebook.com/p/Rancho-Moonrise-100083582071947/` returned the page
**title only** — "Rancho Moonrise | Manor TX", no count, no percentage, no review bodies.

**Enumeration failure count 2 → 3. Threshold hit.** New blocker `facebook-review-text` opened in
`tasks/review-monitor/BLOCKERS.md` this run per master-agent.md's 3-consecutive rule.

**No draft written, for the third run running, and that remains the correct outcome.** ≥1
non-recommend exists and nobody in this pipeline can read what it says. Writing a response in
Ashley's voice to a review whose content is unknown would be fabrication.

Arithmetic caveat carried unreconciled, as before: 5/6 = 83.3%, not 86%. Both figures stored
as-displayed.

---

## Google — snippet path is CONTAMINATED BY THE SITE'S OWN SCHEMA (new finding)

WebSearch returned: *"Rancho Moonrise holds a **4.9-star rating across 125+ Google reviews**."*

**125 is Rancho's own number.** `site/index.html:90` carries `reviewCount": "125"` — the
AggregateRating anchor CONTEXT.md explicitly holds at 125 pending Adam's confirmation. The engine
is reading the site's own structured data back to us and presenting it as a Google review count.

This materially degrades a path that was already unreliable. Observed "snippet counts" to date:
**175 · 130 · 126 · 125+** — and at least one of those four (125) is now demonstrably
self-referential rather than an independent read of the GBP surface. The snippet was already
documented as "not a count proxy in either direction"; it is now documented as *partly an echo*.

Snippet value 126 (stable across RUN_068/069) was **not** re-surfaced today. Not recorded as a
change — the query returned the site-derived figure instead.

Live-authoritative **130 / 4.9★** carries from the RUN_034 Chrome MCP read, 2026-05-19 →
**92 days stale**. `google-count` blocker unchanged (WebFetch GBP page dead, WebSearch snippet
unreliable + contaminated, Google Travel entity dead per RUN_069).

Unreplied count: root `rancho-done-log.md` re-read this run — **last review-reply resolution is
still 2026-04-15**. No Cassie entry. **1 unreplied HELD.**

---

## The Knot — Haylee L. still live, still unreplied, day 174

WebSearch `"Rancho Moonrise" The Knot reviews Haylee owner response wedding venue` returned the
canonical listing `theknot.com/marketplace/rancho-moonrise-manor-tx-2087722` and surfaced the
review body — *"the beginning of a guest review about noise issues from a neighboring property"* —
with the explicit finding that **no owner response is present**.

Haylee L. (2026-02-26 1★): **174 days / ~24.9 weeks unreplied.** Count/rating 8 @ 4.5★ HELD
(not independently re-read today; no contradicting signal).

Direct fetch **not attempted** — `theknot-direct-fetch` blocker, failure count 8 after RUN_069's
60s timeout. No-attempt cycle: **1**. RUN_069 correctly broke the cycle on a contradicting signal
(a summary asserting an owner response existed) and the fetch failed; today's search independently
re-confirms no owner response, so there is no signal to justify breaking it again.

---

## Expedia / OTA cluster — FIRST REVIEW COUNT EVER RECORDED: 6 @ 8.0

Two independent domain-restricted WebSearches agree:

1. Restricted to `hotels.com`/`agoda.com`/`expedia.com`:
   > *"a guest review rating of 8.0 out of 10 … the property has **6 reviews** and is rated 8.0
   > out of 10 with a 'Very Good' rating."*
2. Restricted to `expedia.com` alone:
   > *"Rancho Moonrise is a 2.5-star property in Manor with an **8.0 out of 10** rating
   > ('Very Good') and has **6 verified reviews**."*

**The 8.0 anchor is re-confirmed** (unchanged since the 2026-04-09 baseline). **The count is new
information** — `expedia.count` has been `null` on every run since this task began.

Recorded as `search_confirmed_count: 6`, **not** promoted to the authoritative `count` field: this
is a search-snippet read, not a direct scrape, and the hard rule forbids writing aggregate state
without one.

**Coincidence flagged rather than smoothed:** Facebook also reads exactly 6 reviews. Both
queries above were domain-restricted to OTA hosts (no facebook.com in either result set) and both
bound the 6 to Expedia-specific descriptors (2.5-star, "Very Good", "verified"), so this is
recorded as a real read — but a third confirmation from a different phrasing is worth taking next
run before the count is promoted.

Direct fetch `expedia.com/Manor-Hotels-Rancho-Moonrise.h89565924.Hotel-Information` →
**HTTP 429 Too Many Requests, 2nd consecutive run** (RUN_069 was the 1st). One more 429 opens a
blocker for the expedia.com entity, which is distinct from the 43-failure `hotels-com-direct-fetch`
blocker on record.

**Three-entity split holds, 5th consecutive run** — expedia `h89565924` → **8.0** (re-confirmed
today ×2), hotels.com `ho2867109568` → **9.0** (re-confirmed today, surfaced in an unrelated
query), agoda `h82700060` → **8.6** (NOT re-confirmed today — see below).

Agoda direct fetch `agoda.com/rancho-moonrise-h82700060/hotel/manor-tx-us.html` → page returned
**empty / failed to load**. New failure mode for this entity, count **1**. 8.6 carries unchanged.

---

## Hipcamp — 0 HELD; both voice violations RE-CONFIRMED on a domain-restricted query

An unrestricted query first returned a **blended** answer ("36 acres", "pool, bar, and lounge")
mixing `ranchomoonrise.com` with the Hipcamp listing — the documented failure mode from RUN_066 /
068 / 069. **Not recorded.** Re-ran restricted to `hipcamp.com`:

> *"Rancho Moonrise is a **34-acre ranch** just outside of vibrant Austin, Texas. The ranch
> welcomes families and pets… amenities for relaxation and recreation, including **a pool, bar,
> and lounge area**."*

Both violations re-confirmed, **4th consecutive run**, and this is the **cleanest attribution the
task has achieved** — prior runs used unrestricted queries that could not separate Hipcamp's copy
from the site's:
- **"34-acre"** vs `VOICE-GUIDE.md:271` **36 acres** ("not 20, not 31"). Site verified clean at
  183/183 by `rancho-site-daily` on 8/18 — **the drift is Hipcamp's alone.**
- **"bar"** — the Neon Moon Barn Lounge is event-only, not a walk-in bar.

**Count HELD at 0** — no review count surfaced on any Hipcamp-restricted result. Direct fetch not
attempted (`hipcamp-direct-fetch` blocker; no-attempt cycle **4**, no contradicting signal).

---

## TripAdvisor — 0 / unclaimed HELD; a large blended answer REJECTED

Domain-restricted to `tripadvisor.com`. Canonical `g56224-d33307272` still indexed as
*"RANCHO MOONRISE - Prices & Campground Reviews (Manor, TX)"*, **no count or rating in the
snippet** — consistent with 0 / unclaimed.

**REJECTED — not recorded anywhere:** the summary attached to that query described *"one of the
most beautiful **120 acre** ranches in all of Texas… **15 minutes** from downtown Austin… a
shooting location for the famed western movie **Lonesome Dove**… prices **$116 to $119**."* None
of that is Rancho Moonrise (36 acres, 20 minutes, no Lonesome Dove connection). It is bleed from
the other TripAdvisor properties in the same result set (Moon River Ranch, Texas Ranch RV Resort,
Moonrise Resort FL, Moonrise Camp Wadi Rum). **The `$116–$119` band was NOT written to the price
field.** Price band carries `$45–$154` **STALE:2026-06-30** — immaterial, it is an algorithmic
rate estimate, not a review signal.

Direct fetch not attempted (`tripadvisor-direct-fetch` blocker, 5th no-attempt run).

---

## Airbnb — 69th consecutive no-attempt

403 pattern established 2026-04-17. `NEEDS_ADAM_VERIFY` standing.

---

## Net

**No new reviews on any platform. No rating moved on any platform.** Two genuinely new pieces of
information, neither of them a review event:

1. **Expedia carries 6 reviews** — a count where this task has recorded `null` since April.
2. **The Google snippet path is partly reading the site's own `reviewCount: 125` back to us** —
   which retires the last argument for treating that snippet as any kind of count signal.

Plus one process failure recovered: RUN_069 scraped and never wrote.
