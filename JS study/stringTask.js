

// ------------------ string or not -----------------

// var a = prompt("enter the value");

// let valid = a.trim();

// let inputParse = Number(valid);


// console.log(" value : "+valid.length)

// if(valid.length == 0)
// {
//     alert("INVALID INPUT")
// }
// else{
//     if(inputParse)
//     {
//         alert("is a not a string")
//     }
//     else{
//         alert("Its a string")
//     }
// }



// ----------------- blank or not -------------------


// var a=prompt("Enter a value")

// let blank=a.trim();

// console.log("blank : "+(blank.length==0))
// if(blank.length==0){
//     console.log("true")

// }
// else{
//     console.log("false")
// }


// ---------------- string to array -------------------

// let str=prompt("enter the value")

// let str2=str.split(" ")
// console.log(str2)


// ----------------- extract string part -----------------


// let str = prompt("Enter a value")
// let str1 = prompt("Enter a StartRange")
// let str2 = prompt("Enter a EndRange")
// let str4= str.slice(str1,str2)
// console.log(str4);


// ------------------ hide email ---------------------

// let e=prompt("Enter your email");
// let e1=e.search(/@/);
// let e2=e.slice(4,e1);
// let e3=e.replace(e2,"....");

// console.log(e3);

// let index=prompt("Enter the string");
// let index1=index.substring(0,4);
// let testIndex = index.search("@");
// let index2=index.slice(testIndex)
// console.log(index1+"...."+index2)
