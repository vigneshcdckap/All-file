let age1=calcage(65);
let age2=calcage(0);
let age3=calcage(20);
function calcage(age){
    return(age*365);
}
console.log("Promblem1",age1,age2,age3);


let num1=lessthan100(22,15);
let num2=lessthan100(83,34);
let num3=lessthan100(3,77);
function lessthan100(x,y){
    var num=x+y<100?"True":"False";
    return(num);
}
console.log("Promblem2",num1,num2,num3);

let sec1=convert(2);
let sec2=convert(10);
let sec3=convert(24);
function convert(sec){
    return(sec*3600);
}
console.log("Promblem3",sec1,sec2,sec3);

let sum1=sumplygon(3);
let sum2=sumplygon(4);
let sum3=sumplygon(6);
function sumplygon(n){
    return((n-2)*180);
}
console.log("Promblem4",sum1,sum2,sum3);

let some1=givemesomthing("is better than nothing");
let some2=givemesomthing("Bob Jane");
let some3=givemesomthing("something");
function givemesomthing(a){
    return("Something"+" "+a);
}
console.log("Promblem5",some1);
console.log(some2);
console.log(some3);

let condition1=lessthanorequaltozero(5);
let condition2=lessthanorequaltozero(0);
let condition3=lessthanorequaltozero(-2);
function lessthanorequaltozero(z){
    var z=z<=0?"true":"false";
    return(z);
}
console.log("Promblem6",condition1,condition2,condition3);

let a=and(true,false);
let b=and(true,true);
let c=and(false,false);
let d=and(false,false);
function and(t,f){
    return(t&&f);
}
 console.log("Promblem7",a,b,c,d);

let farm1=animals(2,3,5);
let farm2=animals(1,2,3);
let farm3=animals(5,2,8);
function animals(x,y,z){
    return(x*2+y*4+z*4);
}
console.log("Promblem8",farm1,farm2,farm3);

let check1=checkequality(1,true);
let check2=checkequality(0,"0");
let check3=checkequality(1,1);
function checkequality(x,y){
    return(x===y);
}
console.log("Problem9",check1,check2,check3);

let sev1=isseven(4);
let sev2=isseven(9);
let sev3=isseven(7);
function isseven(s){
    var s=s==7?"true":"false";
    return(s)
}
console.log("Problem 10",sev1,sev2,sev3);