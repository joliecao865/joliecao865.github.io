const card = document.querySelector(".card");
console.log(card);

let draggedCard = null;

card.addEventListener("dragstart", function () {
  draggedCard = card;
  console.log(draggedCard);
});

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropbox.addEventListener("drop", function (e) {
  const clone = draggedCard;
  //   dropbox.innerHTML = clone; it not work
  dropbox.appendChild(clone);
  clone.addEventListener("click", function () {
    clone.classList.add("flip");
  });
});
