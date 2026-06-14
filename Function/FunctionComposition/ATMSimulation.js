/*
Function Composition: One function calling another 
*/


/*
MEDIUM PROJECT 1:
ATM Simulation: deposit, withdraw, checkBalance
*/

let balance = 0;

function deposit(amt) {

    if (amt <= 0) {
        console.log("Invalid Amount");
        return;
    }
    balance += amt;
    return balance
}

function withdraw(amt) {
    if (amt <= 0) {
        console.log("Invalid Amount");
        return;
    }
    if (amt > balance) {
        console.log("Insufficient balance!");
        return;
    }
    balance -= amt

    return balance
}

function checkBalance() {

    console.log("Balance:", balance);
}

checkBalance();

deposit(30000);
withdraw(15000)
checkBalance()

withdraw(15000);
checkBalance();

deposit(-500);
checkBalance();

withdraw(1000);
deposit(200)
checkBalance();

