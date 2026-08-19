/*
🏆 Mini Challenge #2 (Real World)

Write a function

function printInvoice(customerName, ...products) {

}

When called as

printInvoice(
    "Gautam",
    "Phone",
    "Mouse",
    "Keyboard"
);
*/

function printInvoice(customerName, ...products) {
    console.log("Customer:", customerName);
    console.log("Products:", products);
}

printInvoice("Gautam", "Phone", "Mouse", "Keyboard");

