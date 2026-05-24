# Review Monitor — RUN_038 Report — 2026-05-24

**Run time:** 2026-05-24T16:28Z (2026-05-24 11:28 CDT)
**Status:** `pending` (2 carry-forward drafts still unposted; no new reviews; no rating drops)
**New reviews this run:** 0
**New drafts written this run:** 0 (two RUN_034 drafts carry forward — re-flagging without re-writing)
**Stale claims auto-resolved this run:** 0
**New BLOCKER opened:** none (Hipcamp on 2-of-3 dip — one more failure = BLOCKER)

---

## TL;DR

Fifth consecutive quiet sweep. No new reviews on any monitored platform. The two RUN_034 drafts (Cassie Butterfield Google 5★ ~day 8 since posting; Haylee L. The Knot 1★ ~day 94 unreplied) still sit unposted — done-log grep confirms zero review-related entries since 2026-04-15 22:12.

**Two verification state changes this run:**
1. **TripAdvisor price ceiling drifted $179 → $180** (+$1). First drift after 3 consecutive no-drift runs (RUN_035-037 all at $63-$179). Floor unchanged at $63. Ceiling has now moved 4 times in 25 tracked runs (net -$1 from baseline $181).
2. **Hipcamp live scrape returned "Loading..." shell for the 2nd consecutive run.** RUN_037 = 1st dip, RUN_038 = 2nd. Threshold is 3 consecutive — one more failure = BLOCKER opened.

**One verification state continuity:** The Knot direct fetch hit its **4th consecutive timeout** — BLOCKER `theknot-direct-fetch` (opened RUN_037) remains active. WebSearch fallback continues to surface the Haylee L. review body text confirming the review remains live; reviewer name and owner-reply state remain unverifiable via search-only.

---

## Platform-by-platform live state

### Google · live=130 / 4.9★ (carried from RUN_034, 5d old) · unreplied=1 (Cassie carry)
- **Live count/rating:** still 130 / 4.9★ from RUN_034's Chrome MCP read 5 days ago. No Chrome MCP this run, no Apify pull, no Places API key. Direct re-verification unavailable (BLOCKER 37th).
- **WebSearch snippet:** "Rancho Moonrise has a 4.9-star rating with 126 reviews on Google" — **5th consecutive run lagging live by 4**. Snippet=126, live=130. Snippet is a stability signal, not a count source.
- **Unreplied:** 1 — Cassie Butterfield 5★ corporate-retreat review carry-forward. Done-log grep returned no review-related entries since `rancho-review-replies` RESOLVED 2026-04-15 22:12. Now ~day 8 since posting (Cassie posted ~2026-05-16 per RUN_034 identification).

### TripAdvisor · live=0 / unclaimed · **price range $63-$180 (+$1 ceiling drift)**
- WebFetch SUCCESS. 0 reviews, unclaimed, "Is this your business? / Claim Your Listing" visible.
- **Price range: $63 - $180** — **+$1 ceiling drift** from RUN_035-037's stable $63-$179. First drift after 3 no-drift runs. Floor unchanged at $63 cumulative low.
- 25-run net drift: floor $77→$63 (-$14); ceiling $181→$180 (-$1, narrowed from -$2 at RUN_037).
- Travelers' Choice text continues NOT attributed to Rancho Moonrise — 15th consecutive run after RUN_023 reframing.

### Hipcamp · LIVE FETCH FAILED — "Loading..." (2nd consecutive, threshold 3)
- WebFetch returned only the JS-render shell. RUN_037 = 1st dip, RUN_038 = 2nd. 7 prior consecutive clean scrapes (RUN_028 + RUN_030-036).
- Failure count: 2 (threshold = 3 before BLOCKER). One more failure next run = BLOCKER.
- WebSearch fallback confirms listing still indexed; snippet text still carries voice/data violations:
  - "34-acre ranch" (VOICE-GUIDE = 36; data field = 37)
  - "unwind with a drink at the bar" (VOICE-GUIDE = bar is event-only)
- Carry-forward review state assumed unchanged from RUN_036 last successful scrape: 0 reviews / 1 booking (Cosmic Cabin) / host "Rancho M." / joined March 2024.

### Expedia · 8.0 INLINE (search, 8th consecutive) · Hotels.com direct BLOCKER 37
- WebSearch snippet: "a solid guest review rating of 8.0 on Expedia" — 8th consecutive inline confirmation.
- Hotels.com listing ho2867109568 still active in search.
- Hotels.com direct fetch NOT re-attempted (BLOCKER pattern established at 36 → 37th).

### Facebook · 5 reviews / 100% recommend INLINE (search, 19th consecutive)
- WebSearch snippet: "100% recommend rating on Facebook with 5 reviews" — 19th consecutive run inline after RUN_018 one-run dip.

### The Knot · listing live · Haylee L. 1★ presumed STILL unreplied · BLOCKER ongoing
- **Direct WebFetch: TIMEOUT (60s) — 4th consecutive timeout.** RUN_035 = 1st, RUN_036 = 2nd, RUN_037 = 3rd (BLOCKER opened), RUN_038 = 4th. BLOCKER `theknot-direct-fetch` remains active.
- WebSearch fallback confirmed review remains live:
  - Body text "neighboring property played extremely loud amplified music" surfaces in search summary
  - "the venue has no ability to control or prevent this and cannot guarantee it wouldn't happen during a wedding weekend" surfaces
  - "This risk was never disclosed to us before booking" surfaces
  - "If quiet and remoteness are important to you, ask very specific questions and get guarantees in writing" surfaces
  - Reviewer name "Haylee" surfaces only in unrelated context (Haylee Pham TikTok); Rancho-attributed snippets use "the reviewer" / "one couple"
