"use strict"
var doc=document.getElementById("container")
var btn1=document.createElement("button")
var btn2=document.createElement("button")
var con=document.createElement("div")
con.setAttribute("id","button")

var h3=document.getElementById("nam")
var h4=document.getElementById("fro")
var p=document.getElementById("para")
var img=document.getElementById("im1")


btn1.innerText="<"
btn2.innerText=">"

con.append(btn1,btn2)
doc.append(con)

var ArrObj =[{
    Img:"Vicky.jpg",
    Name:"Vignesh",
    Design:"Frontend Developer",
    About:"A front-end developer builds the front-end portion of websites and web applications—the part users see and interact with. A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript."   
},
{
    Img:"Hari.jpg",
    Name:"Hari",
    Design:"Web developer",
    About:"Web content development is the process of researching, writing, gathering, organizing, and editing information for publication on websites."

},
{
    Img:"Pattabi.jpg",
    Name:"Pattabi",
    Design:"Full Stack",
    About:"Full stack development refers to the end-to-end application software development, including the front end and back end. The front end consists of the user interface, and the back end takes care of the business logic and application workflows."

},
{
    Img:"Madhan.jpg",
    Name:"Madhan",
    Design:"Backend Developer",
    About:"Back-end development means working on server-side software, which focuses on everything you can't see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers."
}
]

btn1.addEventListener("click",function(){change(this)})
btn2.addEventListener("click",function(){change(this)})

var count=1;

function change(x){

    if (x.innerHTML==btn2.innerHTML) {
        img.src=ArrObj[count].Img
        h3.innerText=ArrObj[count].Name
        h4.innerText=ArrObj[count].Design
        p.innerText=ArrObj[count].About
        count++
        if (count == 4) {
            count=0
        }
    }
    else{
        count=count-2
        if (count<0) {
            count=3;
        img.src=ArrObj[count].Img
        h3.innerText=ArrObj[count].Name
        h4.innerText=ArrObj[count].Design
        p.innerText=ArrObj[count].About
        }
        else {
            img.src=ArrObj[count].Img
        h3.innerText=ArrObj[count].Name
        h4.innerText=ArrObj[count].Design
        p.innerText=ArrObj[count].About
        }
        count++;
    }
}
