"use strict"
let Feedback = document.forms.feed;

let input =Feedback.inp;

let radio = Feedback.radio;

let Email = Feedback.email;

let text = Feedback.box;

let checkbox = Feedback.checkbox;

let invalidbox = document.querySelector(".invalid");

let content = document.querySelector(".alert");

let icon = document.getElementById("icon");

Feedback.addEventListener("submit", (event) => {
    event.preventDefault();

    invalidbox.classList.add("red");

    if (input.value.trim() == "") {

        content.innerHTML = "Please Enter Your Name";

    }
    else if (radio.value == "") {
        content.innerHTML = "Please Select Your Feedback Type";
    }
    else if (Email.value == "") {
        content.innerHTML = "Please Enter Your Email";
    }
    else if (text.value == "") {
        content.innerHTML = "Please Enter Your Feed Back";

    }

    else if (!(checkbox.checked)) {
        content.innerHTML = "Please Accept Terms And Conditions";

    }
    else {
        icon.style.display = "none";
        invalidbox.classList.add("green");
        content.innerHTML = "Submit Successfully";
    }

    setTimeout(() => {
        invalidbox.classList.remove("red");
        invalidbox.classList.remove("green");

    }, 1500);
})