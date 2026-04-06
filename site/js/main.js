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
