# Web Search Snippets — 2026-05-27 RUN_041

## Google reviews snippet

Query: `Rancho Moonrise Manor Texas Google reviews rating`

- **Snippet returned:** "Rancho Moonrise has a Google rating of 4.9 out of 5 (Excellent) based on **126 reviews**."
- **State change vs. RUN_040:** RUN_040 returned NULL (no inline count); RUN_041 returns **126** — same value as the 12-run baseline (pre-RUN_039).
- **4-run distinct-state history:** 126 (RUN_037, stable 12 runs) → 175 (RUN_039) → null (RUN_040) → **126** (RUN_041).
- **Conclusion:** WebSearch snippet remains demonstrably unreliable as an authoritative count source. It now oscillates between 126 / 175 / null. The 12-run "stable at 126" framing pre-RUN_039 is dead. Authoritative count remains the RUN_034 Chrome read of **130 / 4.9★** (now 8 days old).
- **Lag vs. live:** snippet 126 vs. live 130 = -4 (snippet trails live by 4 reviews, consistent with the lag pattern observed before RUN_039).

## Expedia rating snippet

Query: `Rancho Moonrise Manor Hotels.com Expedia rating`

- **Snippet returned:** "Rancho Moonrise has a guest review rating of **8.0** on Expedia."
- **11th consecutive run** with explicit 8.0 inline (post the RUN_029 one-run dip). 18 of last 19 runs.
- Hotels.com URL ho2867109568 still active in results. Direct fetch NOT attempted (BLOCKER ongoing, 39th consecutive no-attempt would be 40th if attempted).

## Facebook recommend snippet

Query: `Rancho Moonrise Facebook recommend reviews`

- **Snippet returned:** "On Facebook, Rancho Moonrise in Manor, TX shows **100% recommend with 5 reviews**."
- **22nd consecutive run** stable since RUN_018 one-run dip.
- Direct page load remains blocked (JS-rendered).
