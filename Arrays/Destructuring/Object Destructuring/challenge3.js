/*
Given

const student = {
    name: "Aman"
};

Using destructuring, create:

name
grade

where

grade = "Not Assigned"

if it doesn't exist.

Expected output

Aman
Not Assigned

*/

const student = {
    name: "Aman"
};

const { name, grade = "Not Assigned" } = student;

console.log(name);
console.log(grade);
