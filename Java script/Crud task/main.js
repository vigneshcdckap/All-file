"use strict"
let maincontainer=document.createElement("div");
maincontainer.setAttribute("class","maincontainer")

let container=document.createElement("div");
container.setAttribute("class","container");

let label1=document.createElement( "p");
label1.innerText="Product Code";

let input1=document.createElement("input");
input1.setAttribute("id","input1");
input1.setAttribute("type","number");
input1.setAttribute("placeholder","Code Number")

let label2=document.createElement("p");
label2.innerText="Product Name";

let input2=document.createElement("input");
input2.setAttribute("id","input2");
input2.setAttribute("placeholder","Name")

let label3=document.createElement( "p");
label3.innerText="Qty";


let input3=document.createElement("input");
input3.setAttribute("id","input3");
input3.setAttribute("type","number");
input3.setAttribute("placeholder","Quantity")

let label4=document.createElement( "p");
label4.innerText="Price";


let input4=document.createElement("input");
input4.setAttribute("id","input4");
input4.setAttribute("type","number");
input4.setAttribute("placeholder","$ Rupees")

let TwoBtn=document.createElement("div");
TwoBtn.setAttribute("class","Twobtn");
let SubBtn=document.createElement("button");
SubBtn.setAttribute("id","sub")
SubBtn.innerText="Submit";

let Resetbtn=document.createElement("button");
Resetbtn.setAttribute("id","res")
Resetbtn.innerHTML="Reset"

document.body.append(maincontainer)
container.append(label1,input1,label2,input2,label3,input3,label4,input4,TwoBtn)
TwoBtn.append(SubBtn,Resetbtn)
let container2=document.createElement("div")
container2.setAttribute("id","container2")
let Tabel=document.createElement("table");
// Tabel.setAttribute("border","2")
let tr=document.createElement("tr");
let th1=document.createElement("th");
th1.innerHTML="Product Code"


let th2=document.createElement("th");
th2.innerHTML="Product Name"

let th3=document.createElement("th");
th3.innerHTML="Qty"

let th4=document.createElement("th");
th4.innerHTML="Price"

tr.append(th1,th2,th3,th4);
Tabel.append(tr)
container2.append(Tabel)
maincontainer.append(container,container2)

SubBtn.addEventListener("click",SubFun);
Resetbtn.addEventListener("click",resetfun)

function SubFun(){
if (input1.value.length>0 && input2.value.length>0 &&input3.value.length>0 &&input4.value.length>0 ) {
    
let tr=document.createElement("tr");
let td1=document.createElement("td");
td1.innerText=input1.value;
input1.value="";

let td2=document.createElement("td");
td2.innerText=input2.value;
input2.value=""

let td3=document.createElement("td");
td3.innerText=input3.value;
input3.value=""

let td4=document.createElement("td");
td4.innerText=input4.value;
input4.value="";

let td5=document.createElement("td");

var Editbtn=document.createElement("button");
Editbtn.innerHTML=`<i class="fa-solid fa-pen-to-square" style="color: #000000;"></i>`;
Editbtn.setAttribute("class","edi")

let Delbtn=document.createElement("button");
Delbtn.innerHTML=`<i class="fa-solid fa-trash" style="color: #000000;"></i>`;
Delbtn.setAttribute("class","del")

td5.append(Editbtn,Delbtn);
tr.append(td1,td2,td3,td4,td5);
Tabel.append(tr);

Delbtn.addEventListener("click",DeleteFun)

function DeleteFun(){
if (confirm("Do you remove")) {
    td1.parentElement.remove();

}
}

Editbtn.addEventListener("click",EditFun)

function EditFun(){
 
input1.value=td1.innerText;
input2.value=td2.innerText;
input3.value=td3.innerText;
input4.value=td4.innerText;
td1.parentElement.remove();

}
}
else{
    alert("You did not give some value?")
}
}

function resetfun(){
input1.value="";
input2.value="";
input3.value="";
input4.value="";
}