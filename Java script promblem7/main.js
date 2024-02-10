//----------------1---------------------

var a = prompt("enter the value");

let valid = a.trim();

let input = Number(valid);

if(valid.length == 0)
{
    alert("Invalid")
}
else{
    if(input)
    {
        alert("is a not a string")
    }
    else{
        alert("Its a string")
    }
}

//----------------2-------------------------------

var b=prompt("Enter a value")

let blank=b.trim();

if(blank.length==0){
    console.log("true")

}
else{
    console.log("false")
}


// ------------------3---------------------------------


var c =prompt("Enter some word");
c=c.split(" ");
console.log(c);


//-----------------------4---------------------------------


var d=prompt("Enter a word");
var e=prompt("how many character do you want");

console.log(d.substr(0,e));


//------------------------5------------------------


let f=prompt("Enter your email");
let f1= f.search(/@/);
let f2= f.slice(4,f1);
let f3=f.replace(f2,"....");
console.log(f3);



//------------------------6---------------------------------------

var a= prompt("Enter a string");
var b= a.toLowerCase();
var end=b.replaceAll(" ","-")
console.log(end);


//------------------------7----------------------------------------


var str = prompt("Enter Word to change")


let str1 = str.split(" ");


for (let i = 0; i < str1.length; i++) {
    str1[i] = str1[i][0].toUpperCase() + str1[i].slice(1); 

}
let str2=str1.join(" ");
console.log(str2);



//-----------------------8-------------------------------------------

   let num = prompt('Enter the value ')
   onesplace=num%10;
   tenthplace=num%100;
   if (onesplace==1 && tenthplace!=11) {
    console.log(num+"st");
   } 
   else if(onesplace==2 && tenthplace!=12) {
    console.log(num+"nd");
   }
   else if(onesplace==3 && tenthplace!=13) {
    console.log(num+"rd");
   }
   else {
    console.log(num+"th");
   }


//------------------------9-------------------------------------------
let spl1=prompt("Enter an array")
let spl2=prompt("How many words do you want");
let spl3=spl1.split(" ");
spl3=spl3.slice(0,spl2)
console.log(spl3.join(" "));



//-----------------------10----------------------------------------------
 
let del1=prompt("Enter some words");
let del2=prompt("Enter which word to delete");
let del3=del1.replace(del2,"");
console.log(del3);



//------------------------11----------------------------------------------

var a=prompt("Enter a string");
var b=prompt("Check the word is matched");
a=a.toLowerCase();
b=b.toLowerCase();
var c = a.match(b);
if (c==b) {
    console.log("Matched");
} else {
    console.log("Not matched");
}


//--------------------------12-------------------------------------------

let compare1 = prompt("Enter to compare1");
compare1=compare1.toUpperCase();
let compare2=prompt("Enter to compare2");
compare2=compare2.toUpperCase();
let compare3=compare1.includes(compare2);
console.log(compare3);

// ---------------------------13-----------------------------------------------

let word = prompt("Enter a string to change the Character between Capital and Small");
var str = ""
for(j=0;j<word.length;j++){
    if(word[j].match(/[a-z]/)){
       str += word[j].toUpperCase()
    }else{
        str += word[j].toLowerCase()
    }
}
 console.log(str);