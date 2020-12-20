'use strict';

const headerMeJs: any = document.querySelector('.header-me-js');
const headerLogout: any = document.querySelector('.header-logout');
const headerMeImg: any = document.querySelector('.header-me-img');
const userHeaderBg: any = document.querySelector('.user__header-bg');
const userChangeBg: any = document.querySelector('.user__change-bg');
const userChangePicture: any = document.querySelector('.user__change-picture');
const userHeaderPhoto: any = document.querySelector('.user__header-photo');
const userHeaderRightSettings: any = document.querySelector('.user__header-right-settings');
const userHeaderSettings: any = document.querySelector('.user__header-settings');

headerMeJs.addEventListener('click', (): void => {
    headerLogout.classList.toggle('block-hidden');    
    headerMeImg.classList.toggle('rotate');
});

function toggleClass(btn: any, block: any, hiddenClass: string): void {
    btn.addEventListener('click', (): void => {
        block.classList.toggle(hiddenClass);
    });
};

toggleClass(userHeaderBg, userChangeBg, 'block-hidden');
toggleClass(userHeaderPhoto, userChangePicture, 'block-hidden');
toggleClass(userHeaderRightSettings, userHeaderSettings, 'block-hidden');