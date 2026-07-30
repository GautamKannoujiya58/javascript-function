/*
🎯 Challenge (No syntax lookup)

Suppose you have:

const cart = [
    { name: "Phone", price: 20000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 3000 }
];

Your manager asks:

"Calculate the total cart value using reduce()."
*/


const cart = [
    { name: "Phone", price: 20000 },
    { name: "Mouse", price: 1000 },
    { name: "keyboard", price: 3000 },
]

const totalCartValue = cart.reduce((accumulator, currentValue) => { return accumulator + currentValue.price }, 0)
console.log(totalCartValue);
