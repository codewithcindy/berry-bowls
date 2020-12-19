"use strict";

const slideshow = document.querySelectorAll(".slideshow");

// console.log(slides);

slideshow.forEach(() => {
  const slides = document.querySelectorAll(".slide");

  let index = 0;
  const time = 3000;
  slides[index].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");

    index++;

    if (index === slides.length) index = 0;

    slides[index].classList.add("active");
  }, time);
});

// slides.forEach(function (slide, i) {
//   console.log(i);

//   slide[i].classList.add("active");

//   setInterval(() => {
//     index++;
//     if (index === slides.length) index = 0;
//   }, 3000);
// });
