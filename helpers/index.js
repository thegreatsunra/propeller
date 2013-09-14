// Define handlebars helpers

var hbs = require('hbs');

// blocks and extends
var blocks = {};

hbs.registerHelper('extend', function(name, context) {
  var block = blocks[name];
  if (!block) {
    block = blocks[name] = [];
  }

  block.push(context.fn(this));
});

hbs.registerHelper('block', function(name) {
  var val = (blocks[name] || []).join('\n');

  // clear the block
  blocks[name] = [];
  return val;
});

// isActive helper
hbs.registerHelper('isActive', function(url, slug) {
  if (url == slug) {
    return ' class="active"';
  } else {
    return false;
  }
});
