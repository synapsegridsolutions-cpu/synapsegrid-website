/* ============ Data & AI Page Interactive Logic ============ */
const QA = [
    ['Which region grew fastest last quarter?', 'West grew fastest at 18% quarter on quarter, driven by repeat orders.', [40, 52, 48, 72], 'sales_warehouse.orders'],
    ['Which customers are at risk of churning?', '42 accounts show churn risk above 60%. Most have had a support ticket open for over 10 days.', null, 'churn_model_v3'],
    ['Summarise invoices overdue by 60+ days', '₹18.6 L across 23 invoices. Three customers make up 61% of the total.', [70, 45, 30, 22, 18], 'finance.receivables']
];

window.pageHero = function() {
    const ch = document.getElementById('chart');
    if (ch) ch.classList.add('on');
    document.querySelectorAll('.kpi [data-n]').forEach(countUp);
};

window.HOOK.chat = async function(el) {
    const body = el.querySelector('.cbody');
    if (!body) return;
    for (let q = 0; ; q = (q + 1) % QA.length) {
        const [ask, ans, bars, src] = QA[q];
        body.innerHTML = `<div class="msg u">${ask}</div>`; await sleep(700);
        const m = document.createElement('div'); m.className = 'msg a'; m.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>'; body.append(m);
        await sleep(1300);
        m.innerHTML = '<span class="txt"></span>'; const t = m.querySelector('.txt');
        for (const w of ans.split(' ')) { t.textContent += w + ' '; await sleep(70); }
        if (bars) m.insertAdjacentHTML('beforeend', `<div class="mini">${bars.map((h, k) => `<i style="--h:${h}%;--k:${k}"></i>`).join('')}</div>`);
        m.insertAdjacentHTML('beforeend', `<span class="src">Source: ${src}</span>`);
        await sleep(4200);
    }
};
