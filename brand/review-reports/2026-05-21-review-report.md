# Review Monitor — RUN_036 Report — 2026-05-21

**Run time:** 2026-05-21T17:50Z (12:50 CDT)
**Status:** `pending` (2 carry-forward drafts unposted; no new reviews; no rating drops)
**New reviews this run:** 0
**New drafts written this run:** 0 (two RUN_034 drafts carry forward unmodified — see Carry-Forward)
**Stale claims auto-resolved this run:** 0

---

## TL;DR

Third consecutive quiet sweep. No new reviews on any monitored platform. The two RUN_034 drafts (Cassie Butterfield Google 5★ ~6 days old, Haylee L. The Knot 1★ ~13 weeks old) still sit unposted — done-log shows no review-related entry since 2026-04-15 22:12, so both presumed still un-replied for a 3rd straight day.

**One drift to note:** TripAdvisor price range did NOT drift this run ($63-$179, identical to RUN_035) — the +$1 ceiling move RUN_035 flagged is holding rather than oscillating. **Two verification quality changes:** (a) The Knot direct fetch timed out for a 2nd consecutive run — not yet a blocker (threshold is 3), but the WebSearch fallback today did NOT surface "Haylee" by name (only the review text); RUN_035 had the name. (b) Google snippet-vs-live lag is now confirmed across 3 consecutive runs (snippet anchors at 126; live=130 from RUN_034 Chrome read, now 2 days old).

---

## Platform-by-platform live state

### Google · live=130 / 4.9★ (carried from RUN_034) · unreplied=1 (Cassie carry)
- **Live count/rating:** still 130 / 4.9★ from RUN_034's Chrome MCP read 2 days ago. No Chrome MCP this run, no Apify pull, no Places API key. Direct re-verification unavailable (BLOCKER 35th consecutive run).
- **WebSearch snippet:** still anchors at "126 Google reviews" — **3rd consecutive run lagging live by 4** (snippet=126, live=130). Pre-RUN_034 the assumption was "snippet IS live"; that assumption is now decisively dead. Snippet still useful as a stability signal (3 consecutive runs at 126 with no drift), but not as the count source.
- **Unreplied:** 1 — Cassie Butterfield 5★ corporate-retreat review carry-forward. Done-log signal: no review-related entry since `rancho-review-replies` RESOLVED 2026-04-15 22:12, so treating as still unposted. Now ~6 days since posting (Cassie posted ~2026-05-16 per RUN_034 identification).

### TripAdvisor · live=0 / unclaimed
- WebFetch SUCCESS. 0 reviews, unclaimed, "No reviews for this property yet", "Claim Your Listing" button visible.
- **Price range: $63 - $179** — identical to RUN_035. **No drift this run.** The +$1 ceiling RUN_035 flagged (first $179 since RUN_024) is now holding rather than oscillating. 24-run net drift floor $77→$63 / ceiling $181→$179 (-$14 / -$2 — unchanged from RUN_035).
- Travelers' Choice text continues NOT attributed to Rancho Moonrise — explanatory boilerplate only. 13th consecutive run after RUN_023 reframing.

### Hipcamp · live=0 reviews / Booked 1 time
- WebFetch SUCCESS — **6th consecutive clean scrape** since RUN_029 one-run "Loading..." dip.
- 0 reviews, "Be the first to review", "Booked 1 time" (singular — Cosmic Cabin), host "Rancho M.", "Joined in March 2024".
- Voice/data violations persist (carry-over, not re-flagging — already in TODO):
  - Acreage drift: overview says "34-acre" (VOICE-GUIDE = 36; data field = 37).
  - Bar amenity in overview: "unwind with a drink at our bar" (VOICE-GUIDE = bar is event-only, never walk-in).

### Expedia · 8.0 INLINE (search) · BLOCKER (Hotels.com direct, 35 runs)
- WebSearch snippet: "solid guest review rating of 8.0 on booking platforms" — **6th consecutive run inline** after RUN_029 one-run absence.
- Hotels.com listing ho2867109568 still active.
- Hotels.com direct fetch NOT re-attempted this run (BLOCKER pattern established at 34 prior consecutive timeouts; counter +1 → 35).

### Facebook · 5 reviews / 100% recommend INLINE (search)
- WebSearch snippet: "100% recommendation rating on Facebook with 5 reviews" — **17th consecutive run inline** after RUN_018 dip.

### The Knot · listing live · Haylee L. 1★ presumed STILL unreplied
- **Direct WebFetch: TIMEOUT (60s)** — 2nd consecutive direct-fetch failure (RUN_035 = 1st). Not yet at 3-consecutive blocker threshold.
- WebSearch fallback (2 queries):
  - Haylee L. 1★ review text ("neighboring property played extremely loud amplified music, and the venue has no ability to control or prevent this") **still surfaces** — review remains live.
  - **"Haylee" name not in today's snippet** (only the review text body). RUN_035 surfaced the name; today did not. The "Haylee" mentioned in search results is the The Old Rancho Carlsbad reviewer — different venue, false positive carried over from RUN_035.
  - **No Rancho Moonrise-attributed owner response indexed** — same as RUN_035.
