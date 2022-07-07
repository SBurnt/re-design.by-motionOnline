import lazySizes from 'lazysizes/lazysizes';

function lazy() {
	// async () => {
	if ('loading' in HTMLImageElement.prototype) {
		const images = document.querySelectorAll('img.lazyload');

		images.forEach(img => {
			img.src = img.dataset.src;
		});
	} else {
		// Динамически импортируем библиотеку LazySizes
		// const lazySizesLib = await import('/lazysizes.min.js');

		// Инициализируем LazySizes (читаем data-src & class=lazyload)
		lazySizes.init(); // lazySizes применяется при обработке изображений, находящихся на странице.
	}
	// };
}

lazy();
