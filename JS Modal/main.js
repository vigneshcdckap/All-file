"use strict"

var div1=document.createElement("div")
div1.setAttribute("id","container")
var div2=document.createElement("div")
div2.setAttribute("id","mak")
var div3=document.createElement("div")
div3.setAttribute("class","show")
div3.setAttribute("id","show")
var hea=document.createElement("h1")
hea.innerText="Modal Project"
var btn1=document.createElement("button")
btn1.setAttribute("id","btn")
btn1.innerText="Open Modal"
var btn2=document.createElement("h3")
btn2.setAttribute("id","close")
btn2.innerHTML=`<i class="fa-solid fa-xmark fa-xl" style="color: #e0200b"></i>`
var hea2=document.createElement("h2")
hea2.innerText="Modal content"

div2.append(hea,btn1)
div1.append(div3)
div3.append(btn2,hea2)
document.body.append(div1,div2)

var modal = document.querySelector("#show");
var btn = document.querySelector("#btn");
var del = document.querySelector("#close");

btn.onclick = function() {
	div1.classList.add("add")
	div2.classList.add("none")
	div3.classList.remove("show")

		// modal.style.display = "block";
		// document.getElementById("mak").style.display="none"
		// document.getElementById("container").style.display="block"

	}
	del.onclick = function() {
		div1.classList.remove("add")
		div2.classList.remove("none")
	    div3.classList.add("show")
		// modal.style.display = "none";
		// document.getElementById("mak").style.display="block"
		// document.getElementById("container").style.display="none"
	}
