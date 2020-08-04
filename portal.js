// ==UserScript==
// @name         Remove student rosters from CCA Portal
// @namespace    https://libraries.cca.edu
// @version      1.1
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
