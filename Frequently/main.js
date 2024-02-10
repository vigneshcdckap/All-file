"use strict"
// var button1=document.getElementById("btn1")
// var button2=document.getElementById("btn2")
// var button3=document.getElementById("btn3")

// var box1=document.getElementById("box3")
// var box2=document.getElementById("box4")
// var box3=document.getElementById("box5")

// button1.addEventListener("click",one)
// button2.addEventListener("click",two)
// button3.addEventListener("click",three)

// function one() {
//     if (button1.innerText=="+") {
//     box1.classList.remove("box3")
//     box1.classList.add("add")
//     box2.classList.add("blo")
//     box3.classList.add("blo")
//     button1.innerText="-"
//     button2.innerText="+"
//     button3.innerText="+"
// }
//     else if(button1.innerText=="-"){
//         box1.classList.add("box3")
//         box1.classList.remove("add")
//         box2.classList.remove("blo")
//         box3.classList.remove("blo")
//         button2.innerText="+"
//         button1.innerText="+"
//         button3.innerText="+"
//     }
// }
// function two() {
//     if (button2.innerText=="+") {
//         box2.classList.remove("box4")
//         box2.classList.add("add")
//         box1.classList.add("blo")
//         box3.classList.add("blo")
//         button1.innerText="+"
//         button3.innerText="+"
//         button2.innerText="-"
//     }
//         else if(button2.innerText=="-"){
//             box2.classList.add("box4")
//             box2.classList.remove("add")
//             box1.classList.remove("blo")
//             box3.classList.remove("blo")
//             button2.innerText="+"
//             button1.innerText="+"
//             button3.innerText="+"
//         }
// }
// function three() {
//     if (button3.innerText=="+") {
//         box3.classList.remove("box5")
//         box3.classList.add("add")
//         box1.classList.add("blo")
//         box2.classList.add("blo")
//         button1.innerText="+"
//         button2.innerText="+"
//         button3.innerText="-"
//     }
//         else if(button3.innerText=="-"){
//             box3.classList.add("box5")
//             box3.classList.remove("add")
//             box1.classList.remove("blo")
//             box2.classList.remove("blo")
//             button2.innerText="+"
//             button1.innerText="+"
//             button3.innerText="+"
//         }
// }


let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
btn1.parentElement.lastChild
let Box1=document.querySelector("#box3");
// console.log(Box1.innerHTML);
btn1.addEventListener("click",function(){AddFun(this)})
btn2.addEventListener("click",function(){AddFun(this)})
btn3.addEventListener("click",function(){AddFun(this)})

let box=document.getElementsByClassName("box3")
console.log(box[0]);
function AddFun(x){
   
    if(x.parentElement.lastChild.innerHTML==box[0].innerHTML){
console.log(("hi"));
//   x.parentElement.lastChild.remove();
Box1.classList.add("add")
x.innerHTML="-"

    }
    else{
        Box1.append(box[0])
       x.innerHTML="+"
    }
    // console.log(x.parentElement.lastChild.innerHTML);
}