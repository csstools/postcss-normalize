'use strict';

// tooling
const fs                   = require('fse');
const path                 = require('path');
const postcss              = require('postcss');
const normalizeBrowserList = require('./normalize-browser-list.json');

// paths to normalize.css and normalize.json
const pathToNormalizeCSS  = path.resolve(__dirname, 'normalize.css');
const pathToNormalizeJSON = path.resolve(__dirname, 'normalize.json');

Promise.resolve().then(
	// parse normalize.css
	() => fs.readFile(pathToNormalizeCSS, 'utf8').then(
		(normalizeCSS) => postcss.parse(
			normalizeCSS,
			{
				from: pathToNormalizeCSS
			}
		)
	)
).then(
	// add browserlist to each declaration
	(normalizeAST) => {
		// preserve sourcemap
		const sourceInput = {
			css:  normalizeAST.source.input.css,
			file: 'https://jonathantneal.github.io/normalize.css/6.0.0/normalize.css'
		};

		// filter rules
		let normalizeBrowserListIndex = -1;

		normalizeAST.nodes = normalizeAST.nodes.filter(
			(node) => node.type === 'rule'
		).filter(
			(rule) => {
				// filter declarations
				rule.nodes = rule.nodes.filter(
					(node) => node.type === 'decl'
				).map(
					(decl) => {
						// copy raw browserlist
						decl.browserList = normalizeBrowserList[++normalizeBrowserListIndex];

						// clear raws and input
						delete decl.raws;

						decl.source.input = {};

						return decl;
					}
				);

				// clear raws and input
				delete rule.raws;

				rule.source.input = {};

				return rule;
			}
		);

		// preserve sourcemap
		normalizeAST.source.input = sourceInput;

		return normalizeAST;
	}
).then(
	// stringify json
	(json) => JSON.stringify(json)
).then(
	// write stringified json
	(json) => fs.writeFile(pathToNormalizeJSON, json)
);
