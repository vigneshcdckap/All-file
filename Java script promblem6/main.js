let a = parseInt(prompt("enter a number 1:"));
let b = parseInt(prompt("enter a number 2:"));
let c = parseInt(prompt("enter a  number 3:"));
if(a,b,c){
if (a == b && a == c) {
    alert("All Number equal")
}
else if ((a == b)||(c == b)||(a == c)){


    if ((a > c) && (a == b)) {
        alert("A and B equal and it is biggest than C");
    }
    else if ((a < c) && (b == a)) {
        alert("A and B  equal and C is biggest ");

    }


    else if ((b > a) && (c == b)) {
        alert("B and c  equal and it is biggest than A ");
    } 
    else if ((b <a) && (b == c)) {
        alert("B and c  equal and A is biggest");
    }


    else if ((c > b) && (c == a)) {
        alert("A and c  equal and it is biggest than B ");
    }
    else {
        alert("A and c  equal and  B is biggest ");

    }
}
else {
    if (a > b && a > c) {
        alert("A is biggest number");

    }
    else if (b > c) {
       alert("B is biggest number")

    }
    else {
       alert("C is biggest number")

    }
}
}
else{
  alert("Invalid")
}

let year=parseInt(prompt("Enter A Year"));
if(year){
if ((year%4==0)&&!(year%100==0)||(year%400==0)) {
    alert("It is a leap year");
}
else {
    alert("It is not a leap year");
}
}
else{
    alert("You did not give a correct input");
}