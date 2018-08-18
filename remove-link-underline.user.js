// ==UserScript==
// @name         Remove Link Underline
// @version      0.0.1
// @author       thesecretmaster
// @description  Taken from Paul White: https://chat.meta.stackexchange.com/transcript/message/7171905#7171905
// @match        https://stackoverflow.com
// @match        https://*.stackexchange.com
// @match        https://askubuntu.com
// @match        https://stackapps.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var style = document.createElement("style");
    style.appendChild(document.createTextNode("a {text-decoration: none !important;}"));
    document.head.appendChild(style);
})();
