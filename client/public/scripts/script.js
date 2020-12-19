'use strict';
var headerMeJs = document.querySelector('.header-me-js');
var headerLogout = document.querySelector('.header-logout');
var headerMeImg = document.querySelector('.header-me-img');
var userHeaderBg = document.querySelector('.user__header-bg');
var userChangeBg = document.querySelector('.user__change-bg');
var userChangePicture = document.querySelector('.user__change-picture');
var userHeaderPhoto = document.querySelector('.user__header-photo');
headerMeJs.addEventListener('click', function () {
    headerLogout.classList.toggle('block-hidden');
    headerMeImg.classList.toggle('rotate');
});
userHeaderBg.addEventListener('click', function () {
    userChangeBg.classList.toggle('block-hidden');
});
userHeaderPhoto.addEventListener('click', function () {
    userChangePicture.classList.toggle('block-hidden');
});
