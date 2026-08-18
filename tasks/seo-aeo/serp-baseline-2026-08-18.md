# Rancho Moonrise — SERP + AEO baseline 2026-08-18

**Status: BASELINE RECORDED.** This is the first successful measurement of `rancho-seo-s7-aeo-baseline`, a slot that has sat pending since 2026-05-04.

**Result: 4 / 10 target keywords ranking. 4 / 10 answer-engine citations.**

This replaces the `0/10 ranking` + `0/10 AI citations` figures that have been carried in `CONTEXT.md` "Key Metrics" since April. Those numbers are dead.

---

## How this was measured — and why yesterday's attempt failed

Yesterday (`2026-08-17`) this same slot was attempted and written up as **unmeasurable**. That conclusion was **path-specific, not universal**, and is now overturned.

| Path | Result | Notes |
|---|---|---|
| `html.duckduckgo.com` / `lite.duckduckgo.com` (bare curl) | **DEAD** | HTTP 202 challenge, 0 results |
| `bing.com/search` (bare curl, `scripts/serp-baseline.py`) | **DEGRADES** | Parses cleanly, then serves dictionary/Wikipedia results |
| **Harness `WebSearch` tool** | ✅ **WORKS** | Clean, differentiated, cross-verifiable result sets |

The reconciliation CONTEXT called for is done: `rancho-competitive-weekly` succeeded on 2026-08-17 because it used the **harness search tool**, while `rancho-site-daily` failed because `scripts/serp-baseline.py` shells out to bare `curl`. Same day, same site, opposite conclusions — one variable.

**Brand canary (mandatory guard) — PASSED.** Query `Rancho Moonrise` returned `ranchomoonrise.com` in the result set alongside Yelp / Do512 / Hotels.com / The Knot / LinkedIn / Facebook / Expedia. Yesterday's canary on the curl path returned `gorancho.com`, `merriam-webster.com`, `miranchogrill.com` — and not the site. The engine can see the site; absences below are findings, not artifacts.

### Methodology limits — read before quoting a number

- **Position is position-within-returned-set, not certified Google organic rank.** Treat these as directional. The durable signals are *presence/absence* and *which domains hold the top of each set*.
- Non-localized, logged-out. A geolocated Austin query would likely place Rancho higher.
- "Answer-engine citation" here means **this harness's synthesized answer named Rancho Moonrise with substantive detail**. It is one answer engine. ChatGPT / Perplexity / Google AI Overview are still unmeasured and still need their own keys.

---

## The 10-keyword table

| # | Keyword | Rancho | Ranking URL | Pos / set | AI answer cites Rancho |
|---|---|---|---|---|---|
| 1 | glamping near Austin TX | — | — | absent / 7 | no |
| 2 | wedding venue Austin TX ranch | ✅ | `/weddings/` | 9 / 9 | **yes** |
| 3 | unique wedding venues near Austin | — | — | absent / 6 | no |
| 4 | corporate retreat venue Austin TX | ✅ | `/blog/corporate-retreat-near-austin/` | 8 / 8 | **yes** |
| 5 | pool day pass Austin TX | — | — | absent / 8 | no |
| 6 | things to do Manor TX | — | — | absent / 6 | no |
| 7 | bachelorette party Austin ranch | ✅ | `/blog/bachelorette-party-austin-texas/` | 5 / 9 | **yes** |
| 8 | events venue Austin TX | — | — | absent / 6 | no |
| 9 | glamping with pool Texas | — | — | absent / 10 | no |
| 10 | overnight event venue Austin | ✅ | `/blog/wedding-venues-near-austin/` | 4 / 8 | **yes** |

**Two of these four are new to this report** — `bachelorette party Austin ranch` and `overnight event venue Austin` were not among the rankings `rancho-competitive-weekly` found on 2026-08-17. `/weddings/` ranking on a wedding term is also new; no prior report has recorded a core landing page ranking.

---

## Top-5 domains holding each keyword

