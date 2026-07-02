// Phase 1 — Foundations

// Phase 1 — Foundations
// Array Creation
// Accessing Elements
// Updating Elements
// Array Length
// Looping Through Arrays

// Mini Challenge 1

const fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits[0]; // accessing element
fruits[2]; // accessing element
fruits[4]; // o/p:undefined 
fruits.length // 4



// Mini Challenge 2 (No Coding Yet)

const numbers = [10, 20, 30, 40, 50]
console.log(numbers.length); // 5
console.log(numbers[numbers.length - 1]); // 50
console.log(numbers[numbers.length]); // undefined
console.log(numbers[-1]); // undefined


// 🚨 Hidden Interview Insight
const arr = [10, 20, 30];
arr[-1] = 999;
console.log(arr); // 999,10,20,30
console.log(arr[-1]); // 999
console.log(arr.length); // 4
