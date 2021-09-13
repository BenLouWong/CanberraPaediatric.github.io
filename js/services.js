"use strict";

//////////////////// Variables
let counter = 1;
const scrollToTopBtn = document.querySelector(".btn03");
const sidebarCont = document.querySelector(".section__services--sidebar");
const sidebarBtn = document.querySelectorAll(".sidebar__btn");
const overlay = document.querySelectorAll(".section__services--overlay");
const target = document.querySelector(".section__footer");
const rootElement = document.documentElement;

/////////////////// Scroll to Top Button Detecting position
// 3. Call back function - Gets called each time the target element intersects with the root element at the threshold defined
const observer = function (entries) {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			scrollToTopBtn.classList.add("showBtn");
		} else {
			scrollToTopBtn.classList.remove("showBtn");
		}
	});
};
// 1. const observer = new IntersectionObserver(obsCallback, obsOptions)
const btnObserver = new IntersectionObserver(observer, {
	root: null,
	threshold: 0,
});
// 2. Create observer function:
btnObserver.observe(target);

/////////////////// Scroll to Top Button Functionality
scrollToTopBtn.addEventListener("click", function () {
	rootElement.scrollIntoView({ behavior: "smooth" });
});

/////////////////// Services Overlay Functionality

sidebarCont.addEventListener("click", function (e) {
	const clicked = e.target.closest(".sidebar__btn");
	// console.log("CLICKED");
	if (!clicked) return;
	overlay.forEach((e) =>
		e.classList.remove("section__services--overlay-active")
	);

	document
		.querySelector(`.section__services--overlay--${clicked.dataset.btn}`)
		.classList.add("section__services--overlay-active");
});
