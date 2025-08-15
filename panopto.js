// ==UserScript==
// @name         Panopto AUTO RESTORE BOT
// @namespace    https://libraries.cca.edu
// @version      1.0.0
// @description  automatically click "Restore from archive" button in Panopto
// @author       @phette23
// @match        https://ccarts.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/panopto.js
// @downloadURL  https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/panopto.js
// ==/UserScript==
// doc DOMContentLoaded & load events don't seem to fire so we use a timeout
console.log("Panopto tampermonkey script running")
setTimeout(() => {
    const btn = document.querySelector('#viewerArchivedPage button')
    if (btn && btn.textContent.includes("unarchive")) {
        console.log('Clicking "Restore from Archive" button')
        btn.click()
    }
}, 1000)
