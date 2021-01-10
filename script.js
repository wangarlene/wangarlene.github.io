"use strict";

function openMenu() {
  var x = document.getElementById("navMenu");
  if (x.className === "nav") {
    x.className += " mobile";
  } else {
    x.className = "nav";
  }
}

// const nav = document.querySelector(".mobile-nav");
// const navLinks = document.querySelector(".nav-links");
// const openMenuIcon = document.querySelector(".menu-icon");
// const closeMenuIcon = document.querySelector(".close-menu-icon");

// openMenuIcon.addEventListener("click", function () {
//   nav.style.display = "block";
//   navLinks.style.display = "block";
//   closeMenuIcon.style.display = "inline";
//   openMenuIcon.style.display = "none";
// });

// closeMenuIcon.addEventListener("click", function () {
//   nav.style.display = "none";
//   navLinks.style.display = "block";
//   openMenuIcon.style.display = "initial";
//   closeMenuIcon.style.display = "none";
// });

//TODO: resizing after opening in mobile view causes it to stick, nav height is too short, create a hidden class and block class to refactor code
//search up how to make function to declaring variables for DOM manipulation
