"use strict"

let start=document.getElementById("pla")
let video=document.getElementById("vid1")

start.addEventListener("click",play)
function play() {
    if (video.paused) {
    video.play()
    start.innerHTML='<i class="fa-solid fa-circle" style="color: #ffffff;"></i>'+"Paused ";
    }
else{
    video.pause()
    start.innerHTML="Play"+'<i class="fa-solid fa-circle" style="color: #ffffff;">';
    start.style.fontSize="30px"
}
}