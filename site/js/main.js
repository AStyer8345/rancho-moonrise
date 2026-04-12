/* ============================================================
   Rancho Moonrise — Main JavaScript
   Nav scroll, mobile menu, fade-in animations, FAQ accordion
   ============================================================ */

(function () {
    'use strict';

    // ---------- Nav scroll effect ----------
    const nav = document.querySelector('.nav');
    if (nav) {
        let lastScroll = 0;
        window.addEventListener('scroll', function () {
            const scrollY = window.scrollY;
            if (scrollY > 60) {
                nav.classList.add('nav--scrolled');
            } else {
                nav.classList.remove('nav--scrolled');
            }
            lastScroll = scrollY;
        }, { passive: true });
    }

    // ---------- Mobile menu ----------
    const toggle = document.querySelector('.nav__toggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.querySelector('.nav__close');

    if (toggle && mobileMenu) {
        toggle.addEventListener('click', function () {
            mobileMenu.classList.add('is-open');
            toggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', closeMobile);
        }

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMobile);
        });

        // Close on escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
                closeMobile();
            }
        });
    }

    function closeMobile() {
        if (mobileMenu) {
            mobileMenu.classList.remove('is-open');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    }

    // ---------- Fade-in / reveal on scroll ----------
    var fadeEls = document.querySelectorAll('.fade-in, .reveal');
    if (fadeEls.length && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        fadeEls.forEach(function (el) { observer.observe(el); });
    } else {
        // Fallback: just show everything
        fadeEls.forEach(function (el) { el.classList.add('is-visible'); });
    }

    // ---------- FAQ Accordion ----------
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        var question = item.querySelector('.faq-question');
        var answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', function () {
                var isOpen = item.classList.contains('is-open');

                // Close all others
                faqItems.forEach(function (other) {
                    other.classList.remove('is-open');
                    var otherAnswer = other.querySelector('.faq-answer');
                    if (otherAnswer) otherAnswer.style.maxHeight = null;
                });

                // Toggle current
                if (!isOpen) {
                    item.classList.add('is-open');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });

    // ---------- Hero Slideshow ----------
    var slideshow = document.querySelector('.hero--slideshow');
    if (slideshow) {
        var slides = slideshow.querySelectorAll('.hero__slide');
        var dots = slideshow.querySelectorAll('.hero__dot');
        var arrows = slideshow.querySelectorAll('.hero__arrow');
        var currentSlide = 0;
        var slideCount = slides.length;
        var autoplayInterval = null;
        var autoplayDelay = 5000;

        // Lazy-load slide images on first display. The slides are stacked at
        // inset:0 so the browser treats them all as "in viewport" — native
        // loading="lazy" won't defer them. We keep the srcset/src in data-*
        // attributes and promote them to real attrs when a slide first shows.
        function loadSlide(slide) {
            var img = slide.querySelector('.hero__img');
            if (!img) return;
            var dsSrcset = img.getAttribute('data-srcset');
            var dsSrc = img.getAttribute('data-src');
            if (dsSrcset) {
                img.setAttribute('srcset', dsSrcset);
                img.removeAttribute('data-srcset');
            }
            if (dsSrc) {
                img.setAttribute('src', dsSrc);
                img.removeAttribute('data-src');
            }
        }

        // Preload next slide image
        function preloadSlide(index) {
            var idx = (index + slideCount) % slideCount;
            loadSlide(slides[idx]);
        }

        function goToSlide(index) {
            slides[currentSlide].classList.remove('is-active');
            slides[currentSlide].setAttribute('aria-hidden', 'true');
            dots[currentSlide].classList.remove('is-active');

            currentSlide = (index + slideCount) % slideCount;

            loadSlide(slides[currentSlide]);
            slides[currentSlide].classList.add('is-active');
            slides[currentSlide].setAttribute('aria-hidden', 'false');
            dots[currentSlide].classList.add('is-active');

            // Preload the next slide
            preloadSlide(currentSlide + 1);
        }

        function nextSlide() { goToSlide(currentSlide + 1); }
        function prevSlide() { goToSlide(currentSlide - 1); }

        function startAutoplay() {
            stopAutoplay();
            autoplayInterval = setInterval(nextSlide, autoplayDelay);
        }

        function stopAutoplay() {
            if (autoplayInterval) clearInterval(autoplayInterval);
        }

        // Arrow controls
        arrows.forEach(function (arrow) {
            arrow.addEventListener('click', function () {
                var dir = this.getAttribute('data-dir');
                if (dir === 'next') nextSlide();
                else prevSlide();
                startAutoplay(); // restart timer after manual nav
            });
        });

        // Dot controls
        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                var index = parseInt(this.getAttribute('data-slide'), 10);
                goToSlide(index);
                startAutoplay();
            });
        });

        // Pause on hover
        slideshow.addEventListener('mouseenter', stopAutoplay);
        slideshow.addEventListener('mouseleave', startAutoplay);

        // Start autoplay
        startAutoplay();
    }

    // ---------- Event Slideshow ----------
    var eventShow = document.getElementById('eventSlideshow');
    if (eventShow) {
        var eSlides = eventShow.querySelectorAll('.event-slideshow__slide');
        var eDots = eventShow.querySelectorAll('.event-slideshow__dot');
        var eCurrent = 0;
        var eCount = eSlides.length;
        var eInterval = null;

        function goToEvent(index) {
            eSlides[eCurrent].classList.remove('is-active');
            eDots[eCurrent].classList.remove('is-active');
            eCurrent = (index + eCount) % eCount;
            eSlides[eCurrent].classList.add('is-active');
            eDots[eCurrent].classList.add('is-active');
        }

        function startEventAutoplay() {
            if (eInterval) clearInterval(eInterval);
            eInterval = setInterval(function () { goToEvent(eCurrent + 1); }, 4000);
        }

        eDots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                goToEvent(parseInt(this.getAttribute('data-slide'), 10));
                startEventAutoplay();
            });
        });

        eventShow.addEventListener('mouseenter', function () { if (eInterval) clearInterval(eInterval); });
        eventShow.addEventListener('mouseleave', startEventAutoplay);
        startEventAutoplay();
    }

    // ---------- Smooth scroll for anchor links ----------
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---------- Segmented Contact Form ----------
    var intentSelector = document.getElementById('intentSelector');
    if (intentSelector) {
        var intentBtns = intentSelector.querySelectorAll('.intent-btn');
        var intentForms = document.querySelectorAll('.intent-form');

        // Check URL params for pre-selected intent
        var urlParams = new URLSearchParams(window.location.search);
        var preIntent = urlParams.get('intent');

        intentBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var intent = this.getAttribute('data-intent');
                selectIntent(intent);
            });
        });

        function selectIntent(intent) {
            // Update button states
            intentBtns.forEach(function (b) {
                b.classList.remove('is-active');
                b.setAttribute('aria-pressed', 'false');
            });
            var activeBtn = intentSelector.querySelector('[data-intent="' + intent + '"]');
            if (activeBtn) {
                activeBtn.classList.add('is-active');
                activeBtn.setAttribute('aria-pressed', 'true');
            }

            // Show matching form, hide others
            intentForms.forEach(function (form) {
                form.hidden = true;
            });
            var targetForm = document.getElementById('form-' + intent);
            if (targetForm) {
                targetForm.hidden = false;
                targetForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }

        // Auto-select if intent param in URL
        if (preIntent) {
            selectIntent(preIntent);
        }
    }

    // ---------- Inquiry / Scheduling fallbacks ----------
    document.querySelectorAll('.calendly-placeholder').forEach(function (link) {
        var type = link.getAttribute('data-calendly');
        var fallbackHref = '/pages/contact.html?intent=general';

        if (type === 'tour' || type === 'virtual') {
            fallbackHref = '/pages/contact.html?intent=wedding';
        } else if (type === 'call') {
            fallbackHref = 'tel:+17372911260';
        }

        if (!link.getAttribute('href') || link.getAttribute('href') === '#') {
            link.setAttribute('href', fallbackHref);
        }

        if (fallbackHref.indexOf('tel:') === 0) {
            link.removeAttribute('target');
            link.removeAttribute('rel');
        }
    });

    document.querySelectorAll('form[action="#"]').forEach(function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            if (typeof form.reportValidity === 'function' && !form.reportValidity()) {
                return;
            }

            var data = new FormData(form);
            var inquiryType = (data.get('inquiry_type') || 'general').toString();
            var name = (data.get('name') || '').toString().trim();
            var email = (data.get('email') || '').toString().trim();
            var phone = (data.get('phone') || '').toString().trim();
            var labelByType = {
                wedding: 'Wedding Inquiry',
                event: 'Private Event Inquiry',
                general: 'General Question'
            };
            var lines = [
                'New ' + (labelByType[inquiryType] || 'Inquiry') + ' from ranchomoonrise.com',
                '',
                'Name: ' + (name || 'Not provided'),
                'Email: ' + (email || 'Not provided')
            ];

            if (phone) lines.push('Phone: ' + phone);

            Array.from(form.elements).forEach(function (field) {
                if (!field.name || field.type === 'hidden' || field.type === 'submit' || field.type === 'button') {
                    return;
                }

                var value = data.get(field.name);
                if (value == null) return;

                value = value.toString().trim();
                if (!value) return;

                if (field.name === 'name' || field.name === 'email' || field.name === 'phone') {
                    return;
                }

                var label = form.querySelector('label[for="' + field.id + '"]');
                var labelText = label ? label.textContent.replace(/\s+/g, ' ').trim() : field.name;
                lines.push(labelText + ': ' + value);
            });

            var subjectPrefix = labelByType[inquiryType] || 'Rancho Moonrise Inquiry';
            var subject = subjectPrefix + (name ? ' — ' + name : '');
            var mailto = 'mailto:events@ranchomoonrise.com?subject=' +
                encodeURIComponent(subject) +
                '&body=' + encodeURIComponent(lines.join('\n'));

            var status = form.querySelector('.form-status');
            if (!status) {
                status = document.createElement('p');
                status.className = 'form-status';
                form.appendChild(status);
            }
            status.innerHTML = 'Opening your email app to send this inquiry. If nothing opens, email <a href="mailto:events@ranchomoonrise.com">events@ranchomoonrise.com</a> or call <a href="tel:+17372911260">737-291-1260</a>.';

            window.location.href = mailto;
        });
    });

    // ---------- AI Chat Widget ----------
    (function () {
        // Knowledge base — trained on all Rancho Moonrise content
        //
        // Each entry has a `section` tag ('wedding' | 'stay' | 'event' | 'pool' |
        // 'policy' | 'info') used by the topic-override logic in findAnswer() to
        // bias scoring when a query is dominantly about one topic. Without the
        // tag, queries like "how much are weddings?" score highest on the
        // generic `price` entry (matches "how much") and the user gets a
        // room-rates answer instead of a wedding answer. See topicOverride().
        var KB = [
            // Location & Contact
            { section: 'info', keywords: ['where', 'location', 'address', 'directions', 'far', 'drive', 'distance'],
              answer: 'Rancho Moonrise is located at <strong>20117 Lockwood Road, 78653</strong> — about 20 minutes east of downtown Austin. <a href="https://www.google.com/maps/place/20117+Lockwood+Rd,+Manor,+TX+78653" target="_blank">Get directions &rarr;</a>' },
            { section: 'info', keywords: ['phone', 'call', 'number', 'reach'],
              answer: 'You can reach us at <a href="tel:+17372911260"><strong>737-291-1260</strong></a>. We\'re happy to help with any questions!' },
            { section: 'info', keywords: ['hours', 'check-in', 'check in', 'checkout', 'check out', 'time'],
              answer: 'Check-in is <strong>3:00 PM – 5:00 PM daily</strong>, with late arrival available if you let us know in advance. Checkout is by 11:00 AM.' },

            // Weddings
            { section: 'wedding', keywords: ['wedding', 'weddings', 'ceremony', 'reception', 'bride', 'groom', 'marry', 'engaged', 'engagement', 'elope', 'elopement'],
              answer: 'We\'d love to host your wedding! Rancho Moonrise offers <strong>exclusive full-ranch access</strong> for weddings — no outside guests on the property. We offer unlimited ceremony options across the property, capacity for 200+ guests, and on-site accommodations for 50 overnight guests. <a href="/pages/contact.html?intent=wedding">Start your wedding inquiry &rarr;</a>' },
            { section: 'wedding', keywords: ['wedding package', 'wedding price', 'wedding cost', 'how much wedding', 'wedding pricing', 'wedding rate', 'wedding budget', 'cost of wedding', 'price of wedding', 'wedding quote'],
              answer: 'Wedding packages include full exclusive ranch access, unlimited ceremony options, the Event Barn, and accommodations for up to 50 overnight guests. For specific pricing, <a href="/pages/contact.html?intent=wedding">submit a wedding inquiry</a> or call <a href="tel:+17372911260">737-291-1260</a> — we\'ll send you a detailed package within 2 hours.' },
            { section: 'wedding', keywords: ['ceremony site', 'ceremony option', 'where ceremony', 'venue option'],
              answer: 'We offer <strong>unlimited ceremony options</strong> across the property — from the Rustic Corral surrounded by wildflowers, to the Event Barn (modern, climate-controlled), to poolside, to open Texas fields with panoramic views. Each creates a completely different atmosphere. <a href="/pages/weddings.html#ceremony-sites">Learn more &rarr;</a>' },
            { section: 'wedding', keywords: ['capacity', 'how many', 'guest count', 'guests', 'max', 'maximum', 'seat'],
              answer: 'We can accommodate <strong>200+ guests</strong> for weddings and events, with <strong>50 overnight guests</strong> across our cabins and safari tents. The Event Barn, pool deck, and outdoor spaces all offer flexible layouts.' },
            { section: 'wedding', keywords: ['tour', 'visit', 'see the ranch', 'come see', 'walk through', 'schedule tour'],
              answer: 'We\'d love to show you around! We offer <strong>in-person venue tours (60 min)</strong> and <strong>virtual tours (30 min)</strong>. Call <a href="tel:+17372911260">737-291-1260</a> to schedule, or <a href="/pages/contact.html?intent=wedding">submit an inquiry</a> and we\'ll set one up.' },

            // Accommodations
            { section: 'stay', keywords: ['cabin', 'tent', 'glamping', 'stay', 'overnight', 'accommodation', 'sleep', 'room', 'lodge'],
              answer: 'We offer <strong>cabins and safari tents</strong>: <strong>Cabins</strong> (queen bed, A/C, heat, covered deck), <strong>Family Safari Tents</strong> (queen + bunks, sleeps 4), and <strong>Premium Safari Tents</strong> (king bed, private ensuite). All have A/C and heat, with fire pits across the property. <a href="https://hotels.cloudbeds.com/en/reservation/5tzv1r" target="_blank">Check availability &rarr;</a>' },
            { section: 'stay', keywords: ['book', 'reservation', 'reserve', 'availability', 'available'],
              answer: 'You can check real-time availability and book directly: <a href="https://hotels.cloudbeds.com/en/reservation/5tzv1r" target="_blank"><strong>Book your stay &rarr;</strong></a>. For weddings and events, <a href="/pages/contact.html">contact us</a> for custom availability.' },
            { section: 'stay', keywords: ['price', 'cost', 'rate', 'per night', 'nightly', 'how much', 'pricing'],
              answer: 'Nightly rates vary by accommodation type and season. Check current pricing and availability on our <a href="https://hotels.cloudbeds.com/en/reservation/5tzv1r" target="_blank">booking page</a>. For wedding and event pricing, <a href="/pages/contact.html">contact our team</a> — we\'ll send details within 2 hours.' },

            // Events
            { section: 'event', keywords: ['event', 'corporate', 'retreat', 'birthday', 'party', 'conference', 'festival', 'host'],
              answer: 'We host all types of events: corporate retreats, birthday parties, conferences, private parties, festivals, and wellness retreats. Available for <strong>hourly rental or full ranch buyout</strong>. <a href="/pages/contact.html?intent=event">Submit an event inquiry &rarr;</a>' },
            { section: 'event', keywords: ['event barn', 'barn', 'indoor', 'climate control'],
              answer: 'The <strong>Event Barn</strong> is our modern, climate-controlled indoor venue. Flexible layout for presentations, seated dinners, cocktail receptions, and dance floors. Beautiful ranch aesthetic with all the infrastructure you need.' },
            { section: 'event', keywords: ['bar', 'drinks', 'cocktail', 'lounge'],
              answer: 'The Lodge serves beer, wine, and other beverages on-site — perfect for a drink by the pool or after a day on the ranch. For private events, bar service can be arranged as part of your package.' },
            { section: 'event', keywords: ['upcoming event', 'what\'s happening', 'next event', 'calendar', 'schedule'],
              answer: 'Check out our upcoming events — live music, yoga, crawfish boils, and more: <a href="/pages/events.html"><strong>View upcoming events &rarr;</strong></a>' },

            // Pool
            { section: 'pool', keywords: ['pool', 'swim', 'pool pass', 'day pass', 'resort pass'],
              answer: 'Our resort-style pool is available to guests and day visitors! <strong>Pool passes</strong> are available through ResortPass. Plus, the <strong>last Friday of every month is Free Friday</strong> — free pool access with advance RSVP. <a href="https://www.resortpass.com/hotels/rancho-moonrise" target="_blank">Get a pool pass &rarr;</a>' },

            // Policies
            { section: 'policy', keywords: ['pet', 'dog', 'animal', 'pet friendly', 'pet-friendly'],
              answer: 'Yes! Rancho Moonrise is <strong>pet-friendly</strong>. Well-behaved dogs are welcome at designated sleeping sites. We love four-legged guests! Just let us know when booking.' },
            { section: 'policy', keywords: ['kid', 'child', 'children', 'family', 'family friendly', 'family-friendly', 'baby'],
              answer: 'Absolutely — we are <strong>kid and family friendly</strong>! We have kid-friendly spaces to play and family safari tents that sleep 2 adults + 2 children. Everyone is welcome at the ranch.' },
            { section: 'policy', keywords: ['caterer', 'catering', 'food', 'bring own', 'vendor', 'byob', 'outside vendor'],
              answer: 'We work with both preferred vendors and outside vendors. For weddings and events, we can share our <strong>preferred vendor list</strong> and discuss catering policies during your consultation. <a href="/pages/contact.html?intent=wedding">Inquire for details &rarr;</a>' },
            { section: 'policy', keywords: ['cancel', 'cancellation', 'refund', 'policy', 'policies'],
              answer: 'For accommodation cancellation policies, check your booking confirmation. For wedding and event cancellation terms, these are outlined in your event contract. Questions? Call <a href="tel:+17372911260">737-291-1260</a> or see our <a href="/pages/policies.html">policies page</a>.' },

            // About & Misc
            { section: 'info', keywords: ['about', 'who', 'owner', 'story', 'ranch', 'property', 'acre', 'acres'],
              answer: 'Rancho Moonrise is Austin\'s glamping and events ranch — <strong>36 acres</strong>, just 20 minutes from downtown Austin. We offer glamping, weddings, private events, and community gatherings with authentic Texas hospitality.' },
            { section: 'info', keywords: ['social', 'instagram', 'facebook', 'tiktok', 'follow'],
              answer: 'Follow us! <a href="https://www.instagram.com/rancho_moonrise/" target="_blank">Instagram</a> · <a href="https://www.facebook.com/RanchoMoonrise/" target="_blank">Facebook</a> · <a href="https://www.tiktok.com/@rancho_moonrise" target="_blank">TikTok</a> · <a href="https://www.linkedin.com/company/rancho-moonrise/" target="_blank">LinkedIn</a>' },
            { section: 'info', keywords: ['review', 'rating', 'stars', 'google review', 'testimonial'],
              answer: 'We\'re proud of our <strong>4.9-star rating across 125 Google Reviews</strong>! Our guests consistently highlight the beautiful property, amazing hospitality, and unique ranch experience.' },
            { section: 'info', keywords: ['wifi', 'internet', 'wi-fi'],
              answer: 'Yes, WiFi is available on the property. It\'s great for staying connected, though we do encourage unplugging and enjoying the ranch experience!' },
            { section: 'info', keywords: ['fire pit', 'firepit', 'campfire', 'bonfire', 's\'more'],
              answer: '<strong>Fire pits are available across the property</strong> — perfect for s\'mores, stargazing, and Texas evenings. Firewood is available for purchase at The Lodge.' },
        ];

        // Default / fallback
        var FALLBACK = 'I\'m not sure about that one — but our team can help! Call <a href="tel:+17372911260">737-291-1260</a> or <a href="/pages/contact.html">send us a message</a>. We respond within 2 hours.';

        // ---- Query normalization ----
        // Simple stemmer: strips plural/gerund/possessive suffixes so
        // "weddings" → "wedding", "pricing" → "price", "booking" → "book".
        // Keeps the rules short on purpose — a full Porter stemmer is
        // overkill for a 25-entry KB.
        function stem(word) {
            if (word.length <= 3) return word;
            if (word.slice(-3) === 'ies') return word.slice(0, -3) + 'y';  // "ceremonies" → "ceremony"
            if (word.slice(-3) === 'ing') return word.slice(0, -3);        // "pricing" → "pric" (close enough)
            if (word.slice(-2) === 'es') return word.slice(0, -2);         // "rates" → "rat"
            if (word.slice(-2) === "'s") return word.slice(0, -2);
            if (word.slice(-1) === 's') return word.slice(0, -1);          // "weddings" → "wedding"
            return word;
        }

        function tokenize(q) {
            return q.toLowerCase()
                    .replace(/[?!.,;:'"()]/g, ' ')
                    .split(/\s+/)
                    .filter(Boolean)
                    .map(stem);
        }

        // Gap-tolerant ordered subsequence match: does `needleTokens` appear
        // inside `haystackTokens` in order, possibly with other words between?
        // So ["how", "much", "wedding"] matches "how much is a wedding" but
        // NOT "wedding is how much" (order matters).
        function orderedSubsequence(needleTokens, haystackTokens) {
            var ni = 0;
            for (var hi = 0; hi < haystackTokens.length && ni < needleTokens.length; hi++) {
                if (haystackTokens[hi] === needleTokens[ni]) ni++;
            }
            return ni === needleTokens.length;
        }

        // Tag → sections the user is dominantly asking about.
        // `wedding` wins over `price` when both are present because "how much
        // are weddings" is a wedding question, not a room-rate question.
        //
        // TODO(adam): fill in the override rules below. This is the one
        // design choice I want your call on because it shapes the bot's
        // personality. See the chat for trade-offs.
        //
        // Contract:
        //   Input:  queryTokens (array of stemmed lowercase words)
        //   Return: one of:
        //     null          — no override, score every entry normally
        //     'wedding'     — only consider entries with section === 'wedding'
        //     'stay'        — only consider section === 'stay'
        //     'event'       — only consider section === 'event'
        //     'pool'        — only consider section === 'pool'
        //
        // Suggested starting logic (uncomment + edit to taste):
        //
        //   var has = function (w) { return queryTokens.indexOf(w) > -1; };
        //   var priceWord = has('price') || has('cost') || has('rate')
        //                || has('pricing') || has('budget')
        //                || (has('how') && has('much'));
        //
        //   // Wedding wins: if any wedding word appears AND a price word
        //   // appears, force the wedding-pricing answer — don't fall back
        //   // to generic room rates.
        //   if (priceWord && (has('wedding') || has('bride') || has('groom')
        //                  || has('ceremony') || has('reception'))) {
        //       return 'wedding';
        //   }
        //
        //   // Event pricing same logic
        //   if (priceWord && (has('event') || has('corporate') || has('retreat')
        //                  || has('party') || has('conference'))) {
        //       return 'event';
        //   }
        //
        //   return null;
        //
        // Questions to answer before you write it:
        //   1. Should "can dogs come to weddings?" override to 'wedding'
        //      (force a wedding answer) or return null (let the pet policy
        //      win)? I'd argue null — answer the actual question asked.
        //   2. If the query has "wedding" but no price/event word, should
        //      we still override? Probably not — the generic scorer will
        //      pick the right wedding entry anyway with the stemming fix.
        //   3. Does "elope" / "elopement" count as a wedding trigger?
        //      (I've added them to the wedding KB's keyword list already.)
        function topicOverride(queryTokens) {
            var has = function (w) { return queryTokens.indexOf(w) > -1; };
            var hasAny = function (words) {
                for (var i = 0; i < words.length; i++) {
                    if (has(words[i])) return true;
                }
                return false;
            };

            var priceWord = hasAny(['price', 'cost', 'rate', 'pricing', 'budget', 'quote']) || (has('how') && has('much'));
            var weddingWord = hasAny(WEDDING_TRIGGERS);
            var eventWord = hasAny(['event', 'corporate', 'retreat', 'birthday', 'party', 'conference', 'festival', 'host']);
            var stayWord = hasAny(['stay', 'cabin', 'tent', 'glamping', 'overnight', 'accommodation', 'book', 'reservation', 'availability']);
            var poolWord = hasAny(['pool', 'swim', 'resort', 'day']) && hasAny(['pass', 'pool', 'swim']);

            if (priceWord && weddingWord) return 'wedding';
            if (priceWord && eventWord) return 'event';
            if ((has('tour') || has('venue')) && weddingWord) return 'wedding';
            if ((has('package') || has('packages')) && weddingWord) return 'wedding';
            if ((has('package') || has('packages')) && eventWord) return 'event';
            if (poolWord) return 'pool';
            if (stayWord && !weddingWord && !eventWord) return 'stay';
            return null;
        }

        var WEDDING_TRIGGERS = ['wedding', 'bride', 'groom', 'ceremony', 'reception', 'elope', 'elopement', 'marry', 'engaged', 'engagement'];

        var GREETING = 'Hey there! 👋 I\'m the Rancho Moonrise virtual concierge. Ask me anything about weddings, events, accommodations, pool passes, or the ranch — I\'m here to help!';

        var SUGGESTIONS = [
            'Wedding packages',
            'Book a stay',
            'Pool passes',
            'Upcoming events',
            'Where is the ranch?',
            'Schedule a tour'
        ];

        function findAnswer(query) {
            var queryTokens = tokenize(query);
            if (queryTokens.length === 0) return FALLBACK;

            // Topic-override decides whether to restrict scoring to one
            // section — this is what stops "how much are weddings?" from
            // falling into the generic room-rate bucket.
            var forcedSection = topicOverride(queryTokens);

            var bestMatch = null;
            var bestScore = 0;

            for (var i = 0; i < KB.length; i++) {
                var entry = KB[i];

                // Hard filter: if topicOverride returned a section, ignore
                // every entry that isn't in that section.
                if (forcedSection && entry.section !== forcedSection) continue;

                var score = 0;
                for (var j = 0; j < entry.keywords.length; j++) {
                    var kw = entry.keywords[j];

                    if (kw.indexOf(' ') > -1) {
                        // Multi-word key — gap-tolerant ordered match.
                        // Each matched multi-word phrase scores 4 (was 3)
                        // so that a specific phrase beats two generic words.
                        var kwTokens = tokenize(kw);
                        if (orderedSubsequence(kwTokens, queryTokens)) score += 4;
                    } else {
                        // Single-word key — exact stem match, 2 points each.
                        var kwStem = stem(kw);
                        for (var w = 0; w < queryTokens.length; w++) {
                            if (queryTokens[w] === kwStem) { score += 2; break; }
                        }
                    }
                }

                // Section affinity bonus: if the query mentions a wedding
                // trigger word, nudge wedding entries up by 1 point so
                // they break ties against generic entries.
                if (entry.section === 'wedding') {
                    for (var t = 0; t < WEDDING_TRIGGERS.length; t++) {
                        if (queryTokens.indexOf(WEDDING_TRIGGERS[t]) > -1) { score += 1; break; }
                    }
                }

                if (score > bestScore) {
                    bestScore = score;
                    bestMatch = entry;
                }
            }

            return bestScore >= 2 ? bestMatch.answer : FALLBACK;
        }

        // Build chat widget DOM
        function buildWidget() {
            var widget = document.createElement('div');
            widget.className = 'chat-widget';
            widget.innerHTML =
                '<div class="chat-widget__panel" id="chatPanel">' +
                    '<div class="chat-widget__header">' +
                        '<h4>Ask Rancho Moonrise</h4>' +
                        '<button class="chat-widget__close" aria-label="Close chat">&times;</button>' +
                    '</div>' +
                    '<div class="chat-widget__body" id="chatBody"></div>' +
                    '<div class="chat-widget__suggestions" id="chatSuggestions"></div>' +
                    '<div class="chat-widget__input">' +
                        '<input type="text" id="chatInput" placeholder="Ask a question..." aria-label="Type your question">' +
                        '<button id="chatSend">Send</button>' +
                    '</div>' +
                '</div>' +
                '<button class="chat-widget__toggle" id="chatToggle" aria-label="Open chat"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></button>' +
                '<div class="chat-widget__label">Ask us anything!</div>';

            document.body.appendChild(widget);

            var panel = document.getElementById('chatPanel');
            var toggleBtn = document.getElementById('chatToggle');
            var closeBtn = widget.querySelector('.chat-widget__close');
            var body = document.getElementById('chatBody');
            var input = document.getElementById('chatInput');
            var sendBtn = document.getElementById('chatSend');
            var suggestionsEl = document.getElementById('chatSuggestions');

            function addMessage(text, sender) {
                var msg = document.createElement('div');
                msg.className = 'chat-msg chat-msg--' + sender;
                msg.innerHTML = text;
                body.appendChild(msg);
                body.scrollTop = body.scrollHeight;
            }

            function showSuggestions() {
                suggestionsEl.innerHTML = '';
                SUGGESTIONS.forEach(function (s) {
                    var btn = document.createElement('button');
                    btn.className = 'chat-suggestion';
                    btn.textContent = s;
                    btn.addEventListener('click', function () {
                        handleUserMessage(s);
                    });
                    suggestionsEl.appendChild(btn);
                });
            }

            function handleUserMessage(text) {
                addMessage(text, 'user');
                suggestionsEl.innerHTML = '';
                // Small delay to feel natural
                setTimeout(function () {
                    addMessage(findAnswer(text), 'bot');
                }, 400);
            }

            var labelEl = widget.querySelector('.chat-widget__label');

            function openChat() {
                panel.classList.add('is-open');
                toggleBtn.style.display = 'none';
                if (labelEl) labelEl.style.display = 'none';
                if (body.children.length === 0) {
                    addMessage(GREETING, 'bot');
                    showSuggestions();
                }
                input.focus();
            }

            function closeChat() {
                panel.classList.remove('is-open');
                toggleBtn.style.display = 'flex';
            }

            toggleBtn.addEventListener('click', openChat);
            closeBtn.addEventListener('click', closeChat);

            sendBtn.addEventListener('click', function () {
                var val = input.value.trim();
                if (val) {
                    handleUserMessage(val);
                    input.value = '';
                }
            });

            input.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    var val = input.value.trim();
                    if (val) {
                        handleUserMessage(val);
                        input.value = '';
                    }
                }
            });

            // Proactive trigger on weddings page after 30 seconds
            if (window.location.pathname.indexOf('wedding') > -1) {
                setTimeout(function () {
                    if (!panel.classList.contains('is-open')) {
                        toggleBtn.setAttribute('data-badge', '1');
                        toggleBtn.title = 'Planning a wedding? I can help!';
                    }
                }, 30000);
            }
        }

        // Initialize widget
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', buildWidget);
        } else {
            buildWidget();
        }
    })();

})();
