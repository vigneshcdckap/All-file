// let button=document.getElementById("btn1");
// button.addEventListener("click",col);
// let button2=document.getElementById("btn2");
// button2.addEventListener("click",col2);
// let button3=document.getElementById("btn3");
// button3.addEventListener("click",col3);

// function col() {
   
//     if(button){
//      if(button.innerText == "Click Me") {
//         button.style.backgroundColor="red";
//         button.style.color="white";
//         button.innerHTML="Clicked";
//     }
//     else {
//         button.style.backgroundColor= "blueviolet";
//         button.style.color="black";
//         button.innerHTML="Click Me";
//           }
    
   
// }
// }
// function col2() {
  
//         if(button2.innerText == "Click Me") {
//            button2.style.backgroundColor="red";
//            button2.style.color="white";
//            button2.innerHTML="Clicked";
//        }
//        else {
//            button2.style.backgroundColor= "blueviolet";
//            button2.style.color="black";
//            button2.innerHTML="Click Me";
//              }
       
   
// }
// function col3() {
  
//     if(button3.innerText == "Click Me") {
//        button3.style.backgroundColor="red";
//        button3.style.color="white";
//        button3.innerHTML="Clicked";
//    }
//    else {
//        button3.style.backgroundColor= "blueviolet";
//        button3.style.color="black";
//        button3.innerHTML="Click Me";
//          }
   

// }

let box = document.querySelectorAll("button");

for (let i = 0; i < box.length; i++) {

  box[i].addEventListener("click",function() {
    if ( box[i].innerHTML == "Click Me") 
    {
      box[i].classList.add("color")
      box[i].innerHTML = "Clicked";

    } else if( box[i].innerHTML == "Clicked") {
      box[i].classList.remove("color")
      box[i].innerText = "Click Me";

    }
  })
}