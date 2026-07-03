// Challenge 1:

const categories = ["Food", "Travel", "Shopping", "Bills"];

function validateCategory(categories, category) {
    for (let i = 0; i < categories.length; i++) {
        if (categories[i] === category) {
            console.log("category exists");
            return;
        }
    }
    console.log("category doesn't exists");

}

validateCategory(categories, "mycategory"); // category doesn't exists
validateCategory(categories, "Shopping"); // category exists
