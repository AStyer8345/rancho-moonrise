# RUN_071 — rancho-review-monitor — 2026-08-21

**Result:** No new reviews on any platform. One stale claim **resolved**, one new blocker opened, one recurring artifact rejected. Status stays **urgent**.

**Cadence:** 2-day gap. Task did not fire 2026-08-20. Prior run RUN_070 (2026-08-19).

**Pause gate:** `GOALS.md` re-read from disk. `rancho-review-monitor` is not on the Pause List; the Rancho pause is narrowed to *outreach only* (site/content resumed 2026-07-15). Task runs — correct behavior.

**Brand canary:** **PASSED** before any absence was recorded. Unrestricted `Rancho Moonrise` returned `ranchomoonrise.com` plus correctly-attributed third-party listings. Session not degraded.

---

## Headline — the gate produced its first complete save-and-recover cycle

RUN_070's ResortPass fetch returned HTTP 200 with products, star class and pool copy all rendering normally, but **no rating and no review count survived the fetch**. It classified that as an *extraction failure* and held `53 @ 4.8★` as `STALE:2026-08-18` rather than recording a decline.

That was the right call, and today proves it. The same URL returned:

| Field | RUN_071 live read | Held value |
|---|---|---|
| Rating | **4.8★** | 4.8★ |
| Reviews | **53** | 53 |
| Half-Day Pass | from **$15** | $15 |
| Day Pass | from **$20** | $20 |

Identical. The non-render was transient.

**Why this mattered more than it looks.** ResortPass is the single platform carrying this year's only genuine rating decline (4.9 → 4.8 across +8 reviews, RUN_068). A second consecutive decline would have fit the existing narrative perfectly — which is exactly what would have made it dangerous. It would have passed every plausibility check and propagated into `dashboard-state.json`, `CONTEXT.md` and every downstream surface as a trend.

The value now rests on **four independent reads**: this task 8/17, `rancho-competitive-weekly` 8/17, this task 8/18 (RUN_069), this task 8/21.

**State written:** `stale` → `false`, `stale_since` → `null`, `rating_extraction_failure_count` 1 → 0 (never reached the 3-run blocker threshold), `independent_reads_at_current_value: 4`. ResortPass removed from `stale_platforms`.

---

## New blocker: `expedia-direct-fetch`

Direct fetch of `expedia.com/Manor-Hotels-Rancho-Moonrise.h89565924.Hotel-Information` returned **HTTP 429 Too Many Requests** for the **third consecutive run** (RUN_069, RUN_070, RUN_071). Threshold met → blocker opened.

Tracked **separately** from `hotels-com-direct-fetch`: different entity (`h89565924` vs `ho2867109568`), different failure mode (rate-limit vs 60-second timeout). Conflating them would hide a fix to either one.

429 is transient by nature, so the resolution path includes one retry attempt per run before treating it as permanent.

---

## The rule problem this run surfaced

On the same platform, in the same run, the opposite thing happened: **the Expedia count of 6 earned its third independent confirmation**, third distinct phrasing, restricted to `expedia.com` alone —

> *"Rancho Moonrise has a rating of 8.0 out of 10 with 6 verified guest reviews."*

That is **precisely** the precondition RUN_070 set before promoting the value into the authoritative `count` field.

**The precondition is met. The promotion is withheld.**

`master-agent.md` hard-rules that `brand/review-aggregate.json` is never written without a fresh **direct** scrape. The direct scrape just became a formal blocker. So *"pending a direct scrape"* now means *"pending forever"* — the evidence bar has been cleared and the rule still forbids the write.

This is a **rule** question, not a data question. It is recorded as `count_promotion_decision` in the aggregate and escalated rather than resolved unilaterally — the same precedent as the ResortPass scope change carried unacted for three runs.

**The coincidence is now de-risked without being smoothed.** RUN_070 flagged that Facebook also reads exactly 6. This run, the Facebook 6 came from a `facebook.com`-restricted query and the Expedia 6 from an `expedia.com`-restricted query — two figures, two domains, independently sourced. Still a genuine coincidence; still recorded as one.

**Why the count matters at all:** six public reviews sit on a surface whose **reply coverage has never been checked once**. It was invisible for four months purely because the field read `null`. Same shape as the ResortPass discovery in RUN_068.

---

## Rejected this run

**TripAdvisor "Travelers' Choice award … top 10% of properties" — RESURFACED, 2nd sighting.**
First seen RUN_061, confirmed transient RUN_062. Rejected again, written nowhere.

It is **self-refuting on its own terms**: the award is defined by consistently great reviews, and this listing has **zero** reviews and is unclaimed. Now recorded as a *recurring* artifact (`travelers_choice_artifact_sightings: 2`) so a future run rejects it on sight rather than rediscovering it as news.

This is the most dangerous class of finding this task handles — flattering, plausible, well-formed, and nobody's instinct is to challenge good news about their own property.

