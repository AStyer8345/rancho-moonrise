# Review Monitor — RUN_067 — 2026-07-23

**Status:** ok (34th consecutive quiet sweep on counts — 0 new reviews)
**Gap:** 1 day since RUN_066 (2026-07-22). Task fired on cadence.

## Gate check

GOALS.md re-read from disk. `rancho-review-monitor` is **not** on the Pause List; the Rancho pause is narrowed to **outreach only** (Christopher Gill), with site/content work RESUMED 2026-07-15. Task runs. Pause verdict read from GOALS.md live, not inherited from CONTEXT.md.

## Re-Verify Gate — 11 live claims

```
[2026-07-23 06:30] re-verify google-snippet-count — still_true (OSCILLATED) — live=175 prior=126 (snippet back to the high value after 2 runs at 126; 4.9★ not inline this query; live-authoritative 130 now 65d STALE)
[2026-07-23 06:30] re-verify google-unreplied — still_true (done-log rancho-done-log.md exists at repo ROOT; grepped directly — no Cassie/Haylee RESOLVED entry since 2026-04-15) — live=1 prior=1 (Cassie carry)
[2026-07-23 06:30] re-verify expedia-rating — still_true/divergent (2nd consecutive per-entity confirmation) — live=8.0(h89565924 inline)+9.0(hotels.com ho2867109568 "Wonderful") prior=8.0+9.0 → entity-split RE-CONFIRMED, 8.0 anchor NOT overwritten, FLAG_FOR_ADAM continues
[2026-07-23 06:30] re-verify expedia-count — still_true (unconfirmed) — live=null-inline prior=13/20(logged only) → RUN_066 count signals did NOT resurface; count stays null
[2026-07-23 06:30] re-verify facebook-reviews — still_true — live=5/100% prior=5/100% (48th inline)
[2026-07-23 06:30] re-verify theknot-haylee-l-live — still_true — live="would never recommend" + loud-music body indexed prior=body-indexed (147d/~21wk unreplied; no owner-response indexed — the only "Haylee" owner-reply on The Knot is for a DIFFERENT venue, The Old Rancho, Carlsbad CA)
[2026-07-23 06:30] re-verify theknot-unreplied — still_true — live=1 prior=1 (Haylee carry)
[2026-07-23 06:30] re-verify theknot-rating — still_true — live=8/4.5★ (surfaced inline this run) prior=8/4.5★
[2026-07-23 06:30] re-verify tripadvisor-reviews — still_true (WebSearch corroboration; canonical g56224-d33307272 indexed, no count/rating in snippet) — live=0/unclaimed prior=0/unclaimed
[2026-07-23 06:30] re-verify hipcamp-voice-violations — still_true — live="34-acre ranch"+"bar" both surfaced in snippet prior=re-confirmed 2026-07-22
[2026-07-23 06:30] re-verify hipcamp-count — still_true (no contradicting signal this run; no-attempt cycle resumes) — live=0(no attributable review content) prior=0
```

**Totals:** 11 still_true (1 divergent-but-stable: Expedia split) · 0 partial · 0 new-signal · 0 failed · 0 fully resolved (no done-log entry to write).

## Material follow-up 1 — Expedia/Hotels.com two-entity split RE-CONFIRMED (2nd consecutive run)

RUN_066 upgraded the recurring 9.0 from "transient artifact" to "probable real divergence." This run **re-confirms it across independent queries**, per-entity again:

- `expedia.com/…h89565924` → **8.0** ("a solid guest review rating of 8.0")
- `hotels.com/ho2867109568` (and `ie.hotels.com/ho2867109568`) → **9.0 "Wonderful"**

Two consecutive runs of consistent per-entity attribution makes the artifact reading no longer tenable. **8.0 anchor still NOT overwritten** — hard rule, no fresh direct scrape (hotels.com direct fetch = 42-timeout BLOCKER, not attempted). The RUN_066 first-ever count signals (13, 20) did **not** resurface this run — they stay in `count_signals_unconfirmed`, count remains null. **FLAG_FOR_ADAM stands and strengthens:** 30 seconds in either extranet settles whether this is one rating or two — and if two, hotels.com/ho2867109568 may be accumulating reviews on a surface nobody is monitoring for replies.

## Material follow-up 2 — done-log path correction

Prior runs recorded the unreplied signal as "`brand/rancho-done-log.md` does not exist." The **operative done-log is at repo root** (`rancho-done-log.md`, per the Mark Done System + Key Files) and it **does** exist. Grepped it directly this run: the last review-reply resolution is `2026-04-15 [rancho] rancho-review-replies — RESOLVED` (9 Google replies) — **no Cassie Butterfield and no Haylee L. entry**. Substance unchanged (both drafts genuinely unposted), but the path is corrected so future runs check the right file and any RESOLVED line lands at root.

## Carry-forward — 2 replies still unposted, day 66

No auto-publish. Drafts remain at `brand/review-reports/2026-05-19-review-report.md`.

1. **Cassie Butterfield — Google 5★** (~2026-05-16, ~68d old review). Paste-ready, voice-clean, 30 seconds in the GBP dashboard.
2. **Haylee L. — The Knot 1★** (2026-02-26, **147 days / ~21 weeks unreplied**). Draft carries an edit-flag on the neighboring-property mitigation sentence — needs Adam's 2-minute call before posting. Her review body still surfaces on name-free queries; exposure is ongoing.

## BLOCKERS

No new blocker opened. No-attempt counters: airbnb (66) · hotels.com (42, held) · theknot-direct (33) · tripadvisor-direct (2nd no-attempt) · google-count (standing) · hipcamp-direct (no-attempt cycle resumes at 1 — no contradicting signal this run).

## Standing recommendations for Adam

1. **Expedia vs Hotels.com — is it 8.0 or 9.0?** Now re-confirmed 2 consecutive runs. 30 seconds in either extranet settles it; if they genuinely differ, the monitor should track them as two platforms.
2. **Google authoritative count is 65 days stale** (130/4.9★, Chrome read 2026-05-19). Snippet has printed 126, 130, 175 — not a proxy. Resolves via a Places API key or a 30-second GBP dashboard re-confirm.
3. Post the 2 replies. Unchanged, still the highest-leverage 5 minutes on the board.

**State written:** aggregate 66→67 · dashboard-state 66→67 · session-log RUN_067 · CONTEXT (Last Worked On) · CHANGELOG.
