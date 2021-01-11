'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// variables
var headerMeJs = document.querySelector('.header-me-js');
var headerLogout = document.querySelector('.header-logout');
var headerMeImg = document.querySelector('.header-me-img');
var userHeaderBg = document.querySelector('.user__header-bg');
var userChangeBg = document.querySelector('.user__change-bg');
var userChangePicture = document.querySelector('.user__change-picture');
var userHeaderPhoto = document.querySelector('.user__header-photo');
var userHeaderRightSettings = document.querySelector('.user__header-right-settings');
var userHeaderSettings = document.querySelector('.user__header-settings');
var userCreateNewBtn = document.querySelector('.user-create-new-btn');
var userCreateNew = document.querySelector('.user__create-new');
var userNewsSettingImg = document.querySelectorAll('.user__news-setting-img');
var userNewsSettingRemoveForm = document.querySelectorAll('.user__news-setting-remove-form');
var userMoreSimilarPagesList = document.querySelector('.user__more-similar-pages-list');
if (userNewsSettingImg && userNewsSettingRemoveForm) {
    userNewsSettingImg.forEach(function (img) {
        img.addEventListener('click', function (event) {
            var classImg = event.target.classList;
            userNewsSettingRemoveForm.forEach(function (form) {
                var dataForm = form.dataset["delete"];
                if (classImg.contains(dataForm)) {
                    form.classList.toggle('block-hidden');
                }
            });
        });
    });
}
headerMeJs.addEventListener('click', function () {
    headerLogout.classList.toggle('block-hidden');
    headerMeImg.classList.toggle('rotate');
});
// function for toggle class for html blocks
function toggleClass(btn, block, hiddenClass) {
    if (btn) {
        btn.addEventListener('click', function () {
            block.classList.toggle(hiddenClass);
        });
    }
}
;
toggleClass(userHeaderBg, userChangeBg, 'block-hidden');
toggleClass(userHeaderPhoto, userChangePicture, 'block-hidden');
toggleClass(userHeaderRightSettings, userHeaderSettings, 'block-hidden');
toggleClass(userCreateNewBtn, userCreateNew, 'block-hidden');
document.addEventListener('DOMContentLoaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        fetch('/profile/api/posts', { method: 'GET' })
            .then(function (response) { return response.json(); });
        fetch('/profile/api/profiles', { method: 'GET' })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            data.map(function (item) {
                var similarHtml = "\n                    <li>\n                        <a class=\"user__more-similar-link-item\" href=\"/profile/some/" + item._id + "\">\n                            <div class=\"user__more-similar-right\">\n                                <div class=\"user__more-similar-img\" style=\"background-image: url(" + item.photo + ")\"></div>\n                                <div class=\"user__more-similar-info\">\n                                    <div class=\"user__more-similar-description\">\n                                        <span class=\"user__more-similar-name\">\n                                            <strong>" + item.firstName + "</strong>\n                                        </span>\n                                        <span class=\"user__more-similar-industry\">" + item.company + "</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <form class=\"user__more-similar-follow-btn\" action=\"/profile/following/:id\">\n                                <img src=\"/images/add.png\", alt=\"add\" />\n                                <input class=\"user__more-similar-follow-btn\" type=\"submit\" value=\"Follow\"/>\n                            </form>\n                        </a>\n                    </li>\n                ";
                userMoreSimilarPagesList.innerHTML += similarHtml;
            });
        });
        return [2 /*return*/];
    });
}); });
