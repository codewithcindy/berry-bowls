"use strict";
const express = require("express");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");

  // const slideshow = document.querySelectorAll(".slideshow");

  // slideshow.forEach(() => {
  //   const slides = document.querySelectorAll(".slide");

  //   let index = 0;
  //   const time = 3000;
  //   slides[index].classList.add("active");

  //   setInterval(() => {
  //     slides[index].classList.remove("active");

  //     index++;

  //     if (index === slides.length) index = 0;

  //     slides[index].classList.add("active");
  //   }, time);
  // });
});

app.listen(3000, () => {
  console.log("Currently listening on port 3000");
});
