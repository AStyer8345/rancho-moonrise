# rancho-competitive-weekly — 2026-08-17

**Previous run:** 2026-07-15 (July 22, July 29, Aug 5, Aug 12 did not fire — 33-day gap)
**Gate status:** GOALS.md (week of 5/18, last updated 7/15) pauses Rancho *outreach* only; site/content work RESUMED 2026-07-15. `rancho-competitive-weekly` is not on the pause list. Run proceeded.

---

## Headline

**Rancho is ranking on non-brand commercial keywords for the first time in this report's history**, and the `/corporate-retreats/` indexing blocker — the #1 Adam-side action across eight consecutive reports — is **resolved**.

The blog post outranks the purpose-built landing page on the head corporate term. Both rankings appeared while the blog pipeline has been paused since 2026-04-23.

---

## Re-Verify Gate — 11 claims checked live

```
[2026-08-17 08:20] re-verify rancho-zero-nonbrand-rankings — resolved — live=3 URLs ranking on 4 queries prior=0/4
[2026-08-17 08:22] re-verify corporate-retreats-uncrawled — resolved — live=indexed, top result of site: query, ranks ~#6 prior=uncrawled ~75d
[2026-08-17 08:24] re-verify safari-tents-uncrawled — still_true — live=not surfacing ~113d prior=not surfacing ~80d
[2026-08-17 08:27] re-verify rancho-resortpass-four-products — resolved(corrected) — live=2 products, 4.8★/53 prior=4 products, 4.9★/45
[2026-08-17 08:29] re-verify luckyarrow-resortpass-pricing — partial(changed) — live=$35/$35 prior=$30/$30
[2026-08-17 08:31] re-verify hipcamp-curated-rancho-absent — still_true — live=absent, 8th read; top-8 byte-identical, Lucky Arrow #8 prior=absent, 7th read
[2026-08-17 08:33] re-verify spoon-mountain-price-inconsistency — resolved — live=no $245 figure; page rebuilt as 10-pick roundup prior=$245 alongside $300-500
[2026-08-17 08:35] re-verify safari-for-the-soul-unit-count — resolved — live=5 glamping units + 1 residential prior=6 units, ambiguous
[2026-08-17 08:37] re-verify brand-serp-owned-site-first — watch — live=~#9 bare query / ~#5 + 4 owned pages longer query prior=#1
[2026-08-17 08:39] re-verify hotels-com-banned-copy — failed(3rd+ consecutive) — live=fetch timeout 60s prior=STALE:2026-06-29
[2026-08-17 08:41] re-verify glamping-hub-absent — still_true — live=absent ~18wk prior=absent ~13wk
[2026-08-17 08:43] re-verify talula-mesa-glamping-1 — partial(changed) — live=~#4, aggregators retook top 3 prior=#1
```

**Tally:** 3 still_true · 2 partial · 5 resolved · 1 watch · 1 failed(blocked)

**Two prior-report claims were outright false and were corrected before republication** — Rancho's ResortPass product list and Lucky Arrow's day-pass pricing. This is the clearest return the gate has produced: without it, this report would have restated a four-product revenue surface that does not exist.

---

## Verification paths used

| Claim | Path | Outcome |
|---|---|---|
| Non-brand rankings | 6 live SERP queries + 2 `site:` queries | Confirmed across 3 independent queries |
| `/corporate-retreats/` indexing | `site:ranchomoonrise.com corporate-retreats …` | Returned as top result |
| `/safari-tents-near-austin/` indexing | `site:ranchomoonrise.com/safari-tents-near-austin/` | Never returned; other owned pages returned instead |
| Rancho ResortPass | Direct fetch `resortpass.com/hotels/rancho-moonrise` | 200 — 2 products, 4.8★/53 |
| Lucky Arrow ResortPass | Direct fetch `resortpass.com/hotels/lucky-arrow-retreat` | 200 — 6 products, $35 day passes, 4.6★/200 |
| Hipcamp curated set | Direct fetch of curated collection page | 20 properties enumerated; Rancho absent |
| Spoon Mountain | Direct fetch of `/travel-to-wimberley/romantic-…/` | 200 — rebuilt as 10-pick roundup, no $245 |
| Safari for the Soul | Direct fetch `safariforthesoulglamping.com` | 5 glamping units enumerated by name |
| Serana (new) | Direct fetch `seranatx.com/austin-corporate-retreats/` | 8 units, $1,000/night full property |
| Talula Mesa | Direct fetch `talulamesa.com` | 4 tents / 15 acres / Marble Falls |
| Hotels.com | Direct fetch `hotels.com/ho2867109568` | **TIMEOUT 60s — 4th consecutive block** |

