let firstCard = Math.floor(Math.random() * 10 + 2);

console.log(firstCard);

let secondCard = Math.floor(Math.random() * 10 + 2);

console.log(secondCard);

const sum = firstCard + secondCard;

//< 21 is OK
// 21 = good
// >21 = bad

if (sum < 21) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("Whoohoo! You/ve got BlackJack");
} else {
  console.log("You/re out of the game!");
}

// cash out
let black