"use strict"


let Data=document.createElement("div");
    Data.setAttribute("id","Data")
let Data1=document.getElementById("Data")

  let hr=document.createElement("hr");

  Data.append(hr)

  let button=document.getElementsByTagName("button")
  
  
let p=["Lorem ipsum, or lipsum as it is sometimes known, is dummy "+
"text used in laying out print, graphic or web designs.","Get the ultimate"+
" creative toolkit including." +
"Now includes generative AI apps and features powered by Adobe Firefly.",
"The word 'lorem', for example, isn't a real Latin word, it's a shortened version "+
"of the word 'dolorem', meaning pain. "]




function add(x){
  if(x.parentElement.lastChild.innerHTML == Data.innerHTML){
      x.parentElement.lastChild.remove()
      x.innerHTML="+"
  
  }else{
    if(button[0]==x){
      Data.lastChild.remove()
      Data.append(hr,p[0])
      x.parentElement.append(Data)
      x.innerHTML="-"
      button[1].innerHTML="+"

      button[2].innerHTML="+"
    }
   else if(button[1]==x){
    Data.lastChild.remove()
      Data.append(hr,p[1])
      x.parentElement.append(Data)
      x.innerHTML="-"
      button[0].innerHTML="+"

      button[2].innerHTML="+"
    }
    else{
      Data.lastChild.remove()
      Data.append(hr,p[2])
      x.parentElement.append(Data)
      x.innerHTML="-"
      button[1].innerHTML="+"
      button[0].innerHTML="+"
    }
  }

}

