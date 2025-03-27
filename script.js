document.addEventListener("DOMContentLoaded", function () {
    // Agregar efecto a los botones al hacer clic
    let botones = document.querySelectorAll(".boton-receta");

    botones.forEach((boton) => {
        boton.addEventListener("click", function () {
            alert(Cargando la receta de ${boton.innerText}...);
        });
    });

    // Animación de entrada a la página
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = "1";
    }, 100);
});