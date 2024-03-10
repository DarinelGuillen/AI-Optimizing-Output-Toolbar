// En navbarActions.js, agrega la lógica para manejar la interacción de los botones
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.svg-button'); // Si tienes múltiples botones

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const svg = button.querySelector('.svg-squash');

      // Reinicia la animación
      svg.classList.remove('animate-svg');
      setTimeout(() => svg.classList.add('animate-svg'), 0);

      // Toggle del menú desplegable
      const dropdownMenu = button.closest('.group').querySelector('.dropdown-menu');
      dropdownMenu.classList.toggle('hidden');
      alert("Clicked button")
    });
  });
});
