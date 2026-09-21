# rancho-competitive-weekly — 2026-09-21

## Scope
Weekly SERP + competitor intelligence sweep. Read `CLAUDE.md`, `CONTEXT.md`, `client-ops/templates/re-verify-before-report.md`, the 9/7 report and run-log. `GOALS.md` is not in the repo (it is the `/Users/adamstyer/Documents/GOALS.md` symlink); read there — it does not pause this task. No 9/14 report exists, so this run covers a 14-day gap.

## Method
Harness `WebSearch` for every SERP read (the only verified-working path per the re-verify runbook); `WebFetch` for direct page reads. Brand canary (`Rancho Moonrise Manor Texas`) passed first: `ranchomoonrise.com` home + blog in the result set.

## Key findings
- **Brand snippet dirty again.** The brand query — which does not contain the banned phrase, so the read is uncontaminated — returned "The ranch contains 20 luxury cabins and safari tents for up to 50 guests." Breaks the 9/7 two-clean-reads streak. The Knot returned #1 on an exact-phrase query (5th read); direct Knot fetch returned HTTP 403 (first time).
- **WeddingWire hypothesis not reproduced (0/3).** `site:weddingwire.com` exact-phrase query returned no WeddingWire URL; WeddingWire-restricted query returned the listing title only; direct fetch again fell back to a "10 Best Barn & Farm Wedding Venues in Austin" category page. **Methodology finding:** when the phrase is in the query, the engine's synthesized answer repeats it even if no returned page matches ("The search didn't return results from WeddingWire.com… Rancho Moonrise contains 20 luxury cabins…"). The 9/7 WeddingWire read used exact-phrase queries, so it is discounted. Only the returned URL set counts as evidence for phrase-in-query searches.
- **Yodel is a new lead.** `events.yodel.today/manor-tx/profile/Rancho-Moonrise/113759` returned on both exact-phrase queries; a Yodel-restricted query with no phrase in it produced "luxury cabins and safari tents that can host up to 50 guests." Page fetch 403. Snippet-level, one read.
- **ResortPass 10-point display.** Rancho 9.4 "Exceptional" / 57 reviews; Lucky Arrow 9.2 / 217. Prices unchanged ($20 / $15; $35). Two fetches of the Rancho page with different prompts returned the same value. 9.2 = 4.6 × 2 exactly; 9.4 = 4.7 × 2 vs prior 4.8 — real 0.1★ dip or rounding artifact; unresolvable, recorded as a watch.
- **Lucky Arrow:** private-events page direct fetch — $545–$650 pp/night, private buyout "beginning at $19,500 per night," 41 private / 54 double occupancy, event spaces to 200, 31 rooms + 10 yurts. ResortPass also lists Family/Adult Pool Cabana $175 (4 guests), Day Room $90 (2 guests), Family Pass $75 (4). 9/7 recorded only three products, so "newly recorded, not newly launched."
- **Serana:** direct fetch, still no price (3rd read); page addresses groups of 5–9 (max 9). 21+ claim (other domain) not re-fetched — carried.
- **7744 Ranch:** unchanged (100 guests / 10 overnight, five mobile estates, no pricing).
- **Hipcamp curated 20:** full list read; Lucky Arrow #8, Ranch 3232 #16, Rancho absent — 12th consecutive read.
- **Glamping Hub:** domain-restricted search finds no Rancho page; direct page fetch does not render property names (JS), so this check rests on the search. ~22 weeks.
- **`/safari-tents-near-austin/`:** `site:ranchomoonrise.com safari tents` → 9 owned URLs, safari-tents page absent. ~147 days by the established count. Independently re-tested (not carried).
- **`laketravisyachtrentals.com`:** fetched; eight generic destinations, no Rancho, no glamping. Closed.
- **Not verifiable:** competitor GBP posts/reviews/photos (no live path via harness); Hotels.com fetch timed out twice.

## 10-keyword baseline (phrasing per `scripts/serp-baseline.py`) vs 8/18
Ranking 3/10 (was 4/10). Loss: `wedding venue Austin TX ranch` (9 of 9 → absent of 10). Corporate retreat venue Austin TX blog 8 of 8 → #4 of 9, landing #8 also present. Bachelorette #5 → #6. Overnight event venue #4 → #6. Other six absent both times. `CONTEXT.md` Key Metrics still describes the 4/10 with the 8/17 framing — `rancho-metrics-weekly`'s to reconcile; flagged, not edited.

## Re-Verify Gate summary
6 still_true/confirmed, 1 no longer true (brand snippet clean streak), 1 not reproduced (WeddingWire), 2 partial (ResortPass ×2), 1 closed (laketravisyachtrentals), 3 carried/unverifiable (Serana 21+, Hotels.com, competitor GBP).

## Repo / dual-write verification
- **Main checkout is not usable as a base.** `git branch --show-current` is empty (detached HEAD at `157efd1`); vs `origin/main` (`f829bc8`) it is 17 behind / 9 ahead. The 9 local-only commits are notebooklm sync commits, a duplicate of review-monitor RUN_078 (origin has the rebased `1ffb25a`), and **`Weekly metrics update — 2026-09-20` (`157efd1`), which is not on origin/main.** Did not touch the checkout. Cut a detached worktree off `origin/main` (`f829bc8`) and committed from there. `run-logs/notebooklm-sync.md` modified in the checkout — not mine, untouched.
- Wrote `site/competitive-intelligence.md`; regenerated `.html` via `scripts/render-competitive-report.py`.
- Inserted the Intel card into `site/improvement-plan.html` (worktree) and `client-ops/clients/rancho-moonrise/improvement-plan.html`; card HTML checked byte-identical (4,962 chars).
- Pathspec commits only; push to `origin/main` for both repos, verified at the destination (see CHANGELOG / final status).

## Improvement-plan task IDs
No done-log PROGRESS lines. The 10-keyword SERP re-measure touches `rancho-seo-s7-aeo-baseline` (monthly tracking) but covers the SERP half only — no AEO-citation measurement — and site-daily/metrics-weekly own that task. `rancho-p1-05-tripadvisor-weddingwire`: claiming is human-only; no new discovery.

## Done-log entries written
- `brand-snippet-clean-2026-09-07` — RESOLVED (claim no longer true)
- `weddingwire-banned-copy-2026-09-07` — RESOLVED (not reproduced; downgraded to unconfirmed)
