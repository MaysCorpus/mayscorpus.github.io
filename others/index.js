
// May's Corpus — navigation enhancement.
(() => {
  const navLinks = Array.from(
    document.querySelectorAll(".site-nav a")
  );

  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || sections.length === 0) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, {
    rootMargin: "-20% 0px -65% 0px",
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));

const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

button.addEventListener('click', () => {

  button.classList.toggle('active');
  nav.classList.toggle('active');

  const expanded =
    button.classList.contains('active');

  button.setAttribute(
    'aria-expanded',
    expanded
  );

});

document
  .querySelectorAll('.site-nav a')
  .forEach(link => {

    link.addEventListener('click', () => {

      button.classList.remove('active');
      nav.classList.remove('active');

      button.setAttribute(
        'aria-expanded',
        'false'
      );

    });

});

})();
