# SEO/AEO Blockers

## Active Blockers

- **SERP measurement paths unavailable from this client (opened 2026-08-17)** — `rancho-seo-s7` cannot record a real baseline. Verified live today:
  - `html.duckduckgo.com/html/` → **HTTP 202 challenge page**, 0 organic results
  - `lite.duckduckgo.com/lite/` → **HTTP 202 challenge page**, 0 organic results
  - `bing.com/search` → HTTP 200 and parses cleanly, but the session degrades after a handful of automated queries into a generic dictionary/Wikipedia result set. Proven by canary: the query `Rancho Moonrise` — a brand term the site holds at **#1** — returned `gorancho.com`, `en.wikipedia.org`, `merriam-webster.com`, `miranchogrill.com`, and **not** `ranchomoonrise.com`.

  **This matters beyond Rancho.** The shared re-verify runbook (`client-ops/templates/re-verify-before-report.md`) names "DuckDuckGo HTML or Google via programmable search" as *the* verification path for SERP-position claims. The DDG half is dead, so every client task that relies on it can no longer verify a SERP claim it surfaces.

  **Unblock path (any one):** a Google Programmable Search Engine key (`cx` + API key, 100 queries/day free), a Bing Web Search API key, or a SerpAPI/DataForSEO key. Add to Vercel env + `scripts/serp-baseline.py`.

  **Guard in place:** `scripts/serp-baseline.py` runs the brand canary first and writes `MEASUREMENT BLOCKED` with zero per-keyword rows if it fails. It cannot emit a false "0/10 ranking".

- **GBP access** — Claude cannot edit GBP directly. Q&A seeding, description fix, hours — all require Ashley.

- **GSC crawl gate** — `/corporate-retreats/` (~59d) and `/safari-tents-near-austin/` (~64d) uncrawled. Needs Adam: URL Inspection → Request Indexing. Owned by `rancho-site-daily` + Adam.

## Resolved

- ~~**DNS cutover not complete**~~ — **RESOLVED 2026-04-30**, stale entry cleared 2026-08-17 by the Re-Verify Gate. This file still claimed the new site was not live on the apex, 108 days after cutover, and gated "all SEO/AEO work" on it. Live re-verification today: `https://ranchomoonrise.com/` → **200**, `server: Vercel`, `x-vercel-cache: HIT`; `www` → **308** to apex; sitemap/robots and 7 spot-checked routes all 200.
