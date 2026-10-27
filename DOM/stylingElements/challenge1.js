console.log("Hello from challenge1.js");

// selecting the instock element <p> tag
const stockAvailable = document.querySelector('.stock-available');
console.log(stockAvailable.textContent);
// declaring stock availability 
const isStock = "available";
// const isStock = "unavailable"
// checking if it is in stock 
if (isStock === "available") {
    stockAvailable.classList.add('stock-available');
} else {
    stockAvailable.classList.add('stock-unavailable');
}