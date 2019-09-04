// ==UserScript==
// @name         Refstats Interaction Templates
// @namespace    https://libraries.cca.edu
// @version      1.0
// @description  fill out common refstats interactions in a single click
// @author       @phette23
// @match        https://docs.google.com/a/cca.edu/forms/d/e/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/*global $*/
(function() {
    console.log('Running Refstats Interaction Templates script.')

    function fillOutForm (fields) {
        for (let field of fields.split(',')) {
            $(`label:contains(${field})`).click()
        }
        // @TODO click the submit button?
    }

    // only run on ref stats form
    if ($('[role="heading"]').first().text().trim().toLowerCase() == 'reference statistics form') {
        let defaults = [
            { title: "Faculty VAULT Q", fields: "Online,Service,Email,Faculty,VAULT" },
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
