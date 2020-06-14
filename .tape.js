module.exports = {
	/* Test Basic Usage */
	'basic-normalize': {
		message: 'supports @import-normalize usage'
	},
	'basic-sanitize': {
		message: 'supports @import-sanitize usage'
	},

	/* Test @import Usage */
	'import-normalize': {
		message: 'supports @import "normalize" usage',
		expect: "normalize.expect.css"
	},
	'import-normalize-opinionated': {
		message: 'supports @import "normalize/opinionated" usage'
	},
	'import-sanitize': {
		message: 'supports @import "sanitize" usage',
		expect: "sanitize.expect.css"
	},
	'import-sanitize-forms': {
		message: 'supports @import "sanitize/forms" usage'
	},
	'import-sanitize-all': {
		message: 'supports @import "sanitize/*" + (forms + page + typography) usage'
	},

	/* Test @use Usage */
	'use-normalize': {
		message: 'supports @use "normalize" usage',
		expect: "normalize.expect.css"
	},
	'use-sanitize': {
		message: 'supports @use "sanitize" usage',
		expect: "sanitize.expect.css"
	},

	/* Test { browsers } Usage */
	'browsers-normalize': {
		message: 'supports { browsers: "last 2 * versions, not EdgeHTML" }',
		options: {
			browsers: 'last 2 chrome versions, edge >= 72, last 2 firefox versions, last 2 safari versions, last 1 ios versions, last 1 android versions'
		}
	},

	/* Test { forceImport } Usage */
	'force-normalize': {
		message: 'supports { forceImport: true }',
		options: {
			forceImport: true
		}
	},
	'force-sanitize': {
		message: 'supports { forceImport: "sanitize" }',
		options: {
			forceImport: 'sanitize'
		}
	},
	'force-sanitize-all': {
		message: 'supports { forceImport: "sanitize/*" }',
		options: {
			forceImport: 'sanitize/*'
		}
	},

	/* Test { allowDuplicates } Usage */
	'duplicates': {
		message: 'supports preventing duplicates'
	},
	'duplicates:allow': {
		message: 'supports allowing duplicates { allowDuplicates: true }',
		options: {
			allowDuplicates: true
		}
	},

	/* Test PostCSS Import Usage */
	'postcss-import': {
		message: 'supports PostCSS Import Usage',
		source: 'import-normalize.css',
		expect: 'import-normalize.expect.css',
		plugin: (() => {
			const postcss = require('postcss');
			const postcssImport = require('postcss-import');
			const postcssNormalize = require('.');

			const plugin = postcss([ postcssImport(postcssNormalize().postcssImport()) ]);

			return plugin;
		})()
	}
};
