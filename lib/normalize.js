'use strict';

// tooling
const postcss   = require('postcss');
const normalize = require('./normalize.json');

let browserListIndex = -1;

// return normalize.css with browserlist
module.exports = postcss.parse(normalize.css).nodes.filter(
	(rule) => {
		// filter nodes to keep only rules
		if (rule.type === 'rule') {
			// filter nodes to keep only declarations
			rule.nodes = rule.nodes.filter(
				(decl) => {
					// if the node is a declaration
					if (decl.type === 'decl') {
						// copy browserList
						decl.browserList = normalize.browserList[++browserListIndex];

						// delete raws
						delete decl.raws;

						return decl;
					}
				}
			);

			// delete raws
			delete rule.raws;

			return rule;
		}
	}
);
