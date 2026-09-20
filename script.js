document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const problemForm = document.getElementById('problemForm');

  // 1. Control del Menú Hamburguesa para Móviles
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Cierra el menú al presionar una opción
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      });
    });
  }

  // 2. Envío del Formulario de Reporte Ciudadano a WhatsApp
  if (problemForm) {
    problemForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombreInput = document.getElementById('nombre');
      const coloniaInput = document.getElementById('colonia');
      const categoriaSelect = document.getElementById('categoria');
      const problematicaInput = document.getElementById('problematica-input');

      // Validar que los campos existan en el DOM
      if (!nombreInput || !coloniaInput || !categoriaSelect || !problematicaInput) {
        console.error('Error: No se encontraron todos los campos del formulario.');
        return;
      }

      const nombre = nombreInput.value.trim();
      const colonia = coloniaInput.value.trim();
      const categoria = categoriaSelect.value;
      const problematica = problematicaInput.value.trim();

      // Construcción del mensaje estructurado
      const mensajeWhatsApp = 
        `Hola Arturo, solicito apoyo para un reporte ciudadano en Naucalpan:\n\n` +
        `👤 *Nombre:* ${nombre}\n` +
        `📍 *Colonia/Localidad:* ${colonia}\n` +
        `📂 *Categoría:* ${categoria}\n\n` +
        `📝 *Detalles de la problemática:* ${problematica}\n\n` +
        `_(Te adjuntaré fotografías/evidencia en este chat)_`;

      // Generación del enlace oficial de WhatsApp API
      const urlWhatsApp = `https://wa.me/525539064028?text=${encodeURIComponent(mensajeWhatsApp)}`;

      // Redirección directa en la misma pestaña para evitar bloqueos de pop-ups
      window.location.href = urlWhatsApp;
    });
  }
});
