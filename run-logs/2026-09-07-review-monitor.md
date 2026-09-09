# RUN_073 — rancho-review-monitor — 2026-09-07 12:55 CT

**8-day gap.** The task did not fire 8/31–9/6. Last run was RUN_072 (2026-08-30).

**No new reviews confirmed on any platform.** Brand canary passed (`"Rancho Moonrise" ranch Austin Texas` → ranchomoonrise.com returned prominently) before any absence was recorded.

**Status: `urgent`** — carried on the standing condition, not a new one. Haylee L.'s 1★ on The Knot is unreplied at **day 193 / 27.6 weeks**; two drafts sit unposted at **day 111**.

---

## The headline: a verification gap opened on Facebook's review aggregate

Facebook's 6 reviews / 86% recommend figure had been independently confirmed 5 consecutive times (RUN_068 through RUN_072). This run, 4 differently-phrased WebSearch queries and 1 direct `WebFetch` of the `/reviews` path **all failed to surface it** — the searches returned only page metadata (1,137 likes / 333 talking about it / 576 visited) or bled in Hotels.com's unrelated 9.0 rating, and the direct fetch came back truncated/JS-gated, the same failure family as the existing `facebook-review-text` blocker.

Per the Re-Verify Gate: a failed verification is not evidence of change in either direction. 6/86% is **held**, not assumed changed. Logged as `aggregate_verification_gap_count: 1` — the same 3-strikes-to-blocker discipline the direct-fetch blockers use, applied here to a search-path failure for the first time.

## Expedia: the backoff hypothesis is now fully closed

Direct fetch of the `h89565924` entity returned **HTTP 429 a 5th time**, and this attempt came after a **17-day gap** since the last one (8/21) — longer than the 9-day gap that already disconfirmed "429 may self-heal" once in RUN_072. RUN_072 explicitly said path (d) "should not be counted as a live option after one more failure." This is that failure. Path (d) is closed. What's left: (a) Adam checks the Expedia extranet directly (~30 seconds, also settles the reply-coverage and 8.0/9.0/8.6 split questions), (b) a rule change authorizing promotion on strong search-confirmation, or (c) a rendering/residential-proxy scraper purchase.

A WebSearch this run returned prose attributing "9.0 out of 10... 15 reviews" to Expedia — almost certainly the same Hotels.com-under-Expedia-label bleed documented since RUN_066 (the entity split: expedia.com h89565924 → 8.0, hotels.com ho2867109568 → 9.0). Logged as a new divergent value (15) in the existing list; not promoted to any field.

## Apple Maps: stability confirmed, attribution question closed

Third consecutive identical read: **80% overall (5 ratings)**, Accommodations 100%/4, Customer Service 100%/3, Location 100%/4. Re-checked Yelp independently a second time and got the identical single pool-day-pass review — **Yelp = 1 review**, confirmed twice now. A 1-review platform cannot be the source of a 5-rating aggregate, so the icon-based "Yelp" attribution on Apple Maps is concluded **wrong or a blend**, not merely unresolved. This closes the attribution half of the open question from RUN_072 ("next run: re-read for 2nd-run confirmation and try to resolve attribution"). The 80%/5 figure itself is still not promoted anywhere and Apple Maps remains out of this task's monitored scope — closing the attribution question doesn't change that, since the underlying number is still a first-party Apple read with no cross-platform verification of its own.

## Hipcamp: an inconclusive read, deliberately not recorded as a resolution

A domain-restricted `site:hipcamp.com` query returned listing copy (cabins, family safari tent, pool/lounge access) but for the first time in 6 straight prior confirmations, it did not reproduce the "34-acre ranch" or "a bar" verbatim strings. It also did not return corrected text ("36-acre", bar removed) — this reads as a different excerpt slice of the same page, not a copy edit. The violations are held pending a verbatim-confirming re-read next run. Count 0 held; no count signal surfaced either way.

## Held steady

- **The Knot** — Haylee L.'s review body re-confirmed live verbatim, no owner-response found. Unreplied now day 193 / 27.6 weeks (+8 days since RUN_072).
- **TripAdvisor** — 0/unclaimed held; the canonical `g56224-d33307272` listing surfaced with no count/rating in its title snippet.
- **Google** — authoritative 130/4.9★ (RUN_034, 2026-05-19) now 111 days stale. Snippet path deliberately not re-run — the contamination risk documented in RUN_070 (echoing the site's own `reviewCount: "125"`) is unchanged.
- **Airbnb** — 73rd consecutive no-attempt; 403 pattern from 2026-04-17 unchanged; NEEDS_ADAM_VERIFY standing.
- **Drafts** — two response drafts (Cassie/Google, Haylee/The Knot) unposted, now day 111.

## Cross-reference only — not this task's scrape

`rancho-competitive-weekly` independently re-verified ResortPass live today (2026-09-07) and closed its own `resortpass-access-blocked-2026-08-31` blocker: Rancho $20/$15, 4.8★/53 unchanged through the two-report 403 blackout; Lucky Arrow's review count moved 201→209. Recorded here for continuity. ResortPass stays out of this task's ownership table — 4th consecutive run carrying the recommendation to add it.

---

**Gate: 9 claims checked — 5 still_true (google, tripadvisor, theknot-review-body, airbnb, hipcamp-count) · 1 verification_gap (facebook-aggregate, 1 of 3) · 1 closed (expedia-backoff-path-d) · 1 stability-confirmed+attribution-resolved (apple_maps) · 1 inconclusive-not-resolved (hipcamp-voice-violations). 0 resolved.**

No review-log written this run — no new reviews to draft against.

**5 FLAG_FOR_ADAM (carried):**
1. Haylee L. unreplied, day 193 / 27.6 weeks.
2. Two drafts unposted, day 111.
3. Facebook review text — still a 60-second fix for whoever holds the Page; now blocking the aggregate figure too, not just the body.
4. Expedia count-6 promotion is a rule question with every evidence precondition met; the direct-scrape backoff path is now fully closed, strengthening the case for a rule decision rather than more measurement.
5. Eight open blockers, four naming the identical remedy (a rendering/residential-proxy scraper) — still one purchase, not four workarounds.

Raw notes: `tasks/review-monitor/raw/2026-09-07/scrape-notes.md`.
