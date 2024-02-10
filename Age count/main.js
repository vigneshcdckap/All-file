var date=document.querySelector("input")
var btn=document.querySelector("button")
var show=document.querySelector("h3")
var now1=new Date().toISOString().slice(0,10)
// console.log(now1);
date.addEventListener("click",cal)
function cal() {
    date.setAttribute("max",now1)
}

btn.addEventListener("click",time)
function time() {
    if (date.value.length>1) {{
        var date1=new Date(date.value)
        var year1=date1.getFullYear()
        var month1=date1.getMonth()+1
        var day1=date1.getDate()
        var now=new Date()
        var year=now.getFullYear()-year1
        var month=now.getMonth()+1
        if (month<month1) {
            year--
            month=month+12-month1
            // console.log("worked if MON");
        }
        else{
            // console.log("worked else MON");
             month=month-month1
        }
        var day=now.getDate()
        if (day<day1) {
            month--
            day=day+31-day1
            // console.log("worked If");
        }
        else{
            day=day-day1
            // console.log("worked Else");
        }
}
  if (parseInt(month) < 0) {
    show.innerText=year+" Years "+11+" Months "+day+" Days "
    console.log("true");
  }
 
  else{
  show.innerText=year+" Years "+month+" Months "+day+" Days "
  console.log("Flase");
  }
}
else{
    alert("Invalid Date")
}
}