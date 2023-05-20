// ==UserScript==
// @name         Redirect Medium to 12ft
// @namespace    https://choudry.org
// @version      0.1
// @description  Redirects Medium to 12ft so no paywall!!
// @author       Moksh Singh
// @match        https://*medium.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=medium.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.location = "https://12ft.io/" + window.location;
    // Your code here...
})();
