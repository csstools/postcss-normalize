# PostCSS Normalize [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]
[![Gitter Chat][git-img]][git-url]

[PostCSS Normalize] lets you automatically include the parts of [normalize.css]
you need, based upon your project’s [browserlist].

## Usage

Add [PostCSS Normalize] to your build tool:

```bash
npm install postcss-normalize --save-dev
```

Add a [browserlist] entry in your package.json:

```json
{
  "browserslist": "last 2 versions"
}
```

#### Node

Use [PostCSS Normalize] to process your CSS:

```js
require('postcss-normalize').process(YOUR_CSS, { /* options */ });
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Use [PostCSS Normalize] as a plugin:

```js
postcss([
	require('postcss-normalize')({ /* options */ })
]).process(YOUR_CSS, /* options */);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS Normalize] in your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
	return gulp.src('./src/*.css').pipe(
		postcss([
			require('postcss-normalize')({ /* options */ })
		])
	).pipe(
		gulp.dest('.')
	);
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS Normalize] in your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			use: [
				require('postcss-normalize')({ /* options */ })
			]
		},
		dist: {
			src: '*.css'
		}
	}
});
```

[npm-url]: https://www.npmjs.com/package/postcss-normalize
[npm-img]: https://img.shields.io/npm/v/postcss-normalize.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-normalize
[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-normalize.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/postcss-normalize.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[PostCSS Normalize]: https://github.com/jonathantneal/postcss-normalize
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss

[browserlist]: http://browserl.ist/
[normalize.css]: https://github.com/jonathantneal/normalize.css
