/* ============ Managed IT Support Page Interactive Logic ============ */
const TK = [
    'Printer offline · 2nd floor',
    'New joiner laptop setup',
    'VPN not connecting · remote',
    'Shared mailbox access',
    'Teams audio issue',
    'Password reset · finance',
    'Outlook search not working',
    'Wi-Fi slow · meeting room'
];

window.pageHero = function() {
    const box = document.getElementById('tix');
    if (!box) return;
    let n = 482, k = 0;
    const add = (resolved) => {
        const d = document.createElement('div'); d.className = 'tic';
        d.innerHTML = `<span><b>#${n++}</b>${TK[k++ % TK.length]}</span><span class="tstate">Open</span>`;
        box.prepend(d); while (box.children.length > 3) box.lastChild.remove();
        const st = d.querySelector('.tstate'), fix = () => { st.className = 'tstate ok'; st.textContent = `Resolved · ${6 + Math.random() * 22 | 0}m`; };
        resolved ? fix() : setTimeout(fix, 1800);
    };
    add(1); add(1); add(0);
    setInterval(() => add(0), 3400);
};

window.HOOK.price = function(el) {
    let plan = 'essential';
    const r = document.getElementById('pr'), btns = [...el.querySelectorAll('.seg button')], items = [...el.querySelectorAll('.incl li')];
    if (!r) return;
    const upd = () => {
        const u = +r.value, rate = CFG.supportRate[plan];
        const pu = document.getElementById('pu'); if (pu) pu.textContent = u + ' users';
        const pt = document.getElementById('pt'); if (pt) pt.textContent = inr(u * rate) + ' / mo';
        const pp = document.getElementById('pp'); if (pp) pp.textContent = inr(rate) + ' per user per month';
        items.forEach((li, i) => li.classList.toggle('x', plan === 'essential' && i > 3));
    };
    btns.forEach(b => b.addEventListener('click', () => { plan = b.dataset.p; btns.forEach(x => x.classList.toggle('on', x === b)); upd(); }));
    r.addEventListener('input', upd);
    upd();
};
