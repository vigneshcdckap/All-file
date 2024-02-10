let count=0;

document.getElementById("btn1").onclick=function(){
    count--
    document.getElementById("countnum").innerHTML=count;
    if (count<0) {
        document.getElementById("countnum").style.color="red";
    }
    else if(count==0){
        document.getElementById("countnum").style.color="black";
    }
}

document.getElementById("btn2").onclick=function(){
    count=0;
    document.getElementById("countnum").innerHTML=count;

        document.getElementById("countnum").style.color="black";
}
document.getElementById("btn3").onclick=function(){
    count++;
    document.getElementById("countnum").innerHTML=count;

    if (count>0) {
        document.getElementById("countnum").style.color="rgb(60, 179, 113)";
    }
     else if(count==0){
        document.getElementById("countnum").style.color="black";
    }
}