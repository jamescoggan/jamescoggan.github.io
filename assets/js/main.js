/* ============================================
   James Coggan — Portfolio JS
   ============================================ */

(function () {
    'use strict';

    // --- Intersection Observer for fade-up animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(function (el) {
        observer.observe(el);
    });

    // --- Sticky nav scroll effect ---
    var nav = document.getElementById('nav');
    var lastScroll = 0;

    window.addEventListener('scroll', function () {
        var scroll = window.pageYOffset;
        if (scroll > 50) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
        lastScroll = scroll;
    }, { passive: true });

    // --- Mobile nav toggle ---
    var toggle = document.getElementById('nav-toggle');
    var navLinks = document.getElementById('nav-links');

    toggle.addEventListener('click', function () {
        toggle.classList.toggle('nav__toggle--open');
        navLinks.classList.toggle('nav__links--open');
        document.body.style.overflow = navLinks.classList.contains('nav__links--open') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
        link.addEventListener('click', function () {
            toggle.classList.remove('nav__toggle--open');
            navLinks.classList.remove('nav__links--open');
            document.body.style.overflow = '';
        });
    });

    // --- Active nav link highlight on scroll ---
    var sections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        var scrollY = window.pageYOffset + 120;
        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            var link = document.querySelector('.nav__link[href="#' + id + '"]');
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    link.classList.add('nav__link--active');
                } else {
                    link.classList.remove('nav__link--active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

})();
