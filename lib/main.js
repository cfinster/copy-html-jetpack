'use strict';

let contextMenu = require("context-menu");
let clipboard = require("clipboard");
let selection = require("selection");

exports.main = function() {
  contextMenu.Item({
    label: "Copy HTML",
    context: contextMenu.SelectionContext(),
    contentScript: 'self.on("click", self.postMessage);',
    onMessage: function() clipboard.set(selection.html)
  });
}
