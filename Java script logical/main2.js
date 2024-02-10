"use strict"


// ---------------------------A--------------------------------------

console.log("------------Set A------------");


//----------------------1---------------
var num=348.97
num=num.toString( )
if (num.includes(".")) {
    var num1=num.split(".")    
    var num2=num1[1]
    var num3=num2.length
}
else{
    num3=0
}



console.log("1:"+num3);

//---------------------------------2-------------




var arr=[2,5,1,4,2,13,2,9,2,78,2,123];
// var arr = [1,2,3,4,5];
 var count=1;
 var num=0;

for(var i=0;i<arr.length;i++)
{
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
        num=arr[i];
        count=count+1;
        }
       
    }
    if (count != 1) {
      break;
    }

}
if (count != 1) {
  console.log("2:"+" num= "+num+" count= "+ count);
}
else{
  console.log("No repeated value");
}
   





// ---------------------------3------------------------------

// var array=[-2,6,7,4,-1]
var array=[-22,8,-3,4,-1,-4]
 
var positive=0;

  for(i=0;i< array.length;i++){
      if((array[i]>0)&& (array[i] % 2==0)||(array[i]< 0)&&( array[i] %2 !== 0)){
        positive++;
      } 
  }
console.log("3:"+positive)






     //-----------------------4--------------------

//  var x= countlages(3,4,10);
var x= countlages(7,3,4);
 
var count=0;
function countlages(x,y,z){
   return((x*2)+(y*4)+(z*4));

 } 
console.log("4:"+"Total Legs :"+x)

   //----------------------------B-----------------
   console.log("------------Set B------------");
//    -----------------------1--------------
var str="Hi welcome to DCKAP"
var str2=str.split(" ")
// console.log(str2);
for(var i=0;i<str2.length;i++){
  var str3=""
  for(var j=str2[i].length-1;j>=0;j--){
   str3+=str2[i][j]
  }
  str2[i]=str3
}
str2=str2.join(" ")
console.log("1:"+str2);


//------------------------2----------------


var arr1=[1,"text","true",10,7,"array",NaN]
// var arr1=[8, 3, 10, true,NaN]
var arr2=0

for(var i=0;i<arr1.length;i++){
        if (arr1[i] && typeof arr1[i]=="number"){
        // console.log(arr1[i]);
        arr2+=arr1[i]*2
    }
}
console.log("2:"+arr2);


//----------------------------3----------------


var input=checkstring([ "test", "organization","abc"],"ABC")

function checkstring(x,y) {
    var input1=x.join(" ").toLowerCase().split(" ")
    var input2=y.toLowerCase()
  input=input1.indexOf(input2)
  return input
}
console.log("3: "+input);






//------------------------C---------------------------


console.log("------------Set C------------");


//----------------------------1------------------------




var arr=transformArray([1, 2, 3, 4, 5], 2)
function transformArray(x,y) {
    var arr2=[]
    var count=0
    for(var i=0;i<x.length;i++){
      if (i %2 ==0) {
        arr2[count]=x[i]+2*y
        count++
        // console.log(arr2);
      }
      else{
        arr2[count]=x[i]-2*y
        count++
        // console.log(arr2);
      }
    }
    return arr2
}
console.log("1: "+arr);





//----------------------------2------------------------


var arr = [1, 2, 3, 4, 5];
var direct = "right";
var num = 1;
function rotateArray(x, y, z) {
    if (y === "right") {
      for (let i = 0; i < z; i++) {
        x.unshift(x.pop());
      }
    } else if (y === "left") {
      for (let i = 0; i < z; i++) {
        x.push(x.shift());
      }
    }
    return x;
  }
  var output = rotateArray(arr,direct, num);
  console.log("2: "+output);








  //------------------------D---------------------------

  console.log("------------Set D------------");

  //----------------------------1------------------------

  var ans="xxOo"
ans=ans.toLowerCase()
// console.log(ans);
var count=0;
var num=0
for(var i=0;i<ans.length;i++){
if (ans[i]=="x") {
    count++
    // console.log(count);
}
else if (ans[i]=="o") {
    num++
    // console.log(num);
}
}
if (count==num) {
    console.log("1: "+"True");
} else {
    console.log("1: "+"Flase");
}


//--------------------------------2----------------------------

var str="abcd";
var str1=str.split('');
// console.log(str1);
var str3="";

for(i=0;i<str1.length;i++){
    // console.log(str1[i]);
    str3+=str1[i].toUpperCase();
// console.log(str3);
    for(let j=0;j<i;j++){
    // console.log("i= "+i);

// console.log(j);
        str3+=str1[i]
    }
    str3+="-"

}
console.log("2: "+str3);




//--------------------------E-------------------

console.log("-----------Set E-------------");

//---------------------------- 1---------------------------------

var arr1 = [
  ["Nice", 845600],
  ["Abu Dhabi", 1482816],
  ["Naples", 2186853],
  ["Vatican City", 572]
];

var mill = millionRounding(arr1);



function millionRounding(x) 
{
  var arr = [];

  for (var i = 0; i < x.length; i++) 
  {
    var city = x[i][0];
    var population = x[i][1];

    var y = population < 500000 ? 0 : Math.round(population / 1000000) * 1000000;
    arr.push([city, y]);
  }

  return arr;
}

console.log(mill);


//--------------------- 2 ------------------------

var map = mapping(["a", "b", "c"]);

function mapping(x) 
{
  var obj = {};
  for(var i = 0; i < x.length; i++) 
  {
    // console.log(obj[x[i]] = x[i].toUpperCase());
    obj[x[i]] = x[i].toUpperCase();
  }
  return obj;
}
console.log(map);

//------------------------- 3  -----------------------------------

var pro = products({"computer": 600, "TV": 800, "radio": 50});

function products(x) {
  var arr1 = Object.keys(x);
  // console.log(arr1);
  var arr2 = [];
  for (var i = 0; i < arr1.length - 1; i++) 
  {
    for (var j = 1; j < arr1.length; j++) 
    {
      if (x[arr1[j]] > x[arr1[i]]) 
      {
        var temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
      }
    }
  }
  for (var k = 0; k < arr1.length; k++) 
  {
    if (x[arr1[k]] >= 500) 
    {
      arr2.push(arr1[k]);
    }
  }

  return arr2;
}
console.log(pro);



//--------------------- 4 ---------------------------------

var fre = frequencyDistribution(["A", "A", "B", "C", "B","a","A"]);

function frequencyDistribution(x) 
{
  var obj = {};
  for (var i = 0; i < x.length; i++) 
  {
    if(obj[x[i]] === undefined) 
    {
      obj[x[i]] = 1; 
    } 
    else 
    {
      obj[x[i]]++;
    }
  }
  return obj;
}

console.log(fre); 

//--------------------- 5 ---------------------

var people = family(0, "m");
  
function family(x, gender) 
{
  var male = {
    "-3": "great grandfather",
    "-2": "grandfather",
    "-1": "father",
    "0": "me",
    "1": "son",
    "2": "grandson",
    "3": "great grandson"
  };

  var female = {
    "-3": "great grandmother",
    "-2": "grandmother",
    "-1": "mother",
    "0": "me",
    "1": "daughter",
    "2": "granddaughter",
    "3": "great granddaughter"
  };

  let obj = gender === "m" ? male : female;

  console.log("5: "+obj[x]);

}