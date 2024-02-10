"use strict"
var button=document.getElementById("col")
var para1=document.querySelectorAll("#cal")
var h1=document.getElementById("hea")
button.addEventListener("click",change)
function change() {
    console.log(button);
    if (button.innerText=="Dark mode") {
        button.innerText="Light mode"
        document.body.classList.toggle("black")
        para1.forEach(cha => {
            cha.classList.toggle("p1") 
        });
        h1.classList.toggle("p1")
        button.classList.toggle("b2")
    }
    else{
        button.innerText="Dark mode"
        document.body.classList.toggle("black")
        para1.forEach(cha => {
            cha.classList.toggle("p1") 
        });
        h1.classList.toggle("p1")
        button.classList.toggle("b2")
    }
}


