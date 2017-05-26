'use strict';

// tooling
const fs                   = require('fse');
const path                 = require('path');
const normalizeBrowserList = require('./normalize-browser-list.json');

// paths to normalize.css and normalize.json
const pathToNormalizeCSS    = path.resolve(__dirname, 'normalize.css');
const pathToNormalizeJSON   = path.resolve(__dirname, 'normalize.json');
const pathToNormalizeImport = path.resolve(path.dirname(__dirname), 'index.css');

Promise.resolve().then(
	// parse normalize.css
	() => fs.readFile(pathToNormalizeCSS, 'utf8').then(
		(normalizeCSS) => fs.writeFile(
			pathToNormalizeJSON,
			JSON.stringify({
				browserList: normalizeBrowserList,
				css: normalizeCSS.replace(/\r?\n|\r/g, '\n')
			}),
			'utf8'
		)
	)
).then(
	fs.writeFile(
		pathToNormalizeImport,
		'@import postcss-normalize'
	)
);
