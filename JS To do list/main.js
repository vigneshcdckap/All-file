"use strict"

var value=0;

function add(){

    let list=document.createElement("p");

    let  inputbox=document.getElementById("inp");

    let parent =document.createElement("div")
    parent.setAttribute("id","hea")
    let div=document.createElement("div")
    div.setAttribute("id","div1")

    let editButton=document.createElement('button');
    editButton.innerHTML=`<i class="fa-solid fa-pen-to-square" style="color: #000000;"></i>`
    editButton.setAttribute("id","edi")

    let rem=document.createElement("button")
    rem.innerHTML=`<i class="fa-solid fa-trash" style="color: #000000;"></i>`

    rem.addEventListener("click",delete1)
    editButton.addEventListener('click', edit)

    function delete1(){
        if (confirm("Are you sure want to delete this task")) {
        list.parentElement.remove();
    }
    }
    function edit() {
        value =list;
        console.log(value);
        inputbox.value = value.innerHTML;
   
    }
    rem.setAttribute("id","cle")
    if (inputbox.value === "") {
        alert("You did not give any value");
    }
    else if(value == 0) {
    list.innerText=inputbox.value;
    dem.append(parent)
    parent.append(list,div);
    div.append(editButton,rem);
    alert("Your Task is added");
    inputbox.value="";
}

else{

        value.innerHTML=inputbox.value;
        inputbox.value=""
        value=0
     
}



}
function remove() {
    if (confirm("All Task will be removed")){ 
    dem.innerText="";
}
}


let button=document.getElementById("btn");
button.addEventListener("click",add);
let delet=document.getElementById("del");
delet.addEventListener("click",remove);
