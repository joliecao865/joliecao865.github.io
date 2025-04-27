const audio = document.querySelector("#audio-player");
console.log(audio);
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
audio.removeAttribute("controls");
audio.addEventListener("timeupdate", updateProgressBar);

// MY FUNCTIONALITIES

//// ----------------------------------------
// My logic for Muting, Unmuting, and Adjusting Sound
// first I need to fetch the buttons for sound mute and the volume slider

const currentVolume = document.querySelector("#volume");
console.log(currentVolume);
const volumeOffButton = document.querySelector("#volume-off-btn");
console.log(volumeOffButton);
const volumeOffImg = document.querySelector("#volume-off-img");
console.log(volumeOffImg);
// track if the sound is currently muted or not
let isMuted = false;
// save the previous volume level when muting to get back to it when unmuting
let previousVolume = audio.volume;
// then I listen to clicks on that button
// (when users see the volume button, they know to click on to mute or unmute)
volumeOffButton.addEventListener("click", function () {
  if (isMuted) {
    unmuteSound();
  } else {
    muteSound();
  }
});

// whenever someone clicks, the sound is muted.
// so I created the function for that, with the slider returns value to 0
// and when it has been muted already, it will be unmuted when someone clicks

// Mute the sound
function muteSound() {
  previousVolume = currentVolume.value;
  audio.muted = true;
  currentVolume.value = 0;
  //   the button changes as well
  volumeOffImg.src =
    "https://img.icons8.com/?size=100&id=91635&format=png&color=000000"; // Change to muted icon
  isMuted = true;
}

// Unmute the sound
function unmuteSound() {
  audio.muted = false;
  currentVolume.value = previousVolume;
  //   audio.volume = previousVolume / 100;
  //   the button changes as well
  volumeOffImg.src =
    "https://img.icons8.com/?size=100&id=reqgj3e1uKBy&format=png&color=000000"; // Change to unmuted icon
  isMuted = false;
}

// for Adjusting the Volume Slider
// then I listen to the change of the slider
currentVolume.addEventListener("change", changeVolume);
// whenever the slider is adjusted/dragged, the sound is played according to the volume change (increase or decrease)
function changeVolume() {
  audio.volume = currentVolume.value / 100;
  volumeOffImg.src =
    "https://img.icons8.com/?size=100&id=reqgj3e1uKBy&format=png&color=000000";
}

//// ----------------------------------------
// My logic for Switching between Standard Mode and Focus Mode

// first I need to fetch the button for Focus Mode
const focusModeButton = document.querySelector("#focusModeButton");

const standardModeControls = document.querySelector("#standardModeControls");
const focusModeControls = document.querySelector("#focusModeControls");

// const loopButton = document.querySelector("#loopButton");

const startFocusButton = document.querySelector("#startFocusButton");
const pauseFocusButton = document.querySelector("#pauseFocusButton");
const resetFocusButton = document.querySelector("#resetFocusButton");
const timerDisplay = document.querySelector("#timerDisplay");

let focusTime = 25 * 60; // 25 minutes in seconds
let currentTimer;
let timerInterval = null; // Track the timer interval

// Start in Standard Mode
setupStandardMode();

// Initial button visibility setup for Focus Mode
function setupFocusModeButtons() {
  startFocusButton.classList.remove("hidden");
  pauseFocusButton.classList.add("hidden");
  resetFocusButton.classList.add("hidden");
}

// Switch between modes
focusModeButton.addEventListener("click", function () {
  if (standardModeControls.classList.contains("hidden")) {
    setupStandardMode();
  } else {
    setupFocusMode();
  }
});

// Standard Mode Setup
function setupStandardMode() {
  standardModeControls.classList.remove("hidden");
  focusModeControls.classList.add("hidden");
  audio.loop = false;
  resetFocus();
  focusModeButton.textContent = "Switch to Focus Mode";
}

// Focus Mode Setup
function setupFocusMode() {
  focusModeControls.classList.remove("hidden");
  standardModeControls.classList.add("hidden");
  setupFocusModeButtons();
  audio.loop = false;
  audio.pause();
  focusModeButton.textContent = "Switch to Standard Mode";
}
// Standard Mode Controls

// loopButton.addEventListener("click", function () {
//   audio.loop = !audio.loop;
//   loopButton.textContent = audio.loop ? "Stop Looping" : "Loop";
// });
playPauseBtn.addEventListener("click", togglePlayPause);
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

// Focus Mode Controls
startFocusButton.addEventListener("click", function () {
  startFocusSession();
});

pauseFocusButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    pauseFocusButton.textContent = "Pause";
    startTimer(); // Resume the timer
  } else {
    audio.pause();
    clearInterval(timerInterval);
    pauseFocusButton.textContent = "Continue";
  }
});

function startFocusSession() {
  startFocusButton.classList.add("hidden");
  pauseFocusButton.classList.remove("hidden");
  resetFocusButton.classList.remove("hidden");
  pauseFocusButton.textContent = "Pause";

  audio.play();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval); // Ensure no other timer is running
  timerInterval = setInterval(() => {
    if (currentTimer > 0) {
      currentTimer--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      audio.pause();
      timerDisplay.textContent = "Session Complete!";
    }
  }, 1000);
}

resetFocusButton.addEventListener("click", resetFocus);

function resetFocus() {
  clearInterval(timerInterval); // Clear the interval timer
  currentTimer = focusTime; // Reset the timer to focusTime
  timerDisplay.textContent = "25:00"; // Reset the timer display
  audio.currentTime = 0; // Reset the audio to the start
  audio.pause(); // Ensure audio is paused
  startFocusButton.classList.remove("hidden");
  pauseFocusButton.classList.add("hidden");
  resetFocusButton.classList.add("hidden");
}

function updateDisplay() {
  const minutes = Math.floor(currentTimer / 60);
  const seconds = currentTimer % 60;
  timerDisplay.textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}
