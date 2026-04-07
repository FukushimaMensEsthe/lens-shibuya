document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const header = document.getElementById('header');
  const btt = document.getElementById('btt');

  // Hamburger
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });
  nav.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  }));

  // Scroll: header shadow + back-to-top
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', scrollY > 40);
    btt.classList.toggle('visible', scrollY > 500);
  });

  // Fade-in observer
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll(
    '.concept-block, .coupon, .menu-primary, .menu-section, .therapist-grid,' +
    '.gallery-grid, .access-layout, .recruit-layout, .contact-cards'
  ).forEach(el => { el.classList.add('fade-in'); obs.observe(el); });
});
