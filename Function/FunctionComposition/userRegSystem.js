// Mini Project:

// User Registration System

function validateName(name) {
    let userLen = name.length;
    if (userLen < 3) {
        console.log("username must be 3 character long");
        return false;
    }
    return true;

}

function validateEmail(email) {
    if (email.includes("@")) {
        return true;
    } else {
        console.log("email must contain '@' ");
        return false;
    }

}
function registerUser(name, email) {
    if (validateName(name) && validateEmail(email)) {
        console.log("User registered successfully");
    }
    else {
        console.log("Registration failed");
    }
}

registerUser("De", "Kumar&gmail.com");
registerUser("Adam", "Ed@gmail.com");
registerUser("quickSilver", "quickSilvergmail.com");
registerUser("Rahul", "rahul@gmail.com");