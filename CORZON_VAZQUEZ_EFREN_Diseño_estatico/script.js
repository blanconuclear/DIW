document.addEventListener("DOMContentLoaded", () => {
  // Contenido del header como cadena de texto
  const headerContent = `
    <div class="logo">
      <a href="index.html">
        <img src="img/logo_bueno.png" alt="Logo El Tablero Mágico" />
      </a>
    </div>
    <button class="menu-toggle" id="menu-toggle">
      <i class="fas fa-bars"></i>
    </button>
    <nav>
      <ul id="menu">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="about.html">Acerca de</a></li>
        <li><a href="contact.html">Contacto</a></li>
        <li>
          <a href="#carrito">Carrito <i class="fa-solid fa-cart-shopping"></i></a>
        </li>
      </ul>
    </nav>
  `;

  // Contenido del footer como cadena de texto
  const footerContent = `
    <ul class="social-icons">
      <li>
        <a href="#"><i class="fab fa-facebook-f"></i> Facebook</a>
      </li>
      <li>
        <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> Instagram</a>
      </li>
    </ul>
    <br />
    <p>Contacto: <a href="#">info@eltableromagico.com</a></p>
  `;

  // Inserta el contenido en los elementos correspondientes del DOM
  document.getElementById("header").innerHTML = headerContent;
  document.getElementById("footer").innerHTML = footerContent;

  // Agregar funcionalidad al menú hamburguesa
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  } else {
    console.error("No se encontraron los elementos del menú en el DOM.");
  }
});