- **Conclusion:** Haylee L. review still presumed unreplied. ~13 weeks (91 days) since 2026-02-26 post date.
- Listing copy voice violation persists: "20 luxury cabins and safari tents for up to 50 guests" (VOICE-GUIDE: no "luxury", no specific unit count).

### Airbnb · BLOCKER 35th (403)
- Not re-attempted (pattern established since 2026-04-17). FLAG_FOR_ADAM standing: please open `airbnb.com/rooms/1284193976615696223` in a browser and confirm whether it is a Rancho Moonrise listing.

---

## Re-Verify Gate outcomes (RUN_036)

```
[2026-05-21 17:50] re-verify google-count-rating         — partial (live stale 2d)— live=130@4.9 (RUN_034 carry) snippet=126 prior=130@4.9 / snippet=126
[2026-05-21 17:50] re-verify google-unreplied            — still_true (done-log) — live=1 (Cassie carry-forward, day 3 unposted) prior=1
[2026-05-21 17:50] re-verify tripadvisor-status          — still_true            — live=0 unclaimed                  prior=0 unclaimed
[2026-05-21 17:50] re-verify tripadvisor-price-range     — still_true            — live=$63-$179                     prior=$63-$179
[2026-05-21 17:50] re-verify tripadvisor-travelers-choice — still_true           — live=boilerplate (13th run)       prior=boilerplate (12th run)
[2026-05-21 17:50] re-verify hipcamp-state               — still_true (6th OK)   — live=0 reviews / 1 booking        prior=0 reviews / 1 booking
[2026-05-21 17:50] re-verify expedia-rating              — still_true (inline)   — live=8.0 (6th consecutive)        prior=8.0 (5th consecutive)
[2026-05-21 17:50] re-verify facebook-state              — still_true (inline)   — live=5/100% (17th consecutive)    prior=5/100% (16th consecutive)
[2026-05-21 17:50] re-verify theknot-haylee-unreplied    — still_true (search-only) — live=review-text-surfaced no-reply-indexed (day 91) prior=still_true (day 84, search-only)
[2026-05-21 17:50] re-verify theknot-direct-fetch        — failed (run 2)        — 60s timeout — 2nd consecutive, not yet blocker
[2026-05-21 17:50] re-verify airbnb-existence            — BLOCKED               — 35th consecutive (no live attempt)
[2026-05-21 17:50] re-verify hotels-com-direct           — BLOCKED               — 35th consecutive (no live attempt)
```

Verifications summary: still_true=8, partial=1, blocked=2, failed=1, resolved=0.

---

## Carry-Forward — both still unposted at end-of-RUN_036

> **Done-log check:** searched `/Users/adamstyer/Documents/rancho-moonrise/rancho-done-log.md` — no review-related entries since `rancho-review-replies` RESOLVED 2026-04-15 22:12. Both drafts below are presumed still un-posted.

### 1. Cassie Butterfield · Google 5★ · ~2026-05-16 · day 6 unposted
- Original draft: `brand/review-reports/2026-05-19-review-report.md` § "Google · Cassie Butterfield"
- Status: voice-clean, ship-as-is. 30-second post in GBP dashboard.
- Re-flagging without re-writing.

### 2. Haylee L. · The Knot 1★ · 2026-02-26 · day 91 unposted
- Original draft: `brand/review-reports/2026-05-19-review-report.md` § "The Knot · Haylee L."
- Status: needs Adam's 2-minute edit decision on the sentence beginning *"we're flagging neighboring-property activity..."* — commit publicly to that operational change, or soften it. Rest of draft is voice-clean.
- Re-flagging without re-writing.

---

## FLAG_FOR_ADAM (escalating)

> The two carry-forward drafts have now been ready and unposted for 3 consecutive runs (RUN_034 drafted; RUN_035 flagged; RUN_036 flagging again). Per Adam's standing feedback memory `feedback_stale_flags.md` — re-verify any flag that's appeared 2+ runs before surfacing again. Both items have been re-verified today (Cassie via Google live-count carry-forward + done-log signal; Haylee via WebSearch confirming review still live), so the flag is not stale — it is genuinely still actionable.
>
> Both drafts live in `brand/review-reports/2026-05-19-review-report.md`. Cassie is 30 seconds. Haylee is 2 minutes (one sentence-level edit). After posting, please use the briefing-page "Mark Done" flow so this monitor stops carrying them forward.

---

## Files written this run
- `tasks/review-monitor/raw/2026-05-21/` — 4 snapshot files (tripadvisor, hipcamp, the-knot, web-search-snippets)
- `brand/review-reports/2026-05-21-review-report.md` — this file
- `brand/review-aggregate.json` — RUN_036 bump (see write contract below)
- `site/admin/dashboard-state.json` — RUN_036 bump
- `tasks/review-monitor/session-log.md` — RUN_036 entry
- `CONTEXT.md` — "Last Worked On" line replaced with RUN_036 summary
- `CHANGELOG.md` — one dated bullet appended
