# GBP Live Snapshot — 2026-05-19

**Captured:** 2026-05-19 (review-monitor RUN_034)
**Source:** Chrome MCP, live navigation to Google Business Profile dashboard (logged-in manager view + Google Maps place card)
**Tab URL captured:** `https://www.google.com/search?q=Rancho+Moonrise+Manor+TX+reviews#mpd=~224637916968489099/customers/reviews`
**Place ID:** `0x8644bfc804b992bb:0x95b9f5fd0ab50fd9`

---

## Aggregate

| Field | Live value |
|-------|-----------|
| Total reviews | **130** |
| Star rating | **4.9** |
| Total views (Maps) | 60,697 |
| Total customer interactions (GBP dashboard) | 4,130 |
| New reviews indicator (dashboard card) | **"4 new reviews"** |
| Profile strength | "Looks good!" (green) |
| Monthly views (callout) | 13,041 |
| Address | 20117 Lockwood Rd, Manor, TX 78653 |
| Phone | (737) 291-1260 |
| Hours visible | Open · Closes 5PM |
| GBP categories shown | Event venue (primary), 3-star designation present elsewhere |

---

## Star distribution (from Google review summary widget)

Bar widths observed in the live "Google review summary" rail:
- 5★: long bar (bulk)
- 4★: small bar (visible)
- 3★: minimal/near-zero
- 2★: minimal/near-zero
- 1★: small but **present** (a thin bar visible — at least one 1-star review on profile)

---

## Most-recent review (full capture)

**Cassie Butterfield**
- Profile: 13 reviews · 7 photos
- Rating: 5/5
- Date: 3 days ago
- Status: **NEW** badge shown + **UNREPLIED**
- Body:
  > "I had such a wonderful stay at Rancho Moonrise! The property is beautiful, and the staff was so friendly and welcoming. My coworkers and I hosted a team retreat here, where we used the office space for planning sessions and spent our breaks lounging by the pool. The best part was taking in the gorgeous sunrises and sunsets — plus seeing the cutest animals around the property!"
- Sub-ratings: Rooms 5/5 · Service 5/5 · Location 5/5
- Hotel highlights: Great view, Quiet, Kid-friendly, Great value
- Photos: 2 photos attached (a "Be Here Now" sign + an animal/grass shot)

**Why this matters:** This is a corporate retreat review. Aligns directly with the `/corporate-retreats/` landing page (live 17d, still uncrawled per CONTEXT.md). Reply should reference the team retreat + animals naturally.

---

## Reviewer-name set captured this run

Confirmed reviewers visible during live navigation:
- **Cassie Butterfield** — 5★ (NEW, unreplied) — Google Maps Reviews modal (Unreplied tab)
- **Genesis Stellitano** — 5★ — Google Search Reviews widget (sample row, replied-status unknown from this view)
- **Alison** — 4★ — Google Search Reviews widget (sample row)
- **Ben** — 5★ — Google Search Reviews widget (sample row)

**NOT captured this run (modal failed to scroll, Chrome connection dropped before drag-scroll completed):** full top-20 reviewer list, individual reply-status flags beyond Cassie, presence/absence verification of "Scott Morgan 1★" baseline.

---

## Open data gaps from this run

1. **Modal scroll blocker** — the GBP dashboard Reviews modal would not respond to wheel scroll, key Page_Down, or click-on-track. Drag on scrollbar thumb was attempted; the Chrome extension disconnected immediately before/during that drag and did not reconnect for the remainder of the run. Only the topmost (Cassie) review was reachable in the modal viewport.
2. **Scott Morgan 1★ baseline** — UNVERIFIED this run. The 1★ bar in the distribution widget is present, so a 1★ review is on the profile; whether it is still Scott Morgan vs. a different 1★ reviewer cannot be determined from the data I captured. NOTE: this monitor has not produced a report since 2026-04-09 (raw-data/ folder is empty, no Apify pull on disk), so the "Scott Morgan baseline" referenced in SKILL.md may itself be stale.
3. **Other 3 of the "4 new reviews"** — dashboard shows 4 new, only 1 is in the Unreplied tab. The other 3 must already carry an owner reply. Their reviewer names and content were not captured.

---

## Reply-status changes vs. last known state

Last known prior state on disk = `2026-04-09-review-report.md` (no JSON cache exists; `raw-data/` was empty before this run created the folder).

- Today: 130 reviews / 4.9★
- 2026-04-09 baseline report (per CONTEXT.md): 125 / 4.9★
- Net since 2026-04-09: **+5 reviews, rating unchanged at 4.9★**

Per CONTEXT.md RUN_033 (2026-05-19), the inline web-search snippet has been holding at "126 @ 4.9" for 8 consecutive prior runs. The authoritative live count today is **130**, which is +4 above that snippet — confirms that snippet was lagging the live profile (consistent with the SKILL.md framing that web search lags GBP by hours to days).
