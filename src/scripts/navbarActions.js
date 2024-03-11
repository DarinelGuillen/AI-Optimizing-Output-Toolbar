window.addEventListener('load', () => {
  const buttons = document.querySelectorAll('.svg-button');

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

      const svg = button.querySelector('.svg-squash');
      if (svg) {
        svg.classList.remove('animate-svg');
        void svg.offsetWidth;
        setTimeout(() => {
          svg.classList.add('animate-svg');
        }, 10);
      }

      const dropdownMenu = button.closest('.group').querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.toggle('hidden');
      }
    });
  });

   // Agregar funcionalidad a cada opción del menú desplegable
  const menuOptions = document.querySelectorAll('.dropdown-menu li a');
  menuOptions.forEach((option, index) => {
    option.addEventListener('click', (event) => {
      event.preventDefault(); // Prevenir la navegación.

      // Encuentra el textarea donde se insertará el texto.
      const textarea = document.getElementById('prompt-textarea');
      if (!textarea) {
        console.warn('Textarea no encontrado');
        return;
      }

      // Agrega el texto correspondiente al botón clickeado al final del contenido actual del textarea.
      const existingText = textarea.value;
      const buttonText = `Click en botón ${index + 1}`;
      textarea.value = existingText + (existingText ? "\n" : "") + buttonText;

      // Asegúrate de que el textarea se ajuste al nuevo contenido, en caso de que su altura sea dinámica.
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    });
  });
});
