// ==UserScript==
// @name         Remove student rosters from Portal
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  for running workshops or creating demo videos where you do not want enrollment data visible
// @author       @phette23
// @match        https://portal.cca.edu/courses/sec/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/refstats.js
// @downloadURL  https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/refstats.js
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll('.learning-hub__student-roster-list li').forEach(el => el.parentNode.removeChild(el));
})();
