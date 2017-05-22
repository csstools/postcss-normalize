// tooling
const browserslist  = require('browserslist');
const jsonToAst     = require('./lib/json-to-ast');
const normalizeJSON = require('./lib/normalize.json');
const postcss       = require('postcss');

// plugin
module.exports = postcss.plugin('postcss-normalize', (opts) => {
	const normalizeAST = jsonToAst(normalizeJSON);

	return (root) => {
		// client browser list
		const clientBrowserList = browserslist(opts && opts.browsers, {
			path: root.source && root.source.input && root.source.input.file
		});

		// required normalize rules
		const normalizeRules = normalizeAST.nodes.filter(
			(rule) => {
				// required normalize declarations
				rule.nodes = rule.nodes.filter(
					(decl) => {
						// whether the declaration browser list matches the client browser list
						const declIsUsed = clientBrowserList.some(
							(clientBrowser) => browserslist(decl.browserList).some(
								(declBrowser) => declBrowser === clientBrowser
							)
						);

						// restore source mapping
						decl.source.input = normalizeJSON.source.input;

						return declIsUsed;
					}
				);

				// restore source mapping
				rule.source.input = normalizeJSON.source.input;

				return rule.nodes.length;
			}
		).map(
			(rule) => rule.clone()
		);

		// prepend required normalize rules
		root.prepend(normalizeRules);
	};
});
