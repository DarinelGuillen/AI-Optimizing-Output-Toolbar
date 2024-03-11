// En navbarActions.js
window.addEventListener('load', () => {
  const buttons = document.querySelectorAll('.svg-button');
  console.log('Load event, botones encontrados:', buttons.length); // Log para depurar

  if (buttons.length === 0) {
    console.warn('No se encontraron botones con la clase .svg-button');
  }

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Previene el comportamiento por defecto si es necesario
      console.log('Botón clickeado'); // Log para depurar

      const svg = button.querySelector('.svg-squash');
      if (!svg) {
        console.warn('No se encontró SVG con la clase .svg-squash dentro del botón');
        return; // Detiene la ejecución si no hay SVG
      }

      console.log('SVG antes de animación:', svg); // Log para depurar

      // Reinicia la animación
      svg.classList.remove('animate-svg');
      void svg.offsetWidth;
      svg.classList.add('animate-svg');

      console.log('SVG después de animación:', svg); // Log para depurar

      // Toggle del menú desplegable
      const dropdownMenu = button.closest('.group').querySelector('.dropdown-menu');
      if (!dropdownMenu) {
        console.warn('No se encontró menú desplegable con la clase .dropdown-menu');
        return; // Detiene la ejecución si no hay menú desplegable
      }

      dropdownMenu.classList.toggle('hidden');
      console.log(dropdownMenu.classList.contains('hidden') ? 'Menú desplegable ocultado' : 'Menú desplegable mostrado'); // Log para depurar
    });
  });
});
