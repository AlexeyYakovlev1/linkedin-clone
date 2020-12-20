'use strict';
var headerMeJs = document.querySelector('.header-me-js');
var headerLogout = document.querySelector('.header-logout');
var headerMeImg = document.querySelector('.header-me-img');
var userHeaderBg = document.querySelector('.user__header-bg');
var userChangeBg = document.querySelector('.user__change-bg');
var userChangePicture = document.querySelector('.user__change-picture');
var userHeaderPhoto = document.querySelector('.user__header-photo');
var userHeaderRightSettings = document.querySelector('.user__header-right-settings');
var userHeaderSettings = document.querySelector('.user__header-settings');
headerMeJs.addEventListener('click', function () {
    headerLogout.classList.toggle('block-hidden');
    headerMeImg.classList.toggle('rotate');
});
function toggleClass(btn, block, hiddenClass) {
    btn.addEventListener('click', function () {
        block.classList.toggle(hiddenClass);
    });
}
;
toggleClass(userHeaderBg, userChangeBg, 'block-hidden');
toggleClass(userHeaderPhoto, userChangePicture, 'block-hidden');
toggleClass(userHeaderRightSettings, userHeaderSettings, 'block-hidden');
