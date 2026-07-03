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
const arr1 = [10, 20, 30];
arr1[-1] = 999;
console.log(arr1); // [ 10, 20, 30, '-1': 999 ]
console.log(arr1[-1]); // 999
console.log(arr1.length); // 3

console.log(typeof arr1);

// Interview Question: Sparse Array

const arr2 = [10, 20];
arr2[5] = 30;
console.log(arr2); // 10, 20, __, __, __, 30
console.log(arr2.length); // 6
console.log(">>>", arr2[3]);

// Another Question
const arr3 = [10, 20];
console.log(arr3[2]); // undefined
console.log(2 in arr3); // 