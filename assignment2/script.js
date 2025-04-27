const audio = document.querySelector("#audio-player");
console.log(audio);
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
audio.removeAttribute("controls");

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

// first I need to fetch the button for switching to Focus Mode
const focusModeButton = document.querySelector("#focus-mode-button");
console.log(focusModeButton);

const standardModeControls = document.querySelector("#standard-mode-controls");
console.log(standardModeControls);
const focusModeControls = document.querySelector("#focus-mode-controls");
console.log(focusModeControls);
// const loopButton = document.querySelector("#loopButton");

// And fetch the button for Start/Pause/Reset/Timer in Focus Mode
const startFocusButton = document.querySelector("#start-focus-button");
console.log(startFocusButton);
const pauseFocusButton = document.querySelector("#pause-focus-button");
console.log(pauseFocusButton);
const resetFocusButton = document.querySelector("#reset-focus-button");
console.log(resetFocusButton);
const timerDisplay = document.querySelector("#timer-display");
console.log(timerDisplay);

// Store data for the timer
let focusTime = 25 * 60; // 25 minutes in seconds
let currentTimer = focusTime;
let timerInterval = null; // to manage the timer interval, then can clear intervals and avoid overlapping timers

// The media player starts with Standard Mode as default (then can be switched)
setupStandardMode();

// When switching to Focus Mode, the only button I want to display is "Start"
// So I hide the Pause and Reset buttons until the timer starts
function setupFocusModeButtons() {
  startFocusButton.classList.remove("hidden");
  pauseFocusButton.classList.add("hidden");
  resetFocusButton.classList.add("hidden");
}

// When someone clicks on the "Switch to Focus Mode" button
focusModeButton.addEventListener("click", function () {
  // for when the standard mode is hidden (the focus mode is on)
  if (standardModeControls.classList.contains("hidden")) {
    setupStandardMode();
  } else {
    // for when the standard mode is on
    setupFocusMode();
  }
});

// To set up Standard Mode
function setupStandardMode() {
  // ensure audio stops completely when switching between modes
  clearInterval(timerInterval);
  currentTimer = focusTime;
  audio.pause();
  audio.currentTime = 0;
  timerDisplay.textContent = "25:00";
  timerDisplay.style.fontSize = "3rem";
  // Within Standard Mode, the functionalities for Focus Mode will be hidden
  standardModeControls.classList.remove("hidden");
  focusModeControls.classList.add("hidden");
  // This button appears so users can switch to Focus Mode from Standard Mode
  focusModeButton.textContent = "Switch to Focus Mode";
  setupFocusModeButtons();
}

// To set up Focus Mode
function setupFocusMode() {
  // ensure audio stops completely when switching between modes
  clearInterval(timerInterval);
  currentTimer = focusTime;
  audio.pause();
  audio.currentTime = 0;
  timerDisplay.textContent = "25:00";
  timerDisplay.style.fontSize = "3rem";
  // Within Focus Mode, the functionalities for Standard Mode will be hidden
  focusModeControls.classList.remove("hidden");
  standardModeControls.classList.add("hidden");
  setupFocusModeButtons();
  // I want to make sure the audio is played in loop throughout the Focus session. The audio should repeat seamlessly until the session ends.
  audio.loop = true;
  // This button appears so users can switch to Standard Mode from Focus Mode
  focusModeButton.textContent = "Switch to Standard Mode";
}

// My logic for Standard Mode Controls

// loopButton.addEventListener("click", function () {
//   audio.loop = !audio.loop;
//   loopButton.textContent = audio.loop ? "Stop Looping" : "Loop";
// });

// In Standard Mode, users only have option for play and pause audio
// Especially it's for study so they shouldn't be distracted by complex functions or adjusting too much. It's just for setting the atmosphere/ giving the vibes while studying
// Instead, they can play/pause the audio when they want and adjust the volume
// The volume control is convenient for this purpose. It's handy to adjust as they want/need.
// There is no looping in Standard Mode because they should only listen to this once and manually replay if they would love to. Otherwise, if they wish to have a long session of playing music to concentrate on study, they can easily switch to Focus Mode.
// The purpose of each Mode is clear so that they will not be confused and each mode works to its best function.

// Listen to clicking on that button
playPauseBtn.addEventListener("click", togglePlayPause);
// whenever someone clicks, the audio is played
function togglePlayPause() {
  if (audio.paused || audio.ended) {
    // either of that is true, it will happen
    audio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    // changing between Play and Pause icons
  } else {
    audio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

audio.addEventListener("timeupdate", updateProgressBar);
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
    startTimer();
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
  currentTimer = focusTime; // Reset the timer to ensure it starts from 25 minutes
  audio.currentTime = 0; // Ensure audio starts from the beginning
  audio.play();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timerDisplay.style.fontSize = "3rem";
  timerInterval = setInterval(() => {
    if (currentTimer > 0) {
      currentTimer--;
      updateDisplay();
    } else {
      // If countdown is finished, the message is written
      clearInterval(timerInterval);
      audio.pause();
      audio.currentTime = 0; // Reset audio for when session is complete
      timerDisplay.textContent = "Session Complete!";
      timerDisplay.style.fontSize = "1.4rem";

      pauseFocusButton.classList.add("hidden");
      resetFocusButton.classList.remove("hidden");
    }
  }, 1000);
}

resetFocusButton.addEventListener("click", resetFocus);

function resetFocus() {
  clearInterval(timerInterval);
  currentTimer = focusTime;
  timerDisplay.textContent = "25:00";
  timerDisplay.style.fontSize = "3rem";
  audio.currentTime = 0;
  audio.pause();
  setupFocusModeButtons();
}

function updateDisplay() {
  const minutes = Math.floor(currentTimer / 60);
  const seconds = currentTimer % 60;
  timerDisplay.textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

// Initialize focus mode button setup
setupFocusModeButtons();
