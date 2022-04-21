let editButton = document.querySelector('.edit-button');
let popup = document.querySelector('.popup');

function open () {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', open);

let closeIcon = document.querySelector('.close-icon');

function close () {
    popup.classList.remove('popup_opened');
}

closeIcon.addEventListener('click', close);

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input-name');
let jobInput = document.querySelector('.form__input-about');

function formSubmitHandler (evt) {
    evt.preventDefault();
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);