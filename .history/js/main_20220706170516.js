let firstCard = Math.floor(Math.random() * 10 + 2);

console.log(firstCard);

let secondCard = Math.floor(Math.random() * 10 + 2);

console.log(secondCard);

const sum = firstCard + secondCard;

let hasblackJack = false;
let isAlive = true; 

let message = "";

//< 21 is OK
// 21 = good
// >21 = bad

if (sum <= 20) {
  let message = "Do you want to draw a new card?"
  } else if (sum === 21) {
  let message = "Whoohoo! You/ve got BlackJack";
  hasblackJack = true;
} else {
  let message = "You/re out of the game!"
  isAlive = false;
}

// cash out
console.log(hasblackJack)
console.log(isAlive)"