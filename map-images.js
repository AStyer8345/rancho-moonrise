#!/usr/bin/env node
/**
 * Maps downloaded WordPress images to clean semantic filenames
 * used in the rebuilt site. Copies (not moves) from original/ to images/.
 */

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'site', 'images', 'original');
const DST = path.join(__dirname, 'site', 'images');

// ── Image Map: semantic name → original WordPress filename ──
const MAP = {

    // === HOMEPAGE (index.html) ===
    // Hero: Ranch under stars (first hero on WP homepage)
    'hero-ranch-sunset.jpg': 'AA638158-4ACD-4A56-A7DF-FF54E31FA072-2.jpg',
    // Feature: Cabins & Tents card
    'feature-safari-tent.jpg': 'juliadavisco-07283-scaled-e1739987454656.jpeg',
    // Feature: Weddings card
    'feature-wedding.jpg': 'juliadavisco-01175-e1725931185811.jpg',
    // Feature: Live Music card
    'feature-music.jpg': 'Alex-Lambert-at-Rancho-Moonrise-by-Ismael-Quintanilla-III_IQ38752-Enhanced-NR-e1744834860338.jpg',
    // Feature: Event Barn card
    'feature-event-barn.jpg': 'SC0523.jpg',
    // Feature: Pool card
    'feature-pool.jpg': 'DJI_0414-copy.jpg',
    // About: Aerial ranch view
    'about-ranch-aerial.jpg': 'juliadavisco-03263_websize.jpeg',
    // CTA: Wedding reception
    'cta-wedding-reception.jpg': 'AJ-wedding-10-29-22-sneakpeek-17-scaled-1-e1667494662864.jpg',
    // CTA: Campfire night
    'cta-campfire-night.jpg': 'SC0013.jpg',

    // === ACCOMMODATIONS (accommodations.html) ===
    // Cabin main photo
    'accom-cabin-exterior.jpg': 'FV4A6253.jpg',
    // Safari tent main photo
    'accom-safari-tent.jpg': 'IMG_0333.jpg',
    // Group/retreat aerial
    'accom-group-aerial.jpg': '376A7268.jpg',
    // Campfire evening
    'accom-campfire-evening.jpg': 'Paige-Vaughn-Photo_Rancho-Moonrise-Open-House_0047-scaled-e1670297153926.jpeg',
    // CTA: tent morning
    'cta-tent-morning.jpg': 'EstherMakauPhotography-Rancho-Moonrise-56_websize.jpeg',

    // === WEDDINGS (weddings.html) ===
    // Hero: Wedding celebration
    'wedding-hero.jpg': 'AJ-wedding-10-29-22-web-520.jpg',
    // Ceremony: Corral
    'wedding-ceremony-corral.jpg': 'AJ-wedding-10-29-22-web-216.jpg',
    // Event barn reception
    'wedding-event-barn.jpg': 'PNG-image-6-2-copy.jpeg',
    // Poolside / fields
    'wedding-poolside.jpg': 'OKeefe-186.jpg',
    // CTA sunset
    'wedding-cta-sunset.jpg': 'AJ-wedding-10-29-22-web-564-copy-1.jpg',

    // === HOST YOUR EVENT (host-your-event.html) ===
    // Hero: Event barn setup
    'events-hero-barn.jpg': 'AestheticsSummit_0061-e1757351527599.jpg',
    // Venue: Event Barn
    'venue-event-barn.jpg': '376A7266_websize.jpg',
    // Venue: Neon Moon
    'venue-neon-moon.jpg': '103A9725-e1757351706359.jpg',
    // Venue: Poolside
    'venue-poolside.jpg': 'DI1A2785.jpg',

    // === EVENTS (events.html) ===
    // CTA: Music night
    'cta-music-night.jpg': 'events.jpg',
    // Event thumbnails
    'event-lone-star-party.png': 'Screenshot-2026-03-31-at-11.41.50-AM.png',
    'event-bridal-sip-see.jpg': 'IMG_2345.jpg',
    'event-free-friday-pool.jpg': '7A006E15-BEEB-4D2B-8947-36A4D67E663E-copy.jpg',
    'event-yoga-mimosas.png': 'square.png',
    'event-rancho-rodeo.png': 'Square-01.png',
    'event-mothers-day.png': 'mothers_day_site_graphic.png',
    'event-paella-dinner.png': 'SOCIAL-MEDIA-VERTICAL-INSTAGRAM-POST-e1749773308169.png',

    // === CONTACT (contact.html) ===
    'contact-hero.jpg': 'DI1A2811-e1757353329488.jpg',

    // === FAQs (faqs.html) ===
    'faqs-hero.jpg': 'Rancho-Moonrise-OpenHouse-173.jpg',

    // === BLOG placeholders ===
    'blog-glamping-packing.jpg': 'juliadavisco-09357_websize-1.jpeg',
    'blog-wedding-venues.jpg': 'AJ-wedding-10-29-22-sneakpeek-14.jpg',
    'blog-corporate-retreat.jpg': 'LaurenParrPhoto-RMPaella-0627.jpg',
    'blog-manor-things-to-do.jpg': 'rancho-moonrise-20_websize-e1714845110125.jpg',
    'blog-glamping-vs-camping.jpg': 'juliadavisco-09290_websize.jpeg',
    'blog-ranch-wedding-tips.jpg': 'Edgerly-Photography-25.jpg',

    // === SHARED ASSETS ===
    'logo.png': 'RanchoMoonrise_Logo_RGB_Tertiary_Fullcolor@2x-1.png',
    'favicon.png': 'rancho-favicon.png',
    'map.jpg': 'map.jpg',
    'og-image.jpg': 'social-preview.jpg',

    // === WEDDING BADGES ===
    'badge-brides-of-austin-2023.png': 'PreferredVendorSeal_2023-BOA_Black.png',
    'badge-weddingwire-austin.png': 'ws-austin-official-partner-badge-light.png',
    'badge-wedding-chicks.png': '2023-WC-Feature-Badge.png',
    'badge-brides-of-austin-2025.png': 'bow-2025-badge.png',
    'badge-brides-of-austin-2025-secondary.png': 'bow-2025-badge-secondary.png',

    // === ACCOMMODATION TYPES (wedding page) ===
    'accommodation-cabin.jpg': 'accommodation-1.jpg',
    'accommodation-family-safari.jpg': 'accommodation-2.jpg',
    'accommodation-double-safari.jpg': 'accommodation-3.jpg',
    'accommodation-premium-safari.jpg': 'accommodation-4.jpg',

    // === DECORATIVE ===
    'shape-1.png': 'shape-1.png',
    'shape-2.png': 'shape-2.png',
    'shape-3.png': 'shape-3.png',
    'shape-4.png': 'shape-4.png',
    'contact-shape-bg.png': 'contact-shape-bg.png',
};

let copied = 0;
let skipped = 0;
let missing = 0;

for (const [newName, originalName] of Object.entries(MAP)) {
    const src = path.join(SRC, originalName);
    const dst = path.join(DST, newName);

    if (!fs.existsSync(src)) {
        console.log(`  ✗ MISSING: ${originalName} → ${newName}`);
        missing++;
        continue;
    }

    fs.copyFileSync(src, dst);
    const sizeKB = (fs.statSync(dst).size / 1024).toFixed(0);
    console.log(`  ✓ ${originalName} → ${newName} (${sizeKB} KB)`);
    copied++;
}

console.log(`\n══════════════════════════════════════════`);
console.log(`  Copied:  ${copied}`);
console.log(`  Skipped: ${skipped}`);
console.log(`  Missing: ${missing}`);
console.log(`  Output:  ${DST}`);
console.log(`══════════════════════════════════════════\n`);
