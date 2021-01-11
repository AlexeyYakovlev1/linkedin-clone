'use strict';

import '../styles/login.css';

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
const userNewsSettingImg: NodeListOf<HTMLElement> = document.querySelectorAll('.user__news-setting-img');
const userNewsSettingRemoveForm: NodeListOf<HTMLElement> = document.querySelectorAll('.user__news-setting-remove-form');
const userMoreSimilarPagesList: HTMLElement = document.querySelector('.user__more-similar-pages-list');

if (userNewsSettingImg && userNewsSettingRemoveForm) {
    userNewsSettingImg.forEach((img: HTMLElement): void => {
        img.addEventListener('click', event => {
            const classImg: string = event.target.classList;

            userNewsSettingRemoveForm.forEach((form: HTMLElement): void => {
                const dataForm: string = form.dataset.delete;

                if (classImg.contains(dataForm)) {
                    form.classList.toggle('block-hidden');
                }
            })
        })
    })
}

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
        .then((response): any => response.json());
    fetch('/profile/api/profiles', {method: 'GET'})
        .then((response): any => response.json())
        .then((data): void => {
            data.map((item): void => {
                const similarHtml = `
                    <li>
                        <a class="user__more-similar-link-item" href="/profile/some/${item._id}">
                            <div class="user__more-similar-right">
                                <div class="user__more-similar-img" style="background-image: url(${item.photo})"></div>
                                <div class="user__more-similar-info">
                                    <div class="user__more-similar-description">
                                        <span class="user__more-similar-name">
                                            <strong>${item.firstName}</strong>
                                        </span>
                                        <span class="user__more-similar-industry">${item.company}</span>
                                    </div>
                                </div>
                            </div>
                            <form class="user__more-similar-follow-btn" action="/profile/following/:id">
                                <img src="/images/add.png", alt="add" />
                                <input class="user__more-similar-follow-btn" type="submit" value="Follow"/>
                            </form>
                        </a>
                    </li>
                `;

                userMoreSimilarPagesList.innerHTML += similarHtml;
            })
        });
});