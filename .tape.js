module.exports = {
	'postcss-normalize': {
		'basic': {
			message: 'supports basic usage'
		},
		'basic:last-2': {
			message: 'supports { browsers: "last 2 versions" } usage',
			options: {
				browsers: 'last 2 versions'
			}
		},
		'basic:last-1': {
			message: 'supports { browsers: "last 1 versions" } usage',
			options: {
				browsers: 'last 1 versions'
			}
		},
		'insertion': {
			message: 'supports insertion usage'
		},
		'insertion:w-quotes': {
			message: 'supports insertion with quotes usage',
			expect: 'insertion.expect.css'
		}
	}
};
