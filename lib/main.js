'use strict';

let contextMenu = require("sdk/context-menu");
let clipboard = require("sdk/clipboard");
let selection = require("sdk/selection");

contextMenu.Item({
  label: "Copy HTML",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", self.postMessage);',
  onMessage: function() clipboard.set(selection.html)
});
