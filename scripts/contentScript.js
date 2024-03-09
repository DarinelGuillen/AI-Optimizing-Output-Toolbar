// Crea un nuevo elemento div que contendrá el navbar
var navbar = document.createElement('div');
navbar.style.width = '100%';
navbar.style.backgroundColor = '#4CAF50';
navbar.style.color = 'white';
navbar.style.padding = '10px 0';
navbar.style.textAlign = 'center';
navbar.style.position = 'fixed';
navbar.style.top = '0';
navbar.style.left = '0';
navbar.style.zIndex = '1000';
navbar.innerHTML = '<a href="http://certification.googleapps.com/" style="color: white; text-decoration: none; font-size: 20px;">G Suite Certification</a>';

// Inserta el navbar en el body de la página, al inicio
document.body.insertBefore(navbar, document.body.firstChild);

// Ajusta el padding del body para evitar que el navbar tape el contenido de la página
document.body.style.paddingTop = '50px';
