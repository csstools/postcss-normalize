// tooling
const browserslist   = require('browserslist');
const normalizeRules = require('./lib/normalize.js');
const postcss        = require('postcss');

// plugin
module.exports = postcss.plugin('postcss-normalize', (opts) => {
	return (root) => {
		// client browser list
		const clientBrowserList = browserslist(opts && opts.browsers, {
			path: root.source && root.source.input && root.source.input.file
		});

		// applied rules from normalize
		const appliedRules = normalizeRules.map(
			(rule) => {
				const clone = rule.clone();

				clone.nodes = clone.nodes.filter(
					(decl, index) => {
						// whether the declaration browser list matches the client browser list
						return clientBrowserList.some(
							(clientBrowser) => browserslist(rule.nodes[index].browserList).some(
								(declBrowser) => declBrowser === clientBrowser
							)
						);
					}
				);

				return clone;
			}
		).filter(
			(rule) => rule.nodes.length
		);

		// check for an @import postcss-normalize insertion point
		root.walkAtRules(
			'import',
			(atrule) => {
				if (atrule.params === 'postcss-normalize') {
					atrule.replaceWith(appliedRules);
				}
			}
		);

		if (!appliedRules[0].parent) {
			// prepend required normalize rules
			root.prepend(appliedRules);
		}
	};
});
