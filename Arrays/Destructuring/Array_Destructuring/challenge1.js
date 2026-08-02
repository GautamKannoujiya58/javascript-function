/*
🏢 Mini Challenge #1

Given

const colors = [
    "Red",
    "Green",
    "Blue",
    "Yellow"
];

Using array destructuring only, create variables:

primary
secondary
tertiary

such that:

primary   = "Red"
secondary = "Green"
tertiary  = "Blue"
*/

const colors = ["Red", "Green", "Blue", "Yellow"];
const [primary, secondary, tertiary] = colors;
console.log(primary, secondary, tertiary);