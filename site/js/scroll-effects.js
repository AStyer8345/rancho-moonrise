/* ============================================================
   Rancho Moonrise — Scroll Effects
   Parallax, stagger reveals, nav scrolled state, drag gallery.
   Plays alongside main.js (which owns .reveal / .fade-in / .nav--scrolled).
   ============================================================ */

(function () {
    'use strict';

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // ---------- 1. PARALLAX HERO ----------
    var parallaxEls = document.querySelectorAll('.parallax-hero');
    if (parallaxEls.length && !prefersReducedMotion && !isTouch) {
        var parallaxTicking = false;
        function updateParallax() {
            var scrollY = window.scrollY;
            for (var i = 0; i < parallaxEls.length; i++) {
                var el = parallaxEls[i];
                var rect = el.getBoundingClientRect();
                if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
                el.style.transform = 'translate3d(0,' + (scrollY * 0.4) + 'px,0)';
            }
            parallaxTicking = false;
        }
        window.addEventListener('scroll', function () {
            if (!parallaxTicking) {
                window.requestAnimationFrame(updateParallax);
                parallaxTicking = true;
            }
        }, { passive: true });
        updateParallax();
    }

    // ---------- 2. REVEAL-STAGGER (children animate in sequence) ----------
    if ('IntersectionObserver' in window) {
        var staggerObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var children = entry.target.children;
                for (var i = 0; i < children.length; i++) {
                    children[i].style.transitionDelay = (i * 0.15) + 's';
                    children[i].classList.add('is-visible');
                }
                staggerObserver.unobserve(entry.target);
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.reveal-stagger').forEach(function (el) {
            staggerObserver.observe(el);
        });
    } else {
        document.querySelectorAll('.reveal-stagger').forEach(function (el) {
            for (var i = 0; i < el.children.length; i++) {
                el.children[i].classList.add('is-visible');
            }
        });
    }

    // ---------- 3. NAV SCROLLED STATE (80px threshold, .scrolled class) ----------
    var nav = document.querySelector('.nav');
    if (nav) {
        var navTicking = false;
        function updateNavScrolled() {
            if (window.scrollY > 80) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
            navTicking = false;
        }
        window.addEventListener('scroll', function () {
            if (!navTicking) {
                window.requestAnimationFrame(updateNavScrolled);
                navTicking = true;
            }
        }, { passive: true });
        updateNavScrolled();
    }

    // ---------- 4. HORIZONTAL DRAG GALLERY ----------
    document.querySelectorAll('.drag-gallery').forEach(function (gallery) {
        var isDown = false;
        var moved = false;
        var startX = 0;
        var startScroll = 0;

        gallery.addEventListener('mousedown', function (e) {
            isDown = true;
            moved = false;
            startX = e.pageX - gallery.offsetLeft;
            startScroll = gallery.scrollLeft;
            gallery.classList.add('is-dragging');
        });
        gallery.addEventListener('mouseleave', function () {
            isDown = false;
            gallery.classList.remove('is-dragging');
        });
        gallery.addEventListener('mouseup', function () {
            isDown = false;
            gallery.classList.remove('is-dragging');
        });
        gallery.addEventListener('mousemove', function (e) {
            if (!isDown) return;
            e.preventDefault();
            var x = e.pageX - gallery.offsetLeft;
            var delta = x - startX;
            if (Math.abs(delta) > 5) moved = true;
            gallery.scrollLeft = startScroll - delta * 1.5;
        });
        // Block click that follows a drag (links inside gallery)
        gallery.addEventListener('click', function (e) {
            if (moved) {
                e.preventDefault();
                e.stopPropagation();
                moved = false;
            }
        }, true);
    });
})();
