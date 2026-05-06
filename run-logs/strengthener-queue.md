# Strengthener Queue — rancho-content-weekly

Tracks which pages have been touched and which are queued. One page per run.
Priority: broken/placeholder assets first, then highest-impression landing pages.

---

## Queue (landing pages only — not blog posts)

| Page | Last Touch | Status |
|------|-----------|--------|
| `weddings.html` | 2026-04-22 | BLOCKED — see run log below |
| `accommodations.html` | 2026-05-06 | BLOCKED — same two NEEDS ADAM items (run 3, no movement) |
| `host-your-event.html` | — | Pending |
| `events.html` | — | Pending |
| `pool-day-pass-austin.html` | — | Pending |
| `glamping-near-austin-texas.html` | — | Pending |
| `bachelorette-party-austin-texas.html` | — | Pending |
| `ranch-wedding-texas.html` | — | Pending |
| `wedding-venues-near-austin.html` | — | Pending |
| `corporate-retreat-near-austin.html` | — | Pending |
| `safari-tents-near-austin.html` | — | Pending |
| `things-to-do-near-austin-with-kids.html` | — | Pending |
| `weekend-getaways-near-austin.html` | — | Pending |

---

## Run Log

### 2026-04-22 — weddings.html — BLOCKED (hard stops hit)

**Attempted:** weddings.html (priority 1 — listed as gallery placeholder in task file)

**Finding:** Gallery placeholder is RESOLVED. The 2026-04-21 Galleries admin build seeded 17 real photo tiles into Supabase (`rancho_photos` table, section=`weddings`) and hydrated the lightbox gallery non-blocking. No placeholder state remains.

**Hard stops hit (2 of 2 required items blocked):**

1. **No approved testimonials list exists.** The review report at `brand/review-reports/2026-04-09-review-report.md` contains review snippets from The Knot and other platforms, but they have no verified event dates and are not on an approved testimonials list. Cannot place a real guest testimonial on the wedding page without one. → **NEEDS ADAM**

2. **Author byline decision (Adam vs Ashley) not settled in GOALS.md.** GOALS.md (week of April 20) has no mention of content author byline for website pages. Cannot add a named author block without this decision. → **NEEDS ADAM**

**Result:** No changes to weddings.html. Page is not edited this run.

**Next run:** `accommodations.html` — low-res thumbnail blocker is a data issue (requires Ashley re-upload), but other strengthening items (local detail, copy depth) can proceed if testimonials and author block blockers are resolved.

---

### 2026-04-29 — accommodations.html — BLOCKED (second consecutive blocked run)

**Attempted:** accommodations.html (priority 2 — low-res thumbnails noted but workable).

**Re-verified blockers from 2026-04-22:**

1. **Testimonials list still does not exist.** No `brand/approved-testimonials.md`. `brand/review-aggregate.json` (RUN_012, 2026-04-28) confirms Google count remains stale-snippet-only (175 unverified vs. 127 verified Apr 9 baseline); no curation of individual quotes to event dates has happened. → Still NEEDS ADAM.

2. **Author byline decision still not in GOALS.md.** GOALS.md (week of April 20, last updated 2026-04-20) has no "Settled Decisions" entry and no mention of Adam/Ashley/Team byline. → Still NEEDS ADAM.

**Pattern:** Per the rancho-content-weekly task spec, each pass MUST include at least 3 of (photos, author block, testimonial, local detail). With items 2 and 3 blocked, only 2 are achievable — task spec cannot be satisfied. Two of the four item types are gated entirely on Adam, and they have not moved in 7 days.

**Recommendation to Adam:** Either (a) settle both decisions this week — both are <30 minutes of work — or (b) pause this scheduled task in `GOALS.md` → "Paused Workstreams" until the prerequisites are in place. Running the task weekly while it's structurally blocked produces noise without progress.

**Result:** No changes to accommodations.html or any other landing page. Queue remains as-is.

**Next run:** Same priority order — re-attempt accommodations.html if blockers resolve. Otherwise this entry becomes run 3 of the same NEEDS ADAM.

---

### 2026-05-06 — accommodations.html — BLOCKED (third consecutive blocked run)

**Attempted:** accommodations.html (priority 2, holdover from run 2).

**Re-verified blockers (per `feedback_stale_flags.md` — required before re-surfacing):**

1. **Testimonials list still does not exist.** `find /Users/adamstyer/Documents/rancho-moonrise/brand -name "*testimonial*" -o -name "*approved*"` returns zero results. No `brand/approved-testimonials.md`. Latest `brand/review-aggregate.json` (RUN_020, 2026-05-06) confirms Google snippet is at 126 @ 4.9★ for the fifth consecutive run — still no curation of individual quotes to verified event dates. → Still NEEDS ADAM.

2. **Author byline decision still not in GOALS.md.** GOALS.md (week of April 20, last updated 2026-04-20 — same week as run 2) has no "Settled Decisions" section and no Adam/Ashley/team byline mention. The week marker has not advanced for 16 days. → Still NEEDS ADAM.

**16-day pattern:** Three runs (4/22, 4/29, 5/06), zero website edits produced. Both prereqs are <30 minutes of Adam time. The task is structurally non-productive until one of two things happens:
  - (a) Adam creates `brand/approved-testimonials.md` AND adds a Settled Decisions section to GOALS.md with the byline pick, OR
  - (b) Adam pauses `rancho-content-weekly` in GOALS.md → "Paused Workstreams" so this slot stops firing weekly with no output.

**Recommendation tightened to single ask (not A/B menu):** Adam, pick (a) or (b) by next Monday's GOALS.md update (2026-05-11). If neither is done by 5/11, run 4 will be the same blocked entry.

**Result:** No changes to any landing page. No HTML edits. No commits to site/. Queue unchanged.

**Next run:** 2026-05-13. If still blocked, the next run will recommend pausing the task by default rather than running again.
