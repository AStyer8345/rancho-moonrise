# RUN_072 — rancho-review-monitor — 2026-08-30 06:38 CT

**9-day gap.** The task did not fire 8/22–8/29. Last run was RUN_071 (2026-08-21).

**No new reviews on any platform.** Brand canary passed before any absence was recorded.

**Status: `urgent`** — carried on the standing condition, not a new one. Haylee L.'s 1★ on The Knot
is unreplied at **day 185 / 26.4 weeks**; two drafts sit unposted at **day 103**.

---

## The headline: the last working direct-scrape path closed

ResortPass returned **HTTP 403 behind a Cloudflare "Attention Required!" captcha** — on WebFetch
*and* on a `curl` with a desktop Chrome UA. Two independent clients, same result, so this is
site-level bot detection rather than a fetcher quirk.

RUN_071 had recorded `direct_fetch_works: true` and called it *"a WORKING PATH, re-proven"*.

That matters more than one platform going dark, and the reason was checked against
`brand/review-aggregate.json` rather than asserted from memory. Every other monitored platform was
already blocked on direct fetch:

| Platform | Direct-fetch blocker since |
|---|---|
| Google, Airbnb, Hotels.com | 2026-04-17 |
| The Knot | 2026-05-23 |
| Hipcamp | 2026-06-03 |
| TripAdvisor | 2026-07-18 |
| Facebook | 2026-08-19 |
| Expedia | 2026-08-21 |
| **ResortPass** | **the sole survivor — until today** |

**The number of working direct-scrape paths across all monitored platforms is now zero.** Every
held value on this property rests on a search snippet. The standing *"8 blockers and 4 name the
same remedy"* flag has stopped being a question of coverage breadth — direct verification is gone.

**`53 @ 4.8★` was HELD entirely unchanged.** An access failure is not a data change. This is the
same discipline that stopped RUN_070 from manufacturing a second consecutive decline on the one
platform carrying this year's only genuine one — and RUN_071 proved that refusal correct.

Logged as a **WATCH at 1 of 3**, deliberately below the blocker threshold. Retry once per run; if
RUN_073 and RUN_074 also 403, open the blocker.

This is the **third distinct ResortPass failure mode**: extraction (RUN_070), clean (RUN_071),
access (RUN_072). Three different mechanisms on one platform in four runs.

---

## The offsetting find: Apple Maps renders review aggregates

First read ever by this task. `rancho-site-daily` declared Apple Maps as a `sameAs` node on
2026-08-25 and flagged it explicitly as *"the entity behind Siri/Spotlight, an answer surface with
zero measurement here"* — and nobody had checked it for reviews.

Two independent reads, two different URL forms, identical values:

- **80% overall (5 ratings)**
- Accommodations 100% (4) · Customer Service 100% (3) · Location 100% (4)
- Attribution: Yelp — **by icon, not by stated text**

**Nothing was promoted from it and no held value was moved by it.** Two reasons:

1. **The attribution is icon-inferred.** The second read said so in as many words: *"the text
   attribution is implied rather than explicitly stated."*
2. **It contradicts Yelp directly.** Yelp's own domain-restricted result the same run reads
   **1 review**, with a single pool-day-pass body. Five ratings and one review cannot both describe
   the same pool, and the weaker link is the icon.

The **80% is explicitly not recorded as a rating decline.** 80% overall against three 100%
subcategories is internally odd, and a novel, well-formed, unflattering-but-plausible number about
our own property on a *first* sighting is the exact shape the Travelers' Choice precedent
(RUN_061, re-rejected RUN_071) says to reject.

Next run: re-read for a 2nd-run confirmation and resolve whether these are Apple's own ratings,
Yelp's, or a blend. Only after both does any value move.

---

## The Googlebot-UA lead: tried, and closed

`rancho-site-daily` established on 8/25 that Google Maps serves a JS shell to `WebFetch` *and* to a
default `curl` UA — both read as "no such business" — and that **only a Googlebot UA renders the
title**. It used that to derive the canonical GBP entity from the `fid` already on this machine.

**This task had never tried that UA.** So it was a genuinely untried path on the oldest blocker
here — a varied request, not a retry of a known-dead one.

