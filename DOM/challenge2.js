console.log("Hello, from challenge2.js");

const loginForm = document.getElementById('login-form');
const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');
const banner = document.getElementById('feedback-banner');




loginForm.addEventListener('submit', (e) => {
    console.log("Clicked");
    e.preventDefault();
    const emailValue = userEmail.value
    const passwordValue = userPassword.value;

    if (passwordValue.length < 8) {
        // banner.display.style = 'block';
        banner.textContent = "Validation Error: Password must be at least 8 characters.";
    } else {
        // banner.style.display = 'block';
        banner.textContent = `Authenticating user: ${emailValue}...`;
        console.log({ email: emailValue, password: passwordValue });
    }
})
