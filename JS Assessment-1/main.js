"usestrict"

//------------------------SET-B-----------------------------------


// // ------------------------1---------------------------

var input=[2,7,8,8,6,1,6,3]
var count=0
var count2=0
for(var i=0;i<input.length;i++){
        if (input[i]%2==0) {
           count=count+1
        }
        else if(input[i]%2!=0){
          count2=count2+1
        }
}
if (count == input.length / 2 && count2 == input.length /2) {
    console.log("It is a special array"); 
}
else{
    console.log("It is not special array"); 
}


// // -----------------------2------------------------------------

var prime1=10
for (let i = 1; i <=prime1; i++) {
    var primes=i
    var prime= isPrime(primes)  ? console.log(i," It is prime number") : console.log(i," It is not a prime number");
}

function isPrime(n) { 

    if (n <= 1) {

        return false; 
    }
    for (let j = 2; j < n; j++) {

        if (n % j == 0) {

            return false; 

        }


}
return true; 
}


// //------------------3----------------------------------

// var arr=["aaaaa","bc","eeeee","xyz"]
// arr=arr.join(" ")
// var arr2=[]
// var arr=arr.split("")
// var count=0
// for(var i=0;i<arr.length;i++){

//     if ((arr2.includes([i])==true)) {
//         arr2[count]=arr[i];
//         count++
//     }
// }
// console.log(arr2);


// // -------------------4--------------------------

var arr4=[5,8,1,4,2,9,3,7,6,89,96]
for(let i=0;i<arr4.length;i++){
    for(let j=i+1;j<arr4.length;j++){
    if ((arr4[i]) >(arr4[j])) {
        var temp=arr4[i];
        arr4[i]=arr4[j];
        arr4[j]=temp;
    }
    }
}
var big="";
var big2="";
var big3="";
var big4=""
var small="";
var small2="";
var small3=""
var small4=""
var small5=""
if (arr4.length<=5) {
    small=arr4.slice(0,1).join()
    small2=arr4.slice(1,2).join()
    big =arr4.slice(-1).join()
    big2=arr4.slice(-2,-1).join()
    var arr5=[small,big,small2,big2]
    console.log(arr5);
}
else if (arr4.length = 9) {
small=arr4.slice(0,1).join()
small2=arr4.slice(1,2).join()
small3=arr4.slice(2,3).join()
small4=arr4.slice(3,4).join()
small5=arr4.slice(4,5).join()
big =arr4.slice(-1).join()
big2=arr4.slice(-2,-1).join()
big3=arr4.slice(-3,-2).join()
big4=arr4.slice(-4,-3).join()
var arr5=[small,big,small2,big2,small3,big3,small4,big4,small5]
console.log(arr5);

}


// // ------------------------SET-A-----------------------------------



// // -------------------------1-----------------------------------------


var len=[ 78, 97, 790, 210, 192, 993 ]
var len2=[]
var count=0
for(let i=0;i<len.length;i++){
    if (len[i]%2 ==0) {
     len2[count]=len[i]
     count++
 }
}

 for(let j=0;j<len2.length;j++){
        for(let k=j+1;k<len2.length;k++){
        if ((len2[j]) >(len2[k])) {
            var temp=len2[j];
            len2[j]=len2[k];
            len2[k]=temp;
        }
    }
}
if (count > 0) {
   len2=len2.slice(-1)
   console.log(len2);
}
else{
console.log("-1");
}


// // ---------------------2---------------------------

var asc= "klizer"
var str = ""
for(j=0;j<asc.length;j++){
    if(asc[j].charCodeAt()%2==0){
       str += asc[j].toUpperCase()
    }else{
        str += asc[j].toLowerCase()
    }
}
 console.log(str);
 


// // ----------------------3-------------------------

// var num=9
// var count=0
// for (var i = 1; i <num; i++) {;
//         var num2 =i
//         // console.log(num2);
//         var num3=isnum(num2)
// }
// function isnum(x) {
   
//     for (let j = 1; j <num2; j++) {
//        var num4=(x*x)
//        if (num4[j] == num2[j]) {
//         count=count+1
//        }
//        else{
//         count=0
//        }
//     }
// return count

// }
// console.log(count);

// // ---------------------4--------------------------

// var a=[1,3,5,2,2]
// var b=[]
// var count=0
// for(var i=0;i<a.length;i++){
//      for (let j = i+1; j< a.length; j++) {
//        b[count]=a[i]+a[j]
//        count++
//     }
// }
// if (b.includes(a)==true) {
//     count++
// }
// console.log(count);
