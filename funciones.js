// Variable para controlar el menú móvil
let menuVisible = false;

// Función para mostrar/ocultar el menú
document.getElementById("menu-icon").addEventListener("click", function() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
    menuVisible = !menuVisible;
});

// Función para ocultar el menú una vez que se selecciona una opción
const links = document.querySelectorAll(".nav-link");
links.forEach(link => {
    link.addEventListener("click", function() {
        document.getElementById("nav").classList.remove("responsive");
        menuVisible = false;
    });
});

// Función para cambiar el mensaje del botón (Simulación de envío)
function cambiamensaje(){
    const btn = document.getElementById("submitBtn");
    const originalText = btn.innerText;
    
    btn.innerText = "¡Enviado!";
    btn.style.backgroundColor = "#10b981"; // Verde éxito
    
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = ""; // Volver al color original
        document.getElementById("contactForm").reset();
    }, 3000);
}

// Función para cambiar modo oscuro/claro
function toggleTema() {
    document.body.classList.toggle('oscuro');
    
    // Opcional: Cambiar el icono del botón dependiendo del modo
    const btnIcon = document.querySelector(".boton-tema i");
    if (document.body.classList.contains("oscuro")) {
        btnIcon.classList.remove("fa-moon");
        btnIcon.classList.add("fa-sun");
    } else {
        btnIcon.classList.remove("fa-sun");
        btnIcon.classList.add("fa-moon");
    }
}