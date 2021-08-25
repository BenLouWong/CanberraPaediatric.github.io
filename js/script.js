"use strict";

//////////////////// Variables
let counter = 1;
const scrollToTopBtn = document.querySelector(".btn03");
// const scrollToTeamBtn = document.querySelector(".btn__01--about");
const scrollToServBtn = document.querySelector(".btn__02");
const target = document.querySelector(".section__FAQ");
// const teamsSection = document.getElementById("section__team");
const serviceSection = document.getElementById("section--2");
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
	threshold: 0.3,
});
// 2. Create observer function:
btnObserver.observe(target);

/////////////////// Scroll to Top Button Functionality
scrollToTopBtn.addEventListener("click", function () {
	rootElement.scrollIntoView({ behavior: "smooth" });
});

/////////////////// Scroll to Teams Button Functionality
// scrollToTeamBtn.addEventListener("click", function () {
// 	teamsSection.scrollIntoView({ behavior: "smooth" });
// });

/////////////////// Scroll to Services Button Functionality
scrollToServBtn.addEventListener("click", function () {
	serviceSection.scrollIntoView({ behavior: "smooth" });
});

/////////////////// Navigation Menu Functionality
// 1. Add event listener to common parent element
document.querySelector(".nav__list").addEventListener("click", function (e) {
	// 2. Determine what element originated the event
	console.log(e.target);
	e.preventDefault(e.target);

	// 3. Matching Strategy to match the elements we are only interested in
	if (e.target.classList.contains("nav__item--link")) {
		const id = e.target.getAttribute("href");
		document.getElementById(id).scrollIntoView({ behavior: "smooth" });
	}
});

/////////////////// Slider Functionality
setInterval(function () {
	let slideBtn = document.getElementById("radio" + counter);
	//   Checks the checkbox
	slideBtn.checked = true;
	counter++;
	if (counter > 4) {
		counter = 1;
	}
}, 2500);
