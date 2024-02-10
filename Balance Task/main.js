"use strict"

var textInput = document.querySelector('.textbox');
var amountInput = document.querySelector('.amountbox');
var button = document.querySelector('button');
var yourbalance= document.querySelector('#hig');
var increment = document.querySelector('.add span');
var decrement = document.querySelector('.low span');
var div2=document.querySelector('.get2')



button.addEventListener('click', add);

var balance = 0;
var income = 0;
var expense = 0;

function replace() {
    yourbalance.innerHTML = balance;
    increment.innerHTML = income;
    decrement.innerHTML = expense;
}

function add() {
    var h31=document.createElement("h3")
    var h32=document.createElement("h3")
    var div=document.createElement("div")
    var emp=document.createElement("div")
    emp.setAttribute("class","flex") 
    div.setAttribute("id","box")
    var del=document.createElement('button')
    del.innerHTML=`<i class="fa-light fa-x" ;"></i>`
    del.setAttribute("class","close")
    h31.setAttribute("class","wei")
    h32.setAttribute("class","wei")

    var text=textInput.value
    var amount=parseInt(amountInput.value)
    if (text.length<1 ) {
        alert('Please enter valid text and amount.');
    }
else{
    if ( parseInt(amount)> 0) {
        income +=  parseInt(amount);

        h31.innerHTML=text
        h32.innerHTML="+"+amount
        div.append(h31,h32)
        div.classList.add("green")
        del.classList.add("blo")
        emp.append(del,div)
        div2.append(emp)
        del.parentElement.addEventListener("mouseover",()=>{
            del.classList.add("non")
            del.classList.remove("blo")
        })
        del.parentElement.addEventListener("mouseout",()=>{
            del.classList.remove("non")
            del.classList.add("blo")
        })
 
    
    } else {
        expense += Math.abs(amount);
        h31.innerHTML=text
        h32.innerHTML=amount
        div.append(h31,h32)
        div.classList.add("red")
        emp.append(del,div)
        div2.append(emp)
        del.parentElement.addEventListener("mouseover",()=>{
            del.classList.add("non")
            del.classList.remove("blo")
        })
        del.parentElement.addEventListener("mouseout",()=>{
            del.classList.remove("non")
            del.classList.add("blo")
        })
 
    }

    balance = income - expense;
    textInput.value = '';
    amountInput.value = '';

    replace();
del.addEventListener('click',clear)
function clear() {
 var rem= del.nextSibling.lastChild.innerText
    if (parseInt(rem)>0) {
       income-=Math.abs(rem)
       balance-=Math.abs(rem)
    }
    else{
        expense-=Math.abs(rem)
        balance+=Math.abs(rem)
    }
    del.parentElement.remove()
    replace()
}
}
}
