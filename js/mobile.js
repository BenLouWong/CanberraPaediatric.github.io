"use strict";

//////////////////// Variables
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile__header");
const mobileClose = document.querySelector(".mobile__close");

/////////////////// Hamburger Functionality
hamburger.addEventListener("click", function (e) {
	e.preventDefault();
	mobileMenu.classList.add("mobile__header--active");
});

mobileClose.addEventListener("click", function (e) {
	e.preventDefault();
	mobileMenu.classList.remove("mobile__header--active");
});
