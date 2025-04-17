const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// ----------------------------------------
// my logic for playing sound
// first I need to fetch the right button for play

const playButton = document.querySelector("#play-button");
// use # because it's an ID
console.log(playButton);
// then I listen to clicks on that button
playButton.addEventListener("click", playVideo);
// whenever someone clicks, the audio is played
function playVideo() {
  myVideo.play();
}
// -----------------------------------------

// ----------------------------------------
// my logic for playing sound
// first I need to fetch the right button for pause

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
// then I listen to clicks on that button
pauseButton.addEventListener("click", pauseVideo);
// whenever someone clicks, the audio is paused
function pauseVideo() {
  myVideo.pause();
}
// -----------------------------------------
