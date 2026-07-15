/*
Mini Workplace Challenge

You're working on Flipkart.

const orders = [
    {
        orderId: 1,
        amount: 500
    },
    {
        orderId: 2,
        amount: 1200
    },
    {
        orderId: 3,
        amount: 300
    }
];

Manager says:

Print

Order #1 : ₹500

Order #2 : ₹1200

Order #3 : ₹300
*/


const orders = [
    {
        orderId: 1,
        amount: 500
    },
    {
        orderId: 2,
        amount: 1200
    },
    {
        orderId: 3,
        amount: 300
    }
];

const printOrderNumber = (orders) => {
    orders.forEach(order => console.log(`Order #${order.orderId} : ₹${order.amount}`))
}
printOrderNumber(orders)
