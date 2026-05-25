# Review Monitor — RUN_039 Report — 2026-05-25

**Run time:** 2026-05-25T16:00Z (2026-05-25 11:00 CDT)
**Status:** `pending` (2 carry-forward drafts still unposted; no new reviews; no rating drops)
**New reviews this run:** 0
**New drafts written this run:** 0 (two RUN_034 drafts carry forward — re-flagging without re-writing)
**Stale claims auto-resolved this run:** 0
**New BLOCKER opened:** none (Hipcamp scrape recovered — failure counter resets 2 → 0)

---

## TL;DR

Sixth consecutive quiet sweep. No new reviews on any monitored platform. The two RUN_034 drafts (Cassie Butterfield Google 5★ ~day 9 since posting; Haylee L. The Knot 1★ ~day 95 unreplied) still sit unposted — done-log grep re-confirms zero review-related entries since 2026-04-15 22:12.

**Three verification state changes this run:**
1. **Hipcamp live scrape RECOVERED** — clean scrape returned after 2 consecutive "Loading..." shell failures in RUN_037 + RUN_038. Failure counter resets 2 → 0. No BLOCKER opened. Pattern confirmed as transient JS-render flake, not structural. Voice/data violations confirmed STILL PRESENT in live listing (not just search snippets): "34-acre ranch" + "unwind with a drink at our bar".
2. **Google WebSearch snippet jumped 126 → 175** — same anomaly as RUN_011/012 (which also briefly hit 175 before reverting to 126 for 12 consecutive runs). Snippet precision is unreliable for count — logging as state change on the snippet field, NOT as confirmed count change. Live (130 from RUN_034 Chrome read) remains most recent authoritative value.
3. **TripAdvisor +$1 ceiling drift HOLDS** — $63-$180 unchanged from RUN_038. The +$1 drift from RUN_038 has now stabilized for 2 consecutive runs.

**One verification state continuity:** The Knot direct fetch hit its **5th consecutive timeout** — BLOCKER `theknot-direct-fetch` (opened RUN_037) remains active. WebSearch fallback today (via Facebook-query side channel) continued to surface the Haylee L. review body text confirming the review remains live; reviewer name and owner-reply state remain unverifiable via search-only.

---

## Platform-by-platform live state

### Google · live=130 / 4.9★ (carried from RUN_034, 6d old) · unreplied=1 (Cassie carry)
- **Live count/rating:** still 130 / 4.9★ from RUN_034's Chrome MCP read 6 days ago. No Chrome MCP this run, no Apify pull, no Places API key. Direct re-verification unavailable (BLOCKER 38th).
- **WebSearch snippet:** "Rancho Moonrise has 175 reviews on Google" — **STATE CHANGE: 126 → 175**, breaking the 12-consecutive-run stable baseline of 126. Same anomaly pattern as RUN_011/012 (briefly 175, reverted to 126). Snippet precision insufficient for authoritative count — logged as snippet state change, NOT as a confirmed jump.
- **Unreplied:** 1 — Cassie Butterfield 5★ corporate-retreat review carry-forward. Done-log grep returned no review-related entries since `rancho-review-replies` RESOLVED 2026-04-15 22:12. Now ~day 9 since posting (Cassie posted ~2026-05-16 per RUN_034 identification).

### TripAdvisor · live=0 / unclaimed · price range $63-$180 (ceiling drift HOLDS)
- WebFetch SUCCESS. 0 reviews, unclaimed, "Claim your listing for free…" visible.
- **Price range: $63 - $180** — unchanged from RUN_038. The +$1 ceiling drift from RUN_038 stabilizes for 2nd consecutive run.
- 25-run net drift: floor $77→$63 (-$14); ceiling $181→$180 (-$1).
- Travelers' Choice text continues NOT attributed to Rancho Moonrise — 16th consecutive run after RUN_023 reframing.

### Hipcamp · live=0 reviews · RECOVERED from 2-run dip
- WebFetch SUCCESS. Failure counter resets from 2 → 0. No BLOCKER opened (threshold was 3).
- 0 reviews / "Be the first to review" / "Cosmic Cabin Booked 1 time" / host "Rancho M." (joined March 2024).
- **Live-confirmed voice/data violations** (now directly verified, not just via search snippet):
  - "34-acre ranch" in welcome text (VOICE-GUIDE = 36)
  - "22 sites · Tent, Lodging · 37 acres" in header (data drift between welcome copy + header)
  - "unwind with a drink at our bar" (VOICE-GUIDE = bar is event-only)
- Pattern confirmation: RUN_037/038 "Loading..." shell failures were transient JS-render flakes, not a structural BLOCKER condition.

### Expedia · 8.0 INLINE (search, 9th consecutive) · Hotels.com direct BLOCKER 38
- WebSearch snippet: "a solid guest review rating of 8.0 on Expedia" — 9th consecutive inline confirmation.
- Hotels.com listing ho2867109568 still active in search.
- Hotels.com direct fetch NOT re-attempted (BLOCKER pattern established at 37 → 38th).

### Facebook · 5 reviews / 100% recommend INLINE (search, 20th consecutive)
- WebSearch snippet: "Rancho Moonrise has a 100% recommendation rate with 5 reviews" — 20th consecutive run inline after RUN_018 one-run dip.

### The Knot · listing live · Haylee L. 1★ presumed STILL unreplied · BLOCKER ongoing
- **Direct WebFetch: TIMEOUT (60s) — 5th consecutive timeout.** RUN_035 = 1st, RUN_036 = 2nd, RUN_037 = 3rd (BLOCKER opened), RUN_038 = 4th, RUN_039 = 5th. BLOCKER `theknot-direct-fetch` remains active.
- WebSearch fallback (via Facebook-query side channel — cross-platform discoverability now observed) surfaced:
  - "One guest experienced loud amplified music from a neighboring property"
  - "the venue has no ability to control or prevent this and cannot guarantee it won't happen during events"
