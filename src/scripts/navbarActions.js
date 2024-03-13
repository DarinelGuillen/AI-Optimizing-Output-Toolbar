// Datos directamente definidos en el script
const data = [
  {
    "id": 1,
    "nombre": "dev",
    "opciones": [
      { "name": "option1", "value": "Ejemplo de valor a insertar en text area" },
      { "name": "option2", "value": "Insertado en text area" }
    ]
  },
  {
    "id": 2,
    "nombre": "button2",
    "opciones": [
      { "name": "option3", "value": "Valor para button2, opción 3" },
      { "name": "option4", "value": "Valor para button2, opción 4" },
      { "name": "option3", "value": "Valor para button2, opción 3" },
      { "name": "option4", "value": "Valor para button2, opción 4" },
      { "name": "option3", "value": "Valor para button2, opción 3" },
      { "name": "option4", "value": "Valor para button2, opción 4" },
      { "name": "option3", "value": "Valor para button2, opción 3" },
      { "name": "option4", "value": "Valor para button2, opción 4" },
      { "name": "option3", "value": "Valor para button2, opción 3" },
      { "name": "option4", "value": "Valor para button2, opción 4" },
      { "name": "option3", "value": "Valor para button2, opción 3" },
      { "name": "option4", "value": "Valor para button2, opción 4" }
    ]
  },
  {
    "id": 3,
    "nombre": "button3",
    "opciones": [
      { "name": "option5", "value": "Valor para button3, opción 5" },
      { "name": "option6", "value": "Valor para button3, opción 6" }
    ]
  }, {
    "id": 4,
    "nombre": "button3",
    "opciones": [
      { "name": "option7", "value": "Valor para button3, opción 7" },
      { "name": "option8", "value": "Valor para button3, opción 8" }
    ]
  },{
    "id": 5,
    "nombre": "dev",
    "opciones": [
      { "name": "option1", "value": "Ejemplo de valor a insertar en text area" },
      { "name": "option2", "value": "Insertado en text area" }
    ]
  }

];

window.addEventListener('load', () => {
  const navbarMenu = document.querySelector('.navbar_menu');
  const introductionText = 'Can you please produce an output with the following guidelines:\n';
  let optionCounter = 1; // Contador global para las opciones clickeadas
  // Seleccionar el botón existente que contiene el SVG
  const flipButton = document.getElementById('svg-flip-button');


  flipButton.addEventListener('click', () => {
    const svg = flipButton.querySelector('.flip-svg');
    svg.classList.add('flip-animate');

    console.log('Flip animation triggered');

    setTimeout(() => {
      svg.classList.remove('flip-animate');
    }, 600);
  });

  window.addEventListener('click', (event) => {
    if (!event.target.matches('.svg-button, .svg-button *')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.add('hidden');
      });
    }
  });


  data.forEach((item, index) => {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'relative group';
    groupDiv.id = `group-${item.id}`; // Asignar un ID único a cada grupo

    const button = document.createElement('button');
    button.className = 'focus:outline-none rounded-full gap-x-1 p-1 flex items-center justify-center svg-button';
    button.innerHTML = `<span>${item.nombre}</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" stroke="currentColor" fill="none" stroke-width="1.5">
      <circle cx="10" cy="10" r="4"/>
    </svg>`;
    // Removemos la clase svg-squash para controlar la animación con JavaScript

    const ul = document.createElement('ul');
    ul.className = 'dropdown-menu fixed hidden w-40 rounded-md shadow-lg mt-1.5 z-200';
    ul.id = `dropdown-${item.id}`; // Asignar un ID único a cada menú desplegable

    item.opciones.forEach(opcion => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.className = 'block px-4 py-2 hover:bg-gray-700';
      a.textContent = opcion.name;
      a.dataset.value = opcion.value;
      li.appendChild(a);
      ul.appendChild(li);
    });

    groupDiv.appendChild(button);
    groupDiv.appendChild(ul);
    navbarMenu.appendChild(groupDiv);

    // Evento para manejar la animación y el despliegue del menú
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const svg = button.querySelector('svg');
      svg.classList.add('animate-svg');
      setTimeout(() => svg.classList.remove('animate-svg'), 500); // Eliminar la clase para permitir reinicio de animación

      // Control para mostrar solo el menú asociado y ocultar los demás
      const currentDropdown = document.getElementById(`dropdown-${item.id}`);
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu.id === currentDropdown.id) {
          currentDropdown.classList.toggle('hidden');
        } else {
          menu.classList.add('hidden');
        }
      });
    });
  });

  // Lógica para manejar clics en opciones del menú, sin cambios
  document.querySelectorAll('.dropdown-menu li a').forEach((option) => {
    option.addEventListener('click', (event) => {
      event.preventDefault();
      const textarea = document.getElementById('prompt-textarea');

      // Revisa si el textarea existe
      if (!textarea) {
        console.warn('Textarea no encontrado');
        return;
      }

      // Agrega la opción clickeada al textarea
      const valueToInsert = option.dataset.value;
      if (!textarea.value.includes(valueToInsert)) { // Verifica que la opción no haya sido ya agregada
        textarea.value += `${optionCounter++}) ${valueToInsert}\n`;
      }

      // Ajusta la altura del textarea
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;

      // Cierra el menú desplegable después de seleccionar una opción
      const dropdownMenu = option.closest('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.add('hidden');
      }
    });
  });
});
