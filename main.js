onload = () => {
  document.body.classList.remove("container");
};

function playMusic() {
  const button = document.getElementById("play-music");
  const audio = document.getElementById("audio");

  audio.volume = 0.5;
  document.getElementById("stop-music").style.display = "inline-block";

  if (audio.paused) {
    audio.play();
    button.innerHTML = "Pause";
  }
  else {
    audio.pause();
    button.innerHTML = "Play";
  }
}

function stopMusic() {
  const button = document.getElementById("play-music");
  const audio = document.getElementById("audio");

  audio.pause();
  audio.currentTime = 0;

  document.getElementById("stop-music").style.display = "none";
  button.innerHTML = "Play music";
}