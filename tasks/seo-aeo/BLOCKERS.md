# SEO/AEO Blockers

## Active Blockers

- **GSC crawl gate — NARROWED 2026-08-18 to a single URL.** `/safari-tents-near-austin/` is still not indexed (**~114 days**). Re-verified live today: a `site:ranchomoonrise.com safari tents near austin` query returns 10 owned pages — `/accommodations/`, `/corporate-retreats/`, `/weddings/`, `/host-your-event/`, `/faqs/`, `/` and four blog URLs — and **never** the safari-tents page. The rest of the site indexes healthily. Needs Adam: URL Inspection → Request Indexing on that **one** URL. Do not re-submit the whole sitemap.
  - `/corporate-retreats/` is **RESOLVED** — indexed and ranking. Confirmed twice by two tasks (`rancho-competitive-weekly` 2026-08-17, `rancho-site-daily` 2026-08-18). Dropped from this ask after riding it for 8 consecutive reports.

- **GBP access** — Claude cannot edit GBP directly. Q&A seeding, description fix, hours — all require Ashley.

- **Answer-engine citation is measured on one engine only.** The 2026-08-18 baseline records citations from the harness's own answer synthesis (4/10). ChatGPT, Perplexity, and Google AI Overview remain **unmeasured** and need their own access. This is a coverage gap, not a blocker on `rancho-seo-s7`, which is now baselined.

## Resolved

- ~~**SERP measurement paths unavailable from this client (opened 2026-08-17)**~~ — **RESOLVED 2026-08-18, one day after it was opened.** The blocker was accurate about the path it tested and wrong in the conclusion it drew. Bare `curl` is bot-detected; the **harness `WebSearch` tool is not**. Re-running the identical 10 keywords through the harness produced a full baseline — **4/10 ranking, 4/10 answer-engine citations** — where the curl path had written `MEASUREMENT BLOCKED` the day before. The brand canary passed on the harness path and failed on the curl path. Baseline: `serp-baseline-2026-08-18.md`.

  An API key (Google Programmable Search Engine — free, 100 q/day — or Bing Web Search / SerpAPI / DataForSEO) is still *nice to have* for certified absolute ranks, higher volume, and unattended script runs. It is **no longer blocking `rancho-seo-s7`**, and the "Priority 1, unblocks two things at once" framing in `CONTEXT.md` should be downgraded accordingly.

  Retained as evidence — these **bare-curl** paths are dead and should not be revived:
  - `html.duckduckgo.com/html/` → HTTP 202 challenge page, 0 organic results
  - `lite.duckduckgo.com/lite/` → HTTP 202 challenge page, 0 organic results
  - `bing.com/search` → HTTP 200, parses cleanly, then degrades into a generic dictionary/Wikipedia set. Canary proof: `Rancho Moonrise` returned `gorancho.com`, `en.wikipedia.org`, `merriam-webster.com`, `miranchogrill.com` — not `ranchomoonrise.com`.

  Cross-repo fix shipped: `client-ops/templates/re-verify-before-report.md` now names the harness tool as *the* SERP verification path for every client task, ahead of the known-dead table.

  Guard retained: `scripts/serp-baseline.py` still runs the brand canary and writes `MEASUREMENT BLOCKED` with zero per-keyword rows on failure. Its docstring now warns that the curl path produces a false negative.

- ~~**DNS cutover not complete**~~ — **RESOLVED 2026-04-30**, stale entry cleared 2026-08-17 by the Re-Verify Gate. This file had claimed the new site was not live on the apex 108 days after cutover, and gated "all SEO/AEO work" on it. Live re-verification: `https://ranchomoonrise.com/` → **200**, `server: Vercel`, `x-vercel-cache: HIT`; `www` → **308** to apex; sitemap/robots and 7 spot-checked routes all 200.
