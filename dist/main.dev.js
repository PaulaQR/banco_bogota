"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var toggleMenu = document.querySelector(".toggle-menu");
  var submenu = document.querySelector(".submenu");
  toggleMenu.addEventListener("click", function (event) {
    event.preventDefault();
    submenu.classList.toggle("hidden");
  });
});