let cards = [];
let sum = 0;
let hasblackJack = false;
let isAlive = true;
let message = "";

//store message-el pg in variable messageEL
let messageEl = document.getElementById("message-el");
//stores the sum paragraph in a variable
let sumEl = document.getElementById("sum-el");
//store the cards paragraph in a variable called cardsEL
let cardsEl = document.getElementById("cards-el");
l
function getRandomCard() {
  let number = Math.floor(Math.random() * 13) + 1;

  if (number > 10) {
    return 10;
  } else if (number === 1) {
    return 11;
  } else {
    return number;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  //render the cards on the page using this format -> cards: 10 4
  cardsEl.textContent = "Cards:" + " ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  //render the sum on the page using this format
  sumEl.textContent = "Sum:" + sum;
  //Problem- this only allow me to run the code once not multiple times.

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got BlackJack";
    hasblackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

//positioning is is key to the code working. Cant display the message until the function is complete.

// you do not need # or . in the GetElementByID("HERE") only for query selectors since you can use both classes and ids.

function newCard() {
  console.log("drawing new card from deck");
  if (isAlive === true && hasblackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
