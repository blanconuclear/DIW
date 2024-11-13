// Función simple para cargar un archivo HTML en un contenedor
const loadHTML = (elementId, filePath) => {
  return fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      // Recargar iconos de FontAwesome si están presentes
      if (window.FontAwesome) {
        window.FontAwesome.dom.i2svg();
      }
    })
    .catch((error) => {
      console.error(`Error al cargar ${filePath}: ${error}`);
    });
};

// Cargar header y footer y agregar evento al menú después de cargar el header
document.addEventListener("DOMContentLoaded", async () => {
  await loadHTML("header", "header.html"); // Cargar el header primero
  await loadHTML("footer", "footer.html"); // Luego cargar el footer

  // Ahora que el header está cargado, agregar el evento al menú hamburguesa
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
