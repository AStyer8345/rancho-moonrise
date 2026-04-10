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

    // ---------- Fade-in on scroll ----------
    var fadeEls = document.querySelectorAll('.fade-in');
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

        // Lazy-load slide background images on first display
        function loadSlide(slide) {
            var bg = slide.getAttribute('data-bg');
            if (bg) {
                slide.style.backgroundImage = "url('" + bg + "')";
                slide.removeAttribute('data-bg');
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

    // ---------- Calendly Placeholder Handler ----------
    // When Calendly is connected, replace href="#" with real Calendly URLs
    // For now, show a helpful message
    document.querySelectorAll('.calendly-placeholder').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var type = this.getAttribute('data-calendly');
            var msg = '';
            if (type === 'tour') {
                msg = 'Venue tour scheduling will be available soon! For now, call 737-291-1260 to schedule your visit.';
            } else if (type === 'virtual') {
                msg = 'Virtual tour scheduling coming soon! Call 737-291-1260 to arrange a video walkthrough.';
            } else {
                msg = 'Call scheduling coming soon! Reach us at 737-291-1260.';
            }
            alert(msg);
        });
    });

    // ---------- AI Chat Widget ----------
    (function () {
        // Knowledge base — trained on all Rancho Moonrise content
        var KB = [
            // Location & Contact
            { keywords: ['where', 'location', 'address', 'directions', 'far', 'drive', 'distance', 'manor'],
              answer: 'Rancho Moonrise is located at <strong>20117 Lockwood Road, Manor, TX 78653</strong> — about 20 minutes east of downtown Austin. <a href="https://www.google.com/maps/place/20117+Lockwood+Rd,+Manor,+TX+78653" target="_blank">Get directions &rarr;</a>' },
            { keywords: ['phone', 'call', 'number', 'reach'],
              answer: 'You can reach us at <a href="tel:+17372911260"><strong>737-291-1260</strong></a>. We\'re happy to help with any questions!' },
            { keywords: ['hours', 'check-in', 'check in', 'checkout', 'check out', 'time'],
              answer: 'Check-in is <strong>4:00 PM – 8:00 PM daily</strong>. Checkout is by 11:00 AM. If you need early check-in or late checkout, give us a call and we\'ll do our best to accommodate you.' },

            // Weddings
            { keywords: ['wedding', 'ceremony', 'reception', 'bride', 'groom', 'marry', 'engaged', 'engagement'],
              answer: 'We\'d love to host your wedding! Rancho Moonrise offers <strong>exclusive full-ranch access</strong> for weddings — no outside guests on the property. We offer unlimited ceremony options across the property, capacity for 200+ guests, and on-site accommodations for 50 overnight guests. <a href="/pages/contact.html?intent=wedding">Start your wedding inquiry &rarr;</a>' },
            { keywords: ['wedding package', 'wedding price', 'wedding cost', 'how much wedding', 'wedding pricing', 'wedding rate'],
              answer: 'Wedding packages include full exclusive ranch access, unlimited ceremony options, the Event Barn, and accommodations for up to 50 overnight guests. For specific pricing, <a href="/pages/contact.html?intent=wedding">submit a wedding inquiry</a> or call <a href="tel:+17372911260">737-291-1260</a> — we\'ll send you a detailed package within 2 hours.' },
            { keywords: ['ceremony site', 'ceremony option', 'where ceremony', 'venue option'],
              answer: 'We offer <strong>unlimited ceremony options</strong> across the property — from the Rustic Corral surrounded by wildflowers, to the Event Barn (modern, climate-controlled), to poolside, to open Texas fields with panoramic views. Each creates a completely different atmosphere. <a href="/pages/weddings.html#ceremony-sites">Learn more &rarr;</a>' },
            { keywords: ['capacity', 'how many', 'guest count', 'guests', 'max', 'maximum', 'seat'],
              answer: 'We can accommodate <strong>200+ guests</strong> for weddings and events, with <strong>50 overnight guests</strong> across our cabins and safari tents. The Event Barn, pool deck, and outdoor spaces all offer flexible layouts.' },
            { keywords: ['tour', 'visit', 'see the ranch', 'come see', 'walk through', 'schedule tour'],
              answer: 'We\'d love to show you around! We offer <strong>in-person venue tours (60 min)</strong> and <strong>virtual tours (30 min)</strong>. Call <a href="tel:+17372911260">737-291-1260</a> to schedule, or <a href="/pages/contact.html?intent=wedding">submit an inquiry</a> and we\'ll set one up.' },

            // Accommodations
            { keywords: ['cabin', 'tent', 'glamping', 'stay', 'overnight', 'accommodation', 'sleep', 'room', 'lodge'],
              answer: 'We offer <strong>cabins and safari tents</strong>: <strong>Cabins</strong> (queen bed, A/C, heat, covered deck), <strong>Family Safari Tents</strong> (queen + bunks, sleeps 4), and <strong>Premium Safari Tents</strong> (king bed, private ensuite). All have A/C and heat, with fire pits throughout the property. <a href="https://hotels.cloudbeds.com/en/reservation/5tzv1r" target="_blank">Check availability &rarr;</a>' },
            { keywords: ['book', 'reservation', 'reserve', 'availability', 'available'],
              answer: 'You can check real-time availability and book directly: <a href="https://hotels.cloudbeds.com/en/reservation/5tzv1r" target="_blank"><strong>Book your stay &rarr;</strong></a>. For weddings and events, <a href="/pages/contact.html">contact us</a> for custom availability.' },
            { keywords: ['price', 'cost', 'rate', 'per night', 'nightly', 'how much', 'pricing'],
              answer: 'Nightly rates vary by accommodation type and season. Check current pricing and availability on our <a href="https://hotels.cloudbeds.com/en/reservation/5tzv1r" target="_blank">booking page</a>. For wedding and event pricing, <a href="/pages/contact.html">contact our team</a> — we\'ll send details within 2 hours.' },

            // Events
            { keywords: ['event', 'corporate', 'retreat', 'birthday', 'party', 'conference', 'festival', 'host'],
              answer: 'We host all types of events: corporate retreats, birthday parties, conferences, private parties, festivals, and wellness retreats. Available for <strong>hourly rental or full ranch buyout</strong>. <a href="/pages/contact.html?intent=event">Submit an event inquiry &rarr;</a>' },
            { keywords: ['event barn', 'barn', 'indoor', 'climate control'],
              answer: 'The <strong>Event Barn</strong> is our modern, climate-controlled indoor venue. Flexible layout for presentations, seated dinners, cocktail receptions, and dance floors. Beautiful ranch aesthetic with all the infrastructure you need.' },
            { keywords: ['bar', 'drinks', 'cocktail', 'lounge'],
              answer: 'The Lodge serves beer, wine, and other beverages on-site — perfect for a drink by the pool or after a day on the ranch. For private events, bar service can be arranged as part of your package.' },
            { keywords: ['upcoming event', 'what\'s happening', 'next event', 'calendar', 'schedule'],
              answer: 'Check out our upcoming events — live music, yoga, crawfish boils, and more: <a href="/pages/events.html"><strong>View upcoming events &rarr;</strong></a>' },

            // Pool
            { keywords: ['pool', 'swim', 'pool pass', 'day pass', 'resort pass'],
              answer: 'Our resort-style pool is available to guests and day visitors! <strong>Pool passes</strong> are available through ResortPass. Plus, the <strong>last Friday of every month is Free Friday</strong> — free pool access with advance RSVP. <a href="https://www.resortpass.com/hotels/rancho-moonrise" target="_blank">Get a pool pass &rarr;</a>' },

            // Policies
            { keywords: ['pet', 'dog', 'animal', 'pet friendly', 'pet-friendly'],
              answer: 'Yes! Rancho Moonrise is <strong>pet-friendly</strong>. Well-behaved dogs are welcome at designated sleeping sites. We love four-legged guests! Just let us know when booking.' },
            { keywords: ['kid', 'child', 'children', 'family', 'family friendly', 'family-friendly', 'baby'],
              answer: 'Absolutely — we are <strong>kid and family friendly</strong>! We have kid-friendly spaces to play and family safari tents that sleep 2 adults + 2 children. Everyone is welcome at the ranch.' },
            { keywords: ['caterer', 'catering', 'food', 'bring own', 'vendor', 'byob', 'outside vendor'],
              answer: 'We work with both preferred vendors and outside vendors. For weddings and events, we can share our <strong>preferred vendor list</strong> and discuss catering policies during your consultation. <a href="/pages/contact.html?intent=wedding">Inquire for details &rarr;</a>' },
            { keywords: ['cancel', 'cancellation', 'refund', 'policy', 'policies'],
              answer: 'For accommodation cancellation policies, check your booking confirmation. For wedding and event cancellation terms, these are outlined in your event contract. Questions? Call <a href="tel:+17372911260">737-291-1260</a> or see our <a href="/pages/policies.html">policies page</a>.' },

            // About & Misc
            { keywords: ['about', 'who', 'owner', 'story', 'ranch', 'property', 'acre', 'acres'],
              answer: 'Rancho Moonrise is Austin\'s glamping and events ranch — <strong>36 acres</strong>, just 20 minutes from downtown Austin. We offer glamping, weddings, private events, and community gatherings with authentic Texas hospitality.' },
            { keywords: ['social', 'instagram', 'facebook', 'tiktok', 'follow'],
              answer: 'Follow us! <a href="https://www.instagram.com/rancho_moonrise/" target="_blank">Instagram</a> · <a href="https://www.facebook.com/RanchoMoonrise/" target="_blank">Facebook</a> · <a href="https://www.tiktok.com/@rancho_moonrise" target="_blank">TikTok</a> · <a href="https://www.linkedin.com/company/rancho-moonrise/" target="_blank">LinkedIn</a>' },
            { keywords: ['review', 'rating', 'stars', 'google review', 'testimonial'],
              answer: 'We\'re proud of our <strong>4.9-star rating across 125 Google Reviews</strong>! Our guests consistently highlight the beautiful property, amazing hospitality, and unique ranch experience.' },
            { keywords: ['wifi', 'internet', 'wi-fi'],
              answer: 'Yes, WiFi is available on the property. It\'s great for staying connected, though we do encourage unplugging and enjoying the ranch experience!' },
            { keywords: ['fire pit', 'firepit', 'campfire', 'bonfire', 's\'more'],
              answer: '<strong>Fire pits are available throughout the property</strong> — perfect for s\'mores, stargazing, and Texas evenings. Firewood is available for purchase at The Lodge.' },
        ];

        // Default / fallback
        var FALLBACK = 'I\'m not sure about that one — but our team can help! Call <a href="tel:+17372911260">737-291-1260</a> or <a href="/pages/contact.html">send us a message</a>. We respond within 2 hours.';

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
            var q = query.toLowerCase().replace(/[?!.,]/g, '');
            var words = q.split(/\s+/);
            var bestMatch = null;
            var bestScore = 0;

            for (var i = 0; i < KB.length; i++) {
                var score = 0;
                for (var j = 0; j < KB[i].keywords.length; j++) {
                    var kw = KB[i].keywords[j];
                    // Check for multi-word keyword match
                    if (kw.indexOf(' ') > -1) {
                        if (q.indexOf(kw) > -1) score += 3;
                    } else {
                        for (var w = 0; w < words.length; w++) {
                            if (words[w] === kw || words[w].indexOf(kw) === 0) score += 2;
                        }
                    }
                }
                if (score > bestScore) {
                    bestScore = score;
                    bestMatch = KB[i];
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
