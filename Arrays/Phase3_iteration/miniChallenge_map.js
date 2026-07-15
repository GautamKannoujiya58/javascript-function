/*
You're working at Amazon.

Products:

const products = [
    {
        name:"Phone",
        price:20000
    },
    {
        name:"Laptop",
        price:50000
    },
    {
        name:"Mouse",
        price:1000
    }
];

The UI team says:

"Create a new array containing only the product names."

Expected:

[
    "Phone",
    "Laptop",
    "Mouse"
]
*/

const products = [
    { name: "Phone", price: 20000 },
    { name: "Laptop", price: 10000 },
    { name: "Mouse", price: 1000 }
]
const names = []
const productNames = (products, names) => {
    return products.map(product => product.name)


}
console.log(productNames(products));