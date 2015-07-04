'use strict';

var postcss = require('postcss'),
    fs = require('fs'),
    path = require('path');

module.exports = postcss.plugin('postcss-normalize', function () {
  return function(css) {

    var normalize = fs.readFileSync(path.join(__dirname, 'node_modules/normalize.css/normalize.css'), 'utf8');

    css.prepend(normalize);

  };
});
