module.exports = {
	'postcss-normalize': {
		'basic': {
			message: 'supports basic usage'
		},
		'basic:last-2': {
			message: 'supports { browsers: "last 2 versions" }',
			options: {
				browsers: 'last 2 versions'
			}
		},
		'basic:last-1': {
			message: 'supports { browsers: "last 1 versions" }',
			options: {
				browsers: 'last 1 versions'
			}
		},
		'insertion-after': {
			message: 'support an insertion point (at the end of the file)'
		},
		'insertion-duplicate': {
			message: 'removes duplicate insertion points'
		},
		'option-force-import': {
			message: 'forces an import at the beginning of the file',
			options: {
				forceImport: true
			}
		}
	}
};
