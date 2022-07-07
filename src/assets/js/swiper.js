/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import Swiper from '../../../node_modules/swiper/swiper-bundle';

const sliderProfession = document.querySelector('.js-slider-profession-init');
const sliderSkills = document.querySelector('.js-slider-skills-init');
const sliderTicker = document.querySelector('.js-slider-ticker-init');
const sliderTeachers = document.querySelector('.js-slider-teachers-init');

if (sliderProfession) {
	const swiper = new Swiper(sliderProfession, {
		allowTouchMove: false,
		slidesPerView: 1,
		loop: true,
		speed: 0,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
			reverseDirection: true,
		},
		navigation: {
			nextEl: '.profession .slider__arrows-prev',
			prevEl: '.profession .slider__arrows-next',
		},
		breakpoints: {
			// when window width is >= 768px
			992: {
				slidesPerView: 2,
			},
		},
	});
}

if (sliderSkills) {
	const swiper = new Swiper(sliderSkills, {
		allowTouchMove: false,
		loop: true,
		autoHeight: true,
		speed: 0,
		navigation: {
			nextEl: '.skills .slider__arrows-next',
			prevEl: '.skills .slider__arrows-prev',
		},
		pagination: {
			el: '.slider__pagination',
			clickable: true,
		},
	});
}

if (sliderTicker) {
	const swiper = new Swiper(sliderTicker, {
		loop: true,
		slidesPerView: 'auto',
		speed: 1000,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
	});
}

if (sliderTeachers) {
	const mql = window.matchMedia('(min-width: 1200px)');
	const slidesPerView = document.querySelectorAll('.teachers__item-thumbs').length;

	if (slidesPerView === 1) {
		document.querySelector('.teachers .slider__arrows-wrap').style.display = 'none';
	}

	if (mql.matches) {
		const swiperThumbs = new Swiper('.js-slider-teachers-thumbs-init', {
			allowTouchMove: false,
			spaceBetween: -40,
			// slidesPerView: slidesPerView >= 3 ? 3 : 2,
			slidesPerView: slidesPerView >= 3 ? 3 : slidesPerView === 2 ? 2 : 1,
			// slidesPerView: 'auto',
			centeredSlides: true,
			centeredSlidesBounds: true,
			centerInsufficientSlides: true,
		});

		const swiperText = new Swiper('.js-slider-teachers-init', {
			loop: slidesPerView !== 1,
			allowTouchMove: false,
			spaceBetween: 0,
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			speed: 200,
			autoplay: {
				delay: 15000,
				disableOnInteraction: true,
				pauseOnMouseEnter: true,
			},
			navigation: {
				nextEl: '.teachers .slider__arrows-next',
				prevEl: '.teachers .slider__arrows-prev',
			},
			thumbs: {
				swiper: swiperThumbs,
			},
		});

		sliderTeachers.addEventListener('mouseover', function() {
			swiperText.autoplay.stop();
		});
		sliderTeachers.addEventListener('mouseout', function() {
			swiperText.autoplay.start();
		});
	}
}
