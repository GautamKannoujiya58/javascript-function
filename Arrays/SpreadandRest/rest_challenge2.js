/*
🏢 Mini Challenge #2 (Rest)

Given

const scores = [95, 88, 76, 90, 81];

Using array destructuring with rest, create:

- highest
- remainingScores
*/

const scores = [95, 88, 76, 90, 81];

const [highest, ...remainingScores] = scores;

console.log("highest = ", highest);
console.log("remainingSocres = ", remainingScores);
