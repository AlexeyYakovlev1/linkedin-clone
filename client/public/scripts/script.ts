'use strict';

const headerMeJs: any = document.querySelector('.header-me-js');
const headerLogout: any = document.querySelector('.header-logout');
const headerMeImg: any = document.querySelector('.header-me-img');
const userHeaderBg: any = document.querySelector('.user__header-bg');
const userChangeBg: any = document.querySelector('.user__change-bg');
const userChangePicture: any = document.querySelector('.user__change-picture');
const userHeaderPhoto: any = document.querySelector('.user__header-photo');

headerMeJs.addEventListener('click', (): void => {
    headerLogout.classList.toggle('block-hidden');    
    headerMeImg.classList.toggle('rotate');
});

userHeaderBg.addEventListener('click', (): void => {
    userChangeBg.classList.toggle('block-hidden');
});

userHeaderPhoto.addEventListener('click', (): void => {
    userChangePicture.classList.toggle('block-hidden');
});