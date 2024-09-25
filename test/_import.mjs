import plugin from 'postcss-normalize';
import postcss from 'postcss';
import assert from 'node:assert';

postcss([plugin()]).process('@import "sanitize.css"', { from: null }).then((result) => {
	assert.ok(result.css.includes(':where('));
});

postcss([plugin()]).process('@import "normalize.css"', { from: null }).then((result) => {
	assert.ok(result.css.includes(':where('));
});
