# Libraries Tampermonkey Scripts

Scripts to modify websites. To help Systems Librarian automate stuff and give staff some customized tools.

https://www.tampermonkey.net

## Setup

- Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) Chrome extension
- From the extension's settings, click the **+** button to add a script
- Copy/paste a script from here into the editor
- **Save**

If you want to hack on this repo and use the linting, `pnpm install` adds eslint dependencies which can be run with `npm test`.

## What do they do

**koha-catalog.js** - show the number of search results, show tabs on the bib detail page that link to the MARC record, staff side view, and Summon.

**portal.js** - hide student rosters/enrollment data for course sections, this is useful for recording screencasts of Portal content where we cannot expose student names.

**refstats.js** - auto-selects the user's email address, creates common interaction templates (e.g. for faculty Moodle chats). We could create additional buttons for other common interactions.

**summon.js** - creates a `report()` function for use in the browser's JavaScript console which copies metadata from the first search result and opens the Ex Libris support page. This is used to send broken link reports with certain stock information pre-filled in them.

**watermark.js** - adds an "Unselect Extension Courses" button that makes it easy to skip these courses when importing courses from Moodle into Watermark course sevluations.

## LICENSE

[ECL Version 2.0](https://opensource.org/licenses/ECL-2.0)
