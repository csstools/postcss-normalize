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
		'insertion': {
			message: 'supports an insertion point'
		},
		'insertion-after': {
			message: 'support an insertion point (at the end of the file)'
		},
		'insertion-duplicate': {
			message: 'removes duplicate insertion points'
		}
	}
};
