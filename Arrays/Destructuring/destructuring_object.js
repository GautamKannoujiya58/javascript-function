// Destructuring Object
// What is Destructuring

const person = {
    username: "Gautam",
    age: 25,
    city: "Mumbai",
}

// If I ask you to store the name in another variable, you'd probably write:
const name = person.username;
console.log(name);

// Destructuring
const { username, age, city } = person;
console.log(username, age, city); // the destructured variable name and actual keys name of the object should be same


