var link = document.querySelector('.button-writeus');
var popupForm = document.querySelector('.modal-form');
var close = popupForm.querySelector('.modal-close');
var login = popupForm.querySelector('[name=name]');
var form = popupForm.querySelector('form');
var email = popupForm.querySelector('[name=email]');
var mapLink = document.querySelector('.contacts-map');
var mapPopup = document.querySelector('.modal-map');
var mapClose = mapPopup.querySelector('.modal-close');

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("login");
} catch (err) {
isStorageSupport = false;
}

link.addEventListener('click', function(evt){
	evt.preventDefault();
	popupForm.classList.add('modal-show');
	if (storage) {
		login.value = storage;
		email.focus();
	} else {
		login.focus();
	}
})

close.addEventListener('click', function(evt){
	evt.preventDefault();
	popupForm.classList.remove('modal-show');
	popupForm.classList.remove("modal-error");
})

popupForm.addEventListener('submit', function(evt){
	evt.preventDefault();
	if (!login.value || !email.value) {
		evt.preventDefault();
		popupForm.classList.remove("modal-error");
		popupForm.offsetWidth = popupForm.offsetWidth;
		popupForm.classList.add("modal-error");
    } else {
    	if(isStorageSupport){
    		localStorage.setItem('login', login.value);
    	}
    }
})

window.addEventListener('keydown', function(evt){
	if(evt.keyCode === 27){
		evt.preventDefault();
		if (popupForm.classList.contains("modal-show")) {
			popupForm.classList.remove("modal-show");
			popupForm.classList.remove("modal-error");
		}
	}
})

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
