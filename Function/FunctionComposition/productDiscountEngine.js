/* Next Real-World Arrow Function Project

Build:

Product Discount Engine: 
*/

const products = [
    { name: "Phone", price: 20000 },
    { name: "Laptop", price: 50000 },
    { name: "Headphones", price: 3000 },
]

const applyDiscount = (product) => { return product.price = product.price * 0.9; }

const getDiscountedProducts = (products) => {
    for (const product of products) {
        applyDiscount(product)
    }
    return products;
}

console.log(getDiscountedProducts(products));


