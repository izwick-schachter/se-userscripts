// ==UserScript==
// @name         Move Hamburger
// @version      0.0.2
// @description  Swaps the logo for the hamburger
// @author       thesecretmaster
// @match        *.stackexchange.com/*
// @exclude      *://stackexchange.com
// @exclude      *://chat.stackexchange.com/*
// @exclude      *://chat.stackoverflow.com/*
// @exclude      *://chat.meta.stackexchange.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var hamburgerDialog = document.getElementsByClassName("siteSwitcher-dialog")[0];
    var hamburger = document.getElementsByClassName("js-site-switcher-button")[0];
    var seLogo = document.getElementsByClassName("-container")[0].getElementsByClassName("-main")[0];
    var header = document.getElementsByClassName("top-bar")[0].getElementsByClassName("-container")[0];
    seLogo.remove();
    hamburger.remove();
    hamburgerDialog.remove();

    header.insertBefore(hamburgerDialog, header.childNodes[0]);
    header.insertBefore(hamburger, header.childNodes[0]);
    var oldBurgerOnclick = hamburger.onclick;
    hamburger.onclick = function() {
        $(hamburgerDialog).toggleClass("dno");
        hamburgerDialog.style = "top: 40px;";
    };
})();

