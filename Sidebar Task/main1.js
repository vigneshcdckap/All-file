var btn=document.getElementById("cli")
var btn2=document.getElementById("clo")
var con=document.getElementById("container")

btn.addEventListener("click",button);
btn2.addEventListener("click",buttons)
function button() {
    if(con.style.display="none") {
        con.style.display="flex"
        console.log("hi");
    }
}
function buttons() {
        con.style.display="none"
}