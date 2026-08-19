# rancho-review-monitor — RUN_070 — 2026-08-19

**Status: URGENT** (carried, not new) · **No new reviews on any platform** · **No rating moved on any platform**
Gate: 18 claims — 13 still_true · 2 new_signal · 1 unknown · 4 verification-failure · **0 resolved**

---

## The one-paragraph version

Nothing arrived. Nothing moved. What this run actually produced is three findings about the *measurement apparatus* rather than about the reviews: Expedia turns out to carry **6 reviews** on a surface whose count has read `null` since April; the Google review-count fallback was caught **reading the site's own `reviewCount: 125` back to us** and presenting it as a Google figure; and **yesterday's run scraped every platform and then died before writing anything**, leaving its notes untracked in git. The first is new exposure, the second kills a signal the task has been squinting at for four months, and the third was one `git clean` from being deleted.

---

## Brand canary

**PASSED.** Unrestricted query `Rancho Moonrise Manor Texas glamping ranch` returned `ranchomoonrise.com` (home, accommodations, blog, blog/things-to-do-manor-tx, contact) plus correctly-attributed third-party listings (hipcamp `dw9hklej`, facebook `100083582071947`, linkedin). Session not degraded — absence findings are recordable. Canary run **before** any absence was written.

---

## 1 — Expedia carries 6 reviews (first count ever recorded)

`platforms.expedia.count` has been `null` on every run since the 2026-04-09 baseline. Two independent domain-restricted searches this run agree:

| Query scope | Returned |
|---|---|
| `hotels.com` + `agoda.com` + `expedia.com` | *"a guest review rating of 8.0 out of 10 … the property has **6 reviews** and is rated 8.0 out of 10 with a 'Very Good' rating"* |
| `expedia.com` only | *"a 2.5-star property in Manor with an **8.0 out of 10** rating ('Very Good') and has **6 verified reviews**"* |

Both bind the count to Expedia-specific descriptors for entity `h89565924`. The 8.0 anchor is simultaneously re-confirmed, unchanged since April.

**Recorded as `search_confirmed_count`, not promoted to the authoritative `count` field.** The hard rule is no aggregate state write without a direct scrape, and the direct scrape returned **HTTP 429** (2nd consecutive run — a 3rd opens a blocker distinct from the 43-failure `hotels-com-direct-fetch`).

**Coincidence flagged, not smoothed:** Facebook also reads exactly 6. Neither query's result set contained `facebook.com` and both bound the 6 to OTA descriptors, so this is recorded as a real read — but take a third differently-phrased confirmation before promoting it.

**Why it matters more than the number:** six public reviews sit on a surface whose reply coverage has never been checked, and it was invisible precisely because the count was null. That is the same shape as the ResortPass discovery two runs ago — a review pool outside the monitor, found by accident.

---

## 2 — The Google snippet path is reading our own website back to us

This run's snippet: *"Rancho Moonrise holds a **4.9-star rating across 125+ Google reviews**."*

`site/index.html:90` carries `reviewCount": "125"` — the AggregateRating anchor CONTEXT.md explicitly holds at 125 pending Adam's confirmation. **The engine read Rancho's own structured data and presented it as a Google review count.**

Snippet values observed to date: **175 · 130 · 126 · 125+**. The path was already documented as "not a count proxy in either direction" after oscillating across three values while the live number sat at 130. It is now additionally documented as *partly self-referential*, which removes the last reason to look at it at all.

Consequences:
- Prior snippet value **126** (stable RUN_068/069) did **not** resurface today. **Not** recorded as a change.
- Live-authoritative **130 / 4.9★** (RUN_034 Chrome MCP read, 2026-05-19) is now **92 days stale** and is the only real Google number this task has.
- `google-count` blocker unchanged, now with three dead paths on record: WebFetch of the GBP page (dead), the search snippet (unreliable **and contaminated**), and the Google Travel entity page (dead, discovered by RUN_069).

