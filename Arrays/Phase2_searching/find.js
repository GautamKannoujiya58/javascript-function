/*
Mini Workplace Challenge

Imagine you're working on a banking app.

const customers = [
    {
        accountNo: 1001,
        name: "Rahul",
        balance: 25000
    },
    {
        accountNo: 1002,
        name: "Gautam",
        balance: 18000
    },
    {
        accountNo: 1003,
        name: "Adam",
        balance: 45000
    }
];
*/

const customers = [
    {
        accountNo: 1001,
        name: "Rahul",
        balance: 25000
    },
    {
        accountNo: 1002,
        name: "Gautam",
        balance: 18000
    },
    {
        accountNo: 1003,
        name: "Adam",
        balance: 45000
    }
];

const getCustomer = (customers, accountNo) => {
    const isFound = customers.find((c) => c.accountNo === accountNo);
    return isFound ? isFound : null
}

console.log(getCustomer(customers, 1002));
console.log(getCustomer(customers, 123));

const numbers = [10, 20, 30, 40];

