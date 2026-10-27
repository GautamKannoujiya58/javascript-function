console.log("Hello from index.js");

// selecting the price (<p>) tag
const price1 = document.getElementById('price');
// styling using javascript
price1.style.color = "green";
price1.style.backgroundColor = "lightyellow";
price1.style.fontSize = "24px";
price1.style.padding = "10px";

// selecting the total <p> tag
const total = document.getElementById('card-total');
console.log(total);
// styling using javascript
total.style.color = "green";
total.style.fontSize = "24px";
// printing the javascript CSS
console.log("color:", total.style.color);
console.log("font:", total.style.fontSize);
// printing using DOM
console.log(total.textContent);

// selecting stock-status tag
const stock = document.querySelector('#stock-status');
console.log(stock);
// styling the tag
stock.style.color = "red";
stock.style.backgroundColor = "lightpink";
// printing
console.log(stock.style.color);
console.log(stock.style.backgroundColor);
console.log(getComputedStyle(stock).color);

// selecting the inventory-count <p> tag
const count = document.getElementById('inventory-count');
count.style.color = "green";
// printing
console.log(count.style.color); // green
console.log(getComputedStyle(count).color); // rgb(0, 128, 0)
console.log(count.textContent); // 12 items remaining

// selecting p tag 
const price2 = document.querySelector('.product-price');
// printing
console.log(price2.style.color); // " " becoz in the element there is no inline CSS present in the element and also through JS no inline CSS asigned
console.log(getComputedStyle(price2).color) // blue (some rgb value) becoz it select the CSS value from the style sheet assigned to it

// selecting div inventory 
const first = document.getElementById('inventory');
const second = document.querySelector('#inventory');
const third = document.querySelectorAll('.item');
// printing
console.log(first === second); // true becoz both are selecting the same element (DOM) using different ways
console.log(third.length); // 3, becoz querySelectorAll selects every elements having the class name assigned to it
console.log(third[0].textContent) // laptop, as the first element contains the display text 'laptop'
console.log("first: >>>", first);
console.log("second: >>>", second); 