/* ═══════════════════════════════════════════════
   main.js — карусель, фільтри, пошук
   STEM-лабораторія педагогічних практик
   ═══════════════════════════════════════════════ */

/* ── Карусель ─────────────────────────────────── */
(function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots   = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;

  let current = 0;
  const total = slides.length;

  window.goSlide = function(n) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = ((n % total) + total) % total;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  };

  setInterval(() => goSlide(current + 1), 4500);
})();

/* ── Фільтри та пошук (index.html) ───────────── */
(function initFilters() {
  const searchInput = document.getElementById('searchInput');
  const grid        = document.getElementById('cardsGrid');
  const emptyState  = document.getElementById('emptyState');
  const resultsLbl  = document.getElementById('resultsLabel');
  if (!searchInput || !grid) return;

  let activeFilter = 'all';

  window.setFilter = function(cat, btn) {
    activeFilter = cat;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
  };

  searchInput.addEventListener('input', applyFilters);

  function applyFilters() {
    const q     = searchInput.value.toLowerCase().trim();
    const cards = grid.querySelectorAll('.card');
    let visible = 0;

    cards.forEach(card => {
      const cats     = (card.dataset.cat || '').split(' ');
      const text     = (card.dataset.text || '') + ' ' + card.textContent.toLowerCase();
      const featured = card.classList.contains('card-featured');

      const catOk  = activeFilter === 'all' || cats.includes(activeFilter);
      const featOk = !featured || ['all','3d','ai'].includes(activeFilter);
      const qOk    = !q || text.includes(q);
      const show   = catOk && featOk && qOk;

      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    if (emptyState) emptyState.style.display = visible === 0 ? '' : 'none';
    if (resultsLbl) {
      const total = grid.querySelectorAll('.card').length;
      resultsLbl.textContent = visible === total
        ? `Заняття лабораторії · ${total} проєктів`
        : `Знайдено: ${visible} ${visible === 1 ? 'проєкт' : visible < 5 ? 'проєкти' : 'проєктів'}`;
    }
  }
})();

/* ── Плавна прокрутка до секцій ──────────────── */
window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

/* ── Анімація прогрес-барів рефлексії ────────── */
(function animateBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.refl-bar-fill, .refl-pct-fill').forEach(bar => {
          const w = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => { bar.style.transition = 'width .7s ease'; bar.style.width = w; }, 80);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.refl-wrap').forEach(el => observer.observe(el));
})();
