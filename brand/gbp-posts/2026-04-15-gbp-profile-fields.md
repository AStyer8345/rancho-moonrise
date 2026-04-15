# GBP Profile Fields — April 15, 2026

**Purpose:** Replace the blog post currently in "From the owner", fill remaining hotel amenity categories, set business hours, add opening date, verify phone/website. All copy-paste ready for Adam.

Source: `business.google.com` → manage Rancho Moonrise profile → "Edit profile" tabs (About, Hours, Amenities).

Voice checked against `brand/voice-guide.md` and `VOICE-GUIDE.md`. No banned terms ("luxury", "Hill Country", "Manor", "General Store", specific unit counts, "nestled", "premier", "curated").

---

## 1. 🚨 URGENT — "From the owner" description (replace the blog post)

**Where:** Edit profile → About → "From the business" / "Description" field
**Character limit:** 750 chars
**Draft (738 chars):**

```
Rancho Moonrise is a 36-acre glamping ranch 20 minutes from downtown Austin. Safari tents and hand-crafted cabins with real beds, A/C, and heat — no gear required, just show up. Our pool is the heart of the property, with a poolside bar during events, fire pits for when the stars come out, and a few donkeys who'll probably wander over to say hey. The Lodge is where folks gather — grab a drink, meet your neighbors, settle in.

We host weddings, private events, corporate retreats, and weekend getaways. Open to overnight guests year-round, and pool day passes are available on select dates.

Family-owned and operated since 2024. Come see it for yourself — y'all are gonna love this place.
```

**Notes for Adam:**
- Delete whatever is currently in that field first (the Austin glamping blog post).
- Do NOT paste into "Services" or "Products" — this is the business description field only.
- If the field has a different char limit now, trim from "Family-owned..." onward first.

---

## 2. Business hours

**Where:** Edit profile → Hours → "Main hours"

| Day | Hours |
|-----|-------|
| Monday | Closed |
| Tuesday | Closed |
| Wednesday | 9:00 AM – 8:00 PM |
| Thursday | 9:00 AM – 8:00 PM |
| Friday | 9:00 AM – 8:00 PM |
| Saturday | 9:00 AM – 8:00 PM |
| Sunday | 9:00 AM – 8:00 PM |

**Rationale:** Ashley's direction (April 10 call, TODO.md) was Mon/Tue closed. 9–8 covers front-desk, tours, check-in, and pool day-pass windows without implying 24/7 walk-in access. Overnight guests aren't affected — lodging is 24/7 for booked stays; these are contact/front-desk hours.

**Also set:** Voicemail greeting should note Mon/Tue closed, responses resume Wednesday (already in TODO under NEEDS ASHLEY / Adam).

---

## 3. Hotel amenity categories (answer the remaining)

**Where:** Edit profile → Amenities → scroll through categories. For each below, check YES unless marked otherwise.

### Highlights
- Family-friendly — **YES**
- LGBTQ+ friendly — **YES**
- Couple-friendly — **YES**

### Accessibility
- Wheelchair-accessible entrance — **YES**
- Wheelchair-accessible parking lot — **YES**
- Wheelchair-accessible restroom — **YES**
- Wheelchair-accessible rooms — **NO** (safari tents are not ADA; flag to verify re: cabins)

### Activities
- Outdoor pool — **YES** ✓ already set
- Hot tub — **NO**
- Fitness center — the current YES is a data error; if you can change, set to **NO**. Rancho does not have a fitness center.
- Fire pit — **YES**
- Game room / lawn games — **YES** (cornhole, giant Jenga, etc. available)

### Amenities
- Breakfast — **YES** ✓ already set
- Free Wi-Fi — **YES**
- Free parking — **YES** ✓ already set
- Pet-friendly — **YES** ✓ already set (leash required, fee applies)
- Air conditioning — **YES**
- Heating — **YES**
- Smoke-free — **YES** (smoking permitted outdoors only in designated areas)
- Laundry service — **NO**
- Room service — **NO**
- 24-hour front desk — **NO**

### Food & Drink
- Restaurant — **NO** (not a public restaurant)
- Bar — **NO** (Neon Moon Barn Lounge is event-only, not a walk-in bar — do NOT check this)
- Breakfast available — **YES**

### Business
- Meeting rooms / event space — **YES**
- Wedding venue — **YES**
- Conference room — **YES** (The Lodge doubles for corporate retreats)

### Kitchen
- Kitchen / kitchenette in rooms — **NO** (cabins and tents do not have full kitchens)
- Coffee maker in rooms — **YES**
- Microwave in rooms — **NO**
- Mini-fridge in rooms — **YES**

### Sustainability practices
Check all that apply truthfully. Conservative checks only (unmarked = "not verified"):
- Water conservation — **YES** (rainwater/drought-aware landscaping)
- Waste reduction — **LEAVE UNCHECKED** until verified
- Energy efficiency — **LEAVE UNCHECKED** until verified

### Health & safety
- Enhanced cleaning — **YES**
- Smoke alarms in rooms — **YES**
- Fire extinguishers — **YES**
- First aid kit on site — **YES**

### Payments
- Credit cards accepted — **YES**
- Mobile payments (Apple Pay / Google Pay) — **YES** if processor supports
- Cash — **YES**

### Check-in / Check-out
- Check-in: **4:00 PM**
- Check-out: **11:00 AM**

---

## 4. Opening date

**Where:** Edit profile → About → "Opening date"
**Value:** **2024** (per `brand/2026-04-07-ranchomoonrise-form-info.txt` — "We have been open since 2024!")
**Month precision:** If GBP asks for month, leave blank or use January 2024. Ashley can sharpen later.

---

## 5. Phone + website verification

- **Phone:** (737) 291-1260 — confirm this is the number currently on the profile. Matches `site/js/main.js:389` (`tel:+17372911260`). If different, update.
- **Website URL:** Change from `http://...` to `https://ranchomoonrise.com`. HTTPS is a ranking signal and avoids the "Not Secure" warning.

---

## Posting order (what to do first)

1. **[URGENT]** Description replacement — kills the embarrassing blog post
2. Hours — so Mon/Tue callers see "closed" instead of dead air
3. Website → HTTPS
4. Phone verify
5. Amenity sweep (can be done in one sitting, ~10 min)
6. Opening date

---

## Flags for Ashley

- **Wheelchair-accessible rooms** — does any cabin meet ADA? Need confirmation before setting YES.
- **Sustainability practices** — which are actually in place (beyond water)? Don't overclaim.
- **Fitness center (already set YES)** — likely a bad auto-suggestion accept. There is no gym; please toggle off if you can edit.
