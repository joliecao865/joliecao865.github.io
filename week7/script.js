const airportAudio = document.querySelector("#airport-audio");
// always do console.log (telling browser that
// looking at html code, if you find audio element)
console.log(airportAudio);

// ----------------------------------------
// my logic for playing sound
// first I need to fetch the right button for play

const playButton = document.querySelector("#play-button");
// use # because it's an ID
console.log(playButton);
// then I listen to clicks on that button
playButton.addEventListener("click", playAudio);
// whenever someone clicks, the audio is played
function playAudio() {
  airportAudio.play();
}
// -----------------------------------------

// ----------------------------------------
// my logic for playing sound
// first I need to fetch the right button for pause

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
// then I listen to clicks on that button
pauseButton.addEventListener("click", pauseAudio);
// whenever someone clicks, the audio is paused
function pauseAudio() {
  airportAudio.pause();
}
// -----------------------------------------

// ----------------------------------------
// my logic for playing sound
// first I need to fetch the right button for pop
// as well as the popping sound
// (this differs from the airport sound
// by no controller for this sound)

const popSound = document.querySelector("#pop-sound");
console.log(popSound);

const popButton = document.querySelector("#pop-button");
console.log(popButton);
// then I listen to clicks on that button
popButton.addEventListener("click", popAudio);
// whenever someone clicks, the audio is played
function popAudio() {
  popSound.play();
}
// -----------------------------------------
