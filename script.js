/* ========================================
   メンズエステ渋谷 レンズ - Script
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Hamburger Menu ---
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu on link click
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // --- Header scroll effect ---
  const header = document.getElementById('header');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header shadow
    header.classList.toggle('scrolled', scrollY > 50);

    // Back to top button
    backToTop.classList.toggle('visible', scrollY > 600);
  });

  // --- Scroll animations ---
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add fade-in class to sections
  document.querySelectorAll(
    '.section-header, .concept-grid, .feature-card, .menu-card, ' +
    '.therapist-card, .gallery-item, .blog-card, .access-grid, ' +
    '.recruit-message, .recruit-details, .contact-card, .contact-form-area'
  ).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // --- Stagger animations for grid items ---
  document.querySelectorAll('.features-grid, .menu-grid, .therapist-grid, .blog-grid, .gallery-grid').forEach(grid => {
    const children = grid.children;
    Array.from(children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  // --- Contact form (basic validation feedback) ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('お問い合わせありがとうございます。\n現在フォーム送信機能は準備中です。\nLINEまたはお電話にてお問い合わせください。');
    });
  }

  // --- Active nav highlight ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

});
