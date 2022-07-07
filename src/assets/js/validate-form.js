import Inputmask from 'inputmask';
import JustValidate from 'just-validate';

const form = document.querySelector('.form__feedback');
const telSelector = form.querySelector('.input-tel');
const nameSelector = form.querySelector('.input-name');
const emailSelector = form.querySelector('.input-email');
const inputMask = new Inputmask('+375 (99) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form__feedback', {
	errorFieldCssClass: 'has__error',
	errorLabelCssClass: 'form__input-error',
});

validation
	.addField('.input-name', [
		{
			rule: 'minLength',
			value: 2,
		},
		{
			rule: 'maxLength',
			value: 30,
		},
		{
			rule: 'required',
			value: true,
			errorMessage: 'Введите имя!',
		},
	])
	.addField('.input-tel', [
		{
			rule: 'required',
			value: true,
			errorMessage: 'Телефон обязателен',
		},
		{
			rule: 'function',
			validator: function() {
				const phone = telSelector.inputmask.unmaskedvalue();
				return phone.length === 9;
			},
			errorMessage: 'Введите корректный телефон',
		},
	])
	.addField('.input-email', [
		{
			rule: 'required',
			value: true,
			errorMessage: 'Email обязателен',
		},
		{
			rule: 'email',
			value: true,
			errorMessage: 'Введите корректный Email',
		},
	])
	.onSuccess(event => {
		const formData = new FormData(event.target);

		const xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					console.log('Отправлено');
					const thanks = document.querySelector('.form__thanks');
					thanks.classList.add('active');
				}
			}
		};

		xhr.open('POST', 'assets/files/send.php', true);
		xhr.send(formData);

		nameSelector.setAttribute('value', '');
		telSelector.setAttribute('value', '');
		emailSelector.setAttribute('value', '');

		event.target.reset();
	});
