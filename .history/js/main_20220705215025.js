// // 1. Using a loop, iterate through this array and console.log all of the people.

// function iteration() {
//   for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
//   }
// }

// iteration(people)

let people = ["Greg", "Mary", "Devon", "James"];

// 2.  Write the command to remove "Greg" from the array.

let removed = people.shift();
console.log(removed);

function iteration() {
  for (let i = 0; i < people.length; i++) {
    return people.shift();
  }
}
//  how do I show the tne array with greg removed. I know that shifts removes greg. But if i wanted a new array without greg what would I do?
// arr.slice(1) will slice the array from the index 1 to the end of the array, returning a sliced copy

// 3 Write the command to remove "James" from the array.
people.pop();
console.log(people);

// 4.  Write the command to add "Matt" to the front of the array.

let addedPeople = people.unshift("Matt");
console.log(people);

//5 Write the command to add your name to the end of the array.

people.push("Roshanell");
console.log(people);

//6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

// function stopAtMary (){

//     for (let i = 0; i < people.length; i++){
//         if (i > 1){
//             break;
//         }
//         console.log(people [i])
//     }
// }
// stopAtMary()

// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".

// let slicedFolx = people.slice(2,4)
// console.log(slicedFolx)

// 8. Write the command that gives the indexOf where "Mary" is located.

// console.log(people.indexOf('Mary'))

// 9. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].

people.splice(2, 2, "Elizabeth", "Artie");

// console.log(people)

// 10 Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

let withBob = people + " " + "Bob";
console.log(withBob);
