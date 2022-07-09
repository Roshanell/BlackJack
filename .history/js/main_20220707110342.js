let firstCard = Math.floor(Math.random() * 10 + 2);
let secondCard = Math.floor(Math.random() * 10 + 2);
const sum = firstCard + secondCard;
let hasblackJack = false;
let isAlive = true;
let message = "";

//store message-el pg in variable messageEL
let messageEl = document.getElementById("message-el");
console.log(messageEl);
let sumEl = document.getElementById()

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You/ve got BlackJack";
    hasblackJack = true;
  } else {
    message = "You/re out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

//positioning is is key to the code working. Cant display the message until the function is complete.

// you do not need # or . in the GetElementByID("HERE")
