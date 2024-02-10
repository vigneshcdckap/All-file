 let  a = addition(3,2);
 let  b = addition(-3,-6)
 let  c = addition(7,3)

function addition(x,y){

   return(x+y)
}
 console.log("Addition",a,b,c);

let num1=convert(5);
let num2=convert(3);
let num3=convert(2);

function convert(m){
   return(m*60)
}
console.log("Minutes",num1,num2,num3);

let area1=triangle(3,2);
let area2=triangle(7,4);
let area3=triangle(10,10);

function triangle(l,b){
 return(l*b/2);
}
console.log("Area of triangle",area1,area2,area3);

let n1=next(0);
let n2=next(9);
let n3=next(-3);

function next(n){
 return(n+1);
}
console.log("Next Number",n1,n2,n3);

let r1=remainder(1,3);
let r2=remainder(3,4);
let r3=remainder(-9,45);
let r4=remainder(5,5);

function remainder(x,y){
return(x%y);
}
console.log("Remainder",r1,r2,r3,r4);