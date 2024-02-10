"use strict"
let div2=document.createElement("div");
div2.setAttribute("class","container2");
let btn=document.createElement("button");
btn.innerText="Change Color";
btn.setAttribute("id","btn1");
let btn2=document.createElement("button");
btn2.innerText="Color Name";
btn2.setAttribute("id","btn2");
div2.append(btn,btn2);
document.body.append(div2);
let Color=["#4c685e","#618678","#46698c","#dea2c0","#b1351f","#946aa5","#f5a9b8",
"#6597c9","#236bb2","#99ccff","#86abc8","#003366","#ecd8e1","#e8d6d5",
"#e8d5de","#abbdd1","#b4c1bc","#a9b8b3","#94a7a0","#a8c6bb","#b69fbb",
"#f5b784","#dd7d6d","#d6cfd6","#d5ced6","#f6c9b4","#f8dfb6","#216182",
"#565359","#352100","#000000","#810000","#bcd9ff","#2a3439","#94d893",
"#60d1d4","#f5a9b8","#5bcefa","#e29926","#d32213","#b297a4","#808080"]

let i=0;
btn.addEventListener("click",col)
function col() {
   document.body.style.backgroundColor= Color[i]
   btn2.innerText=Color[i]
   i++
}