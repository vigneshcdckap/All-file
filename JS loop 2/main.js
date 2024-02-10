// -------------------------1--------------------------------

let arr=[13,23,12,45,22,48,66,100]
let out=[]
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0)
   out.push(arr[i])
  
}
console.log(out);
i=0;
while (i<arr.length) {
 if(arr[i]%2==0)
 out.push(arr[i]);
i++;
console.log(out);
}
i=0;
do {
    if (arr[i]%2==0) 
    out.push(arr[i]);
    i++;
    console.log(out);
    
} while (i<arr.length);



// -------------------------2--------------------------------

let arr2=[23,56,4,78,5,56,45,56,210,56];
let out2=[]
for(i=0;i<arr2.length;i++){
    if(arr2[i]==56)
    continue
   out2.push(arr2[i])
}
console.log([out2]);

i=0
while (i<arr2.length) {
 if(arr2[i]!=56)
 out2.push(arr2[i]);
i++;
console.log(out2);
}


i=0
do{
 if(arr2[i]!=56)
 out2.push(arr2[i]);
i++;
console.log(out2);
}
while (i<arr2.length) 


// -------------------------3--------------------------------

let arr3=num(4,2);
function num(p,o) {
   var num2=1
   for(i=0;i<o;i++){
    num2=num2*p
   }
   return(num2)
}
console.log(arr3);




//--------------------------4---------------------------------

var n = 9;
var pattern = "";
for(i=1;i<=n;i++)
{
    for(j=1;j<i;j++)
    {
        pattern += j;
    }
    pattern += "\n";
}
console.log(pattern);

var i=0;
var j=0;
var n=8;
var pattern="";
while(i<n){
    {
        i++;
        while (j<i) {
            j++
            pattern+=j;
            console.log(pattern);
        }
    }
}

var i=0;
var j=0;
var n=8;
var pattern="";
do{
    
        i++;
        do{
            j++
            pattern+=j;
        }
        while (j<i)
            console.log(pattern);
        
    }

while(i<n)

//--------------------------5----------------------------------

let a = '563349';
for(i=0; i<a.length; i++)
{
    a = (a.length+1)-1;
}
console.log(a);


            
var i=0;
while(i<a.length)
{
    i++;
    a = (a.length+1)-1;
}
console.log(a);
    
var i = 1;
do
{
    i++;
    a = (a.length+1)-1;
    console.log(a);
}
while(i<a.length);





//-------------------------Date----------------------------------

let d= Date();
document.write(d);