const audio = document.querySelector("#audio-player");
console.log(audio);
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

// MY FUNCTIONALITIES

//// ----------------------------------------
// my logic for Muting, Unmuting, and Adjusting Sound
// first I need to fetch the button for sound mute and the volume slider

const currentVolume = document.querySelector("#volume");
console.log(currentVolume);
const volumeOffButton = document.querySelector("#volume-off-btn");
console.log(volumeOffButton);
const volumeOffImg = document.querySelector("#volume-off-img");
console.log(volumeOffImg);
// track if the sound is currently muted or not
let isMuted = false;
// save the previous volume level when muting to restore it when unmuting
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
// whenever the slider is adjusted/changed, the sound is played according to the volume change (increase or decrease)
function changeVolume() {
  audio.volume = currentVolume.value / 100;
  volumeOffImg.src =
    "https://img.icons8.com/?size=100&id=reqgj3e1uKBy&format=png&color=000000";
}

//// ----------------------------------------

// function muteSound() {
//     if (audio.volume == 0) {
//       // remember that pausED and endED
//       // either of that is true, it will happen
//       currentVolume.value = 100;
//       volumeOnButton.src =
//         "https://img.icons8.com/ios-glyphs/30/play--v2.pnghttps://img.icons8.com/?size=100&id=reqgj3e1uKBy&format=png&color=000000";
//     } else {
//       audio.volume = 0;
//       currentVolume.value = 0;
//       volumeOnButton.src =
//         "https://img.icons8.com/?size=100&id=91635&format=png&color=000000";
//     }
//   }
