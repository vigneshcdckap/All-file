"use strict"
// --------------------1------------------------------

// for(let i=1;i<=20;i++){
//     if (i % 3==0 && i % 5==0) {
//         console.log("FizzBuzz")
//     } else if(i % 3 ==0) {
//         console.log("Fizz")
//     }
//     else if(i % 5 ==0) {
//     console.log("Buzz")
//     }
//     else {
//     console.log(i)
//     }
// }

//---------------------2------------------------------

// var arr=arrayofmultiply(7,5);

// function arrayofmultiply(x,y) {

//     let arr1=[]
//     for (let i= 0; i < y; i++) {
        
//         arr1[i]= x*(i+1);
        
//     }
//     console.log(arr1);
// }

//--------------------3----------------------------------

// var arr =sum([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15])

// function sum(x) {
//     let count =0
//     let sum =0

//     for(let i=0;i<x.length;i++){
//         if (x[i]>0) {
//         count++
//         }
//         else{
//         sum=sum+x[i]
//         }
//     }
//      console.log(count +","+ sum);
// }

//----------------------4--------------------------------------

// var arr2=sum2([8,6,4,5,7,3,2,1,10])

// function sum2(x) {
//     let arr1=""
//     for(let i=1;i<=10;i++){     
//         if(!(x.includes(i))) {
//             arr1=i;
//             console.log(arr1);
//         }
//     } 
// }

// -----------------------5-------------------------------------

// var arr3 = ("24 585 6 14 15");
// var arr4= arr3.split(" ");
// for(let i=0;i<arr4.length;i++){
//     for(let j=i+1;j<arr4.length;j++){
//     if (Number(arr4[i]) >Number(arr4[j])) {
//         let temp=arr4[i];
//         arr4[i]=arr4[j];
//         arr4[j]=temp;
//     }
//     }
// }
// // console.log(arr4);

// var big="";
// var small="";

// small=arr4[0]
// console.log(small);
// big =arr4.slice(-1)
// console.log(big);

// console.log(+big.join()+" "+small);