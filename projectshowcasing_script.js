// ——— Fade-In on Scroll using IntersectionObserver ———
const cards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(c => observer.observe(c));

// ——— Simple Filter Logic ———
const filters = document.querySelectorAll('.filters button');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.dataset.filter;
    cards.forEach(card => {
      card.style.display =
        (type === 'all' || card.dataset.type === type) ? 'grid' : 'none';
    });
  });
});

// ——— Placeholder for “View Details” ———
function viewProject(name) {
  alert(`Details for ${name} coming soon!`);
}
