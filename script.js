"use strict";

const objectUsername = [
    {
        username: "Saish",
        password: 1111,
    },
    {
        username: "Rob",
        password: 2222,
    },
    {
        username: "Maria",
        password: 3333,
    }, 
    {
        username: "Jamil",
        password: 4444,
    }
]

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const submitButton = document.querySelector("#register");

const logIn = function(e) {
    e.preventDefault();
    const usernameValue = username.value;
    const passwordValue = password.value;
    console.log(`Username: ${usernameValue} \n Password: ${passwordValue}`);

    for (const obj of objectUsername) {
        console.log(obj);
        if (obj.username.toLowerCase() === usernameValue.toLowerCase() && Number(obj.password) === Number(passwordValue)) {
            console.log("Logged in");
        } else {
            console.log("Try agin");
        }
    }
}

submitButton.addEventListener("click", logIn)