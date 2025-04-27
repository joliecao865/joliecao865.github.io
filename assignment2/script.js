const audio = document.querySelector("#audio-player");
console.log(audio);
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
audio.removeAttribute("controls");

// MY FUNCTIONALITIES

//// ----------------------------------------
// My logic for Muting, Unmuting, and Adjusting Sound
// The volume bar is available for both Standard and Focus Mode because it is an essential function for a media player - let the users control the experience easily
// First I need to fetch the buttons for sound mute and the volume slider

const currentVolume = document.querySelector("#volume");
console.log(currentVolume);
const volumeOffButton = document.querySelector("#volume-off-btn");
console.log(volumeOffButton);
const volumeOffImg = document.querySelector("#volume-off-img");
console.log(volumeOffImg);
// track if the sound is currently muted or not
let isMuted = false;
// save/store the previous volume level when muting to get back to it when unmuting
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
// so I created the function for that, with the slider returns value to 0 (goes all to the left)
// and when it has been muted already, it will be unmuted when someone clicks

// For Mute the sound
function muteSound() {
  previousVolume = currentVolume.value;
  audio.muted = true;
  currentVolume.value = 0;
  //   the button changes as well
  volumeOffImg.src =
    "https://img.icons8.com/?size=100&id=91635&format=png&color=000000"; // Change to muted icon
  isMuted = true;
}

// For Unmute the sound
function unmuteSound() {
  audio.muted = false;
  currentVolume.value = previousVolume;
  //   audio.volume = previousVolume / 100;
  //   the button changes as well
  volumeOffImg.src =
    "https://img.icons8.com/?size=100&id=reqgj3e1uKBy&format=png&color=000000"; // Change to unmuted icon
  isMuted = false;
}

// For Adjusting the Volume Slider
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
// In summary, the Standard Mode is the default of the media player when first opens. There's an option to switch to Focus Mode, where there's an 25-minute session ready to start. Users can switch back to Standard mode easily anytime.
// Standard Mode: simply play the audio with convenient volume control
// Focus Mode: available 25-minute session to play the audio in loop for focusing on study in that period of time. It's expectec to be simple and minimalist for the users to use on this purpose. It works based on Pomodoro Timer for efficient productivity traditionally - 25 minutes. Users can restart as they wish when the countdown is over.

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

// The media player starts with Standard Mode as default for convenient main use (then can be switched)
setupStandardMode();

// When switching to Focus Mode, the only button I want to display is "Start"
// It simplifies user operations and enhances the efficiency of the Focus Mode function of the media player for studying purpose - minimalist
// So I hide the Pause and Reset buttons until the timer starts - clean and reduces distraction, only highlights main functions
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
  // This to make sure even when I switch to Focus Mode while playing on Standard mode and then I switch back to Standard, everything is set as initially, with the Play button ready to be clicked on
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
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
// The purpose of each Mode is clear so that they will not be confused and each mode works to its best function. That's why I get rid of the looping functionality above.

// My logic for Play-Pause in Standard Mode Controls
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

// To keep track of audio playback progress and update the user interface accordingly
audio.addEventListener("timeupdate", updateProgressBar);
function updateProgressBar() {
  // calculate the percentage of the audio that has played so far:
  const value = (audio.currentTime / audio.duration) * 100;
  // update the width of the progress bar:
  progressBar.style.width = value + "%";
}

// My logic for Focus Mode Controls

// Listens to clicking on Pause button
pauseFocusButton.addEventListener("click", function () {
  //  when someone clicks on it
  if (audio.paused) {
    // if the audio is previously being paused, now it plays and the button displays "Pause" to be ready to be clicked on
    audio.play();
    pauseFocusButton.textContent = "Pause";
    // the timer works
    startTimer();
  } else {
    // if the audio is previously being played, now it pauses and the button displays "Continue" to be ready to be clicked on
    audio.pause();
    clearInterval(timerInterval);
    pauseFocusButton.textContent = "Continue";
  }
});

// Listens to clicking on Start button
startFocusButton.addEventListener("click", function () {
  startFocusSession();
});
//when someone clicks on the Start button
function startFocusSession() {
  // the start button will be hidden
  startFocusButton.classList.add("hidden");
  // the Pause button replaces for the Start button
  pauseFocusButton.classList.remove("hidden");
  // the Reset button appears
  resetFocusButton.classList.remove("hidden");
  pauseFocusButton.textContent = "Pause"; // make sure it always initially displays the Pause button (instead of "Continue")
  currentTimer = focusTime; // reset the timer to ensure it starts to count down from 25 minutes
  audio.currentTime = 0; // ensure audio starts from the beginning
  audio.play();
  startTimer();
}

// Function how the timer works to ensure that each session is cleanly and clearly managed from start to finish.
function startTimer() {
  clearInterval(timerInterval); // avoid multiple interval running simultaneously even if the users start and stop and start over again
  timerDisplay.style.fontSize = "3rem"; // I want the timer to have big text
  timerInterval = setInterval(() => {
    // I did the condition check with timer decrementing by 1 second when the currentTimer is greater than 0
    if (currentTimer > 0) {
      currentTimer--;
      updateDisplay(); // in later function; to update and reflect the new time value on the interface
    } else {
      // If countdown is finished, the message is written
      clearInterval(timerInterval);
      audio.pause(); // no more looping
      audio.currentTime = 0; // reset audio for when session is complete
      timerDisplay.textContent = "Session Complete!"; //message for announcement
      timerDisplay.style.fontSize = "1.4rem"; // If the message has the same font size as the timer, it can be too big, so I adjust it to be smaller
      // As when the countdown is over, the Pause button disappears because it's no longer essential --> for clear and purposeful interface
      pauseFocusButton.classList.add("hidden");
      // There's only the Reset button left, allowing the users to easily restart a new session
      resetFocusButton.classList.remove("hidden");
    }
  }, 1000);
}

// Listening to click on the Reset button
resetFocusButton.addEventListener("click", resetFocus);
// when someone clicks on the Reset button: they wish to have a new session so everything should be consistent, intuitive, and ready without leftover processes or data from previous sessions.
function resetFocus() {
  // It stops any ongoing timer interval and is ready start a new one
  clearInterval(timerInterval);
  currentTimer = focusTime;
  // It shows the countdown of 25 minutes again, ready to be restarted
  timerDisplay.textContent = "25:00";
  timerDisplay.style.fontSize = "3rem";
  // I reset the audio playback position to the start, ready for the new session
  audio.currentTime = 0;
  audio.pause(); // ensure the audio is no longer played
  // Calls the set up of the buttons for initial Focus Mode (only the Start button is visible)
  setupFocusModeButtons();
}

function updateDisplay() {
  const minutes = Math.floor(currentTimer / 60); // I get the number of minutes from the remaining seconds by dividing by 60
  const seconds = currentTimer % 60; // I get the number of seconds which cannot complete a full minute
  // Update the timer display with a formatted string in "MM:SS" format
  // Using backticks to embed expressions into a string
  timerDisplay.textContent = `${minutes}:${seconds
    // directly display the minutes part but a bit more work with the seconds part
    .toString() // Convert seconds to a string
    .padStart(2, "0")}`; // Add a zero before a number of second if seconds are less than 10
}

setupFocusModeButtons();
