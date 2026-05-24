# Review Monitor — RUN_037 Report — 2026-05-23

**Run time:** 2026-05-24T00:52Z (2026-05-23 19:52 CDT)
**Status:** `pending` (2 carry-forward drafts still unposted; no new reviews; no rating drops)
**New reviews this run:** 0
**New drafts written this run:** 0 (two RUN_034 drafts carry forward — re-flagging without re-writing)
**Stale claims auto-resolved this run:** 0
**New BLOCKER opened:** **`theknot-direct-fetch` — 3 consecutive 60s timeouts (RUN_035 → RUN_037)**

---

## TL;DR

Fourth consecutive quiet sweep. No new reviews on any monitored platform. The two RUN_034 drafts (Cassie Butterfield Google 5★ ~day 7 since posting; Haylee L. The Knot 1★ ~day 93 unreplied) still sit unposted — done-log grep confirms zero review-related entries since 2026-04-15 22:12.

**Two verification state changes this run:**
1. **The Knot direct fetch hit its 3rd consecutive 60s timeout — promoting to BLOCKER.** RUN_035 first failure, RUN_036 second, RUN_037 third. Per the gate's failure-handling rule, logging to `tasks/review-monitor/BLOCKERS.md` as `theknot-direct-fetch` with WebSearch fallback as the documented working alternative.
2. **Hipcamp live scrape returned "Loading..." for the first time since RUN_029** — 7 consecutive clean runs broken with a 1-run JS-render dip. Not yet a BLOCKER (threshold is 3 consecutive). Carry-forward listing state assumed unchanged based on WebSearch snippet still surfacing the same "34-acre" + "drink at the bar" copy.

---

## Platform-by-platform live state

### Google · live=130 / 4.9★ (carried from RUN_034, 4d old) · unreplied=1 (Cassie carry)
- **Live count/rating:** still 130 / 4.9★ from RUN_034's Chrome MCP read 4 days ago. No Chrome MCP this run, no Apify pull, no Places API key. Direct re-verification unavailable (BLOCKER 36th).
- **WebSearch snippet:** still anchors at "126 Google reviews, 4.9 rating" — **4th consecutive run lagging live by 4**. Snippet=126, live=130. Snippet is a stability signal, not a count source.
- **Unreplied:** 1 — Cassie Butterfield 5★ corporate-retreat review carry-forward. Done-log grep returned no review-related entries since `rancho-review-replies` RESOLVED 2026-04-15 22:12. Now ~day 7 since posting (Cassie posted ~2026-05-16 per RUN_034 identification).

### TripAdvisor · live=0 / unclaimed · price range $63-$179 (no drift, 3rd consecutive run)
- WebFetch SUCCESS. 0 reviews, unclaimed, "No reviews for this property yet", "Claim Your Listing" button visible.
- **Price range: $63 - $179** — IDENTICAL to RUN_035 + RUN_036. **No drift for 3 consecutive runs.** RUN_035's +$1 ceiling move (first $179 since RUN_024) is firmly holding.
- 24-run net drift: floor $77→$63 / ceiling $181→$179 (-$14 / -$2 — unchanged).
- Travelers' Choice text continues NOT attributed to Rancho Moonrise — 14th consecutive run after RUN_023 reframing.

### Hipcamp · LIVE FETCH FAILED — "Loading..." (1-run dip, RUN_029 pattern)
- WebFetch returned only the JS-render shell. 7 prior consecutive clean scrapes (RUN_028 + RUN_030-036) broken.
- Failure count: 1 (threshold = 3 before BLOCKER).
- WebSearch fallback confirms listing still indexed; snippet text still carries voice/data violations:
  - "34-acre ranch" (VOICE-GUIDE = 36; data field = 37)
  - "unwind with a drink at the bar" (VOICE-GUIDE = bar is event-only)
- Carry-forward review state assumed unchanged: 0 reviews / 1 booking / host "Rancho M." / joined March 2024.

### Expedia · 8.0 INLINE (search, 7th consecutive) · Hotels.com direct BLOCKER 36
- WebSearch snippet: "solid guest review rating of 8.0 on Expedia" — 7th consecutive inline confirmation.
- Hotels.com listing ho2867109568 still active in search.
- Hotels.com direct fetch NOT re-attempted (BLOCKER pattern established at 35 → 36th).

### Facebook · 5 reviews / 100% recommend INLINE (search, 18th consecutive)
- WebSearch snippet: "100% recommend rating from 5 reviews" — 18th consecutive run inline after RUN_018 one-run dip.

### The Knot · listing live · Haylee L. 1★ presumed STILL unreplied · **NEW BLOCKER**
- **Direct WebFetch: TIMEOUT (60s) — 3rd consecutive timeout.** RUN_035 = 1st, RUN_036 = 2nd, RUN_037 = 3rd. **Triggers BLOCKER** per Re-Verify Gate's "3 consecutive verification failures" rule. Logging to `tasks/review-monitor/BLOCKERS.md`.
- WebSearch fallback confirmed review remains live:
  - Body text "neighboring property played extremely loud amplified music from early afternoon until after midnight" surfaces in search summary
  - "If the level of neighboring sound occurred during their wedding weekend, it would have easily ruined the entire event" surfaces
  - Reviewer name "Haylee" appears in unrelated context (Haylee Pham TikTok book reviewer); for the Rancho Moonrise result the snippet body uses third-person ("the reviewer")
