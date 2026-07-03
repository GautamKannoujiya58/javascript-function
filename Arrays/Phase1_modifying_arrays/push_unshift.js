/*
Your manager says:
"Gautam, when the user clicks Add Expense, the new expense should appear at the bottom of the list."
Ans: I will add at the end of the array
*/

// Mini Project 1: Expense Tracker
const expenses = ["Rent", "Groceries", "Internet"];

const addExpense = (expenses, newExpense) => {
    expenses[expenses.length] = newExpense
    return expenses;
}

addExpense(expenses, "Electricity");
console.log(expenses);


// Now Why Does push() Exist?
// Because developers got tired of writing:

// 🧠 Workplace Challenge 2:
/*
Now imagine you're working on Google Chrome.

Recent searches:
const recentSearches = [
    "JavaScript",
    "React",
    "MongoDB"
];

The Product Manager says:
"The newest search should appear FIRST."
*/


const recentSearches = [
    "JavaScript",
    "React",
    "MongoDB"
];

const addNewSearch = (recentSearches, newSearch) => {

    for (let i = recentSearches.length - 1; i >= 0; i--) {
        recentSearches[i + 1] = recentSearches[i]
    }
    recentSearches[0] = newSearch;
    return recentSearches;

}
console.log(addNewSearch(recentSearches, "CSS"));
