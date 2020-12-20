'use strict';

// variables
const headerMeJs: HTMLElement = document.querySelector('.header-me-js');
const headerLogout: HTMLElement = document.querySelector('.header-logout');
const headerMeImg: HTMLElement = document.querySelector('.header-me-img');
const userHeaderBg: HTMLElement = document.querySelector('.user__header-bg');
const userChangeBg: HTMLElement = document.querySelector('.user__change-bg');
const userChangePicture: HTMLElement = document.querySelector('.user__change-picture');
const userHeaderPhoto: HTMLElement = document.querySelector('.user__header-photo');
const userHeaderRightSettings: HTMLElement = document.querySelector('.user__header-right-settings');
const userHeaderSettings: HTMLElement = document.querySelector('.user__header-settings');
const userCreateNewBtn: HTMLElement = document.querySelector('.user-create-new-btn');
const userCreateNew: HTMLElement = document.querySelector('.user__create-new');

headerMeJs.addEventListener('click', (): void => {
    headerLogout.classList.toggle('block-hidden');    
    headerMeImg.classList.toggle('rotate');
});

// function for toggle class for html blocks
function toggleClass(btn: HTMLElement, block: HTMLElement, hiddenClass: string): void {
    btn.addEventListener('click', (): void => {
        block.classList.toggle(hiddenClass);
    });
};

toggleClass(userHeaderBg, userChangeBg, 'block-hidden');
toggleClass(userHeaderPhoto, userChangePicture, 'block-hidden');
toggleClass(userHeaderRightSettings, userHeaderSettings, 'block-hidden');
toggleClass(userCreateNewBtn, userCreateNew, 'block-hidden');

document.addEventListener('DOMContentLoaded', async() => {
    fetch('/profile/api/posts', {method:'GET'})
        .then((response): any => response.json())
        .then((data): any => renderPosts(data));
});

function renderPosts(data: any) {
    data.map((item: any) => {
        document.querySelector('.user__news-text').textContent = item.text;
        const userNewsImage: HTMLElement = document.querySelector('.user__news-image');
        userNewsImage.style.backgroundImage = `url(${item.img})`;
        document.querySelector('.user__news-comments').textContent = item.comments;
    });
}