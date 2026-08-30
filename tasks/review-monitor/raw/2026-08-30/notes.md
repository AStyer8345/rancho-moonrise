# RUN_072 raw scrape notes — 2026-08-30 06:38 CT

Files in this directory:
- `google-maps-cid-googlebot.html` — HTTP 200, 4,160 bytes, Googlebot UA on `maps?cid=10788924849497903065`
- `resortpass.html` — HTTP 403, 4,549 bytes, Cloudflare "Attention Required!" challenge page

## Brand canary — PASSED (run before any absence was recorded)

Query: `Rancho Moonrise Manor Texas glamping ranch` (unrestricted).
Returned `ranchomoonrise.com` plus 3 additional owned pages (`/accommodations/`, `/blog/`,
`/blog/things-to-do-manor-tx/`), Hipcamp, Facebook ×2, LinkedIn, VenueScanner, Well City Guide.
Session is not degraded. Absences recorded below are real absences.

## Direct-fetch attempts

| Target | Path | Result |
|---|---|---|
| Google Maps CID | `curl` **Googlebot UA** → `google.com/maps?cid=10788924849497903065` | HTTP 200. `<title>Rancho Moonrise - Google Maps</title>` + `content="View details about Rancho Moonrise on Google Maps"`. **Zero** rating/count/`aggregateRating`/`reviewCount` tokens. No `/maps/place/` canonical in body; `url_effective` does not redirect. |
| ResortPass | WebFetch → `resortpass.com/hotels/rancho-moonrise` | **HTTP 403** |
| ResortPass | `curl`, desktop Chrome UA | **HTTP 403** — body is `<title>Attention Required! | Cloudflare</title>`, captcha challenge |
| Expedia `h89565924` | WebFetch → `/Manor-Hotels-Rancho-Moonrise.h89565924.Hotel-Information` | **HTTP 429** (4th consecutive) |
| Apple Maps `IECFC57C438E79EC4` | WebFetch → `maps.apple.com/place?place-id=…` | **HTTP 200, data rendered** |
| Apple Maps (2nd read, different URL form, `&address=…`) | WebFetch | **HTTP 200, identical values** |

### Googlebot-UA lead — tried and CLOSED

`rancho-site-daily` established 2026-08-25 that only a Googlebot UA renders the Maps CID page
title, and used that to confirm the GBP entity. Review-monitor had never tried it. Tried today:
it confirms **entity identity only**. The title renders; no review data renders at any point in
the document. This is a *varied request*, not a retry of a known-dead path — and it is now a
**closed lead**. Do not re-attempt it for count/rating. It remains valid for entity confirmation.

### ResortPass — new failure mode, failure count 1

RUN_071 recorded `direct_fetch_works: true` and called it a "WORKING PATH, re-proven".
Today both WebFetch and a desktop-UA `curl` return 403 behind a Cloudflare captcha. This is a
**third, distinct** ResortPass failure mode:
- RUN_070: HTTP 200, page rendered, rating block absent → *extraction* failure (later vindicated)
- RUN_071: HTTP 200, everything rendered → clean
- RUN_072: HTTP 403 Cloudflare challenge → *access* failure

Value `53 @ 4.8★` **HELD unchanged**. No data change recorded. Failure count for this mode: 1.
Threshold for a blocker is 3.

## Search sweep (all domain-restricted except the canary)

**Facebook** (`facebook.com`): "an 86% recommendation rate based on 6 Facebook reviews".
→ 6 / 86% — **5th consecutive confirmation**, 2nd on a domain-restricted query. Review body
still not surfaced. Direct fetch not attempted (`facebook-review-text` blocker open, no
contradicting signal).

**Hipcamp** (`hipcamp.com`): verbatim — "Rancho Moonrise is a **34-acre** ranch just outside of
vibrant Austin, Texas" and "an inviting pool, **a bar**, and a cozy lounge area".
→ Both voice violations **6th consecutive confirmation**. No review count surfaced on any
Rancho-attributed result → count 0 HELD.
Known bleed source present again and excluded: *Stargazing @ Moonrise Ranch* (Mountain Center,
**California**, 105 reviews). Nothing was read from it.

**The Knot** (`theknot.com`): Haylee L. body still indexed verbatim ("a neighboring property
played extremely loud amplified music from early afternoon until after midnight… the venue has
no ability to control or prevent this"). Result explicitly frames it as "the main negative review
among otherwise very positive feedback". **No owner response surfaced.**
→ Unreplied **day 185 / 26.4 weeks**. Count/rating did not surface inline; 8 @ 4.5 HELD, not re-read.

**TripAdvisor** (`tripadvisor.com`): canonical `g56224-d33307272` still indexed as "RANCHO
MOONRISE - Prices & Campground Reviews (Manor, TX)", **no count or rating in snippet** →
0 / unclaimed HELD.

**Yelp** (`yelp.com`): `m.yelp.com/biz/rancho-moonrise-manor`, "Updated June 2026", "36 Photos",
**1 review**, body describes a pool day pass (~$20/person, $2 towel rental, coolers allowed, no
outside alcohol). → 1 @ 5.0 HELD. Not in monitored scope.

**Expedia**: no search query issued this run — see run-log, deliberate.

## REJECTED this run

- TripAdvisor summary carried the documented **cross-property bleed set** again: "**120 acre**
  ranch" (Rancho is 36) and "**15 minutes** from downtown Austin" (Rancho is 20). Same artifact
  family as RUN_070/RUN_071. Rejected, written nowhere.
- Same summary offered a price band of "**$35–$70**". The held TripAdvisor band is `$45–$154`
  (STALE:2026-06-30). `$35–$70` arrived inside the rejected bleed set and is **not** recorded as
  a price change. Band carries unchanged and still stale.

## NEW SURFACE — Apple Maps (first read ever by this task)

Two independent reads, two different URL forms, identical values:

- Overall: **80% (5 ratings)**
- Accommodations 100% (4 ratings) · Customer Service 100% (3 ratings) · Location 100% (4 ratings)
- Attribution: Yelp — **by icon, not by stated text**. Second read explicitly returned
  "the text attribution is implied rather than explicitly stated".

**Conflict, deliberately left unresolved:** Yelp's own domain-restricted result the same run reads
**1 review**. Apple reads **5 ratings** attributed to Yelp by an icon a summarizer interpreted.
The two cannot both describe the same pool, and the weaker link is the icon-inferred attribution.

**Not promoted anywhere.** Yelp's 1 @ 5.0 is NOT overwritten. The 80% is NOT recorded as a rating
decline — 80% overall against three 100% subcategories is internally odd, and this is exactly the
shape of finding (novel, well-formed, unflattering-but-plausible) that the Travelers' Choice
precedent says to distrust on a first sighting.

What IS recorded: Apple Maps renders review aggregates to WebFetch today, on the entity behind
Siri and Spotlight, and its reply coverage has never been checked. Needs a 2nd-run confirmation
and an attribution resolution before any value moves.
