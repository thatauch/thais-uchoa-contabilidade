/* =================================================================
   THAÍS UCHÔA ASSESSORIA — SCRIPT
   Menu mobile · header on scroll · reveal animations ·
   FAQ accordion · modais de serviço
   ================================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- ANO NO RODAPÉ ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- HEADER COM SOMBRA AO ROLAR ---------- */
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 12) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- MENU MOBILE ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  const closeMenu = () => {
    navMenu.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Fecha o menu mobile ao clicar em qualquer link interno
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ---------- SCROLL REVEAL (Intersection Observer) ---------- */
  const animatedEls = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    animatedEls.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: navegadores sem suporte simplesmente mostram tudo
    animatedEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- FAQ ACCORDION ---------- */
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');

    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';

      // Fecha os demais itens (comportamento de acordeão único)
      faqItems.forEach(other => {
        if (other !== item) {
          other.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq__answer').style.maxHeight = null;
        }
      });

      if (isExpanded) {
        question.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ---------- MODAIS DE SERVIÇO ---------- */
  const overlay = document.getElementById('modalOverlay');
  const serviceCards = document.querySelectorAll('[data-modal]');
  let lastFocusedEl = null;

  const openModal = (modalKey) => {
    const modal = document.getElementById('modal-' + modalKey);
    if (!modal) return;

    lastFocusedEl = document.activeElement;

    document.querySelectorAll('.modal').forEach(m => m.classList.remove('is-active'));
    modal.classList.add('is-active');
    overlay.classList.add('is-open');
    document.body.classList.add('modal-locked');

    const closeBtn = modal.querySelector('.modal__close');
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = () => {
    overlay.classList.remove('is-open');
    document.body.classList.remove('modal-locked');
    setTimeout(() => {
      document.querySelectorAll('.modal').forEach(m => m.classList.remove('is-active'));
    }, 200);
    if (lastFocusedEl) lastFocusedEl.focus();
  };

  serviceCards.forEach(card => {
    const key = card.getAttribute('data-modal');

    card.addEventListener('click', () => openModal(key));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(key);
      }
    });
  });

  document.querySelectorAll('.modal__close').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeModal();
    }
  });

});
