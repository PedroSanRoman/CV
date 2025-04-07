      // Funcionalidad para el banner de cookies
      document.addEventListener('DOMContentLoaded', function() {
        // Crear banner de cookies
        const cookieBanner = document.createElement('div');
        cookieBanner.className = 'cookie-banner';
        cookieBanner.innerHTML = `
          <div class="cookie-text">
            <p>Este sitio utiliza cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra política de cookies.</p>
          </div>
          <div class="cookie-buttons">
            <button class="cookie-btn accept-btn">Aceptar</button>
            <button class="cookie-btn reject-btn">Rechazar</button>
          </div>
        `;
        
        document.body.appendChild(cookieBanner);
        
        // Comprobar si ya se ha respondido a las cookies
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        
        if (cookiesAccepted === null) {
          // Mostrar el banner después de un pequeño retraso
          setTimeout(() => {
            cookieBanner.classList.add('show');
          }, 1000);
        }
        
        // Event listeners para los botones
        const acceptBtn = cookieBanner.querySelector('.accept-btn');
        const rejectBtn = cookieBanner.querySelector('.reject-btn');
        
        acceptBtn.addEventListener('click', function() {
          localStorage.setItem('cookiesAccepted', 'true');
          cookieBanner.classList.remove('show');
        });
        
        rejectBtn.addEventListener('click', function() {
          localStorage.setItem('cookiesAccepted', 'false');
          cookieBanner.classList.remove('show');
        });
      });

      // Botones Ver más
      const buttons = document.querySelectorAll('.toggle-button');

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const moreText = button.previousElementSibling;
          const isHidden = moreText.classList.contains('hidden');
      
          moreText.classList.toggle('hidden');
          button.textContent = isHidden ? 'Ver menos' : 'Ver más';
        });
      });
    