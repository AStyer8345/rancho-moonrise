#!/usr/bin/env python3
"""
SERP baseline for the 10 target keywords in tasks/seo-aeo/master-agent.md.

!! SUPERSEDED 2026-08-18 — PREFER THE HARNESS `WebSearch` TOOL !!
    This script shells out to bare curl, which is the reason the 2026-08-17 run
    reported "MEASUREMENT BLOCKED". The same 10 keywords issued through the
    agent harness's own WebSearch tool the next morning returned clean,
    differentiated result sets and produced a real baseline: 4/10 ranking
    (tasks/seo-aeo/serp-baseline-2026-08-18.md).

    The failure was never "SERP measurement is impossible from this client" --
    it was bare curl getting bot-detected. Bing serves an automated curl a
    degraded set; it serves the harness a real one.

    Keep this file for the day an API key lands (see --help / BLOCKERS.md), at
    which point swap `fetch()` for the keyed endpoint and the canary guard below
    becomes the right shape again. Until then, running this will produce a false
    negative, not data.

Records, per keyword: whether ranchomoonrise.com appears in the organic top N,
at what rank, and which domains hold the top 5. This is the retrieval substrate
that answer engines draw from, so it is the measurable half of
`rancho-seo-s7-aeo-baseline`. The other half -- whether ChatGPT/Perplexity
actually cite the site -- needs an answer-engine API key and is NOT measured here.

Engine: Bing HTML. The DuckDuckGo HTML/lite endpoints named in the shared
re-verify-gate runbook started returning a 202 challenge page (0 results) as of
2026-08-17, so they are no longer a usable verification path.

Usage:
    python3 scripts/serp-baseline.py [--out tasks/seo-aeo/serp-baseline-YYYY-MM-DD.md]
"""

import argparse
import datetime
import html
import re
import sys
import time
import urllib.parse
import urllib.request

TARGET = "ranchomoonrise.com"

# Mirrors "Target Keywords (ranked by priority)" in tasks/seo-aeo/master-agent.md.
# Where that list carries two phrasings for one intent, the primary is used.
KEYWORDS = [
    "glamping near Austin TX",
    "wedding venue Austin TX ranch",
    "unique wedding venues near Austin",
    "corporate retreat venue Austin TX",
    "pool day pass Austin TX",
    "things to do Manor TX",
    "bachelorette party Austin ranch",
    "events venue Austin TX",
    "glamping with pool Texas",
    "overnight event venue Austin",
]

UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
)

# The site is #1 on its own brand term (confirmed live 2026-06-29). If a run
# cannot see it there, the engine is serving this client a degraded result set
# and every "absent" reading in that run is an artifact, not a finding.
CANARY_QUERY = "Rancho Moonrise"
CANARY_WITHIN = 5


def fetch(keyword, count=20, timeout=30):
    # mkt/cc pin the market so runs stay comparable month over month; without
    # them Bing drifts (a US-generic query returned Homewood, AL results once).
    url = "https://www.bing.com/search?" + urllib.parse.urlencode(
        {"q": keyword, "count": count, "mkt": "en-US", "cc": "US"}
    )
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode("utf-8", errors="replace")


def parse(page):
    """Return [(rank, domain, title)] for organic results.

    Split on the opening marker rather than matching a balanced `</li>`: Bing
    nests <li> elements inside result blocks (sitelinks, FAQ rows), so a
    non-greedy `.*?</li>` terminates on an inner tag and truncates the block.

    The domain comes from <cite>, not from the <h2> anchor href -- that href is
    a bing.com tracking redirect, so reading it yields `bing.com` for every
    result and silently reports the target as absent from its own SERP.
    """
    results = []
    for i, block in enumerate(page.split('<li class="b_algo"')[1:], 1):
        m = re.search(r'<h2[^>]*>\s*<a[^>]+href="([^"]+)"[^>]*>(.*?)</a>', block, re.S)
        if not m:
            continue
        title = html.unescape(re.sub("<[^>]+>", "", m.group(2))).strip()

        cite = re.search(r"<cite[^>]*>(.*?)</cite>", block, re.S)
        if not cite:
            continue
        shown = html.unescape(re.sub("<[^>]+>", "", cite.group(1))).strip()
        # <cite> renders as "https://example.com › path › crumb"
        domain = shown.split("›")[0].strip()
        domain = re.sub(r"^https?://", "", domain).split("/")[0].lower()
        domain = domain.removeprefix("www.")
        if not domain or domain.endswith("bing.com"):
            continue  # redirect artifact, not a real organic destination
        results.append((i, domain, title))
    return results