---

## New findings

1. **The blog cluster broke the drought, not the landing pages.** `/blog/corporate-retreat-near-austin/` ~#4 vs `/corporate-retreats/` ~#6 on the same query family. Weekend-getaway is carried entirely by a blog URL. The "publish own-domain guide content" lever moves from recommended to demonstrated.
2. **Day-pass pricing headroom quantified.** Rancho $20 / 4.8★ / 53 reviews vs Lucky Arrow $35 (just raised from $30) / 4.6★ / 200 reviews. Rancho is 43% cheaper at a higher rating; the competitor has demonstrated the market absorbs an increase.
3. **Rancho's ResortPass experience products vanished.** Pilates and Horses ($58) and Full Moon Floating Sound Bath ($30) live on 7/15, absent today. Both map to known recurring ranch programming → reads as a lapse, not a delisting. No decision logged in-repo either way. → Ashley question.
4. **Three new corporate entrants.** Serana (Paige TX, 8 units, **$1,000/night flat full-property** — publishes a price where Rancho custom-quotes) ~#3; **7744 Ranch** markets "20 minutes from downtown, just east of Austin" — Rancho's exact geographic hook — at 100 guests / 10 overnight; Artemis Ranch. Cluster tightened in the same cycle Rancho entered it.
5. **New published-pricing gap.** Serana ($1,000/night full property) and Lucky Arrow ($545–650 pp/night corporate) both publish; Rancho custom-quotes by group size / duration / lodging / bar / catering. Friction point on the exact term Rancho now ranks for.
6. **Two new earned-media surfaces** — Yahoo News video feature and MTHR Collective, joining Tribeza on brand queries.
7. **New safari-tent competitor:** Outdoorsy Hill Country — Stonewall, 34 acres, **22 canvas tents**. Largest safari-tent inventory in the tracked set.

---

## FLAG_FOR_ADAM

**1. `competitive-intelligence.html` is ~4 months stale.** Every Intel card on both improvement-plan dashboards links "View the full intelligence report →" to `/competitive-intelligence.html`, which still reads **Research Date: April 6, 2026** at line 209. The live content lives in `site/competitive-intelligence.md`, which this task rewrites weekly. Anyone following the dashboard link has been reading April data since April. Not fixed this run — converting a 752-line hand-maintained HTML page to render the markdown is a build decision, not a competitive-intel edit. Needs a call: render the `.md` at that route, or retire the link.

**2. VOICE-GUIDE vs. Manor-targeting SEO — a real tension, not drift.** `VOICE-GUIDE.md:270` states the location descriptor is "20 minutes from downtown Austin" — **never "Manor"**, and line 99 attributes this to Ashley's rule. But **30 site files** reference "Manor, TX", including three body-copy instances on `/blog/corporate-retreat-near-austin/` (the page that just started ranking) and an entire post `things-to-do-manor-tx.html` built to target Manor keywords, with "Manor TX" in its title, H1, meta, and schema `keywords` array. Line 230 of the same guide says to "naturally weave in location keywords (Manor TX, near Austin, Central Texas)" — so the guide contradicts itself. This is a deliberate SEO play against a stated brand rule, on pages that are now producing Rancho's only non-brand rankings. Needs Ashley's ruling before anyone "fixes" it in either direction. Flagged only — page edits belong to `rancho-site-daily` / `rancho-content-weekly`.

**3. Hotels.com verification blocked 4 consecutive runs.** Automated fetch times out at 60s every time. The banned "20 luxury cabins / 50 guests" copy claim cannot be trusted in either direction. Needs a manual read by Adam or an alternate path.

---

## Outputs

- `site/competitive-intelligence.md` — full report rewritten
- `site/improvement-plan.html` — Intel card inserted (sovereign)
- `client-ops/clients/rancho-moonrise/improvement-plan.html` — Intel card inserted (mirror, verified byte-identical)
- `rancho-done-log.md` — 5 RESOLVED + 1 PROGRESS entry
- CONTEXT.md / CHANGELOG.md / TODO.md updated

## Not done

- **AEO baseline (`rancho-seo-s7`)** not attempted — CONTEXT lists it as the #1 next slot for `rancho-site-daily`, and it is that task's scope, not this one. No progress logged against it.
- No subject-property page edits (correctly out of scope for this task).
