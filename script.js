// ==UserScript==
// @name         JVC DarkMode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  DarkMode JVC
// @author       LittleTherence
// @match        https://www.jeuxvideo.com/forums/*
// @match        https://m.jeuxvideo.com/forums/*
// @match        https://m.jeuxvideo.com/forums/*
// @match        https://www.jeuxvideo.com/messages-prives/*
// @match        http://jvforum.fr/*
// @icon         https://www.jeuxvideo.com/favicon-16x16.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var style = document.createElement('style');
    style.innerHTML = `
    body {
    background: none;
    }
    * {
    background-image: none !important;
    background-color: #1e272e !important;
    color: #ecf0f1 !important;
    }
    .layout__row {
    background-color: #1e272e !important;
    }
    a:hover {
    text-decoration: underline !important;
    }
    .btn {
    background-color: #ecf0f1 !important;
    border-radius: 4px !important;
    color: #1e272e !important;
    }
    `;
    document.head.appendChild(style);
    console.log('DARKMODE LOADED');
})();
