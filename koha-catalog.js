// ==UserScript==
// @name         Koha Catalog for Staff
// @namespace    https://libraries.cca.edu
// @version      1.0
// @description  handy links & functions for staff use of Koha OPAC
// @author       @phette23
// @match        https?://library.cca.edu/cgi-bin/koha/opac-detail.pl?*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    console.log('Running Koha Catalog for Staff script.')

    // show all the "views", normal, marc, ISBD
    $('#views').show()

    // insert link to staff side of Koha in record detail view
    var id = location.search.match(/\?biblionumber=([0-9]+)/)[1]
    // we don't have access to content page's jQuery so we use vanilla JS
    var title = encodeURIComponent(document.querySelector('h1.title').innerText)

    var staff_url = 'https://library-staff.cca.edu/cgi-bin/koha/catalogue/detail.pl?biblionumber=' + id
    var summon_url = 'https://cca.summon.serialssolutions.com/#!/search?l=en&q=' + title

    var views = document.querySelector('#views')
    views.innerHTML += `<span class="view"><a id="staffView" href="${staff_url}" style="background-position:-10px -56px;">Staff</a></span>`
    views.innerHTML += `<span class="view"><a id="summonSearch" href="${summon_url}" style="background-position:-10px -56px;">Summon</a></span>`
})();
