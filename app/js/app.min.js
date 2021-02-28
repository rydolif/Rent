'use strict';

document.addEventListener("DOMContentLoaded", function() {

	//----------------------FIXED-HEADER-----------------------
		const headerFixed = (headerFixed, headerActive) => {
			const header =  document.querySelector(headerFixed),
						active = headerActive.replace(/\./, '');
	
			window.addEventListener('scroll', function() {
				const top = pageYOffset;
				
				if (top >= 90) {
					header.classList.add(active);
				} else {
					header.classList.remove(active);
				}
	
			});
	
		};
		headerFixed('.header', '.header--active');
	
	// //----------------------HAMBURGER-----------------------
	// 	const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
	// 		const button = document.querySelector(hamburgerButton),
	// 					nav = document.querySelector(hamburgerNav),
	// 					header = document.querySelector(hamburgerHeader);
	
	// 		button.addEventListener('click', (e) => {
	// 			button.classList.toggle('hamburger--active');
	// 			nav.classList.toggle('header__nav--active');
	// 			header.classList.toggle('header--menu');
	// 		});
	
	// 	};
	// 	hamburger('.hamburger', '.header__nav', '.header');


});
	