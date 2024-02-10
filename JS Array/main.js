//----------------------1------------------------------

let input=find([1,2,3]);
function find(n) {
    return(n[0])    
}
console.log("1= ",input)


//----------------------2------------------------------

let a=checker([1,2,3,4,5],3);
function checker(a,b) {
    return(a.includes(b))
}
console.log("2= ",a)


//----------------------3-------------------------------

let rev=change([1,2,3,4]);
function change(r) {
    return(r.reverse())
}
console.log("3= ",rev);

//---------------------4--------------------------------

let pair=array(1,2);
function array(c,d) {
   return([c,d])
}
console.log("4= ",pair);

//--------------------5---------------------------------

let get=findindex(["hi","edabit","fgh","abc"],"fgh");

function findindex(g,f) {
   var g= g.indexOf(f)
    return(g);
}
console.log("5= ",get);

//------------------6---------------------------------------

let last=finale([1,2,3]);

function finale(l) {
    return(l[l.length-1]);  
}
console.log("6= ",last);

//-----------------7-------------------------------------------

let string= arr([1,2,3,4,5,6,7]);

function arr(e) {
    return(e.join(""));
}
console.log("7= ",string);

//-----------------8---------------------------------------------

let len=length("Hello World")

function length(i) {
 var b= i.slice(-1);
 var c=i.lastIndexOf(b);
 c=c+1;
 return(c);
}
console.log("8= ",len);