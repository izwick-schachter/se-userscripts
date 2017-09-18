// ==UserScript==
// @name         Move Menu
// @version      0.0.1
// @description  Move the important things to a gooder place
// @author       thesecretmaster
// @match        *.stackexchange.com*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var nav = document.getElementsByClassName("secondary-nav")[0];
    var rightSection = document.getElementsByClassName("-actions")[0];
    nav.remove();
    rightSection.insertBefore(nav, rightSection.childNodes[0]);
})();
