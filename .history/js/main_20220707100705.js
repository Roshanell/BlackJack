let firstCard = Math.floor(Math.random() * 10 + 2);

let secondCard = Math.floor(Math.random() * 10 + 2);

const sum = firstCard + secondCard;

let hasblackJack = false;
let isAlive = true;

let message = "";
let message-el = document.get

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Whoohoo! You/ve got BlackJack";
    hasblackJack = true;
  } else {
    message = "You/re out of the game!";
    isAlive = false;
  }
  console.log(message);
}

