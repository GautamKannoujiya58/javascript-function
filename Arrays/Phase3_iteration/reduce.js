// our first reduce() challenge (without using reduce() yet)

// Challenge:
/*
const numbers = [15, 25, 35, 45];

Write a solution using a for...of loop (not reduce()) that calculates the total.
*/

const numbers = [15, 25, 35, 45];

let total = 0;
for (const number of numbers) {
    total = total + number;
}
console.log(total);

