const accordionTrainingProgramBtns = document.querySelectorAll('.trainingProgram__btn.accordion__control');
const accordionEducationBtns = document.querySelectorAll('.education__btn.accordion__control');
const accordionQuestionsBtns = document.querySelectorAll('.questions__btn.accordion__control');
const accordionsItemStartOpen = document.querySelectorAll('.accordion__item.open');

function accordion() {
	const accordionItem = this.closest('.accordion__item');
	const accordionBtn = accordionItem.querySelector('.accordion__control');
	const accordionContent = accordionItem.querySelector('.accordion__content');

	if (accordionItem.classList.contains('open')) {
		accordionItem.classList.remove('open');
		accordionBtn.setAttribute('aria-expanded', false);
		accordionContent.setAttribute('aria-hidden', true);
		accordionContent.style.maxHeight = null;
	} else {
		document.querySelectorAll('.accordion__content').forEach(child => {
			child.setAttribute('aria-hidden', true);
			child.style.maxHeight = null;
		});

		document.querySelectorAll('.accordion__control').forEach(child => {
			child.setAttribute('aria-expanded', false);
		});

		document.querySelectorAll('.accordion__item').forEach(child => {
			child.classList.remove('open');
		});

		accordionItem.classList.add('open');
		accordionBtn.setAttribute('aria-expanded', true);
		accordionContent.setAttribute('aria-hidden', false);
		if (accordionContent.classList.contains('questions__content')) {
			accordionContent.style.maxHeight = accordionContent.scrollHeight + 40 + 'px';
		} else {
			accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
		}
	}
}

function accordionStartOpen(accordionItem) {
	const accordionContent = accordionItem.querySelector('.accordion__content');
	const accordionBtn = accordionItem.querySelector('.accordion__control');

	accordionBtn.setAttribute('aria-expanded', true);
	accordionContent.setAttribute('aria-hidden', false);
	accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
}

accordionsItemStartOpen.forEach(item => {
	accordionStartOpen(item);
});

accordionTrainingProgramBtns.forEach(btn => {
	btn.addEventListener('click', accordion);
});

accordionEducationBtns.forEach(btn => {
	btn.addEventListener('click', accordion);
});

accordionQuestionsBtns.forEach(btn => {
	btn.addEventListener('click', accordion);
});
