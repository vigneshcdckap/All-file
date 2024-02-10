let Nature = document.querySelectorAll(".image_nature");
let City_1 = document.querySelectorAll(".image_city");

let image = document.querySelectorAll("img");
let img_change_contain = document.querySelector(".img-change-contain");

let image_objects = [
  { src: "nature-1.jpeg" },
  { src: "nature-2.jpeg" },
  { src: "nature-3.jpeg" },
  { src: "city-1.jpeg" },
  { src: "city-2.jpeg" },
  { src: "city-3.jpeg" },
  { src: "city-4.jpeg" },
  { src: "city-5.jpeg" },
];
let nature_object = [
    "nature-1.jpeg" ,
   "nature-2.jpeg" ,
   "nature-3.jpeg" 
];
let city_object = [
    "city-1.jpeg" ,
    "city-2.jpeg" ,
    "city-3.jpeg" ,
    "city-4.jpeg" ,
    "city-5.jpeg" 
];
for (let i = 0; i < image.length; i++) {
  image[i].addEventListener("click", function () {
    // location.href = "index.1.html";
    location.replace("index.1.html");
    console.log(i);
    localStorage.setItem("image_index", i);
  });
}

let index = localStorage.getItem("image_index");
img_change_contain.src = image_objects[index].src;



 if (index <= 2){
 
  for(i in nature_object){
    let div = document.getElementById('inerpage2_natuer')
let img = document.createElement('img')
    img.src=nature_object[i]
    div.append(img)
  }}
  else {
    for(i in city_object){
        let div = document.getElementById('inerpage2_natuer')
    let img = document.createElement('img')
        img.src=city_object[i]
        div.append(img)
      }
  }
 

  let close_btn = document.getElementById("close")
  close_btn.addEventListener("click", close_button);

  function close_button() {
    location.replace("index.html");
  }




  let nature_object_1 = [
  { src: "nature-1.jpeg" },
  { src: "nature-2.jpeg" },
  { src: "nature-3.jpeg" },
];

let city_object_1 = [
  { src: "city-1.jpeg" },
  { src: "city-2.jpeg" },
  { src: "city-3.jpeg" },
  { src: "city-4.jpeg" },
  { src: "city-5.jpeg" },
];

  left_arrow = document.getElementById('Left_arrow')

  left_arrow.addEventListener("click", function() {
    Nature_1("prev");
     city_2("back");

  });
  Right_arrow.addEventListener("click", function() {
    Nature_1("Next");
    city_2("Forword");

  });
  
  let index_4 = -1;
  
  function Nature_1(x){
    if (x==="Next"){
      
        index_4 = index_4 >= nature_object_1.length - 1 ? 0 : index_4 + 1;
    }
    else{
        index_4 = index_4 == -1 ? nature_object_1.length - 1 : index_4 - 1;
    }
  
    img_change_contain.src = nature_object_1[index_4].src;

  }


  let index_5 = -1;
  
  function city_2(x){
    if (x==="Forword"){
      
        index_5 = index_5 >= city_object_1.length - 1 ? 0 : index_5 + 1;
    }
    else{
        index_5 = index_5 == -1 ? city_object_1.length - 1 : index_5 - 1;
    }
  
    img_change_contain.src = city_object_1[index_5].src;

  }
  
  

  let click_images = document.querySelectorAll("img");

  click_images.forEach(function (image, i) {
    image.addEventListener("click", function () {
    klo(this)
    });
  });
  
function klo(img){
      console.log(img.src);
      img_change_contain.src = img.src;

}


// let img_0 =document.getElementById("page2_imge_size_1")

// click_images.forEach(function (image, i) {
//   image.addEventListener("click", function () {
//   klo(this)
//   });
// });

// function klo(img){
//     console.log(img.src);
//     img_change_contain.src = img_0.src;

// }

// let img_0 =document.getElementById("page2_imge_size_1")

// img_0.forEach((v1){
//   v1.addEventListener('click',()=>{
//     imagenext.src = v1.src;
//   })
// })