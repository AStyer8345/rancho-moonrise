# rancho-competitive-weekly — 2026-06-15

**Status:** ok · 7th consecutive Rancho cruise-control week (GOALS.md week-of-5/18 pause; competitive-weekly not on the pause list → continues per rancho CLAUDE.md "automated tasks continue unless GOALS.md explicitly pauses them").

## Method
Two parallel general-purpose research agents:
- Agent A — live SERP rankings across 5 tracked keywords + narrow "romantic" term.
- Agent B — live re-verification of 9 competitor-state claims (WebFetch).

## Re-Verify Gate — claims checked live

```
[2026-06-15 09:50] re-verify rancho-resortpass-dormant — still_true — live=0 products, pool 10am-6pm prior=same
[2026-06-15 09:50] re-verify luckyarrow-resortpass-hours — still_true — live=daily pool 12-10pm + Fri-Sun bar 2-6pm, 0 products prior=same
[2026-06-15 09:50] re-verify hipcamp-zero-rotation — resolved — live=set rotated, Lucky Arrow #8→#9, Rancho absent prior=byte-identical/zero rotation
[2026-06-15 09:50] re-verify camplucy-corporate-page-live — still_true — live=200, corporate packages prior=200, corporate packages
[2026-06-15 09:50] re-verify walden-15-tents-copy-clean — still_true — live=15 tents, 3 labels, no "four types" prior=same
[2026-06-15 09:50] re-verify safari-soul-count-ambiguous — still_true — live=6 units/2 locations, Sabi tent/yurt conflict prior=same
[2026-06-15 09:50] re-verify spoon-mountain-page-live — still_true — live=200, 3 tents $245 prior=same (SERP slipped #1→~#5 narrow term)
[2026-06-15 09:50] re-verify yurtopian-corporate-page — still_true(page) — live=live, corp-retreats in nav; SERP RE-ENTERED ~#3 prior=off SERP 4 weeks
[2026-06-15 09:50] re-verify hotelscom-banned-copy — UNVERIFIED — live=fetch blocked (2x60s timeout); banned copy still in search index prior=on-page (6th week)
[2026-06-15 09:50] re-verify rancho-nonbrand-0 — still_true — live=0/4 non-brand prior=0/5
[2026-06-15 09:50] re-verify rancho-brand-1 — UNVERIFIED(watch) — live=~#7 on non-localized snapshot below aggregators prior=#1 (likely logged-out artifact)
[2026-06-15 09:50] re-verify landing-pages-uncrawled — still_true — live=45d corp / 50d safari not surfacing prior=38d/43d
```

## Headline findings
1. Broad SERP-layout shift to aggregators/listicles across all glamping terms; branded #1-holders (Udoscape, Element Ranch, Safari for the Soul) all slid beneath.
2. Hipcamp curated set rotated (streak broken); Lucky Arrow #8→#9; Rancho absent 5th read.
3. Corporate-retreat cluster churned: Sage Hill to #1, Yurtopian re-entered ~#3, LA/Crystal Creek/Moniker off.
4. Spoon Mountain lost ground both terms (off safari-tent; #1→~#5 narrow).
5. Watch item: brand SERP ~#7 owned-site reading (UNVERIFIED — non-localized snapshot).

## Writes
- `site/improvement-plan.html` — June 15 Intel card inserted after marker (sovereign).
- `client-ops/clients/rancho-moonrise/improvement-plan.html` — byte-identical mirror card.
- `site/competitive-intelligence.md` — rewritten for June 15.
- `CONTEXT.md` — competitive-weekly dated header + "What's Next" drift refresh + brand-SERP watch item.
- `CHANGELOG.md` — June 15 competitive section prepended.
- `rancho-done-log.md` — hipcamp-zero-rotation RESOLVED line (gate auto-resolution).

## Notes
- No improvement-plan task ID (rancho-seo-s6/s7, rancho-p1-05) had meaningful progress this run — pure monitoring. No PROGRESS/RESOLVED done-log lines for those IDs.
- Hotels.com on-page state could not be confirmed (bot-block); a browser-based (Chrome MCP) fetch would be needed for GSC-grade certainty.
