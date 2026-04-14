# Rancho Moonrise — Review Monitor Master Agent

> Full runbook for the `rancho-review-monitor` scheduled task. The SKILL at `~/.claude/scheduled-tasks/rancho-review-monitor/SKILL.md` is the short trigger; this file is the detailed procedure. Read this on every run after the five Setup reads.

## Purpose

Own the **live state** of reviews and reply coverage across every platform where Rancho Moonrise has a listing. Keep CONTEXT.md, improvement-plan.html, and `dashboard-state.json` honest. Kill the "9 of 10 unreplied, verified April 9" class of stale flag at its source.

No other scheduled task is allowed to write review/reply claims without re-verifying via the paths below. If you see another task surface one (e.g., `rancho-site-daily` FLAG_FOR_ADAM containing "GBP reviews unreplied"), log the ownership violation in session-log.md and open a TODO to fix that task's SKILL.

## Live-claim ownership

| Claim | Live verification path |
|---|---|
| Total Google review count | Public GBP page scrape OR Google Places API `place.user_ratings_total` |
| Google review rating (4.9★ etc.) | same |
| Google reviews without an owner reply | Places API `place.reviews[].author_reply` presence; count where `author_reply` is null/missing |
| Airbnb review count (if a listing exists) | Airbnb listing page fetch; parse review count |
| Hipcamp review state | Hipcamp listing page fetch |
| Expedia review count / rating (currently 8.0) | Expedia listing page fetch |
| TripAdvisor claimed/unclaimed status, review count | TripAdvisor search for Rancho Moonrise |
| Facebook review count (currently 5 per CONTEXT) | Facebook page fetch |

If a path fails 3 runs in a row for the same claim, log to `tasks/review-monitor/BLOCKERS.md` and tag surfaced findings `STALE:<last-verified-date>`.

## Nine-step run procedure

### 1 — Scrape live state
For each claim above (skip ones listed in BLOCKERS.md). Prefer APIs over scraping where available. Cache raw responses to `tasks/review-monitor/raw/YYYY-MM-DD/` for audit.

### 2 — Diff against `brand/review-aggregate.json`
Create on first run with today's scrape as baseline. Detect: new reviews (count delta > 0), replies added (unreplied delta < 0), rating changes, count drops.

### 3 — Apply the Re-Verify Gate
Read `/Users/adamstyer/Documents/client-ops/templates/re-verify-before-report.md`. For every candidate finding about to be written persistently:

- **Still true** → surface with `last_verified` = now
- **Partially resolved** (e.g., was "9/10 unreplied", now "3/10") → update the improvement-plan.html task card text + write PROGRESS to `rancho-done-log.md`:
  ```
  [YYYY-MM-DD HH:mm] [rancho-review-monitor] {task-id} — PROGRESS {pct}% | {N of M unreplied}
  ```
- **Fully resolved** → RESOLVED line in `rancho-done-log.md`; `rancho-apply-done` moves the card to Done on its next run.

### 4 — First-run backfill (one-time, idempotent)
Enumerate every live-claim currently written into:
- `CONTEXT.md` → Active Blockers section
- `site/improvement-plan.html` → Plan-tab `<div class="task" data-item-id="...">` cards whose description contains a numeric review/reply claim
- `tasks/seo-aeo/BLOCKERS.md` → review/reply-related entries

Re-verify each. Auto-resolve stale ones. Log what you cleared to session-log.md under a `BACKFILL_RUN_YYYY-MM-DD` heading.

After this has run once successfully (session-log contains a completed BACKFILL heading), skip this step on subsequent runs.

### 5 — Write review-log (if new reviews)
`brand/review-log/YYYY-MM-DD.md` with:
- New review count by platform
- Full verbatim text of each new review (quoted)
- Sentiment flag — positive / mixed / negative
- Response draft for any review ≤4 stars in Ashley's voice (DRAFT — never auto-publish)

Voice rules: first person Ashley, name something specific the reviewer mentioned (a cabin, a donkey, pool time, a wedding detail), never defensive, never template-sounding, no emoji per VOICE-GUIDE.md website-voice. The F1 weekend 1-star review per CONTEXT.md is Ashley's own — if it appears in-scope, flag it for her personally, do not draft a response.

