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

    // ---------- Review marquee: touch-pause so mobile users can finish reading ----------
    // The marquee itself is CSS-driven (`animation: marquee-scroll 120s linear`).
    // CSS handles `:hover` pause for desktop. Mobile has no hover, so we toggle
    // `.is-touch-paused` on touchstart and remove it 3 seconds after touchend.
    // That 3s delay lets users tap, read, and release without the track jumping
    // back into motion the instant their finger lifts.
    var reviewMarquee = document.querySelector('.testimonial-marquee');
    if (reviewMarquee) {
        var resumeTimer = null;
        reviewMarquee.addEventListener('touchstart', function () {
            if (resumeTimer) { clearTimeout(resumeTimer); resumeTimer = null; }
            reviewMarquee.classList.add('is-touch-paused');
        }, { passive: true });
        reviewMarquee.addEventListener('touchend', function () {
            if (resumeTimer) clearTimeout(resumeTimer);
            resumeTimer = setTimeout(function () {
                reviewMarquee.classList.remove('is-touch-paused');
                resumeTimer = null;
            }, 3000);
        }, { passive: true });
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

    // ---------- Analytics tracker ----------
    // Single emit point for all conversion events. Pushes to dataLayer when
    // GTM is loaded, calls gtag() when GA4 is loaded, and always console.debugs
    // so events are visible during local QA. Safe with no analytics wired.
    function rmTrack(event, props) {
        try {
            var payload = Object.assign({ event: event }, props || {});
            if (window.dataLayer && typeof window.dataLayer.push === 'function') {
                window.dataLayer.push(payload);
            }
            if (typeof window.gtag === 'function') {
                window.gtag('event', event, props || {});
            }
            if (window.console && console.debug) {
                console.debug('[rmTrack]', event, props || {});
            }
        } catch (err) { /* analytics must never break the page */ }
    }
    window.rmTrack = rmTrack;

    // Auto-bind clicks on any element flagged with [data-event].
    // Also auto-tag known link patterns (cloudbeds, resortpass, tel:, mailto:)
    // so the nav/footer Book Now / Pool Pass / phone links emit conversions
    // without us having to touch every page individually.
    function inferEventName(el) {
        var explicit = el.getAttribute('data-event');
        if (explicit) return explicit;
        var href = el.getAttribute('href') || '';
        if (!href) return null;
        if (href.indexOf('cloudbeds.com') !== -1) return 'cloudbeds_click';
        if (href.indexOf('resortpass.com') !== -1) return 'resortpass_click';
        if (href.indexOf('tel:') === 0) return 'phone_click';
        if (href.indexOf('mailto:') === 0) return 'email_click';
        return null;
    }

    document.addEventListener('click', function (e) {
        var el = e.target.closest && e.target.closest('a, button, [data-event]');
        if (!el) return;
        var name = inferEventName(el);
        if (!name) return;
        var href = el.getAttribute('href') || '';
        rmTrack(name, {
            href: href,
            label: (el.textContent || '').trim().slice(0, 80),
            source: el.getAttribute('data-cta-source') || 'unknown'
        });
    }, true);

    // ---------- Calendly link wiring ----------
    // Real Calendly URLs (verified in environment). The 30-min virtual
    // walkthrough does not yet have its own Calendly link — it falls back
    // to the wedding inquiry form so couples still convert. See NEEDS ADAM
    // in TODO.md to add a virtual-only Calendly URL when Ashley/Monet sets one up.
    var CALENDLY_URLS = {
        tour:    'https://calendly.com/rancho_moonrise/connect',
        call:    'https://calendly.com/monet-b30w/30min',
        virtual: '/pages/contact.html?intent=wedding'
    };

    document.querySelectorAll('.calendly-placeholder').forEach(function (link) {
        var type = link.getAttribute('data-calendly');
        var target = CALENDLY_URLS[type] || '/pages/contact.html?intent=general';
        var isExternal = target.indexOf('http') === 0;

        if (!link.getAttribute('href') || link.getAttribute('href') === '#') {
            link.setAttribute('href', target);
        }

        if (isExternal) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener');
        } else {
            link.removeAttribute('target');
            link.removeAttribute('rel');
        }

        // Attach analytics — skip the data-event auto-binder rewrite so each
        // calendly type is reported with its slug.
        if (!link.hasAttribute('data-event')) {
            link.setAttribute('data-event', 'calendly_click');
            link.setAttribute('data-calendly-type', type || 'unknown');
        }
    });

    document.querySelectorAll('form[action="#"]').forEach(function (form) {
        // Stamp hidden attribution + timestamp fields once at submit time.
        // Helps the CRM tell apart inquiries that came from the wedding page
        // vs. a blog post vs. a paid landing page without needing a separate
        // analytics tie-back.
        var inquiryTypeInput = form.querySelector('input[name="inquiry_type"]');
        var inquiryType = inquiryTypeInput ? inquiryTypeInput.value : 'general';

        // Make phone required on wedding/event inquiries. Speed-to-lead is
        // limited without a phone, and forms are already getting submitted
        // without it.
        if (inquiryType === 'wedding' || inquiryType === 'event') {
            var phoneField = form.querySelector('input[name="phone"]');
            if (phoneField && !phoneField.required) {
                phoneField.required = true;
                phoneField.setAttribute('aria-required', 'true');
                var phoneLabel = form.querySelector('label[for="' + phoneField.id + '"]');
                if (phoneLabel && phoneLabel.textContent.indexOf('*') === -1) {
                    phoneLabel.innerHTML = phoneLabel.innerHTML +
                        ' <span aria-hidden="true" style="color: var(--color-orange-dark);">*</span>';
                }
            }
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            if (typeof form.reportValidity === 'function' && !form.reportValidity()) {
                return;
            }

            // Build a flat JSON object out of every named form field.
            // Labels aren't included — the server doesn't need them; field names
            // are contract and stable.
            var data = new FormData(form);
            var payload = {};
            Array.from(form.elements).forEach(function (field) {
                if (!field.name) return;
                if (field.type === 'submit' || field.type === 'button') return;
                var value = data.get(field.name);
                if (value == null) return;
                var str = value.toString().trim();
                if (!str) return;
                payload[field.name] = str;
            });

            // Attribution fields — added at submit time so they always reflect
            // the page the user actually submitted from.
            payload.page_path     = window.location.pathname;
            payload.source_url    = window.location.href;
            payload.submitted_at  = new Date().toISOString();
            payload.referrer      = document.referrer || '';
            if (!payload.inquiry_type) payload.inquiry_type = inquiryType;

            var status = form.querySelector('.form-status');
            if (!status) {
                status = document.createElement('p');
                status.className = 'form-status';
                form.appendChild(status);
            }

            var submitBtn = form.querySelector('button[type="submit"]');
            var submitBtnLabel = submitBtn ? submitBtn.textContent : null;
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending…';
            }
            status.innerHTML = 'Sending your inquiry…';

            // Use trailing slash to match site-wide trailingSlash:true in
            // vercel.json — avoids a 308 redirect round-trip on every submit.
            fetch('/api/inquiry/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }).then(function (r) {
                return r.json().catch(function () { return {}; }).then(function (j) {
                    return { ok: r.ok, status: r.status, body: j };
                });
            }).then(function (result) {
                if (result.ok) {
                    status.innerHTML = 'Thanks — we got your inquiry. Ashley or Monet will follow up shortly with availability and the right next steps. If you don\'t hear from us within a business day, call <a href="tel:+17372911260" data-event="phone_click">737-291-1260</a>.';
                    rmTrack('form_submit_success', { inquiry_type: inquiryType });
                    rmTrack(inquiryType + '_inquiry_submit', { page_path: payload.page_path });
                    form.reset();
                    if (submitBtn) {
                        submitBtn.textContent = 'Sent ✓';
                        // Keep disabled so they can't fire another on the reset form.
                    }
                } else {
                    var msg = (result.body && result.body.error) ||
                        'Something went wrong on our side. Please call 737-291-1260 or email events@ranchomoonrise.com.';
                    status.innerHTML = msg + ' <a href="tel:+17372911260" data-event="phone_click">Call 737-291-1260</a> or <a href="mailto:events@ranchomoonrise.com" data-event="email_click">events@ranchomoonrise.com</a>.';
                    rmTrack('form_submit_error', { inquiry_type: inquiryType, status: result.status });
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = submitBtnLabel || 'Send';
                    }
                }
            }).catch(function (err) {
                console.error('inquiry submit failed', err);
                status.innerHTML = 'We couldn\'t reach our inquiry system. Please call <a href="tel:+17372911260" data-event="phone_click">737-291-1260</a> or email <a href="mailto:events@ranchomoonrise.com" data-event="email_click">events@ranchomoonrise.com</a>.';
                rmTrack('form_submit_error', { inquiry_type: inquiryType, status: 'network' });
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = submitBtnLabel || 'Send';
                }
            });
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
            { section: 'info', keywords: ['hours', 'check-in', 'check in', 'checkout', 'check out', 'time', 'arrive', 'arrival', 'front desk'],
              answer: 'Check-in starts at <strong>4:00 PM</strong> at the Lodge front desk (open Wed–Sun, 9 AM–8 PM). Checkout is by <strong>11:00 AM</strong>. Drive to your site to unload, then move your car to the main lot — vehicles can\'t remain at sleeping sites overnight. Early check-in may be available with advance notice.' },

            // Weddings
            { section: 'wedding', keywords: ['wedding', 'weddings', 'ceremony', 'reception', 'bride', 'groom', 'marry', 'engaged', 'engagement', 'elope', 'elopement'],
              answer: 'We\'d love to host your wedding. Rancho Moonrise offers <strong>exclusive full-ranch access</strong> for weddings — no outside guests on the property. Unlimited ceremony options across the ranch, room for large guest counts, and on-site accommodations for your wedding party. <a href="/pages/contact.html?intent=wedding">Start your wedding inquiry &rarr;</a>' },
            { section: 'wedding', keywords: ['wedding package', 'wedding price', 'wedding cost', 'how much wedding', 'wedding pricing', 'wedding rate', 'wedding budget', 'cost of wedding', 'price of wedding', 'wedding quote'],
              answer: 'Wedding pricing depends on date, guest count, bar package, lodging, and full-ranch access. The fastest way to get an accurate quote is a venue tour — we walk the property and match you to the right package. <a href="/pages/contact.html?intent=wedding">Send a wedding inquiry</a> or call <a href="tel:+17372911260">737-291-1260</a> and we\'ll follow up with availability and next steps.' },
            { section: 'wedding', keywords: ['ceremony site', 'ceremony option', 'where ceremony', 'venue option'],
              answer: 'We offer <strong>unlimited ceremony options</strong> across the property — from the Rustic Corral surrounded by wildflowers, to the Event Barn (modern, climate-controlled), to poolside, to open Texas fields with panoramic views. Each creates a completely different atmosphere. <a href="/pages/weddings.html#ceremony-sites">Learn more &rarr;</a>' },
            { section: 'wedding', keywords: ['capacity', 'how many', 'guest count', 'guests', 'max', 'maximum', 'seat'],
              answer: 'Rancho Moonrise accommodates up to <strong>200 guests</strong> for weddings and events. The Event Barn seats 150 for a dinner; the Covered Pavilion holds 40; the Neon Moon Bar and Corral each hold up to 50. Events with 75+ vehicles require a shuttle service. <a href="/pages/contact.html?intent=wedding">Discuss your guest count &rarr;</a>' },
            { section: 'wedding', keywords: ['tour', 'visit', 'see the ranch', 'come see', 'walk through', 'schedule tour'],
              answer: 'We\'d love to show you around! We offer <strong>in-person venue tours (60 min)</strong> and <strong>virtual tours (30 min)</strong>. Call <a href="tel:+17372911260">737-291-1260</a> to schedule, or <a href="/pages/contact.html?intent=wedding">submit an inquiry</a> and we\'ll set one up.' },

            // Accommodations
            { section: 'stay', keywords: ['cabin', 'tent', 'glamping', 'stay', 'overnight', 'accommodation', 'sleep', 'room', 'lodge'],
              answer: 'We offer <strong>cabins and safari tents</strong> — all with A/C, heat, real beds, linens, pool towels, mini-fridge, and coffee maker. <strong>Cabins</strong> (queen, sleeps 2), <strong>Family Safari Tents</strong> (queen + bunks, sleeps 4), <strong>Double Safari Tents</strong> (2 queens, sleeps 4), <strong>Premium Bath Tents</strong> (queen or king with private ensuite). Breakfast tacos served each morning in the Lodge. No gear required — just show up. <a href="https://hotels.cloudbeds.com/en/reservation/5tzv1r" target="_blank">Check availability &rarr;</a>' },
            { section: 'stay', keywords: ['book', 'reservation', 'reserve', 'availability', 'available'],
              answer: 'You can check real-time availability and book directly: <a href="https://hotels.cloudbeds.com/en/reservation/5tzv1r" target="_blank"><strong>Book your stay &rarr;</strong></a>. For weddings and events, <a href="/pages/contact.html">contact us</a> for custom availability.' },
            { section: 'stay', keywords: ['price', 'cost', 'rate', 'per night', 'nightly', 'how much', 'pricing'],
              answer: 'Nightly rates vary by accommodation type and season. Check current pricing and availability on our <a href="https://hotels.cloudbeds.com/en/reservation/5tzv1r" target="_blank">booking page</a>. For wedding and event pricing, <a href="/pages/contact.html">send us an inquiry</a> and we\'ll follow up with details — a venue tour is the fastest way to get an accurate quote.' },

            // Events
            { section: 'event', keywords: ['event', 'corporate', 'retreat', 'birthday', 'party', 'conference', 'festival', 'host'],
              answer: 'We host all types of events: corporate retreats, birthday parties, conferences, private parties, festivals, and wellness retreats. Available for <strong>hourly rental or full ranch buyout</strong>. <a href="/pages/contact.html?intent=event">Submit an event inquiry &rarr;</a>' },
            { section: 'event', keywords: ['event barn', 'barn', 'indoor', 'climate control'],
              answer: 'The <strong>Event Barn</strong> is our modern, climate-controlled indoor venue. Flexible layout for presentations, seated dinners, cocktail receptions, and dance floors. Beautiful ranch aesthetic with all the infrastructure you need.' },
            { section: 'event', keywords: ['bar', 'drinks', 'cocktail', 'lounge', 'beverage', 'alcohol', 'beer', 'wine'],
              answer: 'The Lodge serves drinks for overnight guests. For private events and weddings, alcohol is handled through the venue (open bar, per person, per hour) — no outside alcohol or BYOB. Bar packages are priced based on guest count and event length, and we\'ll walk through options on a tour or planning call. <a href="/pages/contact.html?intent=event">Send an event inquiry &rarr;</a>' },
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

            // Activities & amenities
            { section: 'info', keywords: ['activity', 'activities', 'things to do', 'horseback', 'yoga', 'lawn game', 'cornhole', 'jenga', 'animal', 'donkey', 'horse', 'sound bath', 'dancing', 'two-step', 'entertainment'],
              answer: 'Beyond the pool: <strong>fire pits</strong>, cornhole, giant Jenga, and 36 acres to roam. Say hello to the resident donkeys, cows, and horses. Add-on experiences include <strong>horseback riding</strong>, private yoga ($150), sound bath immersions ($300), paint &amp; sip ($55/person), and two-step dancing lessons. Live music events run regularly. <a href="/pages/contact.html">Ask about add-ons &rarr;</a>' },
            { section: 'pool', keywords: ['hot tub', 'jacuzzi', 'spa'],
              answer: 'Yes! We have a <strong>resort-style pool and hot tub</strong> on-site. Pool access is complimentary for overnight guests. Day passes are available through ResortPass. <a href="https://www.resortpass.com/hotels/rancho-moonrise" target="_blank">Get a pool pass &rarr;</a>' },
            { section: 'stay', keywords: ['included', 'amenities', 'amenity', 'linen', 'towel', 'coffee', 'breakfast', 'kitchen', 'fridge', 'what comes with'],
              answer: 'All units include <strong>linens, pool towels, mini-fridge, and coffee maker</strong>. <strong>Breakfast tacos</strong> and hot coffee are served each morning in the Lodge. No full kitchen in units — a full Lodge kitchen rents for $50/hr or $200/day. No gear needed.' },

            // Parking
            { section: 'info', keywords: ['park', 'parking', 'car', 'vehicle', 'drive here', 'shuttle'],
              answer: '<strong>Free on-site parking</strong> is available. Drive to your cabin or tent to unload, then move your car to the main general lot (cars can\'t stay at sleeping sites overnight). Events with 75+ vehicles require a shuttle service (30-person vehicles recommended). Wheelchair-accessible parking available.' },

            // Noise / quiet hours
            { section: 'policy', keywords: ['noise', 'loud', 'music curfew', 'quiet hours', 'quiet time', 'sound', 'curfew', 'neighbor'],
              answer: 'Property-wide <strong>noise curfew is 9:30 PM</strong> for overnight guest comfort. Event music must end by <strong>11 PM Fri/Sat</strong>, 9 PM Mon–Thu, and 8 PM Sundays. All music must stay at 80 dB or lower with no amplified bass.' },

            // Rehearsal dinner / early arrival
            { section: 'wedding', keywords: ['rehearsal', 'rehearsal dinner', 'day before', 'early arrival', 'night before', 'day prior'],
              answer: 'Rehearsal dinners aren\'t included in the standard wedding package (which starts at 11 AM on event day). You can add time at <strong>$500/hr</strong> for any hours outside your contracted window. All alcohol during pre-wedding gatherings must also be purchased through the venue. <a href="/pages/contact.html?intent=wedding">Inquire to add &rarr;</a>' },

            // Preferred vendors
            { section: 'wedding', keywords: ['vendor', 'preferred vendor', 'photographer', 'dj', 'caterer', 'planner', 'coordinator', 'food truck', 'florist'],
              answer: 'We have <strong>72 preferred vendors</strong> across 16 categories. Top picks: caterers — La Pera, Vestals, Peached Tortilla; photographers — The Storie Collective, Julia Bonugli; DJs — Dart Collective, Texas Sun Music; planners — Betts &amp; Co., Epoch Co+ Events. Outside vendors must be pre-approved. <a href="/pages/contact.html?intent=wedding">Request the full vendor list &rarr;</a>' },

            // Bar packages (wedding-specific)
            { section: 'wedding', keywords: ['bar package', 'open bar', 'alcohol package', 'drinks package', 'bar option', 'beverage package'],
              answer: 'Three open bar packages: <strong>Campfire ($7/pp/hr)</strong> — beer &amp; wine; <strong>Stargazer ($11/pp/hr)</strong> — adds house spirits and 2 signature cocktails; <strong>Moonrise Pour ($15/pp/hr)</strong> — premium spirits, expanded wine. Consumption bar also available. 20% gratuity on all. No outside alcohol permitted. <a href="/pages/contact.html?intent=wedding">Get full details &rarr;</a>' },

            // Corporate retreat / buyout
            { section: 'event', keywords: ['retreat', 'corporate retreat', 'buyout', 'all inclusive', 'overnight retreat', 'group rate', 'full ranch', 'exclusive'],
              answer: 'Full-ranch buyouts for groups: <strong>$3,500/night Sun–Wed</strong> or <strong>$4,500/night Thu–Sat</strong>. Includes all 20 sleeping sites (sleeps 50), Event Barn, Lodge conference room, breakfast tacos, and coffee. Add yoga ($150), sound baths ($300), horseback riding, two-step lessons, and more. <a href="/pages/contact.html?intent=event">Inquire for retreat pricing &rarr;</a>' },
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
