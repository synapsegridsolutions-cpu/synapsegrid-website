/* ============ Cloud & DevOps Page Interactive Logic ============ */
const PIPE = [
    ['branch', 'Commit', 'git push main'],
    ['server', 'Build', 'docker build'],
    ['check', 'Test', '312 tests'],
    ['shield', 'Security scan', 'deps + image'],
    ['rocket', 'Deploy', 'blue / green']
];
const PLOG = [
    'webhook received from main',
    'building image sg/app:1.4.2',
    'running unit + integration tests',
    'scanning dependencies and image',
    'shifting traffic to new release'
];

window.pageHero = function() {
    const t = document.getElementById('topo'), h = document.getElementById('hud');
    if (!t || !h) return;
    setInterval(() => {
        const up = t.classList.toggle('up');
        h.textContent = up ? 'autoscaling 3 → 5 replicas' : 'replicas 3 · p95 ' + (70 + Math.random() * 25 | 0) + ' ms';
    }, 4200);
};

window.HOOK.pipe = function(el) {
    const st = [...el.querySelectorAll('.stg')], bar = el.querySelector('.pbar i'), log = el.querySelector('.plog span'), btn = el.querySelector('button');
    const secs = [6, 48, 74, 31, 55]; let busy = false;
    const run = async () => {
        if (busy) return; busy = true; if (bar) bar.style.width = '0';
        st.forEach((s, i) => { s.className = 'stg'; const sm = s.querySelector('small'); if (sm) sm.textContent = PIPE[i][2]; });
        let total = 0;
        for (let i = 0; i < st.length; i++) {
            st[i].classList.add('run'); const sm = st[i].querySelector('small'); if (sm) sm.textContent = 'running…'; if (log) log.textContent = '→ ' + PLOG[i];
            await sleep(900 + Math.random() * 600);
            st[i].classList.replace('run', 'done'); total += secs[i];
            if (sm) sm.textContent = '✓ ' + secs[i] + 's'; if (bar) bar.style.width = (i + 1) / st.length * 100 + '%';
        }
        if (log) log.textContent = `✓ deployed to production in ${Math.floor(total / 60)}m ${total % 60}s · zero downtime`;
        busy = false;
    };
    if (btn) btn.onclick = run;
    run();
};

window.HOOK.cost = function(el) {
    const r = document.getElementById('cr'), mid = (CFG.cloudSaving[0] + CFG.cloudSaving[1]) / 2;
    if (!r) return;
    const upd = () => {
        const v = +r.value;
        const cv = document.getElementById('cv'); if (cv) cv.textContent = lakh(v);
        const cs = document.getElementById('cs'); if (cs) cs.textContent = `${lakh(v * CFG.cloudSaving[0])} – ${lakh(v * CFG.cloudSaving[1])}`;
        const cb = document.getElementById('cb'); if (cb) cb.style.width = (1 - mid) * 100 + '%';
    };
    r.addEventListener('input', upd);
    upd();
};
