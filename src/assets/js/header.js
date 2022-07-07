function headerMobMenu() {
	const btnMobMenu = document.querySelector('.js-btn-mob-menu');
	const mobileMenu = document.querySelector('.header__nav');
	const navLinks = document.querySelectorAll('.nav__link');

	btnMobMenu.addEventListener('click', function() {
		mobileMenu.classList.toggle('active-mob');
		btnMobMenu.classList.toggle('active-mob');
	});

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			mobileMenu.classList.remove('active-mob');
			btnMobMenu.classList.remove('active-mob');
		});
	});
}

headerMobMenu();
