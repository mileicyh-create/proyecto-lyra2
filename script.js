document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("main-content");
  const enterBtn = document.getElementById("enter-btn");

  // Al hacer clic en "Quiero entrar"
  enterBtn.addEventListener("click", () => {
    intro.classList.add("fade-out");
    setTimeout(() => {
      intro.style.display = "none";
      mainContent.classList.remove("hidden");
    }, 1500); // tiempo del fade
  });
});