- **No Rancho Moonrise-attributed owner response indexed** in any search query today.
- **Conclusion:** Haylee L. review still presumed unreplied — running day count = ~94 (from 2026-02-26 post date).

### Airbnb · BLOCKER 37th (403)
- Not re-attempted (pattern established since 2026-04-17). FLAG_FOR_ADAM standing: open `airbnb.com/rooms/1284193976615696223` in a browser and confirm whether it is a Rancho Moonrise listing.

---

## Re-Verify Gate outcomes (RUN_038)

```
[2026-05-24 11:28] re-verify google-count-rating         — partial (live 5d stale) — live=130@4.9 (RUN_034 carry) snippet=126 prior=130@4.9 / snippet=126
[2026-05-24 11:28] re-verify google-unreplied            — still_true (done-log)   — live=1 (Cassie carry, day 8) prior=1
[2026-05-24 11:28] re-verify tripadvisor-status          — still_true              — live=0 unclaimed          prior=0 unclaimed
[2026-05-24 11:28] re-verify tripadvisor-price-range     — partial (+$1 ceiling)   — live=$63-$180             prior=$63-$179
[2026-05-24 11:28] re-verify tripadvisor-travelers-choice — still_true             — live=boilerplate (15th)   prior=boilerplate (14th)
[2026-05-24 11:28] re-verify hipcamp-state               — failed (2nd dip)        — Loading... shell only; carry-forward 0 reviews/1 booking
[2026-05-24 11:28] re-verify expedia-rating              — still_true (inline)     — live=8.0 (8th consecutive) prior=8.0 (7th consecutive)
[2026-05-24 11:28] re-verify facebook-state              — still_true (inline)     — live=5/100% (19th consec) prior=5/100% (18th consec)
[2026-05-24 11:28] re-verify theknot-haylee-unreplied    — still_true (search-only) — live=review-text-surfaced no-reply-indexed (day ~94) prior=still_true (day ~93)
[2026-05-24 11:28] re-verify theknot-direct-fetch        — BLOCKED (4th consec)    — 60s timeout — BLOCKER ongoing (opened RUN_037)
[2026-05-24 11:28] re-verify airbnb-existence            — BLOCKED                 — 37th consecutive (no live attempt)
[2026-05-24 11:28] re-verify hotels-com-direct           — BLOCKED                 — 37th consecutive (no live attempt)
```

Verifications summary: still_true=6, partial=2 (Google live-staleness + TripAdvisor +$1 ceiling drift), blocked=3, failed=1 (Hipcamp 2nd consecutive dip), resolved=0.

---

## Carry-Forward — both still unposted at end-of-RUN_038

> **Done-log check:** `grep -i "review\|cassie\|haylee\|knot" /Users/adamstyer/Documents/rancho-moonrise/rancho-done-log.md | tail -10` — most recent review-related entry remains `rancho-review-replies` RESOLVED 2026-04-15 22:12. Both drafts below are presumed still un-posted.

### 1. Cassie Butterfield · Google 5★ · ~2026-05-16 · day ~8 unposted
- Original draft: `brand/review-reports/2026-05-19-review-report.md` § "Google · Cassie Butterfield"
- Status: voice-clean, ship-as-is. 30-second post in GBP dashboard.
- Re-flagging without re-writing.

### 2. Haylee L. · The Knot 1★ · 2026-02-26 · day ~94 unposted
- Original draft: `brand/review-reports/2026-05-19-review-report.md` § "The Knot · Haylee L."
- Status: needs Adam's 2-minute edit decision on the "we're flagging neighboring-property activity..." sentence — commit publicly to that operational change, or soften it. Rest of draft is voice-clean.
- Re-flagging without re-writing.

---

## FLAG_FOR_ADAM (escalating, day 6)

> Both drafts have now been ready and unposted across RUN_034 → RUN_038 (6 calendar days). Per Adam's standing feedback memory `feedback_stale_flags.md` — re-verify any flag that's appeared 2+ runs before surfacing again. Both items have been re-verified today (Cassie via done-log signal + Google live-count carry; Haylee via WebSearch confirming review still live) — the flag is not stale, it is genuinely still actionable.
>
> Cassie is 30 seconds in the GBP dashboard. Haylee is 2 minutes (one sentence-level edit). After posting, please use the briefing-page "Mark Done" flow so this monitor stops carrying them forward.

---

## Failure counters at end of RUN_038
- `google-reviews-count` live scrape: 37 consecutive (no Places API key — BLOCKER since 2026-04-17)
- `hotels-com-direct-fetch`: 37 consecutive (no live attempt; pattern established — BLOCKER since 2026-04-17)
- `airbnb-listing-existence`: 37 consecutive (no live attempt; pattern established — BLOCKER since 2026-04-17)
- `theknot-direct-fetch`: **4 consecutive — BLOCKER ongoing** (opened 2026-05-23 RUN_037)
- `hipcamp-live-scrape`: **2 consecutive** (+1 from RUN_037; threshold is 3 — one more failure = BLOCKER)

---

## Files written this run
- `tasks/review-monitor/raw/2026-05-24/` — 4 snapshot files (tripadvisor.md, hipcamp.md, the-knot.md, web-search-snippets.md)
- `brand/review-reports/2026-05-24-review-report.md` — this file
- `brand/review-aggregate.json` — RUN_038 bump (see write contract)
- `site/admin/dashboard-state.json` — RUN_038 bump
- `tasks/review-monitor/session-log.md` — RUN_038 entry
- `CONTEXT.md` — "Last Worked On" review-monitor line replaced with RUN_038 summary
- `CHANGELOG.md` — one dated bullet appended
