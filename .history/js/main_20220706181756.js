let firstCard = Math.floor(Math.random() * 10 + 2);

console.log(firstCard);

let secondCard = Math.floor(Math.random() * 10 + 2);

console.log(secondCard);

const sum = firstCard + secondCard;

let hasblackJack = false;
let isAlive = true;

let message = "";

				<button id="start-button">START GAME</button>
        document.getElementById(#)

// cash out
console.log(hasblackJack);
console.log(isAlive);

function startGame () {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Whoohoo! You/ve got BlackJack";
    hasblackJack = true;
  } else {
    message = "You/re out of the game!";
    isAlive = false;
  }
}
