const myCards = [
  { id: 1, name: "Queen", src: "queen.png" },
  { id: 2, name: "King", src: "king.png" },
  { id: 3, name: "Jack", src: "jack.png" },
];

let cardComposition = "";

for (let i = 0; i < myCards.length; i++) {
  cardComposition += `
     <div class="card-container">
      <div class="card" draggable="true">
        <div class="card-face"><img src="cloud.png" alt="Back" /></div>
        <div class="card-face flip">
          <img src="${myCards[i].src}" alt="${myCards[i].name}" class="card-front" />
        </div>
         </div>
          </div>
    `;
  console.log(cardComposition);
}

const deck = document.querySelector(".deck");
console.log(deck);
deck.innerHTML = cardComposition;

const cards = document.querySelector(".card");
console.log(cards);

let draggedCard = null;

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("dragstart", function () {
    draggedCard = cards[i];
    const name = draggedCard.querySelector(".card-front");
    console.log(name.alt);
    dropbox.innerHTML = "";
  });
}

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
