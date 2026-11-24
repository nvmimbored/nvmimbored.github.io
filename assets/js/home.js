// Sākumlapa: Facebook plūsmas mērogošana un šodienas datums.
document.addEventListener('DOMContentLoaded', () => {
  // Facebook plūsma ir fiksēti 500 px plata — mērogojam to, lai aizpildītu kolonnu.
  const FB_W = 500, FB_H = 900;
  const wrap = document.querySelector('.fb-stretch-wrap');
  const inner = document.querySelector('.fb-stretch-inner');
  const scaleFb = () => {
    if (!wrap || !inner) return;
    const scale = wrap.offsetWidth / FB_W;
    inner.style.transform = 'scale(' + scale + ')';
    inner.style.height = FB_H + 'px';
    wrap.style.height = Math.ceil(FB_H * scale) + 'px';
  };
  scaleFb();
  window.addEventListener('resize', scaleFb);

  // Datuma logrīks
  const months = ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'];
  const weekdays = ['Svētdiena', 'Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena'];
  const now = new Date();
  const set = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };
  set('dw-year', now.getFullYear());
  set('dw-day', now.getDate());
  set('dw-month', months[now.getMonth()]);
  set('dw-weekday', weekdays[now.getDay()]);
});
