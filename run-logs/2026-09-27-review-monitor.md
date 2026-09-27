# review-monitor RUN_081 — 2026-09-27 11:05 CT (started 2026-09-26 07:06 CT)

1-day gap since RUN_080. The in-app browser hung until its timeout and pushed the scrape across midnight. **No new reviews on any monitored platform.** Status stays **URGENT** on the standing condition (Haylee L. unreplied + 2 unposted drafts + Airbnb 3★ reply coverage unknown).

**Repo state:** the main checkout is still stuck mid-rebase (since 2026-09-18) and was not touched. Work was done in worktree `../rancho-moonrise-review-20260926`, cut from `origin/main` and moved to `059e613` before writing.

**Headline: `airbnb-review-text` is now a BLOCKER (3 of 3).** Aggregates are identical on a 3rd direct fetch (3.67/3 · 4.71/7 · 4.0/1, host 15 @ 4.47). Review bodies are still unreadable. Three new paths were tried and all are now closed:
- Airbnb's public `api/v2/reviews` endpoint, using the key embedded in the page, returns **HTTP 404 `route_not_found`**. It's retired.
- The raw HTML has a `StaysPdpReviewsSection` placeholder but no review JSON. The GraphQL reviews query isn't in any of the 44 initially loaded JS bundles (it's lazy-loaded).
- The in-app browser hung again (2 of 2). **Closed for unattended runs.**

Unreplied count stays `null` and no draft was written.

**Other platforms:**
- **Facebook:** 6/86% (4th consecutive).
- **The Knot:** Haylee L.'s review is still indexed verbatim with no owner response, now day 213. The 4.5/8 figure did not surface numerically (held). The banned syndicated line "20 luxury cabins and safari tents for up to 50 guests" echoed again (existing NEEDS ADAM item).
- **Hipcamp:** both voice strings present ("34-acre ranch just outside of Austin"; "a refreshing pool, a bar, and a cozy lounge area"). Count 0 held.
- **Expedia:** 8.0 (`expedia.com`-restricted).
- **TripAdvisor:** unclaimed held. The "120 acre / 15 minutes from downtown / Lonesome Dove" bleed was rejected again.
- **Google:** not re-queried (contamination discipline). The 130/4.9★ figure is now 131 days stale.

### Done-log check
No review-reply RESOLVED entries since 2026-04-15. The two drafts (Cassie Google 5★, Haylee Knot 1★) are still unposted, now day 131.

### Re-Verify Gate log

```
[2026-09-27 11:05] re-verify airbnb-aggregates                — still_true — live=3.67/3, 4.71/7, 4.0/1, host 15@4.47 prior=same
[2026-09-27 11:05] re-verify airbnb-review-reply-coverage     — not_verifiable (BLOCKER opened, 3 of 3) — live=api 404 / no review JSON / browser hung prior=not_verifiable
[2026-09-27 11:05] re-verify facebook-aggregate               — still_true — live=6/86% prior=6/86%
[2026-09-27 11:05] re-verify hipcamp-voice-violations         — still_true — live=both strings present prior=same
[2026-09-27 11:05] re-verify hipcamp-count                    — still_true — live=no count signal prior=0
[2026-09-27 11:05] re-verify theknot-haylee                   — still_true — live=indexed, no owner reply, day 213 prior=day 211
[2026-09-27 11:05] re-verify theknot-count-rating             — not_reconfirmed — live=no numeric signal prior=4.5/8 (held)
[2026-09-27 11:05] re-verify tripadvisor-status               — still_true — live=unclaimed (bleed rejected) prior=0/unclaimed
[2026-09-27 11:05] re-verify expedia-rating                   — still_true — live=8.0 (expedia.com-restricted) prior=8.0
[2026-09-27 11:05] re-verify google-reviews-count             — deliberately not re-run — carries 130@4.9, 131d stale
[2026-09-27 11:05] re-verify two-drafts-unposted              — still_true — live=day 131 prior=day 129
```

**Tally:** 8 still_true · 1 not_verifiable (now a blocker) · 1 not_reconfirmed · 1 deliberately skipped · 0 resolved. No drafts written.

### FLAG_FOR_ADAM (carried)
1. **Airbnb: two 3★ reviews on the safari tent, reply coverage unknown. The automated paths are now exhausted (blocker open).** Someone has to spend 30 seconds in the host dashboard. The only other option is paying for a rendering scraper.
2. Haylee L. 1★ on The Knot is unreplied, day 213.
3. Two drafts are unposted, day 131.
4. Facebook non-recommend review text (a 60-second fix for whoever holds the Page).
5. Swimply pool listing: active or delisted? (low)

### Ownership violation check
None found this run.

Run-log: `run-logs/2026-09-27-review-monitor.md`. Raw: WebFetch/WebSearch/curl only; the raw Airbnb HTML wasn't cached (468 KB with no review data in it).
