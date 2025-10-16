document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const introContainer = document.getElementById("intro-container");
  const storyContainer = document.getElementById("story-container");
  const introVideo = document.getElementById("intro-video");

  enterBtn.addEventListener("click", () => {
    introContainer.style.display = "none";
    storyContainer.classList.remove("hidden");
  });

  // En caso de que el video termine, también puede pasar automáticamente a la historia
  introVideo.addEventListener("ended", () => {
    introContainer.style.display = "none";
    storyContainer.classList.remove("hidden");
  });
});
