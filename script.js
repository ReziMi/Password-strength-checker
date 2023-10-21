function checkPassword() {
    let userPassword = document.getElementById('passwordInput').value;
    let result = document.getElementById('result');

    if (userPassword.length >= 8 && /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/.test(userPassword)) {
        result.textContent = `The password "${userPassword}" is a very strong password.`;
        result.style.color = "green";
    } else if (userPassword.length >= 8 && /^(?=.*[A-Za-z])(?=.*\d).+$/.test(userPassword)) {
        result.textContent = `The password "${userPassword}" is a strong password.`;
        result.style.color = "blue";
    } else if (userPassword.length < 8 && /^[A-Za-z]+$/.test(userPassword)) {
        result.textContent = `The password "${userPassword}" is a weak password.`;
        result.style.color = "orange";
    } else if (userPassword.length < 8 || /^\d+$/.test(userPassword)) {
        result.textContent = `The password "${userPassword}" is a very weak password.`;
        result.style.color = "red";
    } else {
        result.textContent = "Oh! I was supposed to not each be reached due to the previous catch-all regex checks";
        result.style.color = "grey";
    }
}
