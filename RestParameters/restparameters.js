
// Rest parameters
function showNames(...names) {
    console.log(names);
}
showNames("Gautam", "Rahul", "Mike");


// Another example
function calculateBill(...prices) {
    console.log(prices);

}
calculateBill(200, 500, 1000, 700, 400)

// Challenge
function collectExpenses(...expenses) {
    console.log(expenses);

}
collectExpenses(500, 1200, 700, 300);
