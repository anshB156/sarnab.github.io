
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


function viewProject(name) {
  alert(`My ${name} files got completely destroyed due to a technical issue but I will again work on it(its a game project) after exam!`);
}