Tried today against `google.com/maps?cid=10788924849497903065`: **HTTP 200, 4,160 bytes.** The
title renders. `content="View details about Rancho Moonrise on Google Maps"` renders. **Zero**
`rating` / `review` / `aggregateRating` / `reviewCount` tokens anywhere in the document; no
`/maps/place/` canonical in the body; `url_effective` does not redirect.

**The Googlebot UA unlocks entity identity only, never review data.** Recorded as a **closed lead**
in `BLOCKERS.md` so no future run spends a fetch on it expecting a count. It stays the correct path
for confirming *which* GBP entity is ours.

Authoritative Google **130 @ 4.9★ is now 103 days stale**. The contaminated snippet path was again
deliberately not re-run — RUN_070 proved it echoes the site's own `reviewCount:"125"` back as a
Google count.

---

## Expedia: resolution path (d) disconfirmed

HTTP 429 a **4th consecutive time**. The blocker's resolution path (d) reads *"429 is transient by
nature, so this may self-heal."*

It got the most generous test it will ever get: the retry came after a **9-day gap in which this
client sent Expedia zero requests**. A 429 that survives nine days of silence is not a transient
rate-limit being re-tripped by our own traffic. Path (d) should not be counted as a live option
after one more failure.

**No Expedia search query was issued this run, deliberately.** The count-6 promotion question is a
**rule** question — the hard rule demands a direct scrape, and the direct scrape is a formal blocker
— escalated to Adam in RUN_071. A 4th snippet confirmation cannot move a rule. 8.0 and 6 both carry
unchanged, neither re-confirmed, neither recorded as changed.

---

## Rejected this run

- **The TripAdvisor cross-property bleed set recurred:** *"120 acre ranch"* (Rancho is 36) and
  *"15 minutes from downtown Austin"* (Rancho is 20). Same artifact family as RUN_070/RUN_071.
  Written nowhere.
- **A `$35–$70` price band** arrived inside that same rejected summary. The held TripAdvisor band is
  `$45–$154` (STALE:2026-06-30). It is **not** recorded as a price change — a number that arrives
  inside a set you just rejected does not get promoted out of it. Band carries unchanged and stale.
- **Hipcamp bleed source** *Stargazing @ Moonrise Ranch* (Mountain Center, **California**, 105
  reviews) was in the result set again and read from zero times.

---

## Re-Verify Gate — 19 claims

```
[2026-08-30 06:38] re-verify google-count-130          — blocked      — live=UNREADABLE prior=130 (103d stale)
[2026-08-30 06:38] re-verify google-googlebot-ua-path  — closed_lead  — live=entity only, no review data
[2026-08-30 06:38] re-verify google-unreplied-1        — still_true   — live=1 prior=1 (done-log, no reply entry since 2026-04-15)
[2026-08-30 06:38] re-verify facebook-6-86pct          — still_true   — live=6/86% prior=6/86% (5th consecutive)
[2026-08-30 06:38] re-verify facebook-review-text      — blocked      — live=UNREADABLE (5th run, no draft, deliberate)
[2026-08-30 06:38] re-verify hipcamp-count-0           — still_true   — live=0 prior=0
[2026-08-30 06:38] re-verify hipcamp-voice-violations  — still_true   — live=both prior=both (6th consecutive)
[2026-08-30 06:38] re-verify theknot-haylee-unreplied  — still_true   — live=unreplied day 185 prior=day 176
[2026-08-30 06:38] re-verify theknot-8-at-4.5          — held         — not re-read, no contradicting signal
[2026-08-30 06:38] re-verify tripadvisor-0-unclaimed   — still_true   — live=0/unclaimed prior=0/unclaimed
[2026-08-30 06:38] re-verify tripadvisor-price-band    — stale        — live=NOT RE-CONFIRMABLE prior=$45-$154 (STALE:2026-06-30)
[2026-08-30 06:38] re-verify tripadvisor-bleed-artifact— rejected     — 3rd sighting, written nowhere
[2026-08-30 06:38] re-verify expedia-rating-8.0        — not_requeried— deliberate; rule question, not a data question
[2026-08-30 06:38] re-verify expedia-direct-fetch      — blocked      — live=HTTP 429 (4th consecutive); path (d) disconfirmed
[2026-08-30 06:38] re-verify resortpass-53-at-4.8      — held         — live=UNREADABLE prior=53@4.8 (access failure, not a data change)
[2026-08-30 06:38] re-verify resortpass-direct-works   — REVERSED     — live=false prior=true (Cloudflare 403, both clients)
[2026-08-30 06:38] re-verify yelp-1-at-5.0             — still_true   — live=1 prior=1 (domain-restricted, body surfaced)
[2026-08-30 06:38] re-verify airbnb-listing-existence  — no_attempt   — 72nd consecutive (403 pattern since 2026-04-17)
[2026-08-30 06:38] re-verify apple-maps-aggregate      — NEW          — live=80%/5 ratings, 2 reads agree, NOT promoted
```

