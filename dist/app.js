// desplegar menu mobile

'use strict';

var navMenu = document.getElementById('nav-menu');
var mobileMenu = document.getElementById('mobile-menu');

mobileMenu.addEventListener('click', function (ev) {
  ev.preventDefault();
  navMenu.classList.toggle('show');
});

//desplegar modal

function toggleClass(target, clase) {
  target.classList.toggle(clase);
};

var signinButton = document.getElementById('signin');
var modalContainer = document.getElementById('modal');
var modalButton = document.getElementById('modal-close');

signinButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  toggleClass(modalContainer, 'hiden');
});

modalButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  toggleClass(modalContainer, 'hiden');
});
