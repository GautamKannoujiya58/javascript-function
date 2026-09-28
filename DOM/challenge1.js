console.log("Hello from challenge1.js");

const app = document.getElementById('app');

console.log(app.children.length); // 2
console.log(app.children[0]); // <section>...</section>
console.log(app.children[1]); // <button>Add Expense</button>