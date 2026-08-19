/*
🏢 Mini Challenge #1 (Spread)

Given

const fruits = [
    "Apple",
    "Mango"
];

const moreFruits = [
    "Banana",
    "Orange"
];

Create a new array called allFruits using the spread operator.
*/
const fruits = ["Apple", "Mango"];
const moreFruits = ["Banana", "Orange"];

const allFruits = [...fruits, ...moreFruits];
console.log(allFruits);
