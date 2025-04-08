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

      document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("portfolio-carousel");
        const cards = container.querySelectorAll(".portfolio-card");
        const modals = document.querySelectorAll(".modal");
        const closeButtons = document.querySelectorAll(".close");
      
        // --------- Abrir modal al hacer clic en una tarjeta ---------
        cards.forEach(card => {
          card.addEventListener("click", () => {
            const index = card.getAttribute("data-index");
            const modal = document.querySelector(`.modal[data-index="${index}"]`);
            if (modal) modal.style.display = "flex";
          });
        });
      
        // --------- Cerrar modal con la "X" ---------
        closeButtons.forEach(btn => {
          btn.addEventListener("click", () => {
            btn.closest(".modal").style.display = "none";
          });
        });
      
        // --------- Cerrar modal haciendo clic fuera del contenido ---------
        window.addEventListener("click", e => {
          modals.forEach(modal => {
            if (e.target === modal) {
              modal.style.display = "none";
            }
          });
        });
      
        // --------- Centrar una tarjeta específica al cargar ---------
        const indexToCenter = 2; // Cambia el número por la tarjeta que quieras centrar (0 = primera)
      
        if (cards.length > indexToCenter) {
          const targetCard = cards[indexToCenter];
      
          const cardOffsetLeft = targetCard.offsetLeft;
          const containerWidth = container.clientWidth;
          const cardWidth = targetCard.clientWidth;
      
          const scrollTo = cardOffsetLeft - (containerWidth / 2) + (cardWidth / 2);
          container.scrollLeft = scrollTo;
        }
      });
      

      function scrollCarousel(direction) {
        const container = document.getElementById("portfolio-carousel");
        const scrollAmount = 320;

        if (direction === 'left') {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }

