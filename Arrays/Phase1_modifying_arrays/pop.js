/*
🏆 Challenge 3(This One Happens in Real Apps)

You're working on an Undo History feature.

Current history:

const history = [
    "Typed A",
    "Typed B",
    "Typed C"
];
*/

const history = ["Typed A", "Typed B", "Typed C"];

function undoHistory(history) {
    history.length = history.length - 1
    return history
}
// console.log(undoHistory(history));
// console.log(undoHistory(history));


/*
pop() does something extra.

Look:

const removed = history.pop();

console.log(removed);

Output:

Typed C

while the array becomes:

Typed A
Typed B

So pop() gives you two things:

-> Modified array
-> Removed element

This is incredibly useful.
*/



// ⭐ Mini Challenge (Very Important)
// Without using pop(), modify your function so that it returns BOTH:

/*
{
    removed: "Typed C",
        history: ["Typed A", "Typed B"]
}
*/

const history2 = ["Typed A", "Typed B", "Typed C"];

// console.log("historyObj", historyObj);


function undoHistory2(history2) {

    const undoed = history2[history2.length - 1]
    history2.length = history2.length - 1
    return { undoed, history2 };
}
console.log(undoHistory2(history2))
// console.log(undoHistory2(history2))












