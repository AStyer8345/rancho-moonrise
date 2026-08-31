# rancho-competitive-weekly — 2026-08-31

**Status:** ok · **Brand canary:** PASSED before any absence recorded · **Prior run:** 2026-08-25 (written, never published)

---

## Headline

The August 25 report was written and never published. Its rewritten `site/competitive-intelligence.md`, its regenerated `site/competitive-intelligence.html`, and its Intel tab card all stayed on this machine. **The card was never inserted into either improvement-plan file** — the newest card on the dashboard was August 17, while the markdown had been rewritten twice underneath it.

That report's own headline "Shipped this run" claim — *"the linked report and the written report are the same document again"* — was never true in production.

It is the same failure family as the WeddingWire error that report surfaced, one layer up. The 8/25 finding was that a claim entered the record on April 6, was never re-verified, and propagated for four months. This one is narrower and worse: **a run recorded its own output as shipped without checking the destination.** `memory/feedback_verify_irreversible_at_destination.md` already names it. A file on disk is a proxy signal; a commit that reached `origin/main` is the destination.

Fixed this run — recovered 8/25 card + new 8/31 card, both inserted byte-identically into both files, markdown and HTML regenerated together, everything committed and pushed.

---

## Re-Verify Gate — 16 claims

```
[2026-08-31 10:23] re-verify serana-flat-pricing        — resolved   — live="flat package rate on request"  prior="$1000/night weekday"
[2026-08-31 10:23] re-verify competitive-dualwrite-0825 — resolved   — live=card absent in both files       prior="dual-written"
[2026-08-31 10:23] re-verify resortpass-rancho          — blocked    — live=HTTP 403 Cloudflare             prior="2 products, 4.8*/53"  → HELD
[2026-08-31 10:23] re-verify resortpass-luckyarrow      — blocked    — live=HTTP 403 Cloudflare             prior="$35, 4.6*/201"        → HELD
[2026-08-31 10:23] re-verify theknot-banned-copy        — still_true — live=verbatim, 3rd read              prior="confirmed 2nd read"
[2026-08-31 10:23] re-verify weddingwire-listing-exists — still_true — live=#1 on domain query, 2nd read     prior="listing exists"
[2026-08-31 10:23] re-verify wedding-cluster-3-urls     — still_true — live=#3/#4/#6 identical               prior="#3/#4/#6"
[2026-08-31 10:23] re-verify broad-glamping-3-urls      — changed    — live=1 owned URL (~#6)               prior="3 owned URLs"
[2026-08-31 10:23] re-verify hipcamp-curated-absent     — still_true — live=absent, 10th read                prior="absent, 9th"
[2026-08-31 10:23] re-verify glampinghub-absent         — still_true — live=absent ~20wk                     prior="~19wk"
[2026-08-31 10:23] re-verify 7744-geographic-hook       — still_true — live=verbatim + new detail            prior="verbatim"
[2026-08-31 10:23] re-verify safari-tents-unindexed     — still_true — live=~126d, 10 owned URLs never it    prior="~121d"
[2026-08-31 10:23] re-verify weddings-absent-narrow-q   — still_true — live=Ranch Austin owns 4/10 surfaces  prior="query-specific"
[2026-08-31 10:23] re-verify spoonmountain-romantic     — still_true — live=~#5 top property slot            prior="~#5 under HomeToGo"
[2026-08-31 10:23] re-verify talulamesa-glamping-3      — still_true — live=~#3 + publishes 15 acres         prior="~#3"
[2026-08-31 10:23] re-verify brand-serp-ordering        — watch      — live=owned site ~#8-9                 prior="~#7"
```

**Summary:** 9 still_true (3 with new detail) · 1 changed/regression · 1 WATCH · **2 prior claims proven false and RESOLVED** · 1 confirmed-3rd-read · **2 blocked-and-held**

---

## Discipline notes — what was deliberately *not* done

**ResortPass 403 was not recorded as a data change.** Six days ago this report read both listings cleanly and in full. Today: HTTP 403 / Cloudflare, the same block `rancho-review-monitor` hit on 8/30 and correctly identified as site-level bot detection. Rancho's `$20 / $15 / 4.8★ / 53` and Lucky Arrow's `$35 / 4.6★ / 201` are **held**, not re-verified, not moved. This is the discipline that stopped RUN_070 inventing a ResortPass decline and that RUN_071 then vindicated on the record. An access failure is not a data change.

The only corroboration available for Rancho's $20 was a 2024 review snippet. Deliberately not promoted to a current read — a three-year-old number that happens to match the held value is confirmation bias, not verification.

**Serana was confirmed by varying the query, not by retrying the fetch.** The direct fetch showed the price gone. Rather than re-fetch the same URL — which proves nothing about whether the first read was faithful — a differently-phrased search returned the full repositioning independently. Two paths, one conclusion.

**Review state was not touched.** The TripAdvisor listing URL (`d33307272`) is newly recorded because it is what `rancho-p1-05` needs to be actionable. Its review count and claim status are `rancho-review-monitor`'s and are not asserted here.

**The broad-glamping regression was not escalated.** Three owned URLs to one, on one query, on one read — and on that same query the engine's *written* answer still opens with Rancho Moonrise. Entity recognition held where the URLs did not place. That is the shape of query-level variance. It becomes real only if it reproduces on September 7.

