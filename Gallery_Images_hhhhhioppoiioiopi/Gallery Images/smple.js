// let Nature = document.querySelectorAll(".image_nature");
// let City_1 = document.querySelectorAll(".image_city");

// let image = document.querySelectorAll("img");
// let img_change_contain = document.querySelector(".img-change-contain");

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

// for (let i = 0; i < Nature.length; i++) {
//   Nature[i].addEventListener("click", function () {
//     location.href = "index.1.html";
//     console.log(i);
//     localStorage.setItem("nature", i);
//   });
// }

// for (let j = 0; j < City_1.length; j++) {
//   City_1[j].addEventListener("click", function () {
//     location.href = "index.1.html";
//     console.log(j);
//     localStorage.setItem("city", j);
//   });
// }

// let index1 = localStorage.getItem("nature");
// let index2 = localStorage.getItem("city");

// if (index1 !== null && index1 <= 2) {
//   img_change_contain.src = nature_object[index1].src;
//   console.log(index1);
// } 
//  else if (index2 !== null && index2 <= 4) {
//   img_change_contain.src = city_object[index2].src;
//   console.log(index2);
// }