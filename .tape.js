const fixed_browserslist = [
	"IE 10",
	"ie_mob 10",
	"Safari 7",
	"iOS 7",
	"Chrome 60",
	"ChromeAndroid 60",
	"Firefox 60",
	"FirefoxAndroid 60",
	"Edge 16",
	"> 0.01%"
]

module.exports = {
	/* Test Basic Usage */
	'basic-normalize': {
		message: 'supports @import-normalize usage',
		options: {
			browsers: fixed_browserslist
		}
	},
	'basic-normalize-opinionated': {
		message: 'supports @import-normalize "opinionated.css" usage',
		options: {
			browsers: fixed_browserslist
		}
	},
	'basic-sanitize': {
		message: 'supports @import-sanitize usage',
		options: {
			browsers: fixed_browserslist
		}
	},

	/* Test @import Usage */
	'import-normalize': {
		message: 'supports @import "normalize" usage',
		options: {
			browsers: fixed_browserslist
		},
		expect: "normalize.expect.css"
	},
	'import-normalize-opinionated': {
		message: 'supports @import "normalize/opinionated" usage',
		options: {
			browsers: fixed_browserslist
		}
	},
	'import-sanitize': {
		message: 'supports @import "sanitize" usage',
		options: {
			browsers: fixed_browserslist
		},
		expect: "sanitize.expect.css"
	},
	'import-sanitize-forms': {
		message: 'supports @import "sanitize/forms" usage',
		options: {
			browsers: fixed_browserslist
		}
	},
	'import-sanitize-all': {
		message: 'supports @import "sanitize/*" + (forms + page + typography) usage',
		options: {
			browsers: fixed_browserslist
		}
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
			forceImport: true,
			browsers: fixed_browserslist
		}
	},
	'force-sanitize': {
		message: 'supports { forceImport: "sanitize" }',
		options: {
			forceImport: 'sanitize',
			browsers: fixed_browserslist
		}
	},
	'force-sanitize-all': {
		message: 'supports { forceImport: "sanitize/*" }',
		options: {
			forceImport: 'sanitize/*',
			browsers: fixed_browserslist
		}
	},

	/* Test { allowDuplicates } Usage */
	'duplicates': {
		message: 'supports preventing duplicates',
		options: {
			browsers: fixed_browserslist
		}
	},
	'duplicates:allow': {
		message: 'supports allowing duplicates { allowDuplicates: true }',
		options: {
			allowDuplicates: true,
			browsers: fixed_browserslist
		}
	},

	/* Test PostCSS Import Usage */
	'postcss-import': {
		message: 'supports PostCSS Import Usage',
		source: 'import-normalize.css',
		plugin: (() => {
			const postcss = require('postcss')
			const postcssImport = require('postcss-import')
			const postcssNormalize = require('.')

			const plugin = postcss([postcssImport(postcssNormalize({ browsers: fixed_browserslist }).postcssImport()) ])

			return plugin
		})()
	}
}
