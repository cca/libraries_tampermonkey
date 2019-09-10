// ==UserScript==
// @name         Koha Catalog for Staff
// @namespace    https://libraries.cca.edu
// @version      1.1.1
// @description  handy links & functions for staff use of Koha OPAC
// @author       @phette23
// @match        https://library.cca.edu/cgi-bin/koha/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/*global $*/
(function() {
    console.log('Running Koha Catalog for Staff script.')

    // show all the "views": normal, marc, ISBD
    var views = $('#views').show()

    // insert link to staff side of Koha in record detail view
    var id = location.search.match(/\?biblionumber=([0-9]+)/)[1]
    var title = encodeURIComponent($('h1.title').text())

    var staff_url = 'https://library-staff.cca.edu/cgi-bin/koha/catalogue/detail.pl?biblionumber=' + id
    var summon_url = 'https://cca.summon.serialssolutions.com/#!/search?l=en&q=' + title

    views.append(`<span class="view"><a id="staffView" href="${staff_url}" style="background-position:-10px -56px;">Staff</a></span>`)
    // title is null on ISBD view
    if (title) views.append(`<span class="view"><a id="summonSearch" href="${summon_url}" style="background-position:-10px -56px;">Summon</a></span>`)

    // show "print record" & "export" actions, these are hidden in our OpacUserJS
    $('.print-large').parent('li').show()
    $('#export').parent('li').show()
})();
