"use strict"

var count = new Date("jan 1, 2024 11:30:00").getTime();
var button1=document.getElementById("btn1")
var button2=document.getElementById("btn2")
var button3=document.getElementById("btn3")
var button4=document.getElementById("btn4")

var count1=setInterval(function(){
    var date = new Date().getTime();
    var calculation=count-date;
    var days = Math.floor(calculation / (1000 * 60 * 60 * 24));
    var hours = Math.floor((calculation % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((calculation % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((calculation % (1000 * 60)) / 1000);
    button1.innerHTML=days+" DAYS"
    button2.innerHTML=hours+" HOURS"
    button3.innerHTML=minutes+" MINS"
    button4.innerHTML=seconds+" SECS"
    if (calculation<0) {
        clearInterval(count1)
        button1.innerHTML=0+" DAYS"
        button2.innerHTML=0+" HOURS"
        button3.innerHTML=0+" MINS"
        button4.innerHTML=0+" SECS"
    }
},1000)