let img_change_contain = document.querySelector(".img-change-contain");
let inerpage2_natuer = document.getElementById("inerpage2_natuer");
let page1 = document.getElementById("page");
let page2 = document.querySelector(".page2");
let images = document.querySelectorAll(".image_nature, .image_city");
console.log(images);
let body = document.body;
page2.classList.add("d-none");

var image_objects = [
  { src: "nature-1.jpeg" },
  { src: "nature-2.jpeg" },
  { src: "nature-3.jpeg" },
  { src: "city-1.jpeg" },
  { src: "city-2.jpeg" },
  { src: "city-3.jpeg" },
  { src: "city-4.jpeg" },
  { src: "city-5.jpeg" },
];

var nature_object_1 = [
  { src: "nature-1.jpeg" },
  { src: "nature-2.jpeg" },
  { src: "nature-3.jpeg" },
];

var city_object_1 = [
  { src: "city-1.jpeg" },
  { src: "city-2.jpeg" },
  { src: "city-3.jpeg" },
  { src: "city-4.jpeg" },
  { src: "city-5.jpeg" },
];

for (let i = 0; i < images.length; i++) {
  cat = "nature";

  let image = images[i];
  image.addEventListener("click", function () {
    page1.classList.add("d-none");
    page2.classList.remove("d-none");
    body.classList.add("black");
    page2.classList.add("d-block");
    img_change_contain.src = image_objects[i].src;

    let div = document.getElementById("inerpage2_natuer");
    div.innerHTML = "";

    if (i <= 2) {
      nature_object_1.forEach((item) => {
        let img = document.createElement("img");
        img.className = "page2_imge_size";
        img.id = "page2_imge_size";

        img.src = item.src;
        div.append(img);
      });
    } else {
      city_object_1.forEach((item) => {
        let img = document.createElement("img");
        img.className = "page2_imge_size";
        img.id = "page2_imge_size_1";

        img.src = item.src;
        div.append(img);
      });
    }

    let img_0 = document.querySelectorAll(".page2_imge_size");

    for (let i = 0; i < img_0.length; i++) {
      img_0[i].addEventListener("click", change);

      console.log(true);
    }

    function change() {
      console.log("d");
      img_change_contain.src = this.src;
    }
  });
}

let close_button = document.getElementById("close");

close_button.addEventListener("click", function () {
  page1.classList.remove("d-none");
  page2.classList.add("d-none");
  page2.classList.remove("d-block");
  body.classList.remove("black");
});

let nature_index = 0;
let city_index = 0;

let leftArrow = document.getElementById("Left_arrow");
let rightArrow = document.getElementById("Right_arrow");

leftArrow.addEventListener("click", function () {
  add("prev");
});

rightArrow.addEventListener("click", function () {
  add("next");
});

let nature_object = ["nature-1.jpeg", "nature-2.jpeg", "nature-3.jpeg"];
let city_object = [
  "city-1.jpeg",
  "city-2.jpeg",
  "city-3.jpeg",
  "city-4.jpeg",
  "city-5.jpeg",
];

function add(x) {
  let a = document.getElementById("imagenext");
  let c = a.src;

  console.log(c);

  let v = c.slice(22);
  console.log(v);

  index = nature_object.indexOf(v);

  let e = x;

  if (index == -1) {
    city(e);
  } else {
    nature(e);
  }
}

function nature(x) {
  if (x === "next") {
    nature_index =
      nature_index >= nature_object.length - 1 ? 0 : nature_index + 1;
  } else {
    nature_index =
      nature_index === 0 ? nature_object.length - 1 : nature_index - 1;
  }
  img_change_contain.src = nature_object[nature_index];
}

function city(x) {
  if (x === "next") {
    city_index = city_index >= city_object.length - 1 ? 0 : city_index + 1;
  } else {
    city_index = city_index === 0 ? city_object.length - 1 : city_index - 1;
  }
  img_change_contain.src = city_object[city_index];
}

// let img_0 = document.querySelectorAll(".page2_imge_size");

//      img_0.forEach((i)=>{
//       i.addEventListener('click',change)
//      })
// function change(){
//     img_change_contain.src = this.src;
//     console.log('d');
// }
