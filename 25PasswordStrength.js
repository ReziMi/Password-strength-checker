let userPassword = prompt("Let's check how strong your password is. Enter it here: ")

function passwordValidation(userPassword) {
    if (userPassword.length >= 8 && /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).*$/.test(userPassword)) {
        console.log(`The password "${userPassword}" is a very strong password.`);
    } else if (userPassword.length >= 8 && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(userPassword)) {
        console.log(`The password "${userPassword}" is a strong password.`);
    } else if (userPassword.length < 8 && /^[A-Za-z]+$/.test(userPassword)) {
        console.log(`The password "${userPassword}" is a weak password.`);
    } else if (userPassword.length < 8 || /^\d+$/.test(userPassword)) {
        console.log(`The password "${userPassword}" is a very weak password.`);
    } else {
        console.log("Oh! I thought that I would not be ever reached due to the previous catch-all regex checks");
    }
}

passwordValidation(userPassword);
