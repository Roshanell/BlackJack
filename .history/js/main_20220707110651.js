let firstCard = Math.floor(Math.random() * 10 + 2);
let secondCard = Math.floor(Math.random() * 10 + 2);
const sum = firstCard + secondCard;
let hasblackJack = false;
let isAlive = true;
let message = "";

//store message-el pg in variable messageEL
let messageEl = document.getElementById("message-el");
console.log(messageEl);
//stores the sum paragraph in a variable
let sumEl = document.getElementById("sum-el")

function startGame() {

  if (sum <= 20) {
    //render the sum on the page using this format 
    sumEl.textContent
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
