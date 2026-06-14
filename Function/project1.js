/* 
EASY PROJECT 1:
Create function greetStudent()

Input:
Student Name

Output:
Hello Gautam
Welcome To JavaScript
*/


function greetStudent(name) {
    console.log(`Hello ${name} \nWelcome To Javascript`);

}

greetStudent("Gautam") // Execution

/*
Learning:
Function creation
Function execution
Code organization
*/



/*
EASY PROJECT 2:
Age Checker:

Below 18
→ Minor

18-60
→ Adult

60+
→ Senior Citizen
*/

function checkAge(age) {

    if (typeof age != "number" || age <= 0) {
        console.log("Invalid age");
        return;
    }
    if (age < 18) {
        console.log("Minor");
    }
    else if (age >= 18 && age <= 60) {
        console.log("Adult");
    }
    else {
        console.log("Senior Citizen");
    }

}

checkAge(-9)
checkAge("Joe")
checkAge(15);
checkAge(109);
checkAge(45);


/*
EASY PROJECT 3:
GST Calculator:

Amount + 18%

E.g.
1000 → 1180
500 → 590
*/

function calculateGST(amount) {

    let GST = 18 / 100 * amount;
    return GST + amount;
}
console.log(calculateGST(1000));
console.log(calculateGST(50));




// Challenge A:

function calculateRectanagleArea(length, width) {
    return area = length * width;
}

// Challenge B:

function isEvenNumber(num) {

    if (num % 2 != 0) {
        return false;
    } else {
        return true;
    }

}

// Challenge C:

function calculateTotalMarks(mark1, mark2, mark3) {
    return mark1 + mark2 + mark3;
}

function calculatePercentage(mark1, mark2, mark3) {
    const totalMarks = calculateTotalMarks(mark1, mark2, mark3);
    return totalMarks / 300 * 100;
}

calculateRectanagleArea(10, 5);
isEvenNumber(8);
isEvenNumber(5);
console.log(calculatePercentage());;
