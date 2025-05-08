const myInput = document.querySelector("#my-input");
const myButton = document.querySelector("#my-button");
myButton.addEventListener("click", moveInput);

let clicked = false;
function moveInput() {
  if (!clicked) {
    myInput.style.translate = "30px 20px";
    clicked = true;
    // (click the 1st time, it moves the input)
  } else {
    myInput.style.translate = "0px 0px";
    clicked = false;
  }
}
