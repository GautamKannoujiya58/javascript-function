/* 
🏢 Real Workplace Scenario

Imagine your Expense Tracker.

const expenses = [
    { category: "Food", amount: 500 },
    { category: "Travel", amount: 3000 },
    { category: "Food", amount: 800 },
    { category: "Shopping", amount: 5000 },
    { category: "Food", amount: 200 }
];

Your manager says:

"Show me only the Food expenses, but the UI only needs the amounts."

Expected output:

[500, 800, 200]
*/

const expenses = [
    { category: "Food", amount: 500 },
    { category: "Travel", amount: 3000 },
    { category: "Food", amount: 800 },
    { category: "Shopping", amount: 5000 },
    { category: "Food", amount: 200 }
];



const foodExpenses = expenses.filter(expense => expense.category === "Food").map(expense => expense.amount);
console.log(foodExpenses);