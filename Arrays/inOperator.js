/* 
What does 'in' check?

It asks:

"Does this property/index exist?"

It does NOT ask:

"What is the value?"

That's a huge difference.
*/

const arr = [10, 20];
arr[5] = 40;


console.log(arr[2]); // undefined
console.log(2 in arr); // false, index 2 doesn't exist
console.log(0 in arr);

console.log(arr); // 10,20
console.log(3 in arr); // false
console.log(arr[3]); // undefined

// Now comes the interesting part 😈
const arr1 = [10, 20];
arr1[4] = 40;
arr1[2] = undefined;
console.log("This", arr[3]);
console.log(arr1); // 10, 20, undefined
console.log(2 in arr1); // true
console.log(3 in arr1); // false


//⭐ Interview Trap
const arr2 = [];
arr2[100] = "javascript";
console.log(arr2.length); // 101
console.log(arr2[50]); // undefined
console.log(50 in arr2);// false


// Last Challenge
const arr3 = [10, 20, 30];
arr3.length = 1;

console.log(arr3[2]); // undefined
console.log(2 in arr3); // false
console.log(arr3.length); // 1
