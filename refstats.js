// ==UserScript==
// @name         Refstats Interaction Templates
// @namespace    https://libraries.cca.edu
// @version      1.2.0
// @description  fill out common refstats interactions in a single click
// @author       @phette23
// @match        https://docs.google.com/a/cca.edu/forms/d/e/*
// @match        https://docs.google.com/forms/u/*/d/e/*
// @match        https://docs.google.com/forms/d/e/*
// @grant        none
// @require      https://code.jquery.com/jquery-latest.js
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
        let html = '<br><div class="freebirdFormviewerViewNavigationButtonsAndProgress"><div class="freebirdFormviewerViewNavigationButtons">'
        defaults.forEach((tpl) => {
            html += `<div role="button" class="js-tampermonkey quantumWizButtonEl quantumWizButtonPaperbuttonEl quantumWizButtonPaperbuttonFlat quantumWizButtonPaperbuttonDark quantumWizButtonPaperbutton2El2 freebirdFormviewerViewNavigationSubmitButton isUndragged"><div class="quantumWizButtonPaperbuttonFocusOverlay exportOverlay"></div><span class="quantumWizButtonPaperbuttonContent"><span class="quantumWizButtonPaperbuttonLabel exportLabel" data-fields="${tpl.fields}">${tpl.title}</span></span></div>&nbsp;`
        })
        $('.freebirdFormviewerViewHeaderTitleRow').after(html)
        $('.js-tampermonkey').click((event) => {
            let fields = $(event.target).data('fields')
            if (fields) fillOutForm(fields)
        })
    }
})();
