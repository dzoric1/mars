import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const openPopupBtn = document.querySelector('.header__nav-button');
  const popup = document.querySelector('.popup');
  const popupCloseBtn = document.querySelector('.popup__close-btn');
  const background = document.querySelector('.background');

  openPopupBtn.addEventListener('mousedown', () => {
    popup.classList.add('popup_opened');
  });

  popupCloseBtn.addEventListener('mousedown', () => {
    popup.classList.remove('popup_opened');
  });

  const paralax = (e) => {
    let x = e.clientX / window.innerWidth;
    background.style.transform = `translate(-${x * 100}px)`
  }

  document.addEventListener('mousemove', paralax)
});