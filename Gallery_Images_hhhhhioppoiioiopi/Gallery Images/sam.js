  // let left = document.getElementById("Left_arrow")
  // left.addEventListener("click", function () {
  //   Nature_1("prev");
  //   // city_2("back");
  // });
  
//  let right =document.getElementById("Right_arrow")
//  right.addEventListener("click", function () {
//     Nature_1("Next");
//     // city_2("Forword");
//   });




//   let nature_object = [
//     "nature-1.jpeg" ,
//    "nature-2.jpeg" ,
//    "nature-3.jpeg" 
// ];
// let city_object = [
//     "city-1.jpeg" ,
//     "city-2.jpeg" ,
//     "city-3.jpeg" ,
//     "city-4.jpeg" ,
//     "city-5.jpeg" 
// ];
  

// let b = 0
//   function Nature_1(x) {
//     if (x === "Next") {
//       b = b >= nature_object.length - 1 ? 0 : b + 1;
//     } else {
//       b = b == 0 ? nature_object.length - 1 : b - 1;
//     }
//     img_change_contain.src = nature_object[b];
//   }
  
  // let b = 0;

  // function city_2(x) {
  //   if (x === "Forword") {
  //     index_5 = index_5 >= city_object.length - 1 ? 0 : index_5 + 1;
  //   } else {
  //     index_5 = index_5 === -1 ? city_object.length - 1 : index_5 - 1;
  //   }
  //   img_change_contain.src = city_object[index_5];
  // }
  
//   function loadImages(i) {
//     inerpage2_natuer.innerHTML = "";
//     const imagesToLoad = index <= 2 ? nature_object : city_object;
//     imagesToLoad.forEach((src) => {
//       const img = document.createElement("img");
//       img.src = src;
//       inerpage2_natuer.append(img);
//     });
//   }
  



// let left_nature = document.getElementById("Left_arrow");
// let right_nature = document.getElementById("Right_arrow");
// let nature_object = [
//   "nature-1.jpeg",
//   "nature-2.jpeg",
//   "nature-3.jpeg"
// ];

// let nature_index = 0;

// left_nature.addEventListener("click", Back_nature);

// function Back_nature() {
//   nature_index = nature_index === 0 ? nature_object.length - 1 : nature_index - 1;
//   img_change_contain.src = nature_object[nature_index];
// }

// right_nature.addEventListener("click", Front_nature);

// function Front_nature() {
//   nature_index = nature_index >= nature_object.length - 1 ? 0 : nature_index + 1;
//   img_change_contain.src = nature_object[nature_index];
// }


// // City Button

// let left_City = document.getElementById("Left_arrow");
// let right_city = document.getElementById("Right_arrow");
// let city_object = [
//   "city-1.jpeg" ,
//   "city-2.jpeg" ,
//   "city-3.jpeg" ,
//   "city-4.jpeg" ,
//   "city-5.jpeg" 
// ];

// let city_index = 0;

// left_City.addEventListener("click", Back_City);

// function Back_City() {
//   city_index = city_index === 0 ? city_object.length - 1 : city_index - 1;
//   img_change_contain.src = city_object[city_index];
// }

// right_city.addEventListener("click", Front_City);

// function Front_City() {
//   city_index = city_index >= city_object.length - 1 ? 0 : city_index + 1;
//   img_change_contain.src = city_object[city_index];
// }


// let nature_object = [
//   { src: "nature-1.jpeg" },
//   { src: "nature-2.jpeg" },
//   { src: "nature-3.jpeg" },
// ];

// let city_object = [
//   { src: "city-1.jpeg" },
//   { src: "city-2.jpeg" },
//   { src: "city-3.jpeg" },
//   { src: "city-4.jpeg" },
//   { src: "city-5.jpeg" },
// ];



// let leftArrow = document.getElementById("Left_arrow");
// let rightArrow = document.getElementById("Right_arrow");

// leftArrow.addEventListener("click", function () {
//   add("prev");
// });

// rightArrow.addEventListener("click", function () {
//   add("next");
// });

// function add(direction) {
//     if (direction === "next") {
//       nature_index = nature_index >= nature_object.length - 1 ? 0 : nature_index + 1;
//     } else {
//       nature_index = nature_index === 0 ? nature_object.length - 1 : nature_index - 1;
//     }
//     img_change_contain.src = nature_object[nature_index];
//     else if (direction === "next") {
//       city_index = city_index >= city_object.length - 1 ? 0 : city_index + 1;
//     } else {
//       city_index = city_index === 0 ? city_object.length - 1 : city_index - 1;
//     }
//     img_change_contain.src = city_object[city_index];
//   }


