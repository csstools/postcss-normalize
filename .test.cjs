const plugin = require('postcss-normalize');
const postcss = require('postcss');
const assert = require('node:assert');

postcss([plugin()]).process('@import "sanitize.css"', { from: null }).then((result) => {
	assert.ok(result.css.includes(':where('));
});

postcss([plugin()]).process('@import "normalize.css"', { from: null }).then((result) => {
	assert.ok(result.css.includes(':where('));
});
