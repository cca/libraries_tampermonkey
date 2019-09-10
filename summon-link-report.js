// ==UserScript==
// @name         Summon Broken Link Report
// @namespace    https://libraries.cca.edu
// @version      1.0.0
// @description  create formatted broken link report from Summon search result
// @author       @phette23
// @match        https://cca.summon.serialssolutions.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/*global $*/
(function() {
    window.report = () => {
        // support ticket text, to be copied to clipboard later
        var text = 'The link to this article\n\n'
        // angular doc with metadata details
        var doc = angular.element('.documentSummary').scope().document
        var authors = doc.authors.reduce((text, author, idx, arr) => {
            text += author.fullname
            // it's _not_ the last author in the list
            if (arr.length - idx != 1) {
                text += ', '
            }
            // there's more than one author and this is the penultimate author
            if (arr.length > 1 && arr.length - idx === 2) {
                text += '& '
            }

            return text
        }, '')

        // citation
        text += `"${doc.full_title}" by ${authors}. _${doc.publication_title}_, ${doc.publication_date}.\n\n`

        text += `fails to resolve correctly.\n\nSummon bookmark:\n${'https://cca.summon.serialssolutions.com/#!/search?bookMark=' + doc.bookmark}\n\nOpenURL:\n${doc.open_url}`

        prompt("Copy to clipboard with CMD+C", text)
    }
})();
