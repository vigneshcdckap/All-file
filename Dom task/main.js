"use strict"
let div1=document.createElement("div");
div1.setAttribute("class","container");
let div2=document.createElement("div");
div2.setAttribute("class","container2");
let img=document.createElement("img")
img.setAttribute("class","img1")
let btn=document.createElement("button");
btn.innerText="Change Image";
btn.setAttribute("id","btn1");
let btn2=document.createElement("button");
btn2.innerText="Pervious imgage";
btn2.setAttribute("id","btn2");
div1.append(img)
div2.append(btn,btn2);
document.body.append(div1,div2);
let image2=["img17.jpg"]
img.src=image2;
let image=['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg',
'img9.jpg','img10.jpg','img11.jpg','img12.jpg','img13.jpg','img14.jpg','img15.jpg','img16.jpg',
'img19.jpg','img21.jpg','img20.jpg','img18.jpg']

let i=0;
btn.addEventListener("click",col)
btn2.addEventListener("click",col2)
function col() {
    i++
    if (i<=19) {
    img.src=image[i]
    }
    else{
        i=0
    }
}
function col2() {
    i--
    if (i==0) {
    i=image.length-1   
    }
    else if (i<0) {
    i=image.length-1   
    }
    else{
     img.src=image[i]     
    }
}
