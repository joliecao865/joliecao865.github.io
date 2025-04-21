const audio = document.querySelector("#audioPlayer");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
audio.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
audio.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    audio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here

const audioPlayer = document.querySelector("audioPlayer");
const volumeSlider = document.querySelector("volumeSlider");

volumeSlider.addEventListener("input", function () {
  audioPlayer.volume = this.value;
  console.log(`Volume set to ${this.value}`);
});
