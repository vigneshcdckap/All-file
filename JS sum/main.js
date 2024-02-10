"use strict"
// -------------------1----------------------

// let numbersum=[1,2,3,4,5,"true"];
// let arr2=0;
// let add=sum()
// function sum() {
//     for (let i = 0; i <= numbersum.length; i++) {
//         if (typeof numbersum[i]== "number" ) {
//             arr2+=numbersum[i];   
//         }
    
//     }   
// }
// console.log(arr2);
// -------------------2----------------------


// let arr=[90,19,55,80,22,11]
// for(let i=0; i<arr.length; i++)
// {
//    for(let j=i+1; j<=arr.length-1; j++)
//    {
//        if (arr[i]<arr[j])
//        {
//          let temp=arr[i];
//         //  console.log(temp);
//          arr[i]=arr[j];
//         //  console.log(arr[i]);
//          arr[j]=temp;
//         //  console.log(arr[j]);

//        }

//    }
// }
// // console.log(arr);
// arr=secondlargest();
// function secondlargest(){
//    // console.log(arr);
//    let arr1=arr.slice(0,2)
// //    console.log(arr1);
//    arr1=arr.splice(1,1);
//    console.log(arr1);

// }
// --------------------3-------------------------

// var obj=toarr({D:"1",B:"2",C:"3"})
// function toarr(x) {
//     let obj2=[]
//         for(let i in x){
//        obj2[i]=[i,x[i]]
//         }
//         console.log(obj2);
// }

// --------------------4-----------------------
// let a1 = change([3,5,1,6,2,4],"Asc")
// // let b = change([7,8,11,66],"Dec")
// // let c = change([1,2,3],"None")
// // let d = change([]);
// function change(x, y)
// {
//     if(y == "Asc")
//     {
//         for(var i=0; i<x.length; i++)
//         {
//             // console.log(x)
//             for(var j=i+1; j<=x.length-1; j++)
//             {
//                 if(x[i]<x[j])
//                 {
//                     let temp = x[i];
//                     x[i] = x[j];
//                     x[j] = temp;

//                 }
//             }
//         }
//     }
//     else if(y == "Dec")
//     {
//         for(i=0; i<x.length; i++)
//         {
//             // console.log(x)
//             for(j=i+1; j<=x.length-1; j++)
//             {
//                 if(x[i]>x[j])
//                 {
//                     let temp = x[i];
//                     x[i] = x[j];
//                     x[j] = temp;

//                 }
//             }
//         }
//     }
//     else if(y == "None")
//     {
//         for(i=0; i<x.length; i++)
//         {
//             // console.log(x)
//             for(j=i+1; j<=x.length-1; j++)
//             {
//                 if(x[i]==x[j])
//                 {
//                     let temp = x[i];
//                     x[i] = x[j];
//                     x[j] = temp;

//                 }
//             }
//         }
//     }
//     else
//     {
//         alert("It's an empty array");
//     }
//     return x;
// }
// console.log(a1);



//----------------------5------------------------

let arr = [1,1,2,4,4,5,5,3];
 
let arr1= [];

let count =0;
 
for (let i = 0; i < arr.length; i++) { 

    if (arr1.includes(arr[i]) == false) {
        arr1[count]=arr[i];
     count++
    }

}
 console.log(arr1);


