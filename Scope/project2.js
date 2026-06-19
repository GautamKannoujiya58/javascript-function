// Expense Analyzer 

const expenses = [100, 5000, 300, 700];

function calculateTotal(expenses) {
    let totalExpense = 0;
    for (const expense of expenses) {
        totalExpense += expense;
    }
    return totalExpense;
}

function calculateAverage(expenses) {
    let totalExpense = calculateTotal(expenses)
    let avg = totalExpense / expenses.length;
    return avg;
}

function findLargestExpense(expenses) {

    let largestExpensse = expenses[0];
    for (const expense of expenses) {
        if (expense > largestExpensse) {
            largestExpensse = expense
        }
    }
    return largestExpensse;
}

console.log(findLargestExpense(expenses));
console.log(calculateTotal(expenses));
console.log(calculateAverage(expenses));

// ReferenceError
// console.log(totalExpense); // ReferenceError: totalExpense is not defined


