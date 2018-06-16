import postcss from 'postcss';
import postcssBrowserComments from 'postcss-browser-comments';
import fs from 'fs';

export default postcss.plugin('postcss-normalize', opts => {
	const parsedNormalize = parseNormalize(opts);

	return async root => {
		const normalizeRoot = await parsedNormalize;

		// use @import postcss-normalize insertion point
		root.walkAtRules(
			'import-normalize',
			atrule => {
				if (opts && opts.allowDuplicates) {
					// use any insertion point
					atrule.replaceWith(normalizeRoot);
				} else if (normalizeRoot.parent) {
					// remove duplicate insertions
					atrule.remove();
				} else {
					// use the first insertion point
					atrule.replaceWith(normalizeRoot);
				}
			}
		);

		if (opts && opts.forceImport && !normalizeRoot.parent) {
			// prepend required normalize rules
			root.prepend(normalizeRoot);
		}
	};
});

function parseNormalize(opts) {
	const from = require.resolve('@csstools/normalize.css');
	const postcssBrowserCommentsParser = postcssBrowserComments(opts);

	return new Promise(
		(resolve, reject) => fs.readFile(from, 'utf8',
			(err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(res);
				}
			}
		)
	).then(
		css => postcss.parse(css, { from })
	).then(
		root => {
			postcssBrowserCommentsParser(root);

			return root;
		}
	);
}
