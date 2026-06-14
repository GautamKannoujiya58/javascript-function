/*
Function Composition: One function calling another 
*/


/*
MEDIUM PROJECT 1:
ATM Simulation: deposit, withdraw, checkBalance
*/

let balance = 0;
function deposit(amt) {
    if (amt > 0) {
        return balance = balance + amt;

    }


}

function withdraw(amt) {
    if (balance <= 0 || amt > balance) {
        console.log("Insufficient balance!");
    } else {
        balance = balance - amt;
    }

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

deposit(500);
checkBalance();

withdraw(1000);
deposit(200)
checkBalance();

