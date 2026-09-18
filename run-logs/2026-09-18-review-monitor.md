# Review Monitor — Run Log — 2026-09-18 (RUN_078)

09:30 CT. 6-day gap since RUN_077 (2026-09-12).

## Brand canary

PASSED — 9 owned URLs (theknot, hipcamp, facebook, do512, hotels.com, yelp, romanticspotsaustin, site itself, travelocity) plus organic description. Query: "Rancho Moonrise Manor TX".

## Per-platform re-verification

**Facebook** — 6/86% aggregate RE-SURFACED this run via `site:facebook.com` query: "Rancho Moonrise has an 86% recommendation rate based on 6 reviews on its Facebook page." This breaks a 5-consecutive-run verification gap (RUN_073–077). Value unchanged from last confirmed read (RUN_071, 2026-08-21). `facebook-aggregate-verification` blocker RESOLVED in `BLOCKERS.md`. Review body still not surfaced — `facebook-review-text` blocker remains open, no draft written.

**Hipcamp** — voice violations re-confirmed verbatim on a hipcamp.com-sourced result: "Rancho Moonrise is a 34-acre ranch located just outside of Austin, Texas" and "amenities... including a pool, bar, and lounge area." Both HELD. Count 0 still held, no count signal.

**The Knot** — Haylee L.'s review body re-confirmed still indexed verbatim ("a neighboring property played extremely loud amplified music... the venue has no ability to control or prevent this"), no owner response found. Unreplied day count 198 → 204 (29.1 weeks, from 2026-02-26). A previously-unlogged positive excerpt surfaced ("incredibly helpful, kind, and communicative... jumped in to help when things could have gone off the rails") — consistent with the existing 8-review profile, not independently confirmed as a new review; not counted as one.

**TripAdvisor** — 0/unclaimed HELD. Clean read: neither the Travelers' Choice artifact nor the cross-property bleed set resurfaced; result set contained only other Moonrise-named properties (FL/MI/CO/ND/MO), none misattributed to Rancho.

**Expedia** — only the recurring 9.0 Hotels.com-bleed value surfaced, attributed in prose to Expedia ("rated 9.0 out of 10... Wonderful"), with a new divergent review count of 14 (breakdown 10×8/1×6/2×4/1×2) — not promoted, same bleed family as RUN_073's 15-review figure. 8.0/h89565924 anchor NOT directly reconfirmed this run — held on absence of a contradicting signal. Direct fetch not attempted. Count-promotion remains a rule question with Adam.

**Google** — deliberately not re-queried (contamination discipline, RUN_070+). Authoritative 130/4.9★ now 122 days stale.

## Done-log check

Re-read `rancho-done-log.md` — no new review-reply RESOLVED entries since RUN_077 (last relevant is still 2026-04-15). Google unreplied=1, Facebook unreplied≥1, Knot unreplied=1 all HELD. Two drafts (Cassie Google 5★, Haylee Knot 1★) remain UNPOSTED, day count 116 → 122.

## Re-Verify Gate log

```
[2026-09-18 09:30] re-verify facebook-aggregate          — resolved(reconfirmed) — live=6/86% prior=NOT_SURFACED(5 runs)
[2026-09-18 09:30] re-verify hipcamp-voice-violations     — still_true — live=both strings verbatim prior=verbatim-confirmed(RUN_077)
[2026-09-18 09:30] re-verify hipcamp-count                — still_true — live=no count signal prior=0
[2026-09-18 09:30] re-verify theknot-haylee                — still_true — live=still indexed verbatim, unreplied, day 204 prior=day 198
[2026-09-18 09:30] re-verify theknot-count-rating          — not_reconfirmed — live=no numeric signal this run prior=8/4.5star (held)
[2026-09-18 09:30] re-verify tripadvisor-status             — still_true — live=0/unclaimed, clean read (no artifacts) prior=0/unclaimed
[2026-09-18 09:30] re-verify expedia-rating                 — not_reconfirmed — live=9.0 bleed only (no 8.0 signal this run) prior=8.0(reconfirmed RUN_077)
[2026-09-18 09:30] re-verify google-reviews-count            — deliberately not re-run (contamination discipline) — carries 130@4.9star, now 122d stale
[2026-09-18 09:30] re-verify two-drafts-unposted             — still_true — live=day 122 prior=day 116
```

**Tally:** 3 still_true · 1 resolved(reconfirmed) · 2 not_reconfirmed · 1 deliberately-skipped. 1 blocker resolved (facebook-aggregate-verification), 0 new reviews.

## FLAG_FOR_ADAM (5, carried)

1. Haylee L. unreplied, now day 204 / 29.1 weeks.
2. Two drafts unposted, now day 122.
3. Facebook review text still a 60-second fix — the aggregate figure is readable again but the review body itself has never been surfaced since RUN_068.
4. Expedia count-6 promotion remains a rule question with all evidence preconditions met; still with Adam.
5. Eight-plus open blockers, most naming the identical remedy (rendering/residential-proxy scraper) — still one purchase, not several workarounds.

## Ownership violation check

None found.

## Scope change NOT made unilaterally

ResortPass (53) and Expedia's confirmed pool (6) remain recommended additions to the monitored-scope ownership table in `master-agent.md` and remain **not executed** — 6th consecutive run carrying the recommendation.

## Repo hygiene note (not this task's scope)

At run start, 6 files sat uncommitted in the working tree: `api/inquiry.js`, `run-logs/notebooklm-sync.md`, `site/css/styles.css`, `site/js/main.js`, `site/pages/contact.html`, `site/pages/weddings.html`. These match the standing "NEEDS OWNER" 5-file set documented in `CONTEXT.md` plus an unrelated `notebooklm-sync.md` change. Not touched by this run — commit isolated to review-monitor's own files only (`git add` with explicit pathspec).

Raw: WebSearch-only run, no raw HTML to cache.