- **No Rancho Moonrise-attributed owner response indexed** in any search query today.
- **Conclusion:** Haylee L. review still presumed unreplied — project's running day count = ~93 (from 2026-02-26 post date).

### Airbnb · BLOCKER 36th (403)
- Not re-attempted (pattern established since 2026-04-17). FLAG_FOR_ADAM standing: open `airbnb.com/rooms/1284193976615696223` in a browser and confirm whether it is a Rancho Moonrise listing.

---

## Re-Verify Gate outcomes (RUN_037)

```
[2026-05-23 19:52] re-verify google-count-rating         — partial (live 4d stale) — live=130@4.9 (RUN_034 carry) snippet=126 prior=130@4.9 / snippet=126
[2026-05-23 19:52] re-verify google-unreplied            — still_true (done-log)   — live=1 (Cassie carry, day 7) prior=1
[2026-05-23 19:52] re-verify tripadvisor-status          — still_true              — live=0 unclaimed          prior=0 unclaimed
[2026-05-23 19:52] re-verify tripadvisor-price-range     — still_true (no drift)   — live=$63-$179 (3rd run)  prior=$63-$179
[2026-05-23 19:52] re-verify tripadvisor-travelers-choice — still_true             — live=boilerplate (14th)  prior=boilerplate (13th)
[2026-05-23 19:52] re-verify hipcamp-state               — failed (1st dip)        — Loading... shell only; carry-forward 0 reviews/1 booking
[2026-05-23 19:52] re-verify expedia-rating              — still_true (inline)     — live=8.0 (7th consecutive) prior=8.0 (6th consecutive)
[2026-05-23 19:52] re-verify facebook-state              — still_true (inline)     — live=5/100% (18th consec) prior=5/100% (17th consec)
[2026-05-23 19:52] re-verify theknot-haylee-unreplied    — still_true (search-only) — live=review-text-surfaced no-reply-indexed (day ~93) prior=still_true (day 91)
[2026-05-23 19:52] re-verify theknot-direct-fetch        — BLOCKED (3rd consecutive) — 60s timeout — NEW BLOCKER OPENED
[2026-05-23 19:52] re-verify airbnb-existence            — BLOCKED                 — 36th consecutive (no live attempt)
[2026-05-23 19:52] re-verify hotels-com-direct           — BLOCKED                 — 36th consecutive (no live attempt)
```

Verifications summary: still_true=7, partial=1, blocked=3 (Knot now blocker), failed=1 (Hipcamp 1-run dip), resolved=0.

---

## Carry-Forward — both still unposted at end-of-RUN_037

> **Done-log check:** `grep -i "review\|cassie\|haylee\|knot" /Users/adamstyer/Documents/rancho-moonrise/rancho-done-log.md | tail -10` — most recent review-related entry remains `rancho-review-replies` RESOLVED 2026-04-15 22:12. Both drafts below are presumed still un-posted.

### 1. Cassie Butterfield · Google 5★ · ~2026-05-16 · day ~7 unposted
- Original draft: `brand/review-reports/2026-05-19-review-report.md` § "Google · Cassie Butterfield"
- Status: voice-clean, ship-as-is. 30-second post in GBP dashboard.
- Re-flagging without re-writing.

### 2. Haylee L. · The Knot 1★ · 2026-02-26 · day ~93 unposted
- Original draft: `brand/review-reports/2026-05-19-review-report.md` § "The Knot · Haylee L."
- Status: needs Adam's 2-minute edit decision on the "we're flagging neighboring-property activity..." sentence — commit publicly to that operational change, or soften it. Rest of draft is voice-clean.
- Re-flagging without re-writing.

---

## FLAG_FOR_ADAM (escalating, day 5)

> Both drafts have now been ready and unposted across RUN_034 → RUN_037 (5 calendar days). Per Adam's standing feedback memory `feedback_stale_flags.md` — re-verify any flag that's appeared 2+ runs before surfacing again. Both items have been re-verified today (Cassie via done-log signal + Google live-count carry; Haylee via WebSearch confirming review still live) — the flag is not stale, it is genuinely still actionable.
>
> Cassie is 30 seconds in the GBP dashboard. Haylee is 2 minutes (one sentence-level edit). After posting, please use the briefing-page "Mark Done" flow so this monitor stops carrying them forward.

---

## Files written this run
- `tasks/review-monitor/raw/2026-05-23/` — 4 snapshot files (tripadvisor.md, hipcamp.md, the-knot.md, web-search-snippets.md)
- `brand/review-reports/2026-05-23-review-report.md` — this file
- `brand/review-aggregate.json` — RUN_037 bump (see write contract)
- `site/admin/dashboard-state.json` — RUN_037 bump
- `tasks/review-monitor/session-log.md` — RUN_037 entry
- `tasks/review-monitor/BLOCKERS.md` — **NEW BLOCKER entry: `theknot-direct-fetch`**
- `CONTEXT.md` — "Last Worked On" review-monitor line replaced with RUN_037 summary
- `CHANGELOG.md` — one dated bullet appended
