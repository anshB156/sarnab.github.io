// script_project#2.js
const sections = document.querySelectorAll('section');
function revealOnScroll() {
sections.forEach(section => {
const top = section.getBoundingClientRect().top;
if (top < window.innerHeight - 150) {
section.classList.add('visible');
}
});
}
window.addEventListener('scroll', revealOnScroll);