### 6 — Update `brand/review-aggregate.json`
Today's live state per platform:
```json
{
  "last_updated": "ISO-timestamp",
  "platforms": {
    "google": { "count": 125, "rating": 4.9, "unreplied": 3, "last_scrape": "..." },
    "airbnb": { "count": null, "note": "no listing" },
    "hipcamp": { "count": N, "rating": X, "last_scrape": "..." },
    "expedia": { "count": N, "rating": 8.0, "last_scrape": "..." },
    "facebook": { "count": 5, "rating": null, "last_scrape": "..." },
    "tripadvisor": { "status": "unclaimed" }
  }
}
```
Never extrapolate — every field must come from today's scrape or be marked `null` / `"blocked"`.

### 7 — Update `site/admin/dashboard-state.json`
Create structure if missing:
```json
{
  "review_monitor": {
    "last_run": "ISO-timestamp",
    "status": "ok | pending | urgent",
    "new_reviews_pending_response": N,
    "total_reviews_tracked": N,
    "unreplied_by_platform": { "google": N, "expedia": N, ... }
  }
}
```

Status rules:
- `ok` — no pending replies, no rating drops
- `pending` — some pending replies exist but none ≤3★
- `urgent` — rating dropped OR any ≤3★ review is unreplied OR total count dropped (possible review removal)

### 8 — Append to `tasks/review-monitor/session-log.md`
One-line run summary + one line per re-verify per claim, format per the runbook:
```
[YYYY-MM-DD HH:mm] re-verify {claim-id} — {still_true|partial|resolved} — live=<value> prior=<value>
```

### 9 — Git commit + push
Message: `rancho-review-monitor: <summary>` where summary mentions new reviews found, responses drafted, stale claims cleared. If no state changed and nothing was drafted, **do not commit**.

## First-run baseline seed

If `brand/review-aggregate.json` doesn't exist, seed from today's live scrape — not from CONTEXT.md. Current CONTEXT.md numbers (~125 Google reviews at 4.9★, 8.0 Expedia, 5 FB, 0 TripAdvisor unclaimed) are the LAST-KNOWN baseline from April 9. They may be wrong today. Verify live before writing.

## Hard rules

- **Never auto-publish a response.** All responses are DRAFTS for Adam/Ashley to paste.
- **Never edit `brand/review-aggregate.json` without a fresh live scrape** — no extrapolation, no copying yesterday's numbers forward.
- **Never trust CONTEXT.md as source of truth** for review numbers. Live listing pages are the only source of truth. CONTEXT.md gets updated by your end-of-session write, not the other way around.
- **Never surface a claim that doesn't pass the Re-Verify Gate.** If verification fails 3x for the same claim, mark it `STALE` and log the path failure.
- **Response voice**: Ashley first person, per VOICE-GUIDE.md website-voice rules (no emoji, no "luxury", no "Hill Country", no "Manor" as a location descriptor).

## End-of-session writes

1. **CONTEXT.md** — update "Last worked on" line with one-line review-monitor summary. If any Active Blocker was resolved by this run's re-verify, remove it entirely from CONTEXT.md (don't just strike through). Keep under 150 lines.
2. **CHANGELOG.md** — append one dated bullet: `rancho-review-monitor: scraped N reviews across P platforms, resolved X stale claims, drafted Y response(s)`.
3. **TODO.md** — add any new manual follow-ups ("paste this response draft on GBP"). Mark done any items re-verify cleared.
4. **DECISIONS.md** — no changes unless you made a real decision (e.g., chose one verification path over another with tradeoffs).

## Edge cases

- **All platforms' APIs fail simultaneously** → almost certainly a network/auth issue, not a data issue. Do NOT write any state mutations. Commit nothing. Log to BLOCKERS.md.
- **Review count decreased** (someone deleted a review, or the platform moderated it) → status = `urgent`, write a FLAG_FOR_ADAM in session-log.md, do NOT RESOLVE any existing claim about that platform.
- **A review appears in your scrape that isn't in `review-aggregate.json`** but your aggregate claims 0 for that platform → aggregate is stale; re-baseline that platform from today's scrape and note in session-log.
- **Ashley already responded** (response text visible on public listing) → this is the common "why isn't the flag clearing" case. Count it as a reply. RESOLVE any matching task card claim. Note in session-log: `Ashley replied to review {id}`.
