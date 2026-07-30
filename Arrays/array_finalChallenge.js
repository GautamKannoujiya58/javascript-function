/*
.

🎯 Final Challenge (Boss Level)

This one combines everything you've learned.

const orders = [
    { customer: "Rahul", amount: 500, status: "completed" },
    { customer: "Aman", amount: 1200, status: "pending" },
    { customer: "Gautam", amount: 800, status: "completed" },
    { customer: "Riya", amount: 2000, status: "completed" }
];

Your manager asks:

"Calculate the total amount of only the completed orders."
*/

const orders = [
    { customer: "Rahul", amount: 500, status: "completed" },
    { customer: "Aman", amount: 1200, status: "pending" },
    { customer: "Gautam", amount: 800, status: "completed" },
    { customer: "Riya", amount: 2000, status: "completed" },
]



// 1. Using filter() => reduce()
const totalCompletedOrderValue1 = orders
    .filter(order => order.status === "completed")
    .reduce((accumulator, currentCustomer) => {
        return accumulator + currentCustomer.amount;
    }, 0);

console.log(totalCompletedOrderValue1);

// 2. Using reduce()
const totalCompletedOrderValue2 = orders.
    reduce((accumulator, currentCustomer) => {
        if (currentCustomer.status === "completed") {
            return accumulator + currentCustomer.amount
        }
        return accumulator
    }, 0)


console.log(totalCompletedOrderValue2);
