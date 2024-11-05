// ==UserScript==
// @name         Watermark Course Evaluations
// @namespace    https://libraries.cca.edu
// @version      1.3.0
// @description  un-select all Extension courses in Watermark course evaluations
// @author       @phette23
// @match        https://cca.evaluationkit.com/Project/Moodle.aspx*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/watermark.js
// @downloadURL  https://raw.githubusercontent.com/cca/libraries_tampermonkey/main/watermark.js
// ==/UserScript==
/*global $*/
setTimeout(() => {
    const id = "ccarmextension"
    if (!$(`#${id}`).length) $('ul.nav.navbar-nav').eq(0).append(`<li><a href="#" id="${id}">Unselect Extension Courses</a></li>`)
    $('#ccarmextension').on('click', (event) => {
        event.preventDefault()
        $('#ctl00_WorkArea__Panel1_gridView tr').each((idx, el) => {
            let tds = $(el).find('td')
            let courseCode = tds.eq(1).text().trim()
            if (courseCode.startsWith('EX')) tds.eq(0).find('input')[0].checked = false
        })
    })
}, 1000)
