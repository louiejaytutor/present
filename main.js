const main = document.getElementById("main");
const flowers = document.getElementById("flowers");
const fireworks = document.getElementById("fireworks");
const menu = document.getElementById("menu");
const button = document.getElementById("play-music");
const audio = document.getElementById("audio");
const lyric = document.getElementById("lyrics");
const stop = document.getElementById("stop-music");

audio.addEventListener("timeupdate", updateLyrics);

const lyrics = [
  { time: 19, text: "Your morning eyes I could stare like watching stars" },
  { time: 26, text: "I could walk you by, and I'll tell without a thought" },
  { time: 32, text: "You'll be mine, would you mind if I took your hand tonight?" },
  { time: 40, text: "Know you're all that I want this life" },
  { time: 48, text: "I'll imagine we fell in love" },
  { time: 50, text: "I'll nap under moonlight skies with you" },
  { time: 54, text: "I think I'll picture us, you with the waves" },
  { time: 58, text: "The ocean's colors on your face" },
  { time: 62, text: "I'll leave my heart with your air" },
  { time: 66, text: "So let me fly with you" },
  { time: 69, text: "Will you be forever with me?" },
  { time: 74, text: "" },
  { time: 106, text: "My love will always stay by you" },
  { time: 112, text: "I'll keep it safe, so don't you worry a thing, I'll tell you I love you more" },
  { time: 121, text: "It's stuck with you forever, so promise you won't let it go" },
  { time: 128, text: "I'll trust the universe will always bring me to you" },
  { time: 136, text: "I'll imagine we fell in love" },
  { time: 139, text: "I'll nap under moonlight skies with you" },
  { time: 143, text: "I think I'll picture us, you with the waves" },
  { time: 147, text: "The ocean's colors on your face" },
  { time: 150, text: "I'll leave my heart with your air" },
  { time: 154, text: "So let me fly with you" },
  { time: 158, text: "Will you be forever with me?" },
  { time: 165, text: "" }
];

function updateLyrics() {
  const currentTime = audio.currentTime;
  let currentLyric = lyrics.find((lyric, index) => {
    const nextLyric = lyrics[index + 1];
    return currentTime >= lyric.time && (!nextLyric || currentTime < nextLyric.time);
  });
  
  lyric.textContent = currentLyric ? currentLyric.text : "";
}

onload = () => {
  document.body.classList.remove("container");
};

function playMusic() {
  main.style.display = "none";
  menu.style.display = "inline-block";
  flowers.style.display = "block";
  fireworks.style.display = "block";
  lyric.style.display = "flex";
  stop.style.display = "inline-block";

  audio.volume = 0.5;

  if (audio.paused) {
    audio.play();
    button.innerHTML = "<i class="fas fa-pause-circle"></i> Pause";
  }
  else {
    audio.pause();
    button.innerHTML = "<i class="fas fa-play-circle"></i> Play";
  }
}

function stopMusic() {
  audio.pause();
  audio.currentTime = 0;

  stop.style.display = "none";
  button.innerHTML = "<i class="fas fa-play-circle"></i> Play music";
}

function backBtn() {
  main.style.display = "flex";
  menu.style.display = "none";
  flowers.style.display = "none";
  fireworks.style.display = "none";
  lyric.style.display = "none";

  audio.pause();
  audio.currentTime = 0;
}
