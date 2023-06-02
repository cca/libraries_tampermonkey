// ==UserScript==
// @name         Refstats Interaction Templates
// @namespace    https://libraries.cca.edu
// @version      1.6.0
// @description  fill out common refstats interactions in a single click
// @author       @phette23
// @match        https://docs.google.com/a/cca.edu/forms/d/e/*
// @match        https://docs.google.com/forms/u/*/d/e/*
// @match        https://docs.google.com/forms/d/e/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.7.0.slim.min.js
// @updateURL    https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/refstats.js
// @downloadURL  https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/refstats.js
// ==/UserScript==
/*global $*/
(function() {
    console.log('Running Refstats Interaction Templates script.')

    function fillOutForm (fields) {
        for (let field of fields.split(',')) {
            $(`label:contains(${field})`).click()
        }
    }

    // only run on ref stats form
    if ($('[role="heading"]').first().text().trim().toLowerCase() == 'reference statistics form') {
        let defaults = [
            { title: "Fac Portal Email", fields: "Online,Technical/Computing,Email,Faculty,Portal" },
            { title: "Moo Tech Chat", fields: "Online,Technical/Computing,Chat,Faculty,Moodle" },
            { title: "Moo Tech Email", fields: "Online,Technical/Computing,Email,Faculty,Moodle" },
        ]
        let html = '<br style="display:block; clear:both; width:100%; content: \'\';"><h3>Response Templates:</h3>'
        defaults.forEach((tpl) => {
            html += `<div style="cursor:pointer; color:blue" role="button" class="js-tampermonkey" data-fields="${tpl.fields}">${tpl.title}</div>&nbsp;|&nbsp;`
        })
        $('.freebirdFormviewerViewHeaderTitleRow, [role="heading"]').first().after(html)
        $('.js-tampermonkey').click((event) => {
            event.preventDefault()
            let fields = $(event.target).data('fields')
            if (fields) fillOutForm(fields)
        })
        // auto-select email address
        let email = $('div[data-user-email-address]').find('div[role="checkbox"]')
        if (email.attr('aria-checked') === 'false') email.click()
    }
})();
