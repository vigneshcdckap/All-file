var form=document.forms.sign
var password = document.getElementById('password')
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var charcter=document.getElementById("special");
var icon=document.getElementById("eye")
var icon2=document.getElementById("eye2")
var confirm1= document.getElementById('confirmPassword')
// console.log(charcter);
icon.innerHTML=`<i id="eye" class="fa-regular fa-eye"></i>`
icon2.innerHTML=`<i id="eye" class="fa-regular fa-eye"></i>`

icon.addEventListener("click",function() {
if (password.type =='password') {
  password.type='text'
  icon.innerHTML=`<i class="fa-regular fa-eye-slash"></i>` 
}
else if (password.type =='text') {
  password.type='password'
  icon.innerHTML=`<i id="eye" class="fa-regular fa-eye"></i>`
}
})
icon2.addEventListener("click",function() {
  if (confirm1.type =='password') {
    confirm1.type='text'
    icon2.innerHTML=`<i class="fa-regular fa-eye-slash"></i>` 
  }
  else if (confirm1.type =='text') {
    confirm1.type='password'
    icon2.innerHTML=`<i id="eye" class="fa-regular fa-eye"></i>`
  }
  })

form.addEventListener('submit',validateForm)

password.addEventListener("focusin",display)
password.addEventListener("focusout",display1)

function display() {
    document.getElementById("message").style.display = "block";
}

function display1() {
    document.getElementById("message").style.display = "none";
}
password.addEventListener('keyup',function() {

    var upperCaseLetters = /[A-Z]/g;
    if(password.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    var lowerCaseLetters = /[a-z]/g;
    if(password.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
  
    var numbers = /[0-9]/g;
    if(password.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    if(password.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }

    let special =  /[ ""!"#$%&'()*+,-./:;<=>?@^_`~{}|]/g;
    if(password.value.match(special)) {
      charcter.classList.remove("invalid");
      charcter.classList.add("valid");
    } else {
      charcter.classList.remove("valid");
      charcter.classList.add("invalid");
    }
  })

  var flex1=document.getElementById("inv")
  var flex2=document.getElementById("inv2")
  var flex3=document.getElementById("inv3")
  var flex4=document.getElementById("inv4")
  var flex5=document.getElementById("inv5")
  var flex6=document.getElementById("inv6")

function validateForm(event) {

    event.preventDefault();
    var name=document.getElementById('name').value;
    var mobile=document.getElementById('phone').value
    var email = document.getElementById('email').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var username=document.getElementById('user').value

  
var emailRegex = /^\S+@\S+\S+$/;


var nameRegex =/[a-z]{3,}/gi;

var mobileRegex = /^\d{10}$/;

var usernameRegex = /^[a-zA-Z0-9_]{3,}/g;

   
    if (!nameRegex.test(name)) {
        // alert("Invalid Name.");
        flex1.classList.remove("mar1")
        flex1.classList.add("mar2")
        // return;
      }
      else{
        flex1.classList.remove("mar2")
        flex1.classList.add("mar1")
      }
      if (!emailRegex.test(email)) {
        // alert("Invalid email address.");
        flex2.classList.remove("mar1")
        flex2.classList.add("mar2")
        // return;
      }
      else{
        flex2.classList.remove("mar2")
        flex2.classList.add("mar1")
      }
    if (!mobileRegex.test(mobile)) {
      flex3.classList.remove("mar1")
      flex3.classList.add("mar2")
        // alert("Invalid Mobile number.");
        // return;
      }
      else{
        flex3.classList.remove("mar2")
        flex3.classList.add("mar1")
      }
      if (!usernameRegex.test(username)) {
        flex4.classList.remove("mar1")
        flex4.classList.add("mar2")
        // alert("Invalid user name.");
        // return;
      }
      else{
        flex4.classList.remove("mar2")
        flex4.classList.add("mar1")
      }
    if (password.value.length ==0) {
      flex5.classList.remove("mar1")
      flex5.classList.add("mar2")
      // alert("Password is not given")
      // return
    }
    else{
      flex5.classList.remove("mar2")
      flex5.classList.add("mar1")
    }
    if (password.value !== confirmPassword||confirmPassword.length==0) {
      flex6.classList.remove("mar1")
      flex6.classList.add("mar2")
      // alert("Confirm Passwords do not match.");
      // return;
    }
    else{
      flex6.classList.remove("mar2")
      flex6.classList.add("mar1")
    }
    setTimeout(() => {
      flex1.classList.remove("mar2")
      flex1.classList.add("mar1")
      flex2.classList.remove("mar2")
      flex2.classList.add("mar1")
      flex3.classList.remove("mar2")
      flex3.classList.add("mar1")
      flex4.classList.remove("mar2")
      flex4.classList.add("mar1")
      flex5.classList.remove("mar2")
      flex5.classList.add("mar1")
      flex6.classList.remove("mar2")
      flex6.classList.add("mar1")  
    }, 1500)
}

