// Expense Validation System

function validateTitle(title) {
    if (title.length < 3) {
        return false;
    }
    return true;
}

function validateAmount(amt) {
    if (amt <= 0) {
        return false;
    }
    return true;
}

function validateCategory(category) {
    if (category === "Food" || category === "Travel" || category === "Shopping" || category === "Bills") {
        return true;
    } else {
        return false;
    }
}

function addExpense(title, amt, category) {
    if (validateTitle(title) && validateAmount(amt) && validateCategory(category)) {
        console.log("Expense Added Successfully");
    } else {
        console.log("Expense Not Added");
    }
}

addExpense("De", 0, "Gym"); // All input incorrect
addExpense("Cooler", 0, "Miscellanious"); // 2 input incorrect 
addExpense("Cooler", 14000, "Miscellanious"); // 1 input incorrect
addExpense("Cooler", 14000, "Food"); // All input correct
addExpense("Kanheri Caves", 2000, "Travel")