const searchInput = document.getElementById('siteSearch');
const cards = [...document.querySelectorAll('.feature-card')];
const emptyState = document.getElementById('emptyState');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLocaleLowerCase('ru');
  let visibleCount = 0;
  cards.forEach((card) => {
    const matches = card.dataset.search.toLocaleLowerCase('ru').includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });
  emptyState.hidden = visibleCount !== 0;
});

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});