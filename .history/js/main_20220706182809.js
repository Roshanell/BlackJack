let firstCard = Math.floor(Math.random() * 10 + 2);

console.log(firstCard);

let secondCard = Math.floor(Math.random() * 10 + 2);

console.log(secondCard);

const sum = firstCard + secondCard;

let hasblackJack = false;
let isAlive = true;

// let message = "";
// window.onload = function () {
//   document.getElementById("#start-button").addEventListener("click", startGame);
// };

// cash out
console.log(hasblackJack);
console.log(isAlive);

document.addEventListener('DOMContentLoaded,' function(){
  
})
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
}
