'use strict';

var postcss = require('postcss'),
    fs = require('fs'),
    CleanCSS = require('clean-css');

module.exports = postcss.plugin('postcss-normalize', function () {
  return function(css) {
    var normalizePath = require.resolve('normalize.css/normalize.css');
    return new Promise(function(resolve, reject) {
      fs.readFile(normalizePath, 'utf8', function(err, data) {
        err ? reject(err) : resolve(data);
      })
    }).then(function(data) {
      return new CleanCSS().minify(data).styles;
    }).then(function(data) {
      css.prepend(data);
    });
  };
});
