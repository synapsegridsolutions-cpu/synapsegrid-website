/* ============ IT Consulting Page Interactive Logic ============ */
const DIMS = ['Infrastructure', 'Security', 'Data', 'Automation', 'Team skills'];

window.HOOK.mat = function(el) {
    const ins = [...el.querySelectorAll('input')], svgEl = el.querySelector('svg'), sc = el.querySelector('.score b'), vd = el.querySelector('.verdict');
    const ang = i => -Math.PI / 2 + i * 2 * Math.PI / 5, P = (i, r) => [(200 + r * Math.cos(ang(i))).toFixed(1), (200 + r * Math.sin(ang(i))).toFixed(1)];
    const grid = [1, 2, 3, 4, 5].map(l => `<polygon class="gr" points="${DIMS.map((_, i) => P(i, 140 * l / 5).join(',')).join(' ')}"/>`).join('')
        + DIMS.map((_, i) => `<line class="gr" x1="200" y1="200" x2="${P(i, 140)[0]}" y2="${P(i, 140)[1]}"/>`).join('')
        + DIMS.map((d, i) => { const [x, y] = P(i, 168); return `<text x="${x}" y="${+y + 4}" text-anchor="middle">${d}</text>`; }).join('');
    const upd = () => {
        const v = ins.map(x => +x.value);
        ins.forEach((x, i) => { const em = x.previousElementSibling.querySelector('em'); if (em) em.textContent = v[i] + ' / 5'; });
        const pts = v.map((n, i) => P(i, 140 * n / 5));
        if (svgEl) svgEl.innerHTML = grid + `<polygon class="poly" points="${pts.map(p => p.join(',')).join(' ')}"/>` + pts.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="5"/>`).join('');
        const s = Math.round(v.reduce((a, b) => a + b, 0) / 25 * 100), weak = DIMS[v.indexOf(Math.min(...v))];
        if (sc) sc.textContent = s;
        if (vd) vd.textContent = (s < 45 ? 'Foundations first: stabilise and secure before investing in new tools.' : s < 75 ? 'A solid base. A focused roadmap can unlock quick wins.' : 'A mature estate. Focus on optimisation, cost and advanced capabilities.') + ` Weakest area: ${weak}.`;
    };
    ins.forEach(x => x.addEventListener('input', upd));
    upd();
};
