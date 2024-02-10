// const image_objects = [
//     { src: "nature-1.jpeg" },
//     { src: "nature-2.jpeg" },
//     { src: "nature-3.jpeg" },
//     { src: "city-1.jpeg" },
//     { src: "city-2.jpeg" },
//     { src: "city-3.jpeg" },
//     { src: "city-4.jpeg" },
//     { src: "city-5.jpeg" },
//   ];
  
//   let img_change_contain = document.querySelector(".img-change-contain");
//   let inerpage2_natuer = document.getElementById("inerpage2_natuer");
//   let page1 = document.getElementById("page");
//   let page2 = document.querySelector(".page2");
//   let images = document.querySelectorAll(".image_nature, .image_city");
//   page2.classList.add("d-none");
  
//   var nature_object_1 = [
//     { src: "nature-1.jpeg" },
//     { src: "nature-2.jpeg" },
//     { src: "nature-3.jpeg" },
//   ];
  
//   var city_object_1 = [
//     { src: "city-1.jpeg" },
//     { src: "city-2.jpeg" },
//     { src: "city-3.jpeg" },
//     { src: "city-4.jpeg" },
//     { src: "city-5.jpeg" },
//   ];
  
//   for (let i = 0; i < images.length; i++) {
//     let image = images[i];
//     image.addEventListener("click", function () {
//       page1.classList.add("d-none");
//       page2.classList.remove("d-none");
//       body.classList.add("black")
//       body.classList.remove("black")
//       page2.classList.add("d-block");
//       img_change_contain.src = image_objects[i].src;
  
//       let div = document.getElementById('inerpage2_natuer');
//       div.innerHTML = ""; // Clear existing content
  
//       if (i <= 2) {
//         nature_object_1.forEach((item) => {
//           let img = document.createElement('img');
//           img.className="page2_imge_size"
//           img.src = item.src;
//           div.append(img);
//         });
//       } else {
//         city_object_1.forEach((item) => {
//           let img = document.createElement('img');
//           img.className="page2_imge_size"
//           img.src = item.src;
//           div.append(img);
//         });
//       }
//     });
//   }
