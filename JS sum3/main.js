"use strict"

// -------------------------------1--------------------------------
// var input=reverseString("Greek For Greek")

// function reverseString(a) {
//     var arr = a.split(""); 
 
//     var rev = arr.reverse();
//     var join = rev.join(""); 
    
//     return (join); 
// }
//  console.log(input);

var input="Greek For Greek"
var arr=input.split("")
// console.log(arr);
var rev ="";
for(let i=arr.length-1;i>=0;i--){
    rev+=arr[i]+" "
}
console.log(rev);



//-------------------------------2---------------------------------

//  var input2=reverse("the sky is blue")

//  function reverse(b) {
//     var arr2 = b.split(" ");
//     var rev2 =arr2.reverse();
//     return(rev2) 
// }
// console.log(input2.join(" "));

var input2="the sky is blue"
var arr2 = input2.split(" ");
var rev2 ="";
for(let i=arr2.length-1;i>=0;i--){
    rev2+=arr2[i]+" "
}
console.log(rev2);


//------------------------------3---------------------------------------

var wor="This might be hard";
var low=wor.toLowerCase()
var rem=""
var count=0;

for(var i=0;i<low.length;i++){
    if(!(low[i]=='a'||low[i]=='b'||low[i]=='c')){
       rem+=wor[i]
    }
    else{
        count++
    }

}
if (count !=0) {
    console.log(rem)   
}
else{
    console.log("Null");
}

//-------------------------------4---------------------------------

var uni=[-3,-3,5,5,-6,-2,-4,-1,3];
var add=[];
var a=0
for(var i=0;i<uni.length;i++){
  if (uni[i]>0 && (!(add.includes(uni[i])))) {
    add[a]=uni[i];
    a++;
  }

}
console.log(add);


// -------------------------------5---------------------------------

var mir=[1,2,3,4];
var count=(mir.length)+(mir.length-2);

for (let i=0; i<mir.length; i++) {
    mir[count]=mir[i]
    count--
}
console.log(mir);

//-----------------------------------6(Paolindrome)-------------------------------

var pao="dad";
pao=pao.trim();
var pao2="";
var count=0;

for (let i = pao.length-1; i >=0 ; i--) {
    
    pao2 =pao2+pao[i]
    
}
console.log(pao2);

if (pao==pao2 && pao!="") {
    console.log("It is palindrome");
}
else{
    console.log("It is not a palindrome");
}

var pao3=141;
var pao5=pao3;
var pao4=0;
var valid=1;
for (let i = 0; i <valid ; i++){
    if (pao3!=0) {
        pao4=(pao4*10)+(pao3%10);
        pao3=Math.floor(pao3/10);
        valid++;
    }
}
console.log(pao4);

if (pao4 == pao5) {
    console.log("It is palindrome");
}
else{
    console.log("It is not palindrome");
}

//--------------------------------7(Armstrong)---------------------------

var arm=isArmstrongNumber(153);
function isArmstrongNumber(number) {
    const numString = number.toString();
    const numDigits = numString.length;
    let sum = 0;
  
    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(numString[i], 10);
      sum += Math.pow(digit, numDigits);
    }
  
    return sum === number;
  }
  console.log(arm);
//------------------------------8(Fibonacii series)----------------------

var n=5;
var count=0;
var count1=1;
var empty="";

for(var i=0;i<=n;i++){
    empty=count+count1;
     count=count1;
     count1=empty;
    console.log(count1);
}

//----------------------------9(Prime Number)------------------------------


// ----------------------------10(Negative)---------------------------------------


var neg=[-1,-4,2,3,4,-2,-5]
var emp=[];
var count=0
for (let i =0; i < neg.length; i++) {
if (neg[i]<0) {
    emp[count]= neg[i];   
    count++
}
}
console.log(emp);

//---------------------------11(Star pattern)------------------------------------

let num=5;
for (var i=num;i>=0;i--){
  var pattern=""
    for(var j=1;j<=i;j++){
      pattern+="*"
    }
console.log(pattern);
}


let num1=5;

for (var i=1;i<=num1;i++){
    var pattern=""
    for(var j=1;j<=i;j++){
      pattern+=j
    }
    console.log(pattern);
}


// function Anagram(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if(len1 !== len2){
//        console.log('Invalid Input');
//        return
//     }
//     let str1 = a.toLowerCase().split('').sort().join('');
//     let str2 = b.toLowerCase().split('').sort().join('');

//     if(str1 === str2){
//        console.log("True");
//     } else { 
//        console.log("False");
//     }
//  }
// Anagram("HAri","RIha");
function sort(arr) {
    arr = arr.split("");
    for (i = 1; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
               var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join("");
}
console.log(sort("hari"));
