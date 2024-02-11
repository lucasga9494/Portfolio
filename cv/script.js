document.addEventListener('DOMContentLoaded', function () {
	var popup = document.getElementById('popup');
	var closeBtn = document.getElementById('closeBtn');
	var contactForm = document.getElementById('contactForm');
  
	closeBtn.addEventListener('click', function () {
	  popup.style.display = 'none';
	});
  
	contactForm.addEventListener('submit', function (event) {
	  event.preventDefault(); // Evitar que el formulario se envíe
  
	  // Aquí iría tu lógica para enviar el formulario
  
	  // Mostrar la ventana emergente después de enviar el formulario
	  mostrarVentanaEmergente();
	});
  });
  
  function mostrarVentanaEmergente() {
	var popup = document.getElementById('popup');
	popup.style.display = 'block';
  }