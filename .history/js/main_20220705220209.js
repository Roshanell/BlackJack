let firstCard = Math.floor(Math.random() * 10 + 2);

let secondCard = Math.floor(Math.random() * 10 + 2);

const sum = firstCard + secondCard;


//< 21 is OK
// 21 = good
// >21 = bad

if (sum < 21){
    console.log ('Do you want to draw a new card?')
} else if (sum === 21){
    console.log ('Whoohoo! ')
} else {
    console.log('You went over.')
}