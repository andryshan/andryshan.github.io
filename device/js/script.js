var link = document.querySelector('.contacts-button');
var popupForm = document.querySelector('.modal-form');
var close = popupForm.querySelector('.modal-close');
var form = popupForm.querySelector('.appointment-form');
var nameForm = popupForm.querySelector('.form-name');
var emailForm = popupForm.querySelector('.form-email');
var letterForm = popupForm.querySelector('.form-letter');

var isStorageSupport = true;
var storage = '';

try{
	storage = localStorage.getItem('nameForm');
} catch(err) {
	isStorageSupport = false;
}

link.addEventListener('click', function(evt){
	evt.preventDefault();
	popupForm.classList.add('modal-show');
	if(storage){
		login.value = storage;
		emailForm.focus();
	} else {
		nameForm.focus();
	}
});

close.addEventListener('click', function(evt){
	evt.preventDefault();
	popupForm.classList.remove('modal-show');
	popupForm.classList.remove('modal-error');
});

form.addEventListener('submit', function(evt){
	if(!nameForm.value || !emailForm.value || !letterForm.value){
		evt.preventDefault();
		popupForm.classList.remove('modal-error');
		popupForm.offsetWidth = popupForm.offsetWidth;
		popupForm.classList.add('modal-error');
	} else {
		if(isStorageSupport){
			localStorage.setItem('nameForm', nameForm.value);
		}
	}
});

window.addEventListener('keydown', function(evt){
	if(evt.keyCode === 27){
		evt.preventDefault();
		if(popupForm.classList.contains('modal-show')){
			popupForm.classList.remove('modal-show');
			popupForm.classList.remove('modal-error');
		}
	}
});

var mapLink = document.querySelector('.contacts-button-map');
var mapPopup = document.querySelector('.modal-map');
var mapClose = mapPopup.querySelector('.modal-close');

mapLink.addEventListener('click', function(evt){
	evt.preventDefault();
	mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function(evt){
	evt.preventDefault();
	mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (mapPopup.classList.contains('modal-show')) {
			mapPopup.classList.remove('modal-show');
		}
	}
});