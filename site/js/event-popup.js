/* ============================================================
   Rancho Moonrise — Homepage Events Popup
   Shows up to 3 featured, active, upcoming events in a modal.
   Controlled by Ashley via the admin "Feature in Popup" toggle.
   Self-contained: injects its own styles. Homepage only.
   ============================================================ */
(function () {
    'use strict';

    var SUPABASE_URL = 'https://uuqedsvjlkeszrbwzizl.supabase.co';
    var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1cWVkc3ZqbGtlc3pyYnd6aXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5ODcwMjYsImV4cCI6MjA4ODU2MzAyNn0.Wu1DKotPPigTpVpQvmdRMpa7NW9-WnEou6bTV3kakFM';
    var REST = SUPABASE_URL + '/rest/v1/';
    var HEADERS = { 'apikey': SUPABASE_ANON_KEY, 'Authorization': 'Bearer ' + SUPABASE_ANON_KEY };

    var STORAGE_KEY = 'rmEventsPopup';
    var CAP_MS = 3 * 24 * 60 * 60 * 1000; // 3 days
    var SHOW_DELAY_MS = 2000;
    var lastFocus = null;

    function escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
    }
    function formatDate(d) {
        if (!d) return '';
        var dt = new Date(d + 'T00:00:00');
        return dt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
    function readCap() {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; } catch (e) { return null; }
    }
    function writeCap(obj) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); } catch (e) {}
    }
    function shouldShow(signature) {
        var rec = readCap();
        if (!rec) return true;                          // never dismissed, or storage blocked -> fail open
        if (rec.signature !== signature) return true;   // a new event was featured
        if (!rec.dismissedAt) return true;
        return (Date.now() - rec.dismissedAt) > CAP_MS;
    }

    function injectStyles() {
        if (document.getElementById('rm-popup-styles')) return;
        var css =
        '.rm-popup-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(30,22,14,0.55);opacity:0;transition:opacity .3s ease;}' +
        '.rm-popup-overlay.is-open{opacity:1;}' +
        '.rm-popup{position:relative;background:#fff;max-width:460px;width:100%;max-height:90vh;overflow-y:auto;border-radius:14px;box-shadow:0 20px 60px rgba(0,0,0,.35);transform:translateY(12px) scale(.98);transition:transform .3s ease;}' +
        '.rm-popup-overlay.is-open .rm-popup{transform:none;}' +
        '.rm-popup-close{position:absolute;top:10px;right:12px;z-index:2;background:rgba(255,255,255,.9);border:none;width:34px;height:34px;border-radius:50%;font-size:1.5rem;line-height:1;cursor:pointer;color:#333;box-shadow:0 1px 4px rgba(0,0,0,.2);}' +
        '.rm-popup-art img{display:block;width:100%;height:auto;border-radius:14px 14px 0 0;}' +
        '.rm-popup-body{padding:22px 24px 26px;}' +
        '.rm-popup-eyebrow{text-transform:uppercase;letter-spacing:.08em;font-size:.72rem;font-weight:700;color:#b4531f;margin:0 0 6px;}' +
        '.rm-popup-title{font-size:1.5rem;line-height:1.2;margin:0 0 8px;color:#2b2118;}' +
        '.rm-popup-meta{font-weight:600;color:#b4531f;margin:0 0 10px;font-size:.95rem;}' +
        '.rm-popup-desc{color:#4a4035;font-size:.95rem;line-height:1.5;margin:0 0 12px;}' +
        '.rm-popup-price{font-weight:700;color:#2b2118;margin:0 0 14px;}' +
        '.rm-popup-btn{display:inline-block;background:#b4531f;color:#fff;text-decoration:none;padding:11px 22px;border-radius:8px;font-weight:600;font-size:.95rem;}' +
        '.rm-popup-btn:hover{background:#9a4419;}' +
        '.rm-popup-more{margin-top:18px;border-top:1px solid #eee;padding-top:14px;}' +
        '.rm-popup-more__label{text-transform:uppercase;letter-spacing:.06em;font-size:.72rem;font-weight:700;color:#8a7d6c;margin:0 0 8px;}' +
        '.rm-popup-more ul{list-style:none;margin:0;padding:0;}' +
        '.rm-popup-more li{display:flex;justify-content:space-between;gap:12px;font-size:.9rem;padding:5px 0;color:#3a3128;}' +
        '.rm-popup-more__date{color:#8a7d6c;white-space:nowrap;}' +
        '@media (prefers-reduced-motion: reduce){.rm-popup-overlay,.rm-popup{transition:none;}.rm-popup{transform:none;}}';
        var style = document.createElement('style');
        style.id = 'rm-popup-styles';
        style.textContent = css;
        document.head.appendChild(style);
    }

    function ticketLink(ev) {
        if (ev.ticket_url) {
            return '<a class="rm-popup-btn" href="' + escapeHtml(ev.ticket_url) + '" target="_blank" rel="noopener">Get Tickets</a>';
        }
        return '<a class="rm-popup-btn" href="/pages/events.html">Learn More</a>';
    }

    function buildMarkup(events) {
        var f = events[0];
        var art = f.artwork_url
            ? '<div class="rm-popup-art"><img src="' + escapeHtml(f.artwork_url) + '" alt="' + escapeHtml(f.title) + '" onerror="this.parentNode.style.display=\'none\'"></div>'
            : '';
        var meta = formatDate(f.event_date) + (f.event_time ? ' · ' + escapeHtml(f.event_time) : '');
        var price = f.price ? '<p class="rm-popup-price">' + escapeHtml(f.price) + '</p>' : '';
        var more = '';
        if (events.length > 1) {
            more = '<div class="rm-popup-more"><p class="rm-popup-more__label">Also coming up</p><ul>' +
                events.slice(1).map(function (ev) {
                    return '<li><span>' + escapeHtml(ev.title) + '</span><span class="rm-popup-more__date">' + formatDate(ev.event_date) + '</span></li>';
                }).join('') + '</ul></div>';
        }
        return '<div class="rm-popup">' +
            '<button class="rm-popup-close" aria-label="Close">&times;</button>' +
            art +
            '<div class="rm-popup-body">' +
                '<p class="rm-popup-eyebrow">Upcoming at Rancho Moonrise</p>' +
                '<h2 id="rmPopupTitle" class="rm-popup-title">' + escapeHtml(f.title) + '</h2>' +
                '<p class="rm-popup-meta">' + meta + '</p>' +
                (f.description ? '<p class="rm-popup-desc">' + escapeHtml(f.description) + '</p>' : '') +
                price +
                ticketLink(f) +
                more +
            '</div>' +
        '</div>';
    }

    function trapFocus(modal, e) {
        var focusable = modal.querySelectorAll('a[href], button:not([disabled])');
        if (!focusable.length) return;
        var first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    function open(events, signature) {
        injectStyles();
        lastFocus = document.activeElement;
        var overlay = document.createElement('div');
        overlay.className = 'rm-popup-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-labelledby', 'rmPopupTitle');
        overlay.innerHTML = buildMarkup(events);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        function close() {
            writeCap({ signature: signature, dismissedAt: Date.now() });
            document.body.style.overflow = '';
            document.removeEventListener('keydown', onKey);
            overlay.remove();
            if (lastFocus && lastFocus.focus) { lastFocus.focus(); }
        }
        function onKey(e) {
            if (e.key === 'Escape') { close(); }
            else if (e.key === 'Tab') { trapFocus(overlay, e); }
        }
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay || e.target.classList.contains('rm-popup-close')) { close(); }
        });
        document.addEventListener('keydown', onKey);

        requestAnimationFrame(function () { overlay.classList.add('is-open'); });
        var closeBtn = overlay.querySelector('.rm-popup-close');
        if (closeBtn) { closeBtn.focus(); }
    }

    function init() {
        var today = new Date().toISOString().slice(0, 10);
        var params = 'is_active=eq.true&show_in_popup=eq.true&event_date=gte.' + today +
                     '&order=event_date.asc,sort_order.asc&limit=3&select=*';
        fetch(REST + 'rancho_events?' + params, { headers: HEADERS })
            .then(function (r) { return r.ok ? r.json() : []; })
            .catch(function () { return []; })
            .then(function (events) {
                if (!events || !events.length) { return; }
                var signature = events.map(function (e) { return e.id; }).sort().join(',');
                if (!shouldShow(signature)) { return; }
                setTimeout(function () { open(events, signature); }, SHOW_DELAY_MS);
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
