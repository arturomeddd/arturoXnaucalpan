document.addEventListener('DOMContentLoaded', function() {
  
  const problemForm = document.getElementById('problemForm');
  const telefonoWhatsApp = '525539064028';

  if (problemForm) {
    problemForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Recoger variables de los campos
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const problematica = document.getElementById('problematica-input').value.trim();

      // Formato de texto enviado a WhatsApp
      const mensajeWA = `¡Hola! Mi nombre es *${nombre}* (%0A📧 Email: ${email})%0A%0A*Cuéntame sobre tu problemática:*%0A${encodeURIComponent(problematica)}`;

      // Redirección
      window.open(`https://wa.me/${telefonoWhatsApp}?text=${mensajeWA}`, '_blank');
    });
  }

});
