# rancho-competitive-weekly — 2026-06-08

Read-only weekly competitive intel. GOALS.md (week of 5/18) pauses Rancho *active site work*; `rancho-competitive-weekly` is not in the explicit pause list and this is a read-only report task, so it runs per CLAUDE.md ("automated tasks continue unless GOALS.md explicitly pauses them"). Precedent: 6/1 competitive-weekly ran in full.

Tooling: firecrawl installed but unauthenticated (headless run, no user to complete browser login) → fell back to WebSearch/WebFetch. Research fanned out across 3 parallel general-purpose subagents (SERP rankings; listing/curation state; competitor accommodation pages).

## Live liveness (curl)
- apex https://ranchomoonrise.com/ → 200, `server: Vercel`, `x-vercel-cache: HIT` (age 6528)
- www → 308 → apex
- /corporate-retreats/ → 200 · /safari-tents-near-austin/ → 200 · /sitemap.xml → 200

## Re-Verify Gate — one line per claim (live=June 8, prior=June 1)
- re-verify rancho-resortpass — still_true — live=dormant/0-products/3-star/pool 10–6 prior=same
- re-verify lucky-arrow-resortpass — partial(CHANGED) — live=dormant+daily Pool 12–10pm added prior=Fri–Sun bar 2–6pm only
- re-verify hipcamp-curated-20 — still_true — live=identical set, Lucky Arrow #8, Rancho absent (4th read) prior=Lucky Arrow #8 new
- re-verify camp-lucy-corporate-serp — resolved — live=page live but OFF corporate SERP after 1 week prior=NEW on top 10 → done-log RESOLVED
- re-verify safari-for-the-soul-count — still_true — live=ambiguous (Sabi Nights page titled "Yurt" / body "safari tent") prior=ambiguous 1–2+3–4+1
- re-verify walden-four-types-copy — resolved(copy) — live="four accommodation types" phrase gone, 3 named prior=four-claimed/three-named inconsistency
- re-verify spoon-mountain-weekend-page — still_true — live=page 200 unchanged; OUT broad term, #1 narrow "romantic" term prior=OUT broad term
- re-verify yurtopian-corporate — still_true — live=10 yurts Dripping Springs, corp page off SERP 4th wk prior=off 3rd wk
- re-verify retreat-on-the-hill — still_true — live=11 named units prior=11 units
- re-verify rancho-nonbrand-brand — still_true — live=0/5 non-brand, #1 brand prior=0/5, #1
- re-verify landing-page-indexing — still_true — live=/corporate-retreats/ 38d + /safari-tents-near-austin/ 43d uncrawled prior=31d+36d (site: path-filter approximate)

Summary: 7 still_true, 2 CHANGED (Lucky Arrow hours, Walden copy), 1 resolved (Camp Lucy SERP), 1 done-log RESOLVED line appended.

## New findings
- Corporate SERP churn: Camp Lucy out after 1 wk; Peaceful Waters + 7744 Ranch in; Element Ranch #1, Crystal Creek hold; Yurtopian off 4th wk.
- Glamping SERP: Camposanto ATX + Yurtopian off; Green Acres #2 (now ranking) + TX Parks guide in; Hipcamp listicle #1→#4, Udoscape #1.
- Safari-tent SERP: Spoon Mountain new ~#5; Safari for the Soul #1 (two slots via second domain).
- Spoon Mountain reframe: #1 on narrow "romantic weekend getaways near austin," out of broad term — durable long-tail not broad volume.

## Outputs
- site/competitive-intelligence.md rewritten (June 8)
- Intel card dual-written to site/improvement-plan.html (sovereign) + client-ops mirror (byte-identical, diff-verified)
- rancho-done-log.md: camp-lucy-corporate-serp RESOLVED
- CONTEXT.md / CHANGELOG.md / TODO.md updated

## Improvement-plan task IDs
No meaningful advancement on any named SEO task (s1–s8). rancho-seo-s7-aeo-baseline: re-verified the SERP/indexing baseline (still 0/5 non-brand, both money pages uncrawled) — monitoring only, no progress logged (consistent with prior weeks; nothing advanced).
