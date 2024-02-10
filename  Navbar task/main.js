"use strict"
var div1=document.createElement("div")
div1.setAttribute("id","div1")
var div2=document.createElement("div")
var h1=document.createElement("h1")
var p=document.createElement("p")
var a=document.createElement("a")
var h=document.createElement("hr")
var p1=document.createElement("p")

a.setAttribute("href","index.html")
a.setAttribute("target","_self")

h1.innerText="Page Not Found"
p.innerText="Look like you've followed a broken link or entered a URL that doesn't exist on site"
a.innerText="< Back to our site"
p1.innerHTML="if this is your site,and you weren't expecting a 404 for this path.please vist Netlify's.<span id =span>page not found support guide </span> for troble shooting tips."
div2.append(h1,p,a,h,p1)
div1.append(div2)
document.body.append(div1)