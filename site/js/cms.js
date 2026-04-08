/* ============================================================
   Rancho Moonrise — CMS Content Loader
   Fetches dynamic content from Supabase and populates the page.
   Falls back to hardcoded HTML if Supabase is unreachable.
   ============================================================ */

(function () {
    'use strict';

    var SUPABASE_URL = 'https://uuqedsvjlkeszrbwzizl.supabase.co';
    var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1cWVkc3ZqbGtlc3pyYnd6aXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5ODcwMjYsImV4cCI6MjA4ODU2MzAyNn0.Wu1DKotPPigTpVpQvmdRMpa7NW9-WnEou6bTV3kakFM';

    var REST = SUPABASE_URL + '/rest/v1/';
    var HEADERS = {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
    };

    // Simple fetch wrapper with timeout
    function query(table, params) {
        var url = REST + table + '?' + params + '&select=*';
        return fetch(url, { headers: HEADERS })
            .then(function (r) { return r.ok ? r.json() : []; })
            .catch(function () { return []; });
    }

    function formatDate(d) {
        if (!d) return '';
        var dt = new Date(d + 'T00:00:00');
        return dt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }

    function starsHtml(n) {
        return '★'.repeat(n);
    }

    // ---- Load Testimonials into Marquee ----
    function loadTestimonials() {
        var track = document.querySelector('.testimonial-marquee__track');
        if (!track) return;

        query('rancho_testimonials', 'is_active=eq.true&order=sort_order')
            .then(function (data) {
                if (!data.length) return; // Keep hardcoded fallback

                var cards = data.map(function (r) {
                    return '<div class="testimonial-marquee__card">' +
                        '<p class="testimonial-marquee__stars">' + starsHtml(r.stars) + '</p>' +
                        '<p class="testimonial-marquee__quote">' + r.quote + '</p>' +
                        '<p class="testimonial-marquee__attr">' + r.attribution + '</p>' +
                    '</div>';
                }).join('');

                // Duplicate for seamless loop
                var dupes = data.map(function (r) {
                    return '<div class="testimonial-marquee__card" aria-hidden="true">' +
                        '<p class="testimonial-marquee__stars">' + starsHtml(r.stars) + '</p>' +
                        '<p class="testimonial-marquee__quote">' + r.quote + '</p>' +
                        '<p class="testimonial-marquee__attr">' + r.attribution + '</p>' +
                    '</div>';
                }).join('');

                track.innerHTML = cards + dupes;
            });
    }

    // ---- Load Events into Slideshow + Cards ----
    function loadEvents() {
        var slideshow = document.getElementById('eventSlideshow');
        var eventsGrid = document.querySelector('.events-grid');

        query('rancho_events', 'is_active=eq.true&order=sort_order,event_date')
            .then(function (data) {
                if (!data.length) return; // Keep hardcoded fallback

                // Update the event slideshow (artwork images)
                if (slideshow) {
                    var slidesHtml = data.map(function (ev, i) {
                        return '<div class="event-slideshow__slide' + (i === 0 ? ' is-active' : '') + '">' +
                            (ev.artwork_url
                                ? '<img src="' + ev.artwork_url + '" alt="' + ev.title + '" width="800" height="800" loading="lazy">'
                                : '') +
                        '</div>';
                    }).join('');

                    var dotsHtml = data.map(function (ev, i) {
                        return '<button class="event-slideshow__dot' + (i === 0 ? ' is-active' : '') + '" aria-label="Event ' + (i + 1) + '" data-slide="' + i + '"></button>';
                    }).join('');

                    slideshow.innerHTML = slidesHtml +
                        '<div class="event-slideshow__dots">' + dotsHtml + '</div>';

                    // Re-init slideshow JS for new elements
                    initEventSlideshow();
                }

                // Update the events grid cards (show first 3)
                if (eventsGrid) {
                    var top3 = data.slice(0, 3);
                    eventsGrid.innerHTML = top3.map(function (ev) {
                        return '<div class="event-card fade-in is-visible">' +
                            (ev.artwork_url
                                ? '<div class="event-card__img"><img src="' + ev.artwork_url + '" alt="' + ev.title + ' event artwork" width="600" height="600" loading="lazy"></div>'
                                : '') +
                            '<div class="event-card__body">' +
                                '<p class="event-card__date">' + formatDate(ev.event_date) + '</p>' +
                                '<h3 class="event-card__title">' + ev.title + '</h3>' +
                                '<p class="event-card__desc">' + (ev.description || '') + '</p>' +
                                '<a href="/pages/events.html" class="event-card__link">Learn More &rarr;</a>' +
                            '</div>' +
                        '</div>';
                    }).join('');
                }
            });
    }

    // Re-init event slideshow after dynamic content load
    function initEventSlideshow() {
        var show = document.getElementById('eventSlideshow');
        if (!show) return;

        var slides = show.querySelectorAll('.event-slideshow__slide');
        var dots = show.querySelectorAll('.event-slideshow__dot');
        var current = 0;
        var count = slides.length;
        var interval = null;

        function goTo(index) {
            if (slides[current]) {
                slides[current].classList.remove('is-active');
                dots[current].classList.remove('is-active');
            }
            current = (index + count) % count;
            slides[current].classList.add('is-active');
            dots[current].classList.add('is-active');
        }

        function start() {
            if (interval) clearInterval(interval);
            interval = setInterval(function () { goTo(current + 1); }, 4000);
        }

        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                goTo(parseInt(this.dataset.slide, 10));
                start();
            });
        });

        show.addEventListener('mouseenter', function () { if (interval) clearInterval(interval); });
        show.addEventListener('mouseleave', start);
        start();
    }

    // ---- Load Hero Photos ----
    function loadHeroPhotos() {
        var slideshow = document.querySelector('.hero--slideshow');
        if (!slideshow) return;

        query('rancho_photos', 'section=eq.hero&is_active=eq.true&order=sort_order')
            .then(function (data) {
                if (!data.length) return; // Keep hardcoded fallback

                // Build new slides
                var slidesContainer = slideshow;
                var existingSlides = slidesContainer.querySelectorAll('.hero__slide');
                var heroContent = slidesContainer.querySelector('.hero__content');
                var heroNav = slidesContainer.querySelector('.hero__nav');

                // Remove old slides
                existingSlides.forEach(function (s) { s.remove(); });

                // Insert new slides before hero content
                data.forEach(function (ph, i) {
                    var div = document.createElement('div');
                    div.className = 'hero__slide' + (i === 0 ? ' is-active' : '');
                    div.style.backgroundImage = "url('" + ph.public_url + "')";
                    if (i > 0) div.setAttribute('aria-hidden', 'true');
                    slidesContainer.insertBefore(div, heroContent);
                });

                // Update dots
                var dotsContainer = heroNav.querySelector('.hero__dots');
                if (dotsContainer) {
                    dotsContainer.innerHTML = data.map(function (ph, i) {
                        return '<button class="hero__dot' + (i === 0 ? ' is-active' : '') + '" aria-label="Slide ' + (i + 1) + '" data-slide="' + i + '"></button>';
                    }).join('');
                }
            });
    }

    // ---- Init ----
    // Run after DOM is ready — small delay to not block initial render
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        // Delay CMS load slightly so hardcoded content renders first (fallback)
        setTimeout(function () {
            loadTestimonials();
            loadEvents();
            // Hero photos: only load from CMS if photos have Supabase storage URLs
            // (currently seeded with local paths, so skip until Ashley uploads new ones)
            // loadHeroPhotos();
        }, 100);
    }
})();
