/*
🏢 Mini Workplace Challenge

You're working on an Expense Tracker (very similar to the MERN project you built).

const expenses = [
    { category: "Food", amount: 500 },
    { category: "Travel", amount: 3000 },
    { category: "Food", amount: 800 },
    { category: "Shopping", amount: 5000 },
    { category: "Food", amount: 200 }
];

Your manager says:

"Show me only the Food expenses."

Expected output:

[
    { category: "Food", amount: 500 },
    { category: "Food", amount: 800 },
    { category: "Food", amount: 200 }
]

*/

const expenses = [
    { category: "Food", amount: 500 },
    { category: "Travel", amount: 3000 },
    { category: "Food", amount: 800 },
    { category: "Shopping", amount: 5000 },
    { category: "Food", amount: 200 }
]


const foodExpenses = expenses.filter((expense => expense.category === "Food"));
console.log(foodExpenses);