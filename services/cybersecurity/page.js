/* ============ Cybersecurity Page Interactive Logic ============ */
const EV = [
    ['r', 'BLOCKED', 'brute-force on ssh · 185.220.x.x'],
    ['g', 'ALLOWED', 'sso login · finance team · MFA ✓'],
    ['y', 'REVIEW', 'login from new country · analyst assigned'],
    ['g', 'PATCHED', 'openssl updated on 14 hosts'],
    ['r', 'BLOCKED', 'phishing link quarantined · 3 inboxes'],
    ['g', 'OK', 'backup integrity verified'],
    ['y', 'ALERT', 'unusual data export · contained'],
    ['r', 'BLOCKED', 'sql injection attempt · /api/search']
];

window.pageHero = function() {
    const feed = document.getElementById('feed');
    let k = 0;
    const push = () => {
        if (!feed) return;
        const e = EV[k++ % EV.length], d = document.createElement('div');
        d.innerHTML = `<s>${new Date().toTimeString().slice(0, 8)}</s><b class="${e[0]}">${e[1]}</b>${e[2]}`;
        feed.append(d);
        while (feed.children.length > 7) feed.firstChild.remove();
    };
    for (let i = 0; i < 4; i++) push();
    setInterval(push, 1600);
    const ch = '!<>-_/[]{}=+*^?#01';
    setTimeout(() => document.querySelectorAll('.h1 .g span').forEach(el => {
        const fin = el.textContent; let f = 0;
        const tick = () => {
            el.textContent = fin.split('').map((c, i) => i < f / 3 ? c : ch[Math.random() * ch.length | 0]).join('');
            if (f++ < fin.length * 3) requestAnimationFrame(tick); else el.textContent = fin;
        };
        tick();
    }), 1300);
};

window.HOOK.scan = function(el) {
    const cells = [...el.querySelectorAll('.cells i')], cnt = [...el.querySelectorAll('.sev b')], msg = el.querySelector('header span'), btn = el.querySelector('button');
    let busy = false;
    const run = async () => {
        if (busy) return; busy = true;
        cells.forEach(c => c.className = ''); cnt.forEach(c => c.textContent = '0');
        const idx = [...cells.keys()].sort(() => Math.random() - .5), P = { h: idx.slice(0, 2), m: idx.slice(2, 7), l: idx.slice(7, 18) }, sev = {}, c = { h: 0, m: 0, l: 0 };
        for (const k in P) P[k].forEach(i => sev[i] = k);
        if (msg) msg.textContent = '→ scanning 1,284 endpoints…';
        for (let i = 0; i < cells.length; i++) {
            cells[i].className = sev[i] || 's';
            if (sev[i]) cnt['hml'.indexOf(sev[i])].textContent = ++c[sev[i]];
            await sleep(32);
        }
        if (msg) msg.textContent = '→ remediating in priority order…';
        await sleep(800);
        for (const k of 'hml') for (const i of P[k]) { cells[i].className = 'f'; cnt['hml'.indexOf(k)].textContent = --c[k]; await sleep(110); }
        if (msg) msg.textContent = '✓ re-test passed · 0 open findings';
        busy = false;
    };
    if (btn) btn.onclick = run;
    run();
};

window.HOOK.rings = function(el) {
    const rs = [...el.querySelectorAll('.ring')], its = [...el.querySelectorAll('.it')]; let k = 0, t;
    const set = i => { k = i; rs.forEach(r => r.classList.toggle('on', +r.dataset.i === i)); its.forEach((x, j) => x.classList.toggle('on', j === i)); };
    const loop = () => { clearInterval(t); t = setInterval(() => set((k + 1) % 4), 2600); };
    its.forEach((x, i) => x.addEventListener('mouseenter', () => { clearInterval(t); set(i); }));
    el.addEventListener('mouseleave', loop);
    set(0); loop();
};
