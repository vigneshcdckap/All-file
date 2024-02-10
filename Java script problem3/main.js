let number= prompt("Enter a Number");
if (number) {
    if (number%2==0) {
        console.log("Even");
        alert("Even");
    }
    else if(number%2<=1){
        console.log("Odd");
        alert("Odd");
    }
    else{
        console.log("This is not a number");
        alert("This is not a number");
    }
}
else{
    console.log("You did not type any number?");
    alert("You did not type any number?");
}  
let sum= prompt("Enter a Number");
if (sum) {
    
if(isNaN(sum)){
    console.log("This is not a number");
    alert("This is not a number");
}
else{
    console.log("This is a number");
    alert("This is a number");
}
}
else{
    console.log("You must have to type anything?");
    alert("You must have to type anything?");
}
let get1=prompt("Enter the first value");
let get2=prompt("Enter the second value");
if (get1,get2) {
    if(get1>get2){
        console.log(get1,"is larger");
        alert(get1+ "is larger");
    }
    else if(get1<get2){
        console.log( get2,"is larger ");
        alert(get2+ "is larger");
    }
    else{
        console.log("This is not a number");
       alert("This is not a number");
    }
}
else{
    console.log("You did not write any value");
    alert("You did not write any value");
}
let num1=parseInt(prompt("Enter the First value"));
let num2=parseInt(prompt("Enter the Second value"));
let num3=parseInt(prompt("Enter the Third value"));
if(num1,num2,num3){
    if (num1==num2 && num1==num3 && num2==num3){
        console.log("all values are same");
        alert("all values are same");
    }
    else if(num1>num2&&num1>num3){
        console.log(num1+"is the largest number");
        alert(num1 +"is the largest number");
    }
    else if(num2>num3){
        console.log(num2+"is the largest number");
        alert(num2 +"is the largest number");
    }
    else{
        console.log(num3+"is the largest number");
        alert(num3 +"is the largest number");
    }
}
else{
    console.log("You did not give any number");
    alert("You did not give any number");
}
let val1=prompt("Enter value to find range");
let val2=prompt("Enter value to starting range");
let val3=prompt("Enter value to ending range");
if (val1,val2,val3){
    if(val2<=val1&&val3>=val1){
    console.log("between the range");
     alert("between the range");
    }
    else{
        console.log("outside the range");
        alert("outside the range");
    }
}
else{
    console.log("You did not give the value");
    alert("You did not give the value");
}