// ==UserScript==
// @name         Koha Catalog for Staff
// @namespace    https://libraries.cca.edu
// @version      1.4.0
// @description  handy links & functions for staff use of Koha OPAC
// @author       @phette23
// @match        https://library.cca.edu/cgi-bin/koha/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/koha-catalog.js
// @downloadURL  https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/koha-catalog.js
// ==/UserScript==
function runWhenJQueryLoaded(callback) {
    if (window.jQuery) callback(window.jQuery)
    else setTimeout(() => runWhenJQueryLoaded(callback), 100)
}

runWhenJQueryLoaded(function($) {
    $(document).ready(function () {
        console.log('Running Koha Catalog for Staff script.')

        // show total results, informative for us & useless for patrons
        $('#numresults').show()

        // record detail page enhancements
        if (location.pathname === '/cgi-bin/koha/opac-detail.pl') {
            // show all the "views": normal, marc, ISBD
            const views = $('#views').show()

            // insert links to edit & view record on staff side
            const id = new URLSearchParams(location.search).get('biblionumber')
            if (id) {
                views.append(`<span class="view"><a id="staffView" href="https://library-staff.cca.edu/cgi-bin/koha/cataloguing/editor.pl#catalog/${id}" style="background-position:-10px -56px;">Edit MARC</a></span>`)
                views.append(`<span class="view"><a id="staffView" href="https://library-staff.cca.edu/cgi-bin/koha/catalogue/detail.pl?biblionumber=${id}" style="background-position:-10px -56px;">Staff</a></span>`)
            }

            // link to Summon search, title is null in ISBD view
            const title = encodeURIComponent($('h1.title').text())
            if (title) {
                const summon_url = 'https://cca.summon.serialssolutions.com/#!/search?fvf=SourceType,Library%20Catalog&q=' + title
                views.append(`<span class="view"><a id="summonSearch" href="${summon_url}" style="background-position:-10px -56px;">Summon</a></span>`)
            }

            // show "print record" & "export" actions, these are hidden in our OpacUserJS
            $('.print-large').parent('li').show()
            $('#export').parent('li').show()
        }
    })
})
