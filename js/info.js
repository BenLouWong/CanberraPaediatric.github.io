"use strict";

//////////////////// Variables
let counter = 1;
const scrollToTopBtn = document.querySelector(".btn03");
const scrollToServBtn = document.querySelector(".btn__02");
const target = document.querySelector(".section__footer");
const rootElement = document.documentElement;
const modal = document.querySelector(".modal");
const closeModal = document.querySelectorAll(".modal__close");
const overlay = document.querySelector(".overlay");
const emergencyBtnCont = document.querySelector(
	".section__info04--btn-wrapper"
);
const emergencyBtn = document.querySelectorAll(".btn04");

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

/////////////////// Emergency button

emergencyBtnCont.addEventListener("click", function (e) {
	const clicked = e.target.closest(".btn04");
	console.log("clicked");

	if (!clicked) return;

	closeModal.forEach(function (e) {
		e.addEventListener("click", function () {
			document
				.querySelector(`.modal__${clicked.dataset.btn}`)
				.classList.remove("modal__active");
			overlay.classList.remove("overlay__active");
		});
	});

	document
		.querySelector(`.modal__${clicked.dataset.btn}`)
		.classList.add("modal__active");

	overlay.classList.add("overlay__active");
});
