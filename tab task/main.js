"use strict"
// let button1=document.getElementById("btn1")
// let button2=document.getElementById("btn2")
// let button3=document.getElementById("btn3")

// let h3=document.getElementById("hea")
// let p=document.getElementById("para")
// let img=document.getElementById("cha")

// button1.addEventListener("click",first)
// button2.addEventListener("click",vision)
// button3.addEventListener("click",goal)

// function first() {
//     // button1.classList.add("hover")
//     button2.classList.remove("hover")
//     button3.classList.remove("hover")
//     button1.style.backgroundColor="white"
//     button1.style.pointerEvents="none"
//     button1.classList.remove("col1")
//     // button.classList.add("col")
//     button2.classList.add("col1")
//     button3.classList.add("col1")
//     img.src="montain.jpg"
//     h3.innerText="History"
//     p.innerText="Mountain, landform that rises prominently above its surroundings, generally exhibiting steep slopes, a relatively confined summit area, and considerable local relief. Mountains generally are understood to be larger than hills, but the term has no standardized geological meaning. Very rarely do mountains occur individually. In most cases, they are found in elongated ranges or chains. "
// }
// function vision() {
//     button1.style.pointerEvents=" visible"
//     button2.classList.add("hover")
//     button3.classList.remove("hover")
//     button1.classList.remove("hover")
//     button1.style.backgroundColor="#e7e7e7"
//     button2.classList.remove("col1")
//     button3.classList.add("col1")
//     // button.classList.add("col1")
//     button2.classList.add("col")
//     button3.classList.add("col1")
//     img.src="mount.jpg"
//     h3.innerText="Vision"
//     p.innerText="Mountainous terrains have certain unifying characteristics. Such terrains have higher elevations than do surrounding areas. Moreover, high relief exists within mountain belts and ranges. Individual mountains, mountain ranges, and mountain belts that have been created by different tectonic processes, however, are often characterized by different features."
// }
// function goal() {
//     button1.style.pointerEvents="visible"
//     button3.classList.add("hover")
//     button2.classList.remove("hover")
//     button1.classList.remove("hover")
//     button1.style.backgroundColor="#e7e7e7"
//     button3.classList.remove("col1")
//     button1.classList.add("col1")
//     button3.classList.add("col")
//     button2.classList.add("col1")
//     img.src="mount2.jpg"
//     h3.innerText="Goals"
//     p.innerText="Two properties of rocks contribute to the support of mountains, mountain belts, and plateaus, namely strength and density. If rocks had no strength, mountains would simply flow away. At a subtler level, the strength of the material beneath mountains can affect the scale of the topography."
// }

//..........................ForEach_Method.........................

let h3=document.getElementById("hea")
let p=document.getElementById("para")
let img=document.getElementById("cha")
// console.log(p);

let obj=[{
    head:"History",
    para:"Mountain, landform that rises prominently above its surroundings, generally exhibiting steep slopes, a relatively confined summit area, and considerable local relief. Mountains generally are understood to be larger than hills, but the term has no standardized geological meaning. Very rarely do mountains occur individually. In most cases, they are found in elongated ranges or chains.",
    img:"montain.jpg"
},
{
    head:"Vision",
    para:"Mountainous terrains have certain unifying characteristics. Such terrains have higher elevations than do surrounding areas. Moreover, high relief exists within mountain belts and ranges. Individual mountains, mountain ranges, and mountain belts that have been created by different tectonic processes, however, are often characterized by different features.",
    img:"mount.jpg"
},
{
    head:"Goals",
    para:"Two properties of rocks contribute to the support of mountains, mountain belts, and plateaus, namely strength and density. If rocks had no strength, mountains would simply flow away. At a subtler level, the strength of the material beneath mountains can affect the scale of the topography.",
    img:"mount2.jpg"
},
]
let button=document.querySelectorAll("button")
// console.log(button);

button.forEach((btn,index) => {
    console.log(btn);
    btn.addEventListener("click",change)
    function change() {
        console.log("hi");
        btn.focus();
        h3.innerHTML=obj[index].head;
        p.innerHTML=obj[index].para;
        img.src=obj[index].img
    }
})
