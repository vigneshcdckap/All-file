var a=document.getElementById("num1").value;
var b=document.getElementById("num2").value;
function addition(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    document.getElementById("add").innerHTML=parseInt(a)+parseInt(b);
 }
 function subration(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    document.getElementById("sub").innerHTML=parseInt(a)-parseInt(b);
 }
 function multiply(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    document.getElementById("mul").innerHTML=parseInt(a)*parseInt(b);
 }
 function divide(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    document.getElementById("div").innerHTML=parseInt(a)/parseInt(b);
 }