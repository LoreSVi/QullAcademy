// Obtén el hash de la URL actual
var hash = window.location.hash;

// Verifica si hay un hash en la URL
if (hash) {
    // Si hay un hash, haz algo con él
    console.log('El hash de la URL es: ' + hash);

    // Puedes usar el hash para activar el carrusel o realizar otras acciones
    if (hash === '#basic1' || hash === '#basic') {
        // Activa el carrusel o realiza alguna otra acción
        document.querySelector("#basic1").classList.add("active");
    } else if (hash === '#basic2') {
        document.querySelector("#basic2").classList.add("active");
    } else if (hash === '#basic3') {
        document.querySelector("#basic3").classList.add("active");
    } else if (hash === '#advanced1' || hash === '#advanced') {
        // Activa el carrusel o realiza alguna otra acción
        document.querySelector("#advanced1").classList.add("active");
    } else if (hash === '#advanced2') {
        document.querySelector("#advanced2").classList.add("active");
    } else if (hash === '#workshop1' || hash === '#workshop') {
        document.querySelector("#workshop1").classList.add("active");
    } else if (hash === '#workshop2') {
        document.querySelector("#workshop2").classList.add("active");
    }
}
 // Inicializa el carrusel
 var carousel = new bootstrap.Carousel(
    document.querySelector("#tarjetaCarousel"),
    {
      interval: false, // Esto evita que el carrusel se mueva automáticamente
    }
  );