def canary():
    """Prove the engine can see the site on a term it demonstrably owns.

    Returns (ok, [domains]). A failure here invalidates the whole run: an
    engine that hides the site on its own brand name will report it 'absent'
    everywhere, manufacturing the exact finding this script exists to test.
    """
    try:
        results = parse(fetch(CANARY_QUERY))
    except Exception:
        return False, []
    top = [d for _, d, _ in results[:CANARY_WITHIN]]
    return any(TARGET in d for d in top), top


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out")
    ap.add_argument("--delay", type=float, default=4.0)
    ap.add_argument(
        "--skip-canary",
        action="store_true",
        help="measure anyway; results are then explicitly untrusted",
    )
    args = ap.parse_args()

    today = datetime.date.today().isoformat()
    out = args.out or f"tasks/seo-aeo/serp-baseline-{today}.md"

    if not args.skip_canary:
        ok, top = canary()
        if not ok:
            with open(out, "w", encoding="utf-8") as fh:
                fh.write(
                    f"# Rancho Moonrise — SERP baseline {today}\n\n"
                    f"**MEASUREMENT BLOCKED — no baseline recorded.**\n\n"
                    f"Canary query `{CANARY_QUERY}` did not return `{TARGET}` in the "
                    f"top {CANARY_WITHIN}. The engine is serving this client a degraded "
                    f"result set, so every keyword would read as falsely absent.\n\n"
                    f"Canary top {CANARY_WITHIN}: {', '.join(top) or '(none parsed)'}\n\n"
                    f"No per-keyword rows are written on a failed canary — a blocked "
                    f"measurement must never be recorded as a zero.\n"
                )
            print(f"CANARY FAILED — engine degraded. Top: {top}. Wrote {out}")
            return 2

    rows, detail, failures = [], [], 0
    for kw in KEYWORDS:
        try:
            results = parse(fetch(kw))
        except Exception as exc:  # network/parse -- record, never guess
            failures += 1
            rows.append((kw, "FETCH FAILED", str(exc)[:60]))
            detail.append((kw, []))
            continue

        if not results:
            failures += 1
            rows.append((kw, "NO RESULTS PARSED", "engine returned 0 organic blocks"))
            detail.append((kw, []))
            continue

        hit = next((r for r in results if TARGET in r[1]), None)
        rank = f"#{hit[0]}" if hit else f"absent (top {len(results)})"
        top5 = ", ".join(d for _, d, _ in results[:5])
        rows.append((kw, rank, top5))
        detail.append((kw, results))
        time.sleep(args.delay)

    ranked = sum(1 for _, r, _ in rows if r.startswith("#"))
    lines = [
        f"# Rancho Moonrise — SERP baseline {today}",
        "",
        f"**Engine:** Bing HTML (non-localized, logged-out) · **Target:** `{TARGET}`",
        f"**Result: {ranked}/{len(KEYWORDS)} target keywords ranking.** "
        f"{failures} keyword(s) failed to measure.",
        "",
        "> Non-localized SERP. Treat absolute ranks as directional; the durable",
        "> signal is presence/absence and which competitors hold the top of each set.",
        "> Answer-engine citation (ChatGPT/Perplexity) is NOT measured here — needs an API key.",
        "",
        "| # | Keyword | Rancho rank | Top 5 domains |",
        "|---|---|---|---|",
    ]
    for i, (kw, rank, top5) in enumerate(rows, 1):
        lines.append(f"| {i} | {kw} | **{rank}** | {top5} |")

    lines += ["", "## Full top-10 per keyword", ""]
    for kw, results in detail:
        lines.append(f"### {kw}")
        if not results:
            lines.append("_not measured this run_")
        for rank, domain, title in results[:10]:
            mark = " **← RANCHO**" if TARGET in domain else ""
            lines.append(f"{rank}. `{domain}` — {title[:80]}{mark}")
        lines.append("")

    with open(out, "w", encoding="utf-8") as fh:
        fh.write("\n".join(lines) + "\n")
    print(f"wrote {out} — {ranked}/{len(KEYWORDS)} ranking, {failures} failed")
    return 1 if failures == len(KEYWORDS) else 0


if __name__ == "__main__":
    sys.exit(main())