Unreplied count re-verified against the root done-log: last review-reply resolution is **still 2026-04-15**, no Cassie entry. **1 unreplied HELD.**

---

## 3 — RUN_069 scraped everything and wrote nothing

`tasks/review-monitor/raw/2026-08-18/scrape-notes.md` exists and is thorough. Everything downstream of it is missing:

| Artifact | Expected | Found |
|---|---|---|
| `session-log.md` RUN_069 heading | present | **absent** |
| `run-logs/2026-08-18-review-monitor.md` | present | **absent** |
| `review-aggregate.json` | `run_number: 69` | **68**, `last_updated` 2026-08-17 |
| `dashboard-state.json` | `last_run` 2026-08-18 | **2026-08-17** |
| raw dir in git | tracked | **untracked** |

The run died between step 5 and step 6. **This run committed the notes and folded RUN_069's findings into `session-log.md` under a `RECOVERED` heading.** Nothing from it was carried as live state — every claim was independently re-fetched today.

Two things RUN_069 got right that are worth preserving: it **deliberately broke a 34-run no-attempt cycle on The Knot** because a search summary asserted an owner response existed (a contradicting signal forbids assuming a claim still holds), then correctly **held rather than resolved** when the fetch timed out and the summarizer retracted itself; and it caught the **attribution blend** where Haylee L.'s Knot prose surfaces beside the Facebook figure, and refused to record it as Facebook review text.

The structural lesson: the scrape is the cheap half, the write is the half that survives. A run that dies at step 5 leaves no evidence it ran, and the next run's "prior value" silently reaches back two days instead of one.

---

## 4 — Facebook: settled at the new value; text blocked; blocker opened

**6 reviews / 86% recommend, third consecutive confirmation.** The negative movement first recorded RUN_068 (5→6 reviews, 100%→86%) is real and has settled.

Direct fetch returned the page **title only** for the third run running. `enumeration_failure_count` 2 → **3, threshold hit** → new blocker **`facebook-review-text`** logged in `tasks/review-monitor/BLOCKERS.md`.

**No draft written, third run running, and that is the correct outcome rather than a gap.** Writing a response in Ashley's voice to a review nobody in this pipeline can read would be fabrication. The blocker entry carries an explicit attribution guard so a future run doesn't mistake Haylee L.'s Knot text for the Facebook body.

Arithmetic caveat carried unreconciled: 5/6 = 83.3%, not 86%. Both figures stored as displayed.

---

## 5 — What was refused

- **ResortPass was NOT recorded as a rating drop.** The page returned HTTP 200 with products (`Half-Day Pass from $15`, `Day Pass from $20` — 2, unchanged), star class and pool copy all rendering identically — only the aggregate rating block failed to survive the fetch. Extraction failure, not a data change. Recording "no rating found" as a decline, on the one platform already showing this year's only rating decline, would have been a confident, plausible, entirely fabricated finding. **Held 53 @ 4.8★ `STALE:2026-08-18`**, backed by three prior reads (this task 8/17, `rancho-competitive-weekly` 8/17, this task 8/18).
- **ResortPass follow-up search returned PissedConsumer 1.3/69 and Trustpilot.** That is ResortPass-the-platform's reputation, not Rancho's listing rating. Different entity. Not recorded.
- **A blended TripAdvisor answer rejected wholesale:** *"one of the most beautiful 120 acre ranches in all of Texas… 15 minutes from downtown Austin… a shooting location for the famed western movie Lonesome Dove… prices $116 to $119."* Rancho is 36 acres, 20 minutes, no Lonesome Dove connection. Bleed from Moon River Ranch, Texas Ranch RV Resort, Moonrise Resort FL, Moonrise Camp Wadi Rum and Manor RV Park CO in the same result set. `$116–$119` **not** written to the price field; band carries `$45–$154` `STALE:2026-06-30` (immaterial — algorithmic rate estimate, not a review signal).
- **An unrestricted Hipcamp query returned "36 acres"** — the site's number blended into Hipcamp's copy. Discarded; query re-run restricted to `hipcamp.com`.

