let check=document.querySelector("#check")
let inp=document.querySelector("#get")
let button=document.getElementById("sub")
button.addEventListener("click",(event)=>{
console.log(event);
if (inp.value.trim()==0) {
    alert("Please Fill InputBox");
    event.preventDefault()
}
else if(!check.checked){
    alert("Check The Terms And Conditions");
    event.preventDefault()
}
})

