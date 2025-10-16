<script>
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("mainContent");
  const enterButton = document.getElementById("enterButton");
  const introVideo = document.getElementById("introVideo");

  // Cuando termina el video, mostrar el botón
  introVideo.onended = () => {
    enterButton.style.display = "block";
  };

  // Al hacer clic en el botón, ocultar intro y mostrar la página
  enterButton.addEventListener("click", () => {
    intro.style.display = "none";
    mainContent.style.display = "block";
  });
</script>
