// ==UserScript==
// @name         Refstats Interaction Templates
// @namespace    https://libraries.cca.edu
// @version      2.0.0
// @description  fill out common refstats interactions in a single click
// @author       @phette23
// @match        https://docs.google.com/a/cca.edu/forms/d/e/*
// @match        https://docs.google.com/forms/u/*/d/e/*
// @match        https://docs.google.com/forms/d/e/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/refstats.js
// @downloadURL  https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/refstats.js
// ==/UserScript==
(function() {
    console.log('Running Refstats Interaction Templates script.')
    const d = document

    function fillOutForm(fields) {
        for (let field of fields.split(',')) {
            d.querySelectorAll('label').forEach(label => {
                if (label.textContent.includes(field)) {
                    label.click()
                }
            })
        }
    }

    // only run on ref stats form
    const heading = d.querySelector('[role="heading"]').textContent.trim().toLowerCase()
    if (heading == 'reference statistics form') {
        let defaults = [
            { title: "Fac Portal Email", fields: "Online,Technical/Computing,Email,Faculty,Portal" },
            { title: "Moo Tech Chat", fields: "Online,Technical/Computing,Chat,Faculty,Moodle" },
            { title: "Moo Tech Email", fields: "Online,Technical/Computing,Email,Faculty,Moodle" },
        ]
        let html = '<br style="display:block; clear:both; width:100%; content: \'\';"><h3>Response Templates:</h3>'
        defaults.forEach((tpl) => {
            html += `<div style="cursor:pointer; color:blue" role="button" class="js-tampermonkey" data-fields="${tpl.fields}">${tpl.title}</div>&nbsp;|&nbsp;`
        })

        // work around Google Forms CSP require-trusted-types-for 'script'
        // see: https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML
        if (window.trustedTypes) {
            const trusted = trustedTypes.createPolicy("policy", {
                createHTML: (string) => string
            })
            html = trusted.createHTML(html)
        }

        d.querySelector('.freebirdFormviewerViewHeaderTitleRow, [role="heading"]').insertAdjacentHTML('afterend', html)
        d.querySelectorAll('.js-tampermonkey').forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault()
                let fields = event.target.dataset.fields
                if (fields) fillOutForm(fields)
            })
        })
        // auto-select email address
        let email = d.querySelector('div[data-user-email-address]').querySelector('div[role="checkbox"]')
        if (email.ariaChecked === 'false') email.click()
    }
})()
