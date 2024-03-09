// contentScript.js - Código modificado para corregir rutas

// Carga dinámica de Tailwind CSS
const tailwindLink = document.createElement('link');
tailwindLink.href = chrome.runtime.getURL('src/styles/tailwind.css'); // Ruta corregida
tailwindLink.type = 'text/css';
tailwindLink.rel = 'stylesheet';
document.head.appendChild(tailwindLink);

// Carga dinámica de HTML
fetch(chrome.runtime.getURL('src/navbar.html')) // Ruta corregida
  .then(response => response.text())
  .then(data => {
    const div = document.createElement('div');
    div.innerHTML = data;
    document.body.insertBefore(div, document.body.firstChild);

    // Carga dinámica de JS
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('src/scripts/navbarActions.js'); // Ruta corregida
    document.body.appendChild(script);
});
