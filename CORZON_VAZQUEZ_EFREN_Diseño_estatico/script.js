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
  <a href="#carrito" id="cart-icon">
    Carrito <i class="fa-solid fa-cart-shopping"></i>
    <span id="cart-count" class="cart-count">0</span>
  </a>
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

/// Inicializar el contador del carrito
let cartCount = 0;

// Función para actualizar el contador
function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  if (cartCount > 0) {
    cartCountElement.textContent = cartCount;
    cartCountElement.style.display = "inline-block"; // Mostrar el contador
  } else {
    cartCountElement.style.display = "none"; // Ocultar el contador
  }
}

// Función para mostrar la modal con los detalles del producto
function showModal(image, title, description) {
  document.getElementById("modal-image").src = image;
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-description").textContent = description;

  const modal = document.getElementById("product-modal");
  modal.classList.add("active");

  // Añadir el EventListener al botón "Comprar" dentro de la modal
  const modalBuyButton = document.querySelector(".modal-buy");
  modalBuyButton.onclick = () => {
    cartCount++; // Incrementar el contador
    updateCartCount(); // Actualizar el número en el DOM
  };
}

// Función para cerrar la modal
function closeModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.remove("active");
}

// Cerrar la modal al hacer clic fuera de la ventana modal
document.getElementById("product-modal").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
});

// Event Listener para todos los botones "Comprar"
document.querySelectorAll(".buy-button").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++; // Incrementar el contador
    updateCartCount(); // Actualizar el número en el DOM
  });
});

// Ocultar el contador al inicio
updateCartCount();
