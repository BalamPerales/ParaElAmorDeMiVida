function iniciarClase() {
    alert("Hola amor, ¡bienvenida a tu primera clase de desarrollo web! Estoy emocionado por esta nueva aventura juntos. Te amo.");
    // Puedes agregar más contenido y actividades para la clase aquí
  }
  
  function mostrarSorpresa() {
    lanzarConfeti();
    alert("¡Sorpresa amooor! 🎉 Esta página ha sido creada especialmente para ti, te amo mucho amor mío.");
  }
  
  function lanzarConfeti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
  
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti ' + colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = Math.random() * 2 + 1 + 's';
      confetti.style.animationDelay = Math.random() * 2 + 's';
      confettiContainer.appendChild(confetti);
    }
  }

  function aceptarPropuesta() {
    alert("¡Perfecto! Estoy emocionado por esta nueva aventura juntos, te amo con el alma, gracias por todo corazón.");
  }
  
  function rechazarPropuesta() {
    const respuesta = confirm("¡Oh no! 😢, lo lamento corazón, pero no te preocupes tengo una sorpresa para ti...");
  
    if (respuesta) {
      window.location.href = "sorpresa.html";
    } else {
      alert("Gracias por todo corazón, eres mí vida.");
    }
  }
  