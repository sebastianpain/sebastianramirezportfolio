
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Cambiar Modo';
toggleButton.classList.add('toggle-button');


// Función para cambiar el modo
function toggleMode() {
  document.body.classList.toggle('dark-mode');
  document.body.style.backgroundImage = 'none';
}

toggleButton.addEventListener('click', toggleMode);
document.body.appendChild(toggleButton);



const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
};

// Llamar a la función cuando se hace clic en un enlace de navegación
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('href').substring(1);
    scrollToSection(sectionId);
  });
});