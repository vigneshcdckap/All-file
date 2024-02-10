let Button = document.querySelectorAll("button");



let detail = [
    {
      Name: "Customer1",
      userid:"21102005",
      profession:"it",
      about:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, corporis."
    },
    {
      Name: "Customer2",
      userid:"2145325",
      profession:"Computer programmer",
      about:" Lorem ipsum,  sit amet consectetur adipisicing elit. Saepe, corporis."
    },
    {
      Name: "Customer3",
      userid:"56856447",
      profession:"Doctor",
      about:" Lorem ipsum, dolor sit amet  adipisicing elit. Saepe, corporis."
    }
  
   
  ];


  for (let i = 0; i < Button.length; i++) {
    Button[i].addEventListener("click", function() {
        location.href = "index2.html";
        localStorage.setItem('index',i ); 
    });
}   


let index1 = localStorage.getItem('index');

let result = myFunction(index1);

 function myFunction(index1) {
    console.log("Cus.No: "+detail[index1].Name);
    console.log("ID: "+detail[index1].userid);
    console.log("Profession: "+detail[index1].profession);
    console.log("About: "+detail[index1].about);
  }
    