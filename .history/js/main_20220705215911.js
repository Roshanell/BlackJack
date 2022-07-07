let firstCard = Math.floor(Math.random() * 10 + 2);

let secondCard = Math.floor(Math.random() * 10 + 2);

const sum = firstCard + secondCard;


//< 21 is OK
// 21 = good
// >21 = bad

if (sum > 21){
    console.log ('Close')
} else if (sum === 21){
    console.log ('Perfect, you win')
}