- **No Rancho Moonrise-attributed owner response indexed** in any search query today.
- **Conclusion:** Haylee L. review still presumed unreplied — running day count = ~95 (from 2026-02-26 post date).

### Airbnb · BLOCKER 38th (403)
- Not re-attempted (pattern established since 2026-04-17). FLAG_FOR_ADAM standing: open `airbnb.com/rooms/1284193976615696223` in a browser and confirm whether it is a Rancho Moonrise listing.

---

## Re-Verify Gate outcomes (RUN_039)

```
[2026-05-25 11:00] re-verify google-count-rating         — partial (live 6d stale) — live=130@4.9 (RUN_034 carry) snippet=175 (STATE_CHANGE vs 126 baseline) prior=130@4.9 / snippet=126
[2026-05-25 11:00] re-verify google-unreplied            — still_true (done-log)   — live=1 (Cassie carry, day 9) prior=1
[2026-05-25 11:00] re-verify tripadvisor-status          — still_true              — live=0 unclaimed          prior=0 unclaimed
[2026-05-25 11:00] re-verify tripadvisor-price-range     — still_true (ceiling holds) — live=$63-$180         prior=$63-$180
[2026-05-25 11:00] re-verify tripadvisor-travelers-choice — still_true             — live=boilerplate (16th)   prior=boilerplate (15th)
[2026-05-25 11:00] re-verify hipcamp-state               — still_true (RECOVERED)  — live=0 reviews / 1 booking / 34-acre + drink-at-bar still present
[2026-05-25 11:00] re-verify expedia-rating              — still_true (inline)     — live=8.0 (9th consecutive) prior=8.0 (8th consecutive)
[2026-05-25 11:00] re-verify facebook-state              — still_true (inline)     — live=5/100% (20th consec) prior=5/100% (19th consec)
[2026-05-25 11:00] re-verify theknot-haylee-unreplied    — still_true (search-only) — live=review-text-surfaced no-reply-indexed (day ~95) prior=still_true (day ~94)
[2026-05-25 11:00] re-verify theknot-direct-fetch        — BLOCKED (5th consec)    — 60s timeout — BLOCKER ongoing (opened RUN_037)
[2026-05-25 11:00] re-verify airbnb-existence            — BLOCKED                 — 38th consecutive (no live attempt)
[2026-05-25 11:00] re-verify hotels-com-direct           — BLOCKED                 — 38th consecutive (no live attempt)
```

Verifications summary: still_true=7, partial=1 (Google snippet state change + live-staleness), blocked=3, failed=0, resolved=0.

---

## Carry-Forward — both still unposted at end-of-RUN_039

> **Done-log check:** `grep -i "review\|cassie\|haylee\|knot" rancho-done-log.md | tail -10` — most recent review-related entry remains `rancho-review-replies` RESOLVED 2026-04-15 22:12. Both drafts below are presumed still un-posted.

### 1. Cassie Butterfield · Google 5★ · ~2026-05-16 · day ~9 unposted
- Original draft: `brand/review-reports/2026-05-19-review-report.md` § "Google · Cassie Butterfield"
- Status: voice-clean, ship-as-is. 30-second post in GBP dashboard.
- Re-flagging without re-writing.

### 2. Haylee L. · The Knot 1★ · 2026-02-26 · day ~95 unposted
- Original draft: `brand/review-reports/2026-05-19-review-report.md` § "The Knot · Haylee L."
- Status: needs Adam's 2-minute edit decision on the "we're flagging neighboring-property activity..." sentence — commit publicly to that operational change, or soften it. Rest of draft is voice-clean.
- Re-flagging without re-writing.

---

## FLAG_FOR_ADAM (escalating, day 7)

> Both drafts have now been ready and unposted across RUN_034 → RUN_039 (7 calendar days). Per Adam's standing feedback memory `feedback_stale_flags.md` — re-verify any flag that's appeared 2+ runs before surfacing again. Both items have been re-verified today (Cassie via done-log signal + Google live-count carry; Haylee via WebSearch confirming review still live, surfacing today via Facebook-query side channel) — the flag is not stale, it is genuinely still actionable.
>
> Cassie is 30 seconds in the GBP dashboard. Haylee is 2 minutes (one sentence-level edit). After posting, please use the briefing-page "Mark Done" flow so this monitor stops carrying them forward.

---

## Failure counters at end of RUN_039
- `google-reviews-count` live scrape: 38 consecutive (no Places API key — BLOCKER since 2026-04-17)
- `hotels-com-direct-fetch`: 38 consecutive (no live attempt; pattern established — BLOCKER since 2026-04-17)
- `airbnb-listing-existence`: 38 consecutive (no live attempt; pattern established — BLOCKER since 2026-04-17)
- `theknot-direct-fetch`: **5 consecutive — BLOCKER ongoing** (opened 2026-05-23 RUN_037)
- `hipcamp-live-scrape`: **0 consecutive — RESET** (RUN_039 clean scrape after 2 consecutive failures in RUN_037 + RUN_038)

---

## Files written this run
- `tasks/review-monitor/raw/2026-05-25/` — 4 snapshot files (tripadvisor.md, hipcamp.md, the-knot.md, web-search-snippets.md)
- `brand/review-reports/2026-05-25-review-report.md` — this file
- `brand/review-aggregate.json` — RUN_039 bump (see write contract)
- `site/admin/dashboard-state.json` — RUN_039 bump
- `tasks/review-monitor/session-log.md` — RUN_039 entry appended
- `CONTEXT.md` — "Last Worked On" review-monitor line replaced with RUN_039 summary
- `CHANGELOG.md` — one dated bullet appended
