// contentScript.js - Código corregido

// Carga dinámica de Tailwind CSS
const tailwindLink = document.createElement('link');
tailwindLink.href = chrome.runtime.getURL('../styles/tailwind.css');
tailwindLink.href = chrome.runtime.getURL('../styles/tailwind.css');
tailwindLink.type = 'text/css';
tailwindLink.rel = 'stylesheet';
document.head.appendChild(tailwindLink);

// Carga dinámica de HTML
fetch(chrome.runtime.getURL('navbar.html'))
.then(response => response.text())
.then(data => {
  const div = document.createElement('div');
  div.innerHTML = data;
  document.body.insertBefore(div, document.body.firstChild); // Inserta el navbar al inicio del body

  // Carga dinámica de JS
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('./navbarActions.js');
  document.body.appendChild(script);
});