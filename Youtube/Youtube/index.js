"use strict"
let button=document.getElementById("mode")
let button_content=document.getElementById("cha")
let setting =document.getElementById("setting")
setting.classList.add("non")
let profile=document.getElementById("profile")
// console.log(button);
let top1=document.getElementById("top")

profile.addEventListener("click",()=>{
    setting.classList.toggle("non")
})

button.addEventListener("click",()=>
{
    // console.log(button.innerText)
    if(button_content.textContent=="Dark Mode") {
        // console.log("Inside IF")
        button_content.textContent="Light Mode"
    //    console.log("Inside  1")
    document.body.classList.toggle("black")
    top1.classList.toggle("black")
    setting.classList.toggle("black")
    let img=document.querySelectorAll("img")
    img.forEach((i)=>{
        i.classList.add("fil")
    })
    let icons = document.querySelectorAll('.sidebarIcons')
       icons.forEach((i)=>{
        i.classList.add('black1')
       
       })
     let path = document.querySelectorAll('.path')
         path.forEach((i)=>{
            i.classList.add('path1')
         })
         document.getElementById('input').style.background = 'black'

    }
    else{
        button_content.textContent="Dark Mode"
        document.body.classList.toggle("black")
        top1.classList.toggle("black")
        setting.classList.toggle("black")
        let icons = document.querySelectorAll('.sidebarIcons')
       icons.forEach((i)=>{
        i.classList.remove('black1')
       
       })
       let img=document.querySelectorAll("img")
       img.forEach((i)=>{
           i.classList.remove("fil")
       })
     let path = document.querySelectorAll('.path')
         path.forEach((i)=>{
            i.classList.remove('path1')
         })
         document.getElementById('input').style.background = 'white'


    }

})

