let musicCover = document.querySelector(".img");

let musicName = document.querySelector(".musicName");

let imgCover = document.querySelector(".cover");

let range = document.querySelector("#rangeInput");

let prevTrack = document.querySelector("#prevTrack");

let playBtn = document.querySelector("#playBtn");

let nextTrack = document.querySelector("#nextTrack");

let currentMusic = 0;

let audio = trackList[currentMusic].audio;

imgCover.src = trackList[currentMusic].cover;

musicName.innerText = trackList[currentMusic].name;

audio.addEventListener("canplay", () => {
  range.max = audio.duaration;
});

audio.addEventListener("timeupdate", () => {
  range.value = audio.currentTime;
});

range.addEventListener("input", () => {
  audio.currentTime = range.value;
});


playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();

    musicCover.style.animationPlayState = "running";

    playBtn.classList.replace("bi-play-fill", "bi-pause");
  } else {
    audio.pause();

    musicCover.style.animationPlayState = "paused";

    playBtn.classList.replace("bi-pause", "bi-play-fill");
  }
});

nextTrack.addEventListener("click", () => {
  changeMusic("next");
});

prevTrack.addEventListener("click", () => {
  changeMusic("prev");
});

function changeMusic(state) {
  audio.pause();

  range.value = 0;

  musicCover.style.animationPlayState = "paused";

  playBtn.classList.replace("bi-pause", "bi-play-fill");

  if (state == "next") {
    if (currentMusic == trackList.length - 1) currentMusic = 0;
    else currentMusic += 1;
  } else {
    if (currentMusic == 0) currentMusic = trackList.length - 1;
    else currentMusic -= 1;
  }

  audio = trackList[currentMusic].audio;

  imgCover.src = trackList[currentMusic].cover;

  musicName.innerText = trackList[currentMusic].name;
}
