// contentScript.js - Código corregido

// Carga dinámica de Tailwind CSS
const tailwindLink = document.createElement('link');
tailwindLink.href = chrome.runtime.getURL('../styles/tailwind.css');
tailwindLink.type = 'text/css';
tailwindLink.rel = 'stylesheet';
document.head.appendChild(tailwindLink);

// Carga dinámica de HTML
// fetch(chrome.runtime.getURL('navbar.html'))
// Suponiendo que ahora navbar.html se encuentra en la carpeta main dentro de src
fetch(chrome.runtime.getURL('main/navbar.html'))
.then(response => response.text())
.then(data => {
  const div = document.createElement('div');
  div.innerHTML = data;
  document.body.insertBefore(div, document.body.firstChild); // Inserta el navbar al inicio del body

  // Asegúrate de actualizar la ruta para cargar scripts y estilos relacionados correctamente
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('scripts/navbarActions.js');
  document.body.appendChild(script);
});
