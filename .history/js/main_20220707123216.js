// let firstCard = Math.floor(Math.random() * 10 + 2);
// let secondCard = Math.floor(Math.random() * 10 + 2);
let firstCard
const sum = firstCard + secondCard;
let hasblackJack = false;
let isAlive = true;
let message = "";

//store message-el pg in variable messageEL
let messageEl = document.getElementById("message-el");
console.log(messageEl);
//stores the sum paragraph in a variable
let sumEl = document.getElementById("sum-el");
//store the cards paragraph in a variable called cardsEL
let cardsEl = document.getElementById("cards-el");

function startGame() {
    //render the cards on the page using this format -> cards: 10 4
  cardsEl.textContent = "Cards:" + " " + firstCard + " " + secondCard;
  //render the sum on the page using this format
  sumEl.textContent = "Sum:" + sum;
  //Problem- this only allow me to run the code once not multiple times.


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

// you do not need # or . in the GetElementByID("HERE") only for query selectors since you can use both classes and ids.

function newCard() {
  console.log("drawing new card from deck");
  let card = 20;
  sum += card;
  startGame();
}
