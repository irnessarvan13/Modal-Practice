'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
	modal.classList.add('hidden'); // adds the hidden modal so you can exit out of the modal to go back to normal.
	overlay.classList.add('hidden');
};

const openModal = function () {
	console.log('Button Clicked');
	modal.classList.remove('hidden'); // removes the hidden modal to appear whenever the modal is 'clicked'.
	overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
	btnsOpenModal[i].addEventListener('click', openModal); //declaring function. Not calling it.
}

btnCloseModal.addEventListener('click', closeModal); //declaring function. Not calling it.
overlay.addEventListener('click', closeModal); //declaring function. Not calling it.

document.addEventListener('keydown', function (event) {
	//event that will happen when key is clicked. This is for global scope.
	console.log(event.key);

	//checks if modal is not hidden (i.e. modal is open)
	if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal(); //function needs to be called here.
	}
});