**The brand-snippet improvement was not claimed.** This run's aggregated brand snippet was clean — 36 acres, up to 200 guests, no banned copy — for the first time. One read. Watched, not asserted. The Knot listing itself is still confirmed carrying the banned sentence.

---

## Findings

### Serana withdrew its published price and repositioned

| Attribute | Prior (through 8/25) | Live (8/31) |
|---|---|---|
| Positioning | Corporate retreats | **21+ boutique wellness retreat** |
| Price | **$1,000/night full property, weekday** | Flat package rate, quoted per enquiry |
| Units | 8 — 5 Post Oak, 3 Kampinas, 1 Field Cabin | **9** (six cabins + three Airstreams) |
| Capacity | Not stated | **Up to 20 guests** |
| Amenities | Not detailed | Saltwater pool, private spa, 1,000 sq ft gym + yoga studio |
| Domains | `seranatx.com` | `seranatx.com` **+ `seranaretreats.com`** |
| Corporate head term | ~#4 | **Not present** |

**Strategic consequence, stated rather than smoothed:** this removes the entire evidence base for the "consider publishing flat buyout pricing" recommendation. The one comparable operator that tried transparent buyout pricing stopped and moved upmarket. That is evidence *against* the recommendation, from the only source that ever supplied evidence *for* it.

### Verification surface — four blockers, one remedy

| Platform | Failure | Since |
|---|---|---|
| The Knot | 60s timeout | 2026-05-23 |
| Hotels.com | 60s timeout | 2026-04-17 |
| WeddingWire | 403 | 2026-08-25 |
| **ResortPass** | **403 / Cloudflare** | **2026-08-31 (new)** |

All four are third-party listings carrying Rancho's own off-domain description, pricing, or review pool. `rancho-review-monitor` reached the same count from its own evidence on 8/30 (*"one purchase against six platforms"*). Two tasks converging on one purchase from independent evidence is as strong a signal as this system generates.

The concrete cost: ResortPass closing froze this report's single most actionable number — the 43% day-pass underpricing.

### Rankings

Wedding cluster **reproduced exactly** six days apart (blog ~#3, `/weddings/` ~#4, home ~#6), promoting the 8/25 three-URL finding from a new measurement to a confirmed one. Corporate ranch variant held exactly. Corporate head term ▲+1 (~#5 → ~#4). Broad glamping variant ▼ 3 owned URLs → 1.

Net: **5 distinct owned URLs across 4 of 11 tracked non-brand queries**, down from 7 across 5 — the entire decline is one query.

### New surfaces (4, none in `sameAs`)

`popanddroptx.com` (event-decor case study of a Rancho wedding) · `rowanandbirch.com` (photographer story) · `wellcityguide.com` (surfaced on 3 separate queries) · `rancho-moonrise.wheree.com` (aggregator).

Plus a confirmed-live TripAdvisor listing URL, newly recorded.

---

## Shipped

| File | Change |
|---|---|
| `site/competitive-intelligence.md` | Rewritten for 2026-08-31 |
| `site/competitive-intelligence.html` | Regenerated via `scripts/render-competitive-report.py` (49,861 bytes) |
| `site/improvement-plan.html` | +2 Intel cards (8/31 new, 8/25 recovered) |
| `client-ops/.../improvement-plan.html` | Same 2 cards, **byte-identical** (verified by diff), **+ April 20 card restored** |
| `rancho-done-log.md` | 2 RESOLVED, 1 PROGRESS 20% |
| `scripts/render-competitive-report.py` | Committed — was untracked since 8/25 |

**Dual-write verification:** the inserted block diffed byte-identical between the two files (19,214 bytes). While verifying, found a **pre-existing drift**: the client-ops mirror was missing the **April 20, 2026** card entirely. Restored. Both files now carry **15 identical cards in identical order** — verified by diffing the full extracted date sequence.

**Deliberately not staged:** ~10 other files modified in the working tree by prior `rancho-site-daily` / `rancho-content-weekly` sessions (`site/index.html`, `css/styles.css`, `js/main.js`, `api/inquiry.js`, blog/contact/videos/weddings pages, `sitemap.xml`, `.gitignore`) plus untracked `rancho-moonrise-assets/`, `youtube-uploads/`, `AGENTS.md`. Standing practice on this repo is that a run commits its own files only. One exception, unavoidable: `site/improvement-plan.html` also carries site-daily's uncommitted 8/25 one-line fix at `:1076` (banned "34-acre … luxury" template → "36-acre … safari tents"). It cannot be cleanly separated from my card insert in the same file, it is unambiguously correct, and it is called out in the commit message.

---

## FLAG_FOR_ADAM

1. **Nothing this report recommended in the last six days ever reached the dashboard.** Not declined — never asked. The 8/25 quick wins (claim WeddingWire, fix The Knot description, add WeddingWire to `sameAs`) are re-surfaced unchanged.
2. **The published-buyout-pricing recommendation should be revised downward.** Serana withdrew.
3. **The rendering scraper is now recommended by two independent tasks.** ResortPass closing cost this report its most actionable number.
4. **`/safari-tents-near-austin/` — GSC request-indexing, ~126 days.** Eleventh read of this item. ~2 min, Adam only.
5. **Hipcamp curation question for Ashley — 10th read.** *"Is the Hipcamp listing intentionally private — SEO presence only — or do we want bookings from it?"*
