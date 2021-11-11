
/*const popup = document.querySelector('.popup');


// отурытие всех popup
function openPopup (element) {
    element.classList.add('popup_opened');
}

document.querySelector('.profile__changes-button').addEventListener('click', outputUser);
document.querySelector('.profile__add-button').addEventListener('click', outpuCell);

//закрытие всех popup
function closePopup(evt) {
    evt.target.closest('.popup').classList.remove('popup_opened');
}

document.querySelectorAll('.popup__close-icon').forEach (button => {
    button.addEventListener('click', closePopup);
})*/

const isMobile = {
    Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (
            isMobile.Android() || 
            isMobile.BlackBerry() || 
            isMobile.iOS() || isMobile.Opera() || 
            isMobile.Windows());
	}
};

if (isMobile.any()) {
    document.body.classList.add('_touch')
} else {
    document.body.classList.add('_pc')
}