**"about 15 minutes from downtown Austin"** — Rancho is 20. Same cross-property bleed as RUN_070; the result set again carried Moon River Ranch, Moonrise Resort FL, Moonrise Camp Wadi Rum, Manor RV Park CO, Moonrise Inn Donghe.

**The OTA split was NOT re-confirmed, and the counter was NOT incremented.** An `hotels.com`/`agoda.com`-restricted query returned both listings still active and re-surfaced the known 2026-07-11 pool review — but neither 9.0 nor 8.6 appeared inline. Only 8.0 re-surfaced. `split_consecutive_confirmations` held at 5. **A listing being live is not a rating being read**; incrementing on the former would corrupt the only evidence trail supporting the split hypothesis.

**The Google snippet query was deliberately not run.** RUN_070 proved the snippet is partly an echo of the site's own `reviewCount: "125"` (`site/index.html:90`). Re-issuing it would re-inject a self-referential number dressed as a fresh read. No snippet value recorded this run, by design. Authoritative 130 / 4.9★ (RUN_034 Chrome MCP, 2026-05-19) is now **94 days stale** and remains the only real Google number this task holds.

---

## Held / re-confirmed

- **Facebook 6 / 86% — 4th consecutive confirmation**, and the first on a `facebook.com` **domain-restricted** query (cleanest attribution the figure has had). Same result carried the correct address and phone, corroborating entity identity. Review body still unobtainable → **no draft, 4th run running**. That remains the correct outcome: drafting in Ashley's voice for a review nobody in this pipeline has read would be fabrication.
- **Hipcamp voice violations — 5th consecutive confirmation**, domain-restricted. Verbatim: *"a 34-acre ranch just outside of vibrant Austin, Texas"* (VOICE-GUIDE says 36; site clean at 183/183, so the drift is Hipcamp's alone) and *"an inviting pool, a bar, and a cozy lounge area"* (Neon Moon Barn Lounge is event-only). Count **0** held.
- **The Knot — Haylee L. 1★ unreplied day 176 / ~25.1 weeks.** Body still indexed verbatim; the result explicitly could not locate any owner response. Positive review content also surfaced (*"wedding venue of our dreams"*, *"breathtaking setting"*) — consistent with the held 8 @ 4.5★ and **not** treated as a new-review signal.
- **TripAdvisor 0 / unclaimed** — canonical `g56224-d33307272` still indexed, no count or rating in snippet.
- **Google unreplied = 1** — root `rancho-done-log.md` re-read; last review-reply resolution is still `2026-04-15`, no Cassie entry, no Haylee entry.
- **Two drafts unposted — day 94.**
- **Airbnb** — 71st consecutive no-attempt run (403 pattern since 2026-04-17).

---

## Gate tally

19 claims: **12 still_true · 1 RESOLVED · 1 not_reconfirmed · 1 rejected-artifact · 2 unknown/blocked · 1 verification-failure (new blocker) · 1 no-attempt · 0 partial**

---

## FLAG_FOR_ADAM (5)

1. **One decision unblocks a stuck rule.** Expedia's count has cleared the evidence bar this task set for itself, and the path the rule requires is now blocked. Either 30 seconds in the Expedia extranet — settling count, rating, reply coverage *and* the 8.0/9.0/8.6 split in one look — or authorise promotion on ≥3 independent same-day domain-restricted confirmations when the direct path is a logged blocker.
2. **Six reviews on Expedia, reply coverage never checked.** 2nd run carrying this.
3. **Facebook's non-recommend text — 4th run, still a 60-second fix.**
4. **ResortPass, 53 reviews, still outside monitored scope — 3rd run.** Needs a `master-agent.md` ownership-table edit; a scope decision, not taken unilaterally.
5. **Eight open blockers, seven are the same problem.** Four (`hipcamp`, `theknot`, `tripadvisor`, `expedia`) name the identical remedy — a rendering/residential-proxy scraper such as Apify. That is one purchase, not four workarounds.

---

## Files written

- `tasks/review-monitor/raw/2026-08-21/scrape-notes.md` (new — audit cache)
- `brand/review-aggregate.json` (run 70 → 71; ResortPass stale cleared; Expedia blocker + promotion decision; counters)
- `site/admin/dashboard-state.json` (run 70 → 71; 8 blockers; flags rewritten)
- `tasks/review-monitor/BLOCKERS.md` (new blocker `expedia-direct-fetch`; Facebook blocker updated)
- `tasks/review-monitor/session-log.md` (RUN_071 appended)
- `run-logs/2026-08-21-review-monitor.md` (this file)
- `CONTEXT.md` / `CHANGELOG.md` / `TODO.md` (end-of-session writes)

**No review-log written** — no new reviews on any platform. **No drafts written** — no new ≤4★ review, and the one known unread negative (Facebook) remains unreadable.
