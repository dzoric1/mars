(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header__nav-button"),n=document.querySelector(".popup"),t=document.querySelector(".popup__close-btn"),o=document.querySelector(".background");e.addEventListener("mousedown",(function(){n.classList.add("popup_opened")})),t.addEventListener("mousedown",(function(){n.classList.remove("popup_opened")})),document.addEventListener("mousemove",(function(e){var n=e.clientX/window.innerWidth;o.style.transform="translate(-".concat(100*n,"px)")}))}))})();