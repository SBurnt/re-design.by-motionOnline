const btnsToForm = document.querySelectorAll('.js-btn-scroll-to-form');
const inputFormType = document.querySelector('.input-type');

btnsToForm.forEach(btn => {
	btn.addEventListener('click', function(e) {
		e.preventDefault();
		// const btnData = this.getAttribute('data-scroll-form').substring(1);
		const btnDataScroll = this.getAttribute('data-scroll-block');
		const btnDataType = this.getAttribute('data-type');
		if (btnDataType) {
			inputFormType.setAttribute('value', btnDataType);
		}
		const scrollTarget = document.getElementById(btnDataScroll);
		// const topOffset = document.querySelector('.scrollto').offsetHeight; // если нужен отступ сверху, для фикс шапки
		const topOffset = 0; // если не нужен отступ сверху для фикс шапки
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth',
		});
	});
});
