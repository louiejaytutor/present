const main = document.getElementById("main");
const flowers = document.getElementById("flowers");
const fireworks = document.getElementById("fireworks");
const menu = document.getElementById("menu");
const button = document.getElementById("play-music");
const audio = document.getElementById("audio");
const stop = document.getElementById("stop-music");

onload = () => {
  document.body.classList.remove("container");
};

function playMusic() {
  main.style.display = "none";
  menu.style.display = "inline-block";
  flowers.style.display = "block";
  fireworks.style.display = "block";

  audio.volume = 0.5;
  stop.style.display = "inline-block";

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
  audio.pause();
  audio.currentTime = 0;

  stop.style.display = "none";
  button.innerHTML = "Play music";
}

function backBtn() {
  main.style.display = "flex";
  menu.style.display = "none";
  flowers.style.display = "none";
  fireworks.style.display = "none";
  
  audio.pause();
  audio.currentTime = 0;
}