/* Why React Uses Arrow Functions Everywhere

You'll constantly see:

const handleClick = () => {
    console.log("Clicked");
};

instead of:

function handleClick() {
    console.log("Clicked");
}

because:

1. Shorter
2. Cleaner
3. Works nicely with callbacks
4. Consistent style in React
*/


const greet = (name) => {
    console.log(name)

}
greet("Gautam")

const square = (num) => {
    return num * num;
}

const add = (a, b) => {
    return a + b;
}

const isAdultAge = (age) => {
    return age >= 18;
}
console.log(isAdultAge(45));