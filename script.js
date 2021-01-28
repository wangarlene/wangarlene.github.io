"use strict";

function openMenu() {
  var x = document.getElementById("navMenu");
  if (x.className === "nav") {
    x.className += " mobile";
  } else {
    x.className = "nav";
  }
}
