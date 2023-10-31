"use strict"

function add(){
    let list=document.createElement("li");
    let  inputbox=document.getElementById("inp");
    let rem=document.createElement("button")
    rem.innerHTML=`<i class="fa-solid fa-trash" style="color: #000000;"></i>`
    rem.addEventListener("click",delete1)
    function delete1(){
        rem.parentElement.remove();
        alert("Task has been deleted")
    }
    rem.setAttribute("id","cle")
    if (inputbox.value === "") {
        alert("You did not give any value");
    }
    else {
    list.innerText=inputbox.value;
    dem.append(list);
    list.append(rem);
    alert("Your Task is added");
    inputbox.value="";
}
}

function remove() {
    alert("All Task are removed")
    dem.innerText="";
}

let button=document.getElementById("btn");
button.addEventListener("click",add);
let del=document.getElementById("del");
del.addEventListener("click",remove);
