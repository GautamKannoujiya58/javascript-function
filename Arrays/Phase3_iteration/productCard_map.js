// Mini Challenge:

/*
Mini Project: Product Cards

You receive this API response:

const products = [
    { name: "Phone", price: 20000 },
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 }
];

Your manager says:

"The UI team doesn't want the whole object. They want a new array of objects with this shape:"

*/

const products = [
    { name: "Phone", price: 20000 },
    { name: "laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
]

const productdisplay = products.map((product) => { return { title: product.name, displayPrice: `₹${product.price}` } })
console.log(productdisplay);