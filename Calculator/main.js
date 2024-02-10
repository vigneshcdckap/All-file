"use strict"

let calculation=document.getElementById("result")

var arr=[]
var str="";

function che(x){
    calculation.value +=(x);
    // console.log(x);
    str +=x;

    //CHECKING WHETHER NUMBER OR SYMBOL
    if(parseInt(x) == x || x == "."){
        console.log("str= "+str);

        if(str.length<2){
            arr.push(x)
        }
        //if multiple digit = single number
        else{
            arr[arr.length-1]+=x
        }
    }

    else{
        str="";
        arr.push(x);
    }
console.log(arr);
}


function Clear(){
    calculation.value="";

    arr =[];

    str="";
    console.log(arr);
    console.log(str);
}


function del(){
    calculation.value=calculation.value.slice(0,-1)
}

var ans=0;

function eq(){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] =="/" || arr[i] == "*" || arr[i] == "%")
        {
         if(arr[i]=="/"){
            ans = arr[i-1] / arr[i+1];
            arr.splice(i-1,3,ans);
            i--;
             }
         else if(arr[i] == "*"){
            ans = arr[i-1] * arr[i+1];
            arr.splice(i-1,3,ans);
            i--;
             }
         else if (arr[i] == "%"){
            ans = arr[i-1] % arr[i+1];
            arr.splice(i-1,3,ans);
            i--;
            }
        }
    }

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] =="+" || arr[i] == "-")
        {
         if(arr[i]=="+"){
            ans = Number(arr[i-1]) + Number(arr[i+1]);
            arr.splice(i-1,3,ans);
            i--;
             }
         else{
            ans = arr[i-1] - arr[i+1];
            arr.splice(i-1,3,ans);
            i--;
             }
        }
    }
    
   
    console.log(arr);

    calculation.value=ans;

}
