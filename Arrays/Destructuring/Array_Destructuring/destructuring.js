// Array destructuring

const fruits = ["Apple", "Mango", "Banana"];

// without destructuring
const firstFruit = fruits[0];
const secondFruit = fruits[1];
const thirdFruit = fruits[2];

console.log(firstFruit, secondFruit, thirdFruit);


// with Destructuring
const [first, second, third] = fruits;
console.log(first, second, third);