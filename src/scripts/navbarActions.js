// En navbarActions.js
window.addEventListener('load', () => {
  const buttons = document.querySelectorAll('.svg-button');
  console.log('Botones encontrados: ', buttons.length);

  document.addEventListener('click', (event) => {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    let targetElement = event.target;

    do {
      if (targetElement == document) break;
      dropdownMenus.forEach(menu => {
        if (menu === targetElement || buttons[0] === targetElement) {
          return;
        }
      });
      dropdownMenus.forEach(menu => menu.classList.add('hidden'));
      break;
    } while (targetElement = targetElement.parentNode);
  });

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      console.log('Clic en botón');

      const svg = button.querySelector('.svg-squash');
      if (svg) {
        // Remover la clase animate-svg y luego agregarla nuevamente con un retraso
        svg.classList.remove('animate-svg');
        // Forzar reflow/repaint
        void svg.offsetWidth;
        // Agregar un ligero retraso antes de reasignar la clase puede ayudar en ciertos navegadores
        setTimeout(() => {
          svg.classList.add('animate-svg');
        }, 10);
      }

      const dropdownMenu = button.closest('.group').querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.toggle('hidden');
        console.log(dropdownMenu.classList.contains('hidden') ? 'Ocultando menú' : 'Mostrando menú');
      }
    });
  });
});
