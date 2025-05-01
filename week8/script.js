// Fetch my video first
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// play pause logic
// 1. fetch the right play pause button
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

// 2. listen to the click event on this button
playPauseButton.addEventListener("click", togglePlay);

// 3. write the function that will play and pause the video
function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
}
//-----------------

// mute unmute logic
// fetch the right button
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

// 2. listen to the click event on this button
muteUnmuteButton.addEventListener("click", toggleSound);

// 3. write the function that will play and pause the video
function toggleSound() {
  if (myVideo.muted) {
    myVideo.muted = false;
  } else {
    myVideo.muted = true;
  }
}
//-----------------
