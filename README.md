jquery.checkboxes.js
====================

Adds checkboxesAsBools option to $.serialize() method to pass checkbox values as booleans.

Default $.serialize() does not pass unchecked checkboxes to the datastring. With this plugin and $.serialize({ checkboxesAsBools: true}) it's possible. Based on jQuery code: http://james.padolsey.com/jquery/#v=1.11.1&fn=serializeArray