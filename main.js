window.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia al formulario
    var form = document.querySelector('form');
  
    // Agregar evento de envío al formulario
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
  
      // Obtener los valores de los campos del formulario
      var nombre = document.querySelector('input[name="nombre"]').value;
      var email = document.querySelector('input[name="email"]').value;
      var mensaje = document.querySelector('textarea[name="mensaje"]').value;
  
      // Validar los campos del formulario
      if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos del formulario.');
        return;
      }
  
      // Para mostrar el mensaje emergente:
      var popup = document.createElement('div');
      popup.className = 'popup';
  
      var popupContent = document.createElement('div');
      popupContent.className = 'popup-content';
  
      var popupMessage = document.createElement('p');
      popupMessage.className = 'popup-message';
      popupMessage.textContent = 'El formulario se ha enviado correctamente.';
      popupContent.appendChild(popupMessage);
  
      var popupButtons = document.createElement('div');
      popupButtons.className = 'popup-buttons';
      var closeButton = document.createElement('button');
      closeButton.textContent = 'Cerrar';
      popupButtons.appendChild(closeButton);
  
      popupContent.appendChild(popupButtons);
      popup.appendChild(popupContent);
      document.body.appendChild(popup);
  
      // Ocultar el mensaje emergente después de 3 segundos
      setTimeout(function () {
        document.body.removeChild(popup);
      }, 3000);
  
      form.reset(); // Limpiar los campos del formulario
    });
  
    // Cerrar el popup al hacer clic en el botón de cerrar
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('popup-buttons') || event.target.classList.contains('popup-buttons-close')) {
        var popup = event.target.closest('.popup');
        if (popup) {
          document.body.removeChild(popup);
        }
      }
    });
  });
  
  
  