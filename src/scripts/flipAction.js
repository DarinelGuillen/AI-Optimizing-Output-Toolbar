// Asegúrate de que el DOM esté completamente cargado antes de intentar asignar eventos a los elementos.
document.addEventListener('DOMContentLoaded', () => {
  const flipButton = document.getElementById('svg-flip-button');
  const flipIcon = flipButton.querySelector('.flip-svg');
  // console.log("flipButton script loaded");

  flipButton.addEventListener('click', () => {
    flipIcon.classList.toggle('flip-animate'); // Utilizamos toggle para añadir o remover la clase

    // Mostrar alert después de que la animación comienza
    alert('Flip animation triggered');

    // Remover la clase después de que la animación termine para permitir una nueva animación en el siguiente clic
    setTimeout(() => {
      flipIcon.classList.remove('flip-animate');
    }, 600); // El tiempo debe coincidir con la duración de la animación
  });
});
