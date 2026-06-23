/* Callback Mini Project: Food Delivery Simulation

This is the first project where callbacks actually start feeling useful.
*/


const sendEmail = () => {
    console.log("Email Sent");
}

const sendWelcomeNotification = () => {
    console.log("Welcome Notification Sent");
}

const createAccount = (action1, action2) => {
    console.log("Account created");

    action1();
    action2();
}
createAccount(sendEmail, sendWelcomeNotification);




const multiplyBy = (num) => {

    return (value) => {
        return value * num;
    }

}
// returns a function

const double =
    multiplyBy(2);
// double === (2) =>{return 2 *num}

console.log(
    double(10)  // returns 20
);