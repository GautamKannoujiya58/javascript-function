const user = { name: "Rahul", address: { city: "Mumbai" } };
const copy = { ...user }; // destructuring using spread operator

copy.address.city = "Pune";
console.log(user.address.city); // Mumbai user still have its own memory location no modification done directly to it
console.log(copy.address.city); // Pune, copy.address.city changed to Pune
console.log(user === copy); // false, two different reference point to the memory location
console.log(user.address === copy.address); // false, as thi

// but I think
console.log(copy.name === user.name); // True becoz we directly comparing the values