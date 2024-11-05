// ==UserScript==
// @name         Koha Catalog for Staff
// @namespace    https://libraries.cca.edu
// @version      1.2.1
// @description  handy links & functions for staff use of Koha OPAC
// @author       @phette23
// @match        https://library.cca.edu/cgi-bin/koha/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @updateURL    https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/koha-catalog.js
// @downloadURL  https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/koha-catalog.js
// ==/UserScript==
/*global jQuery,$*/
$.noConflict()
jQuery(document).ready(function($){
    console.log('Running Koha Catalog for Staff script.')

    // show all the "views": normal, marc, ISBD
    var views = $('#views').show()
    // show total results, informative for us & useless for patrons
    $('#numresults').show()

    // insert link to staff side of Koha in record detail view
    var id = new URLSearchParams(location.search).get('biblionumber')
    var title = encodeURIComponent($('h1.title').text())

    var staff_url = 'https://library-staff.cca.edu/cgi-bin/koha/catalogue/detail.pl?biblionumber=' + id
    var summon_url = 'https://cca.summon.serialssolutions.com/#!/search?fvf=SourceType,Library%20Catalog&q=' + title

    views.append(`<span class="view"><a id="staffView" href="${staff_url}" style="background-position:-10px -56px;">Staff</a></span>`)
    // title is null on ISBD view
    if (title) views.append(`<span class="view"><a id="summonSearch" href="${summon_url}" style="background-position:-10px -56px;">Summon</a></span>`)

    // show "print record" & "export" actions, these are hidden in our OpacUserJS
    $('.print-large').parent('li').show()
    $('#export').parent('li').show()
})
