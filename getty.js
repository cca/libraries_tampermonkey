// ==UserScript==
// @name         Getty Vocabs - Copy Page Link
// @namespace    https://libraries.cca.edu
// @version      0.3.0
// @description  Add a button to easily copy canonical page link from Getty vocabs.
// @author       @phette23
// @match        https://www.getty.edu/vow/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/getty.js
// @downloadURL  https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/getty.js
// ==/UserScript==
(function () {
    let d = document
    // there is a different .page on the search results and we cannot run this script on full
    // diplay pages without adding URLs for each vocab (ULANFullDisplay, AATFullDisplay, ...)
    // but by validating the URL below we avoid adding a nonfunctional button
    let pages = d.querySelectorAll('.page')
    if (pages.length) {
        // URL is a child node, iterate to find it
        let parent = null
        let url = null
        for (let page of pages) {
            if (url) break
            try {
                console.log(page.lastChild.textContent.trim())
                url = new URL(page.lastChild.textContent.trim())
                parent = page
                break
            } catch {
                // not a valid URL, continue
            }
        }
        if (url) {
            // Create button
            let btn = d.createElement('button')
            btn.textContent = 'Copy'
            btn.style.marginLeft = '1em'
            parent.appendChild(btn)
            // On click, copy URL to clipboard
            btn.addEventListener('click', function () {
                navigator.clipboard.writeText(url.toString()).then(function () {
                    btn.textContent = 'Copied!'
                })
            })
        }
    }
})()
