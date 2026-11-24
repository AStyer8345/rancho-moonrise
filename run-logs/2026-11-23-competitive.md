# rancho-competitive-weekly — 2026-11-23 (published 2026-11-24)

## Method
Harness `WebSearch`, extended mode, for every SERP read. Brand canary (`Rancho Moonrise Manor Texas`) passed first: `ranchomoonrise.com` blog and `/contact/` at #8–9 of 10. Direct page reads by browser-header `curl` (ResortPass, Lucky Arrow, Serana, 7744, Wed Society, Hipcamp, Glamping Hub, Camp Lucy all returned 200; The Knot, Yodel, WeddingWire 403). Worked from worktree `../rancho-moonrise-intel-20261123` off `origin/main`.

## Timing
Research finished about 09:45 CT on 11/23. A built-in-browser render of Lucky Arrow's `/corporate` page then hung until 11/24 ~13:25 CT. Report and card are dated by research day.

## Re-verify lines
[2026-11-23 09:40] re-verify brand-canary — still_true — live=#8-9 prior=#8-9
[2026-11-23 09:40] re-verify brand-answer-dirty — still_true — live=dirty prior=dirty
[2026-11-23 09:42] re-verify knot-banned-copy — still_true — live=#1 exact phrase (9th) prior=8th
[2026-11-23 09:43] re-verify wedsociety-carrier-404 — still_true — live=404 prior=404
[2026-11-23 09:43] re-verify wedsociety-vendor-stub — still_true — live=empty prior=empty
[2026-11-23 09:44] re-verify yodel-acreage-only — resolved — live=50 guests + 34 acres prior=34 acres only
[2026-11-23 09:44] re-verify weddingwire-carrier — stale-unconfirmed — live=listing URL under category title, 403 prior=not reproduced
[2026-11-23 09:44] re-verify hotels-com-clean — still_true — live=clean (9th) prior=8th
[2026-11-23 09:43] re-verify resortpass-rancho — still_true — live=$20/$15 9.4/57 prior=same
[2026-11-23 09:43] re-verify resortpass-lucky-arrow — still_true — live=$35/$75/$175/$90 9.2/224 prior=same
[2026-11-23 09:43] re-verify lucky-arrow-identity — still_true — live=41 stays, 3 safari tents prior=same
[2026-11-23 09:43] re-verify lucky-arrow-corporate-pricing — stale — live=unreadable (2nd failure) prior=STALE:2026-10-16
[2026-11-23 09:43] re-verify serana-no-price — still_true — live=flat package, up to 9 (7th) prior=6th
[2026-11-23 09:43] re-verify 7744-ranch — still_true — live=100/10 vs 18/20 min prior=same
[2026-11-23 09:42] re-verify camp-lucy-absent-head-term — still_true — live=absent (3rd) prior=absent
[2026-11-23 09:42] re-verify corporate-head-term-2-urls — still_true — live=#8,#9 prior=#8,#9
[2026-11-23 09:40] re-verify corporate-venue-kw-2-urls — partial — live=landing #7 prior=landing #7 + blog #8
[2026-11-23 09:42] re-verify corporate-ranch-variant-4-urls — partial — live=2 URLs (#4,#5) prior=4 URLs
[2026-11-23 09:40] re-verify baseline-glamping-near-austin-tx — resolved — live=absent ("Texas" variant #7) prior=#6
[2026-11-23 09:40] re-verify baseline-pool-day-pass-absent — resolved — live=blog #6 prior=absent
[2026-11-23 09:42] re-verify glamping-weekend-getaway-2-urls — still_true — live=#2,#7 prior=#1,#6
[2026-11-23 09:42] re-verify weekend-getaway-glamping — still_true — live=#3,#6 prior=#3,#8
[2026-11-23 09:41] re-verify safari-tent-accommodations — still_true — live=#3 (2nd) prior=#3
[2026-11-23 09:41] re-verify things-to-do-manor — still_true — live=#7 (2nd) prior=#6
[2026-11-23 09:42] re-verify wedding-200-3-urls — still_true — live=#5,#8,#9 prior=#5,#8,#9
[2026-11-23 09:44] re-verify hipcamp-curated-positions — resolved — live=LA #9, 3232 #18, Rancho absent (16th) prior=LA #10, 3232 #19
[2026-11-23 09:44] re-verify glamping-hub-absent — still_true — live=absent (search + Travis County page) prior=absent

## Baseline
6/10: #2 `/weddings/` #6, #4 landing #7, #5 pool-day-pass blog #6 (new), #6 Manor blog #7, #7 bachelorette blog #8, #10 wedding-venues blog #7. Absent: #1, #3, #8, #9.

## Not done
- Lucky Arrow corporate pricing: unreadable twice. Third failure goes to `BLOCKERS.md`.
- Competitor GBP: no live path.
- client-ops mirror: pushed, not deploying (Node 20.x).
