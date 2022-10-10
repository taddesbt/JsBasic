//changing links ul from height 0 to height 10rem
//by toggle  show-links class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {

 
  links.classList.toggle("show-links");
});
