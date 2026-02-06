// Aquí puedes añadir scroll suave, animaciones, etc.
// Ejemplo: scroll suave al hacer clic en el menú

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }
  });
});
