console.log("Hello from dom.js");

const app = document.getElementById('app');

console.log(app) // <h1>Expense Tracker</h1> <h1>Track your monthly expenses</h1>
console.log(app.children.length); // 2
console.log(">>", app.children[0]);// <h1>Expense Tracker</h1>
console.log(app.children[1]);// <h1>Track your monthly expenses</h1>