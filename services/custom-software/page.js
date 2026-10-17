/* ============ Custom Software Page Interactive Logic ============ */
const CODE = [
    ['t', '<App theme="yours">'],
    ['p', '  <Navbar links={4} />'],
    ['p', '  <Hero title="Orders" cta />'],
    ['p', '  <StatCards data={kpis} />'],
    ['p', '  <SalesChart range="12m" />'],
    ['t', '</App>']
];

window.pageHero = async function() {
    const pre = document.getElementById('code'), items = document.querySelectorAll('.pi'), badge = document.querySelector('.badge');
    if (!pre) return;
    const map = [null, 0, 1, 2, 3, null];
    while (true) {
        pre.innerHTML = ''; items.forEach(i => i.classList.remove('on')); if (badge) badge.classList.remove('on');
        for (let i = 0; i < CODE.length; i++) {
            const sp = document.createElement('span'); sp.className = CODE[i][0]; pre.append(sp);
            for (const ch of CODE[i][1]) { sp.textContent += ch; await sleep(26); }
            if (map[i] != null && items[map[i]]) items[map[i]].classList.add('on');
            await sleep(260);
        }
        if (badge) badge.classList.add('on');
        await sleep(4500);
    }
};

window.HOOK.show = function(el) {
    const tabs = [...el.querySelectorAll('.tab')], mocks = [...el.querySelectorAll('.mock')];
    let k = 0, auto = setInterval(() => set((k + 1) % tabs.length), 4500);
    const set = i => { k = i; tabs.forEach((t, j) => t.classList.toggle('on', j === i)); mocks.forEach((m, j) => m.classList.toggle('on', j === i)); };
    tabs.forEach((t, i) => t.addEventListener('click', () => { clearInterval(auto); set(i); }));
};

window.HOOK.term = async function() {
    const out = document.getElementById('tout');
    if (!out) return;
    const termLines = SERVICES.software.term;
    out.innerHTML = '';
    for (const line of termLines) {
        const cls = line.startsWith('$') ? 'cmd' : line.startsWith('✓') ? 'ok' : line.startsWith('!') ? 'warn' : 'dim';
        const span = document.createElement('span'); span.className = cls; out.append(span);
        const caret = document.createElement('span'); caret.className = 'caret'; out.append(caret);
        for (const ch of line) { span.textContent += ch; await sleep(cls === 'cmd' ? 38 : 12); }
        caret.remove(); out.append('\n'); await sleep(cls === 'cmd' ? 500 : 280);
    }
    const c = document.createElement('span'); c.className = 'caret'; out.append(c);
};
