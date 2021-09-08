// ==UserScript==
// @name         Clean Portal for Screenrecording
// @namespace    https://libraries.cca.edu
// @version      1.2.0
// @description  hide Portal enrollment data & green "preview header" on Staging
// @author       @phette23
// @match        https://portal.cca.edu/*
// @match        https://portal-staging.cca.edu/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/portal.js
// @downloadURL  https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/portal.js
// ==/UserScript==

(function() {
    'use strict';
    let d = document
    d.querySelectorAll('.learning-hub__student-roster-list li').forEach(el => el.remove())
    d.getElementById('preview-header').remove()
})();
