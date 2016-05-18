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

if (significadoClose) {
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
}

//Iniciar barra de desplazamiento

var container = document.getElementById('container');

if (container) {
  Ps.initialize(container);
}

// desplegar dropdown
var videosMusica = document.querySelectorAll('.videos-musica>.videos-items>.videos-item');
var videosSeries = document.querySelectorAll('.videos-series>.videos-items>.videos-item');
var dropdownMusica = document.querySelector('.dropdown-musica');
var dropdownSeries = document.querySelector('.dropdown-series');

function removeSelect(target) {
  Array.prototype.map.call(target, function (item) {
    if (item.classList.contains('videos-selected')) {
      item.classList.remove('videos-selected');
    }
  });
}

function toggleDropdown(type) {
  if (type.classList.contains('hiden')) {
    type.classList.toggle('hiden');
  }
}

function listenerVideos(target, dropdown) {
  Array.prototype.map.call(target, function (item) {
    item.addEventListener('click', function (ev) {
      removeSelect(target);
      this.classList.toggle('videos-selected');
      toggleDropdown(dropdown);
    });
  });
}

listenerVideos(videosMusica, dropdownMusica);
listenerVideos(videosSeries, dropdownSeries);

//cerrar dropdown
var dropdownContainers = document.querySelectorAll('.dropdown-container');
var dropdownClose = document.querySelectorAll('.dropdown-close');

Array.prototype.map.call(dropdownClose, function (item) {
  item.addEventListener('click', function (ev) {
    Array.prototype.map.call(dropdownContainers, function (item) {
      if (!item.classList.contains('hiden')) {
        item.classList.add('hiden');
      }
    });
    removeSelect(videosMusica);
    removeSelect(videosSeries);
  });
});
