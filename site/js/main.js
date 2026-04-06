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

})();
