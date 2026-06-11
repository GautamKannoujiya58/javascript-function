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
