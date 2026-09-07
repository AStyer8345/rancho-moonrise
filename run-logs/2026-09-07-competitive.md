# rancho-competitive-weekly — 2026-09-07

## Scope
Weekly SERP + competitor intelligence sweep. Read `CLAUDE.md`, `GOALS.md`, `CONTEXT.md`'s carried "NEXT COMPETITIVE RUN (2026-09-07)" item, and `client-ops/templates/re-verify-before-report.md` before starting.

## What this run was specifically asked to do (from CONTEXT.md 8/31)
1. Do not re-propose published buyout pricing (Serana evidence base withdrawn) — re-verified, still true.
2. Day-pass underpricing FROZEN by ResortPass 403 — checked for a fetch path; found one. Both listings live again.
3. Confirm-or-drop the broad-glamping regression (3→1 owned URLs, one read) — confirmed via 2nd read, exact query, same reduced level.
4. Re-surface WeddingWire claim + Knot fix quick wins — done; also surfaced a new hypothesis that WeddingWire may carry the same banned copy as The Knot.

## Key findings
- **ResortPass unblocked.** Both `resortpass.com/hotels/rancho-moonrise` and `resortpass.com/hotels/lucky-arrow-retreat` rendered cleanly via WebFetch — no 403/Cloudflare this run. Rancho: $20/$15, 4.8★/53, unchanged from the 8/25 held value. Lucky Arrow: $35, 4.6★, review count 201→209 (+8), new $75/4-guest family bundle product.
- **Broad glamping variant.** Re-ran the exact tracked phrase ("glamping weekend getaway from Austin") rather than a nearby variant. Result: 1 owned URL (`/blog/weekend-getaways-near-austin/`), matching 8/31's already-reduced count. Engine's synthesized answer still opens naming Rancho first.
- **The Knot** — banned copy reproduced verbatim, 4th read.
- **WeddingWire — new hypothesis.** Two independent search reads (general query + `site:weddingwire.com` exact-phrase) both returned the identical Knot sentence attributed to the Rancho WeddingWire listing. Direct fetch of the listing itself still does not render (silently falls back to a category page, not an explicit 403) — so this is snippet-level, not page-level, evidence. Logged at that confidence.
- **Brand snippet** clean for a 2nd consecutive read (no banned copy in the aggregated brand-query answer). Not claimed as resolved — 2 reads only, and The Knot listing itself is still confirmed dirty this same run.
- **Hipcamp curated list** — full 20-item list read directly. Rancho absent (11th consecutive read). Lucky Arrow #8, Ranch 3232 #16 — both exactly unchanged from 8/31.
- **Glamping Hub** — still absent, ~21 weeks.
- New surface noted, not assessed: `laketravisyachtrentals.com` entered the weekend-getaway listicle SERP.
- Serana — direct fetch re-confirms no published price. One caveat: Serana's name resurfaced in this week's `corporate retreat near austin texas` answer synthesis (amenities only, no price, no URL/rank position) — noted, does not reopen the 8/31 finding.
- `/safari-tents-near-austin/` — not independently re-measured this run; carried at `rancho-site-daily`'s 2026-09-05 figure (~131 days) since that task owns the on-site indexing diagnosis end-to-end and had already exhausted it 8/31.

## Re-Verify Gate summary
Brand canary passed (`Rancho Moonrise Manor Texas` → ranchomoonrise.com present). 8 still_true, 2 blockers RESOLVED (ResortPass access — one value unchanged, one changed +8 reviews), 1 confirmed-4th-read (Knot), 1 new snippet-level finding (WeddingWire), 1 carried without re-test (safari-tents indexing, deferred to site-daily's more recent number).

## Repo / dual-write verification
- `git status` before starting: 5 pre-existing uncommitted files (api/inquiry.js, site/css/styles.css, site/js/main.js, site/pages/contact.html, site/pages/weddings.html) — the standing NEEDS OWNER set from 8/31, unchanged, left untouched, not committed as part of this run.
- Wrote `site/competitive-intelligence.md`, regenerated `site/competitive-intelligence.html` via `scripts/render-competitive-report.py` (the tool built specifically to prevent the 8/17→8/25 markdown/HTML drift failure).
- Inserted the new Intel card into both `site/improvement-plan.html` and `client-ops/clients/rancho-moonrise/improvement-plan.html`, diffed byte-identical before committing.
- Committed only the 3 files this task owns (`git add` by explicit pathspec, not `-A`).
- Pushed both repos. **Verified at the destination, not the working tree**, per `memory/feedback_verify_irreversible_at_destination.md` — the exact failure the 8/25 report itself committed:
  - `git ls-remote origin refs/heads/main` on both repos matches local HEAD after push.
  - `git show origin/main:<path>` on both repos contains the new card text.
  - Live `curl` of `ranchomoonrise.com/improvement-plan.html` and `client-ops-gold.vercel.app/clients/rancho-moonrise/improvement-plan.html` both return the new card text.

## Improvement-plan task IDs
No meaningful progress this run on `rancho-seo-s7-aeo-baseline` (not due until ~9/18), `rancho-seo-s6-gsc-sitemap` (site-daily's remit), or `rancho-p1-05-tripadvisor-weddingwire` (claiming step is human-only; no new discovery this run) — none logged to `rancho-done-log.md` for those IDs this week.

## Done-log entries written
- `resortpass-access-blocked-2026-08-31` — RESOLVED (blocker cleared, values verified per above).
