/*
🏢 Final Array Destructuring Challenge

This combines everything you've learned.

Given:

const employee = [
    "Rahul",
    "Engineering"
];

Using array destructuring:

Store the first element in employeeName
Store the second element in department
Store the third element in salary with a default value of 50000
*/

const employee = ["Rahul", "Engineering"];
const [employeeName, department, salary = 50000] = employee;

console.log(employeeName);
console.log(department);
console.log(salary);