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
var modalContainer = document.getElementById('modal');
var modalClose = document.getElementById('modal-close');
var perfilContainer = document.querySelector('.perfil');

var modalSignificado = document.getElementById('significado');
var significadoButton = document.querySelector('.tarot-select-button');
var significadoClose = document.getElementById('close-significado');

signinButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  if (perfilContainer) {
    toggleClass(perfilContainer, 'hiden');
  } else {
    toggleClass(modalContainer, 'hiden');
  }
});

modalClose.addEventListener('click', function (ev) {
  ev.preventDefault();
  toggleClass(modalContainer, 'hiden');
});

significadoClose.addEventListener('click', function (ev) {
  ev.preventDefault();
  toggleClass(modalSignificado, 'hiden');
});

significadoButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  if (modalSignificado) {
    toggleClass(modalSignificado, 'hiden');
  }
});

var container = document.getElementById('container');

if (container) {
  Ps.initialize(container);
}
