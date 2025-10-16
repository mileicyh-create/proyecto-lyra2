document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro-container");
    const video = document.getElementById("intro-video");
    const enterBtn = document.getElementById("enter-btn");
    const mainContent = document.getElementById("main-content");
    const nextBtns = document.querySelectorAll(".next-btn");

    // Mostrar el contenido principal al terminar el video o al hacer clic en el botón
    video.addEventListener("ended", () => {
        intro.style.display = "none";
        mainContent.style.display = "block";
    });

    enterBtn.addEventListener("click", () => {
        intro.style.display = "none";
        mainContent.style.display = "block";
    });

    // Navegación entre escenas
    nextBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const nextId = btn.getAttribute("data-next");
            document.querySelectorAll(".scene").forEach(scene => scene.classList.remove("active"));
            document.getElementById(nextId).classList.add("active");
        });
    });
});