| Keyword | Who owns the top of the set |
|---|---|
| glamping near Austin TX | glampinghub.com, hipcamp.com, talulamesa.com, waldenretreats.com, cameronranchglamping.com |
| wedding venue Austin TX ranch | weddingwire.com, austin.wedsociety.com, facebook.com, theknot.com, starhillranch.com |
| unique wedding venues near Austin | tagvenue.com, theknot.com, southernlovecreative.com, jessicadoffing.com, herphotography.co |
| corporate retreat venue Austin TX | teamout.com, offsite.com, waldenretreats.com, elementranch.com, luckyarrowretreat.com |
| pool day pass Austin TX | austintexas.org, swimply.com, resortpass.com, bunkhousehotels.com, 365thingsaustin.com |
| things to do Manor TX | eventbrite.com ×2, tripadvisor.com, yelp.com, famplified.com |
| bachelorette party Austin ranch | ask.metafilter.com, premierpartycruises.com, fearlesscaptivations.com, austinboatrentals.com, **ranchomoonrise.com** |
| events venue Austin TX | eventup.com, austintexas.org, bizzabo.com, yelp.com, eventective.com |
| glamping with pool Texas | glampinghub.com, booking.com, fieldmag.com, travel.usnews.com, thedyrt.com |
| overnight event venue Austin | cvent.com, thelinehotel.com, peerspace.com, **ranchomoonrise.com**, austintexas.org |

---

## What the pattern actually says

**1. Blog posts carry this site. Landing pages do not.**
3 of 4 rankings are blog URLs. The single best position in the entire set (4/8) is a blog post. The blog pipeline has been **PAUSED since 2026-04-23**.

**2. Rancho wins specific intent and loses head terms to aggregators.**
Every keyword Rancho ranks on is a long-tail, intent-rich phrase. Every keyword it misses is a head term owned by aggregators and listicles — Glamping Hub, Hipcamp, Booking, EventUp, Cvent, Eventbrite, The Knot, ResortPass. Note keyword 5: **ResortPass holds a top-5 slot on `pool day pass Austin TX` while Rancho sells day passes on ResortPass** and its own `/pool-day-pass-austin/` page ranks nowhere. Rancho is reaching that SERP only as a tenant on someone else's domain.

**3. The queued "deepen internal links 4 → 5" work has no evidence behind it — and the data points the other way.**
Measured across the cluster:

| Page | Inbound links | Words | JSON-LD blocks | Ranks? |
|---|---|---|---|---|
| `weekend-getaways-near-austin` | 15 | 2,128 | 5 | (prior report) |
| `glamping-near-austin-texas` | 11 | 1,572 | 4 | **no** |
| `bachelorette-party-austin-texas` | 9 | 2,206 | 4 | **yes** |
| `pool-day-pass-austin` | 8 | 2,103 | 4 | **no** |
| `things-to-do-manor-tx` | 6 | 2,222 | 5 | **no** |
| `wedding-venues-near-austin` | 5 | 1,909 | 4 | **yes** |
| `corporate-retreat-near-austin` | 5 | 1,706 | 4 | **yes** |

The two best performers have the **fewest** inbound links (5 each). The most-linked page (11) does not rank. Word count and schema depth are uniform and saturated across both groups. **On-page and internal-linking levers are exhausted on this cluster** — that is now measured, not asserted. `CONTEXT.md` has queued "deepen cluster floor 4 → 5 inbound topical links — mechanical, low-risk, always available" as default autonomous work; it is low-risk and always available, but it is also **unsupported by the evidence** and should be retired rather than performed.

**4. Third-party listing copy is winning the brand entity, and it is copy the brand bans.**
The synthesized answer for the bare brand query described the property as *"20 luxury cabins and safari tents for up to 200 guests"*, sourced from the OTA listings in that result set. `VOICE-GUIDE.md` bans **"luxury"** and bans citing a **specific unit count**. This is the `hotels-com-banned-copy` claim that `rancho-competitive-weekly` has failed to verify by direct fetch **4 consecutive runs** (60s timeout). It could not be confirmed on-page — but it is now confirmed *in propagation*: banned copy is being read back as the brand's own description by an answer engine.

---

## What this does NOT measure

- ChatGPT, Perplexity, Google AI Overview citations — separate engines, still need keys.
- Certified absolute Google organic rank — needs GSC or a rank tracker.
- Localized (Austin-geolocated) results.

## Re-run instructions

Do **not** use `scripts/serp-baseline.py` for this — it is pinned to the degrading bare-curl Bing path and will emit `MEASUREMENT BLOCKED`. Re-run this baseline by issuing the 10 keywords above through the **harness `WebSearch` tool**, brand canary first, and diffing against this table. Monthly cadence per `rancho-seo-s7`.