---

## 6 — Hipcamp: both voice violations re-confirmed, cleanest attribution yet

Domain-restricted to `hipcamp.com`:

> *"Rancho Moonrise is a **34-acre ranch** just outside of vibrant Austin, Texas… amenities for relaxation and recreation, including **a pool, bar, and lounge area**."*

- **"34-acre"** vs `VOICE-GUIDE.md:271` **36 acres** ("not 20, not 31"). Site verified clean at 183/183 by `rancho-site-daily` on 8/18 — **the drift is Hipcamp's alone**; nobody should "fix" the site.
- **"bar"** — the Neon Moon Barn Lounge is event-only, not a walk-in bar.

Fourth consecutive confirmation, and the first achieved with the source properly isolated. Prior runs used unrestricted queries that could not separate Hipcamp's copy from the site's. **Count HELD at 0** — no review count surfaced on any Hipcamp-restricted result.

---

## 7 — Everything else, briefly

| Platform | State | Note |
|---|---|---|
| The Knot | 8 @ 4.5★ held; **Haylee L. 1★ unreplied day 174 / ~24.9wk** | Body still indexed, no owner response present. Direct fetch not attempted (blocker, failure count 8, no-attempt cycle 1). |
| TripAdvisor | 0 / unclaimed HELD | Canonical `g56224-d33307272` indexed, no count/rating in snippet. 5th no-attempt run. |
| OTA split | **5th consecutive run** — expedia 8.0 / hotels.com 9.0 / agoda 8.6 | 8.0 and 9.0 both re-confirmed today; **8.6 not re-confirmed** — agoda direct fetch returned an empty page (1st failure). |
| Airbnb | 403, 69th consecutive no-attempt | `NEEDS_ADAM_VERIFY` standing. |
| Drafts | **2 unposted, day 92** | Cassie (Google 5★) + Haylee L. (Knot 1★), both drafted RUN_034 2026-05-19. |

---

## FLAG_FOR_ADAM (4)

1. **Six reviews exist on Expedia and nobody has ever checked whether they have replies.** New this run — the count read `null` since April. Same exposure shape as ResortPass: a public review pool outside anything this monitor can enumerate.
2. **The Facebook non-recommend is now a formal blocker and is still a 60-second fix.** Three runs, three page titles. Open the Reviews tab, paste the text into the repo, a real draft follows next run.
3. **Google's authoritative count is 92 days old and the fallback is reading our own site back to us.** 30 seconds in the GBP dashboard replaces a number unverifiable since May; a Places API key ends it permanently.
4. **ResortPass, 53 reviews, still outside monitored scope** — second run carrying this. Adding it (and now Expedia's newly-visible pool) requires a `master-agent.md` ownership-table edit, which is a scope decision and deliberately not made unilaterally.

---

## Ownership violation check

**None.** `rancho-site-daily` (2026-08-19) surfaced third-party listing-copy claims — The Knot's *"20 luxury cabins…up to 50 guests"* — but that is a voice/copy claim in its own scope, not a review-reply claim, and it touched no counts or reply state. Correct behavior, and it independently corroborates this task's carried Knot voice-violation entry.

---

## Files written

- `tasks/review-monitor/raw/2026-08-19/scrape-notes.md` — new
- `tasks/review-monitor/raw/2026-08-18/` — **RUN_069's orphaned notes, committed** (were untracked)
- `brand/review-aggregate.json` — run 68 → 70
- `site/admin/dashboard-state.json` — run 68 → 70, status urgent
- `tasks/review-monitor/BLOCKERS.md` — `facebook-review-text` opened
- `tasks/review-monitor/session-log.md` — RUN_069 (RECOVERED) + RUN_070
- `CONTEXT.md` / `CHANGELOG.md` / `TODO.md` — end-of-session writes

**No review-log file written** — no new reviews on any platform. **No response drafts written** — the only unread review's text is unobtainable.
