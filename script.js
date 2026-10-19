/* ============ CONFIG ============ */
const CONFIG = {
    introVideo: "",       // optional: your own wow animation video, e.g. "assets/intro.mp4" (plays first)
    showTimeline: true,   // the rolling-months scene
    startMonth: "2025-09",// first month shown (YYYY-MM). It rolls up to the current month automatically
    timelineText: "Connecting ideas with intelligence.",
    introDark: false,     // false = intro follows the site theme (light). true = dark cinematic intro
    showIntroOnce: true,  // first visit only. Add ?intro to the URL to replay
    holdLogoMs: 1000
};

/* ============ Logo (from your SVG) ============ */
const ICON = `<svg viewBox="212 62 350 303.5" aria-hidden="true"><g transform="translate(194.89,38.04) scale(.4279)">
<defs><radialGradient id="hf" gradientUnits="userSpaceOnUse" cx="182" cy="455" r="57"><stop offset="0" stop-color="#EDE7DF"/><stop offset=".28" stop-color="#EDE7DF"/><stop offset="1" stop-color="#A67C52"/></radialGradient></defs>
<g>
<line class="c-line" pathLength="1" x1="182" y1="455" x2="203" y2="292" style="animation-delay:.1s"/>
<line class="c-line" pathLength="1" x1="182" y1="455" x2="99" y2="397" style="animation-delay:.25s"/>
<line class="c-line" pathLength="1" x1="182" y1="455" x2="304" y2="427" style="animation-delay:.4s"/>
<line class="c-line" pathLength="1" x1="182" y1="455" x2="72" y2="549" style="animation-delay:.55s"/>
<line class="c-line" pathLength="1" x1="182" y1="455" x2="266" y2="605" style="animation-delay:.7s"/></g>
<circle class="c-brown" cx="203" cy="292" r="32" style="animation-delay:.6s"/>
<circle class="c-brown" cx="99" cy="397" r="26" style="animation-delay:.75s"/>
<circle class="c-brown" cx="72" cy="549" r="32" style="animation-delay:.9s"/>
<circle class="c-brown" cx="266" cy="605" r="32" style="animation-delay:1.05s"/>
<circle class="c-hub" cx="304" cy="427" r="26" style="animation-delay:.9s"/>
<path class="hubshape" d="M137.7,424.1 Q179.6,449.5 188.9,401.4 Q186.0,450.6 234.6,442.9 Q187.5,457.4 208.4,502.1 Q180.9,460.9 140.9,490.1 Q176.0,455.3 137.7,424.1 Z" fill="url(#hf)" stroke="url(#hf)" stroke-width="6" stroke-linejoin="round" style="animation-delay:.2s"/>
<circle class="ripple" cx="182" cy="455" r="40"/>
<g class="mono">
<path class="c-blue" d="M765,56 H450 A157,157 0 0 0 450,370 H650 L688,292 H450 A79,79 0 0 1 450,134 H712 Z" style="animation-delay:.9s;--tx:-300px;--ty:-420px;--r:-50deg"/>
<path class="c-green" d="M688,292 A156,156 0 0 1 844,448 H766 A78,78 0 0 0 688,370 H650 Z" style="animation-delay:1.05s;--tx:420px;--ty:-200px;--r:70deg"/>
<path class="c-dark" d="M360.2,448 A253,253 0 0 0 783.9,690.9 L729.5,636.5 A176,176 0 0 1 441,448 Z" style="animation-delay:1.2s;--tx:-380px;--ty:380px;--r:40deg"/>
<path class="c-brown" d="M600,497 H857.6 A253,253 0 0 1 783.9,690.9 L729.5,636.5 A176,176 0 0 0 771.9,568 H600 Z" style="animation-delay:1.35s;--tx:420px;--ty:360px;--r:-60deg"/></g>
</g></svg>`;
const ROT = [-12, 10, -8, 14, -10, 8, -14, 12, -9, 11, -7];
const split = (t, o = 0) => [...t].map((c, i) => `<i class="ch" style="--k:${o + i};--rot:${ROT[(o + i) % ROT.length]}deg">${c}</i>`).join('');
const LOCKUP = ICON + `<span><span class="word">${split('Synapse')}<b>${split('Grid', 7)}</b></span><span class="sub">SOLUTIONS</span></span>`;
const withId = (s, id) => s.replace('id="hf"', `id="${id}"`).replace(/url\(#hf\)/g, `url(#${id})`);

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const brand = $('#brand'), fly = $('#flyLogo'), intro = $('#intro');
brand.innerHTML = LOCKUP; fly.innerHTML = withId(LOCKUP, 'hf2'); $('#flogo').innerHTML = withId(LOCKUP, 'hf3');

/* ============ Tagline: same width as the words "SynapseGrid" ============ */
function fitTagline(logo, el) {
    if (!logo || !el) return;
    const w = logo.querySelector('.word').getBoundingClientRect();
    el.style.fontSize = '100px';
    const ls = parseFloat(getComputedStyle(el).letterSpacing) || 0;
    el.style.fontSize = (100 * w.width / (el.getBoundingClientRect().width - ls)) + 'px';
    return w;
}
function fitFooter() {
    const logo = $('#flogo'), p = $('#flogo + p');
    if (!logo || !p) return;
    const w = fitTagline(logo, p);
    p.style.marginLeft = (w.left - logo.getBoundingClientRect().left) + 'px';
}
(document.fonts ? document.fonts.ready : Promise.resolve()).then(fitFooter);
addEventListener('resize', fitFooter);

if (CONFIG.introDark) ['#intro', '#flyLogo', '#tag', '#skip'].forEach(q => $(q).classList.add('idark'));
$('#yr').textContent = new Date().getFullYear();
$('#track').innerHTML = ['Custom Software', 'Cloud Infrastructure', 'DevOps & CI/CD', 'Cybersecurity', 'Data Engineering', 'Artificial Intelligence', 'Mobile Apps', 'IT Consulting', 'Managed Support'].map(t => `<span>${t}</span>`).join('').repeat(2);

/* ============ Theme ============ */
$('#theme').addEventListener('click', () => {
    const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('sg_theme', t); } catch (e) { }
    netRGB = getComputedStyle(document.documentElement).getPropertyValue('--net').trim();
});

/* ============ Intro sequence ============ */
const hasHash = Boolean(location.hash && location.hash.length > 1);
const seen = () => { try { return sessionStorage.getItem('sg_intro') === '1'; } catch (e) { return false; } };
const force = new URLSearchParams(location.search).has('intro');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const shouldSkip = reduced || hasHash || (CONFIG.showIntroOnce && seen() && !force);

if (shouldSkip) {
    document.body.classList.remove('locked');
    document.body.classList.add('ready');
}

const lockScroll = e => { if (document.body.classList.contains('locked')) e.preventDefault(); };
window.addEventListener('wheel', lockScroll, { passive: false });
window.addEventListener('touchmove', lockScroll, { passive: false });
window.addEventListener('keydown', e => {
    if (document.body.classList.contains('locked') && ['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.code)) e.preventDefault();
});
if (document.body.classList.contains('locked')) window.scrollTo(0, 0);
let skipped = false;

function place() {
    const r = brand.getBoundingClientRect();
    Object.assign(fly.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' });
    const k = Math.min(3.2, innerWidth * 0.8 / r.width);
    return { dx: innerWidth / 2 - (r.left + r.width / 2), dy: innerHeight / 2 - (r.top + r.height / 2) - 14, k };
}
function finish() {
    if (!document.body.classList.contains('locked')) return;
    document.body.classList.remove('locked'); document.body.classList.add('ready');
    brand.classList.remove('hidden-brand');
    ['#flyLogo', '#tag', '#skip'].forEach(s => $(s) && ($(s).style.display = 'none'));
    intro.classList.add('out'); setTimeout(() => intro.remove(), 1000);
    try {
        localStorage.setItem('sg_intro', '1');
        sessionStorage.setItem('sg_intro', '1');
    } catch (e) { }
}
const MN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function burst() {
    const r = fly.querySelector('.mono').getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const cols = ['#3E6B84', '#4F6F5A', '#A67C52', '#6FA2C2', '#7FA48B'], gl = ['</>', '{ }', '#', ';', '//', '+', '< >'];
    const reach = innerWidth < 700 ? .55 : 1;
    for (let i = 0; i < 34; i++) {
        const el = document.createElement('i'); el.className = 'bit'; const c = cols[i % cols.length];
        if (i % 3 === 0) { el.textContent = gl[i % gl.length]; el.style.color = c; }
        else { const z = 7 + Math.random() * 8; Object.assign(el.style, { width: z + 'px', height: z + 'px', background: c, borderRadius: i % 2 ? '50%' : '3px' }); }
        el.style.left = cx + 'px'; el.style.top = cy + 'px'; document.body.append(el);
        const a = Math.random() * 6.283, d = (110 + Math.random() * 300) * reach, rot = (Math.random() - .5) * 540;
        const X = Math.cos(a) * d, Y = Math.sin(a) * d - 50;
        el.animate([
            { transform: 'translate(-50%,-50%) scale(.2)', opacity: 1 },
            { transform: `translate(calc(-50% + ${X}px),calc(-50% + ${Y}px)) scale(1) rotate(${rot}deg)`, opacity: 1, offset: .55 },
            { transform: `translate(calc(-50% + ${X * 1.1}px),calc(-50% + ${Y + 110}px)) scale(.7) rotate(${rot * 1.3}deg)`, opacity: 0 }
        ], { duration: 1200 + Math.random() * 600, easing: 'cubic-bezier(.2,.7,.3,1)' }).onfinish = () => el.remove();
    }
}
function timeline() {
    return new Promise(res => {
        const box = $('#yrbox'), yy = $('#yy'), line = $('#vline'), txt = $('#ytext');
        const icons = [...line.querySelectorAll('.mk svg')];
        const [sy, sm] = CONFIG.startMonth.split('-').map(Number), now = new Date(), ey = now.getFullYear(), em = now.getMonth();
        const list = []; let y = sy, m = sm - 1;
        while (y < ey || (y === ey && m <= em)) { list.push({ y, m }); if (++m > 11) { m = 0; y++; } }
        if (!list.length) list.push({ y: ey, m: em });
        const n = Math.max(1, list.length - 1), dur = Math.min(5200, Math.max(2800, n * 340));
        let cur = 0, t0 = null, ic = -1;
        // Rule: months up to and including Jan show 2025; only months strictly after Jan show 2026
        const calcYear = item => (item.y < 2026 || (item.y === 2026 && item.m === 0)) ? 2025 : 2026;
        txt.textContent = CONFIG.timelineText;
        yy.textContent = calcYear(list[0]);
        box.innerHTML = `<span class="cur">${MN[list[0].m]}</span>`;
        const roll = i => {
            const old = box.lastElementChild, el = document.createElement('span');
            el.textContent = MN[list[i].m]; el.className = 'in'; box.append(el);
            old.className = 'out'; setTimeout(() => old.remove(), 260);
            requestAnimationFrame(() => requestAnimationFrame(() => el.className = 'cur'));
            const targetYr = calcYear(list[i]);
            if (yy.textContent != String(targetYr)) {
                yy.style.opacity = 0;
                setTimeout(() => { yy.textContent = targetYr; yy.style.opacity = 1; }, 200);
            }
        };
        const setIcon = i => { if (i !== ic) { ic = i; icons.forEach((s, j) => s.classList.toggle('on', j === i)); } };
        setIcon(0);
        const f = t => {
            if (skipped) return res();
            if (t0 === null) t0 = t;
            const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 2);
            line.style.setProperty('--p', e);
            const i = Math.min(list.length - 1, Math.floor(n * k + .999)); if (i !== cur) { cur = i; roll(i); }
            setIcon(Math.min(3, Math.floor(k * 4)));
            if (k > .5) txt.classList.add('on');
            if (k < 1) requestAnimationFrame(f);
            else setTimeout(() => { $('#scene').classList.add('gone'); setTimeout(res, 850); }, 1500);
        };
        setTimeout(() => requestAnimationFrame(f), 500);
    });
}
async function runIntro() {
    await (document.fonts ? document.fonts.ready : Promise.resolve());
    let p = place(); fly.style.transform = `translate(${p.dx}px,${p.dy}px) scale(${p.k})`; fly.style.opacity = 0;
    if (CONFIG.introVideo) {
        const v = $('#introVideo'); v.src = CONFIG.introVideo;
        await new Promise(res => {
            v.addEventListener('ended', res, { once: true }); v.addEventListener('error', res, { once: true });
            $('#skip').addEventListener('click', res, { once: true });
            v.play().then(() => v.classList.add('on')).catch(res);
        });
        v.classList.remove('on'); await sleep(500);
    }
    if (skipped) return finish();
    if (CONFIG.showTimeline) await timeline(); else $('#scene').remove();
    if (skipped) return finish();

    // doodle: logo builds itself in the centre
    p = place(); fly.style.transform = `translate(${p.dx}px,${p.dy}px) scale(${p.k})`;
    fly.style.opacity = 1; fly.classList.add('build');
    setTimeout(() => { if (!skipped) burst(); }, 2150);
    await sleep(3500); if (skipped) return finish();

    // tagline: under the words, same width as "SynapseGrid"
    const tg = $('#tag'), tw = fitTagline(fly, tg), tsub = fly.querySelector('.sub').getBoundingClientRect();
    Object.assign(tg.style, { left: tw.left + 'px', top: (tsub.bottom + tw.height * .3) + 'px' });
    $('#tag').classList.add('on'); await sleep(CONFIG.holdLogoMs + 400);
    if (skipped) return finish();

    // happy hop to the nav: squash, jump, land, settle
    $('#tag').classList.remove('on'); p = place(); fly.classList.remove('idark'); $('#intro').classList.remove('idark');
    const { dx, dy, k } = p, mid = (k + 1) / 2, T = (x, y, sx, sy) => `translate(${x}px,${y}px) scale(${sx},${sy})`;
    const anim = fly.animate([
        { transform: T(dx, dy, k, k), offset: 0 },
        { transform: T(dx, dy + 10, k * 1.06, k * .92), offset: .14 },
        { transform: T(dx * .45, dy * .45 - 110, mid * .94, mid * 1.08), offset: .45 },
        { transform: T(0, 6, 1.08, .9), offset: .76 },
        { transform: T(0, -5, .97, 1.04), offset: .88 },
        { transform: T(0, 0, 1, 1), offset: 1 }
    ], { duration: 1600, easing: 'ease-in-out', fill: 'forwards' });
    await sleep(600); document.body.classList.add('ready'); intro.classList.add('out');
    await anim.finished.catch(() => { }); finish();
}
$('#skip').addEventListener('click', () => { skipped = true; setTimeout(finish, 0); });
if (shouldSkip) {
    ['#intro', '#flyLogo', '#tag', '#skip'].forEach(s => { const el = $(s); if (el) el.remove(); });
    brand.classList.remove('hidden-brand');
    document.body.classList.remove('locked'); document.body.classList.add('ready');
    if (hasHash) {
        setTimeout(() => {
            try {
                const target = document.querySelector(location.hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    history.replaceState(null, '', location.pathname);
                }
            } catch (e) { }
        }, 80);
    }
} else {
    try {
        localStorage.setItem('sg_intro', '1');
        sessionStorage.setItem('sg_intro', '1');
    } catch (e) { }
    runIntro();
}

/* ============ Nav, progress, reveal, spotlight ============ */
const nav = $('#nav');
addEventListener('scroll', () => {
    nav.classList.toggle('solid', scrollY > 40);
    $('#progress').style.width = (scrollY / (document.documentElement.scrollHeight - innerHeight) * 100) + '%';
}, { passive: true });
$('#burger').addEventListener('click', e => e.currentTarget.setAttribute('aria-expanded', nav.classList.toggle('open')));
$$('#menu a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Smooth scroll for in-page anchors & keep URL clean without raw #hash
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const targetId = a.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetEl = targetId === '#top' ? document.body : document.querySelector(targetId);
        if (targetEl) {
            e.preventDefault();
            nav.classList.remove('open');
            targetEl.scrollIntoView({ behavior: 'smooth' });
            if (location.hash) {
                history.replaceState(null, '', location.pathname);
            }
        }
    });
});
const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); io.unobserve(e.target);
    if (e.target.id === 'steps') e.target.style.setProperty('--p', 1);
}), { threshold: .15 });
$$('.rv').forEach((el, i) => { el.style.transitionDelay = (el.classList.contains('card') ? (i % 3) * 90 : 0) + 'ms'; io.observe(el); });
$$('.card').forEach(c => c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect(); c.style.setProperty('--mx', e.clientX - r.left + 'px'); c.style.setProperty('--my', e.clientY - r.top + 'px');
}));

/* ============ Form (front-end only: opens the visitor's email app) ============ */
$('#form').addEventListener('submit', e => {
    e.preventDefault(); const f = new FormData(e.target);
    const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\nTopic: ${f.get('topic')}\n\n${f.get('msg')}`;
    location.href = `mailto:synapsegridsolutions.com?subject=${encodeURIComponent('Project enquiry: ' + f.get('topic'))}&body=${encodeURIComponent(body)}`;
    $('#fmsg').textContent = 'Opening your email app…';
});

/* ============ Hero: background video support ============ */
const hv = $('#heroVideo');
if (hv && hv.play) { hv.play().catch(() => { }); }
