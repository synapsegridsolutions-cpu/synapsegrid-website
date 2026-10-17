/* ============ SynapseGrid Shared Shell ============ */
window.HOOK = window.HOOK || {};

// Logo: correct the icon box on every service page (fixes the "G" hanging below its box)
document.querySelectorAll('.lockup svg[viewBox="215 56 352 284"]').forEach(s => s.setAttribute('viewBox', '212 62 350 303.5'));

// Footer tagline: same width as the words "SynapseGrid", placed under them
function fitFooterTagline() {
    const logo = document.getElementById('flogo'), p = logo && logo.nextElementSibling;
    if (!logo || !p || p.tagName !== 'P') return;
    const w = logo.querySelector('.word').getBoundingClientRect();
    p.style.fontSize = '100px';
    const ls = parseFloat(getComputedStyle(p).letterSpacing) || 0;
    p.style.fontSize = (100 * w.width / (p.getBoundingClientRect().width - ls)) + 'px';
    p.style.marginLeft = (w.left - logo.getBoundingClientRect().left) + 'px';
}
(document.fonts ? document.fonts.ready : Promise.resolve()).then(fitFooterTagline);
addEventListener('resize', fitFooterTagline);

// Count-up helper
function countUp(el) {
    const n = +el.dataset.n, d = +el.dataset.d || 0, p = el.dataset.p || '', s = el.dataset.s || '', c = el.dataset.c, t0 = performance.now(), dur = 1600;
    const f = t => { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3), v = n * e; el.textContent = p + (c ? Math.round(v).toLocaleString('en-IN') : v.toFixed(d)) + s; if (k < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
}

// Curtain + page start
let started = false;
const reveal = () => {
    document.body.classList.remove('leaving');
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('ready'), 300);
    if (!started) {
        started = true;
        if (window.pageHero) setTimeout(() => window.pageHero(), 900);
    }
};

(document.fonts ? document.fonts.ready : Promise.resolve()).then(() => setTimeout(reveal, 250));
setTimeout(reveal, 2500);
addEventListener('pageshow', e => { if (e.persisted) reveal(); });

document.addEventListener('click', e => {
    const el = e.target.closest('a[href]');
    if (!el) return;
    const href = el.getAttribute('href');
    if (e.metaKey || e.ctrlKey || e.shiftKey || el.target === '_blank' || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;
    // Intercept internal page navigations for smooth curtain exit
    if (href.endsWith('/') || /\.html/.test(href) || href.startsWith('../') || href.startsWith('/')) {
        e.preventDefault();
        document.body.classList.remove('loaded');
        document.body.classList.add('leaving');
        setTimeout(() => location.href = href, 650);
    }
});

// Theme switcher
const themeBtn = document.getElementById('theme');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = t;
        try { localStorage.setItem('sg_theme', t); } catch (e) { }
    });
}

// Nav, progress, burger
const nav = document.getElementById('nav');
addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('solid', scrollY > 40);
    const progress = document.getElementById('progress');
    if (progress) progress.style.width = (scrollY / (document.documentElement.scrollHeight - innerHeight) * 100) + '%';
}, { passive: true });

// Ensure page always starts at top on load & refresh
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

const burger = document.getElementById('burger');
if (burger && nav) {
    burger.addEventListener('click', e => e.currentTarget.setAttribute('aria-expanded', nav.classList.toggle('open')));
}

document.querySelectorAll('#menu a').forEach(x => x.addEventListener('click', () => nav && nav.classList.remove('open')));

// Smooth scroll for in-page anchors & keep URL clean without raw #hash
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const targetId = a.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetEl = targetId === '#top' ? document.body : document.querySelector(targetId);
        if (targetEl) {
            e.preventDefault();
            if (nav) nav.classList.remove('open');
            targetEl.scrollIntoView({ behavior: 'smooth' });
            if (location.hash) {
                history.replaceState(null, '', location.pathname);
            }
        }
    });
});

// Scroll reveal + hooks
const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('in');
    io.unobserve(el);
    if ('fill' in el.dataset) el.style.setProperty('--p', 1);
    if (el.dataset.go && window.HOOK[el.dataset.go]) window.HOOK[el.dataset.go](el);
    if (el.id === 'stats') setTimeout(() => el.querySelectorAll('[data-n]').forEach(countUp), 900);
}), { threshold: .2 });

document.querySelectorAll('.rv, [data-go]').forEach(el => {
    const cards = [...document.querySelectorAll('.card')];
    if (el.classList.contains('card')) el.style.transitionDelay = (cards.indexOf(el) % 3) * 90 + 'ms';
    io.observe(el);
});

const statsEl = document.getElementById('stats');
if (statsEl) io.observe(statsEl);

document.querySelectorAll('.card').forEach(c => c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', e.clientX - r.left + 'px');
    c.style.setProperty('--my', e.clientY - r.top + 'px');
}));

// Set copyright year if present
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();
