// ----------------1----------------------
var arr = [23,88,10,66,340,5, 789, 5638];
let arr1=arr[0]
for (let i=0; i< arr.length; i++) 
{
    if (arr[i]>arr1){
        arr1=arr[i]
    }
}
console.log(arr1+": biggest number")


//-----------------2----------------------

i;
for(i=0;i<=50;i++){
    if (i%2==0) {
    console.log(i+" "+"is even");
    }
    else{
    console.log(i+" "+"is odd");
    }
}


//----------------3------------------------

// let input=[1,2,3,4,5,6];
// let output=[];
// for(let i = input.length - 1; i >= 0; i--){
    
//     output.push(input[i]);
// }
// console.log(output);

// let arr=[95,28,3,67,5,456]
// let reverseArr=[]
// for(let i=arr.length-1;i>=0;i--)
// {
   
//    reverseArr[arr.length-1-i]=arr[i]
   
// }
// console.log(reverseArr)


var arr=[95,28,3,67,5,456]
let reverseArr=[]
let value = 0;
for(let i=arr.length-1;i>=0;i--)
{
   
   reverseArr[value]=arr[i]
   value++
   
}
console.log(reverseArr)

//---------------4--------------------------

let n=prompt("Enter a number")

for(i=n;i>=1;i--){
    let pattern=""     
    for(j=i;j>=1;j--){
        pattern +="*"+" " 
    }console.log(pattern);
}



//-------------5------------------------------

let str="engineering";
let count=0;


for(i=0;i<=str.length;i++){
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'|| str[i]=='o'|| str[i]=='u'){
    count=count+1;
}
}

console.log( count)