**Tally:** 7 still_true · 1 reversed · 2 held · 4 blocked/stale · 1 closed_lead · 1 not_requeried ·
1 rejected · 1 no_attempt · 1 new. **0 resolved.**

No review-log written — **no new reviews on any platform**, so there was nothing to log and nothing
to draft.

---

## FLAG_FOR_ADAM

1. **The rendering-scraper purchase is now one purchase against six platforms, not four.** With
   ResortPass gone, direct verification on this property is at **zero working paths**. Every number
   in `review-aggregate.json` now rests on a search snippet. An Apify (or equivalent) rendering
   scraper reopens Google-adjacent, Hipcamp, The Knot, TripAdvisor, Expedia *and* ResortPass at
   once. This has been re-litigated per-platform for five months.
2. **Haylee L.'s 1★ on The Knot is unreplied at day 185 / 26.4 weeks** — nearly half a year, on the
   only negative review on a wedding-marketplace listing whose own summary calls it *"the main
   negative review among otherwise very positive feedback."*
3. **Two response drafts are unposted at day 103.** They were written RUN_034 (2026-05-19).
4. **Facebook's non-recommend review is still unreadable — 5th run, still no draft.** It remains a
   60-second fix by whoever holds the Page: open the Reviews tab, paste the text into the repo, and
   a real draft follows next run. Writing one blind would be fabrication.
5. **The Expedia count-6 rule question is still open from RUN_071.** The evidence bar it set was
   cleared; the hard rule forbidding a write without a direct scrape now means "pending forever"
   because the direct scrape is a formal blocker. Adam's call, not this task's.
6. **New, small:** Apple Maps is a live readable review surface on the entity behind Siri and
   Spotlight, and its reply coverage has never been checked. Worth 60 seconds of Ashley's time to
   look at what it actually shows, which would also settle the 5-ratings-vs-1-review conflict.

---

## Cross-task finding: `rancho-site-daily`'s 2026-08-25 work is uncommitted and undeployed

Found while staging. Not a review claim, surfaced because it is a false "shipped" statement living in
`CONTEXT.md`.

```
git show HEAD:site/index.html   → 11 sameAs URLs
working tree site/index.html    → 14 sameAs URLs
```

`CONTEXT.md`'s header asserts `sameAs` **11 → 14** and a defect fixed at
`site/improvement-plan.html:1076`. Both edits exist **on disk only**. Thirteen files are
modified-uncommitted (`site/index.html`, `site/improvement-plan.html`, `.gitignore`,
`api/inquiry.js`, `site/js/main.js`, `site/css/styles.css`, `site/sitemap.xml` and six page files)
and `run-logs/2026-08-25-seo.md` is untracked. **Nothing from 8/25 has been pushed, so nothing has
deployed.**

The consequential part is not the `sameAs` count — that run said plainly it would not move a
position. It is the banned-copy fix: the 8/25 write-up states the next agent to pick up
`rancho-seo-s2-h2-summaries` would otherwise publish *"a 34-acre glamping ranch … with luxury safari
tents"* into the first H2 of four pages, from an instruction the system itself supplied. **That fix
is still uncommitted.**

Same failure shape as this task's own RUN_069 — scraped everything, died before writing, raw notes
untracked, recovered by the next run. Second instance across two different tasks, so: a pattern.

**Deliberately not fixed here.** Committing another task's half-finished tree produces an incoherent
commit and pulls files out from under a session that may still hold them. This run staged **only its
own files** and left all thirteen untouched. Logged to `TODO.md` under NEEDS ADAM.
