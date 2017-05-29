# PostCSS Normalize [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Gitter Chat][git-img]][git-url]

[PostCSS Normalize] lets you use the parts of [normalize.css] you need, based
on your project’s [browserlist].

Example:

```css
/* { "browserlist": ["last 3 versions"] } */

/**
 * Add the correct display in IE 9-.
 */

audio,
video {
  display: inline-block;
}

/**
 * Remove the border on images inside links in IE 10-.
 */

img {
  border-style: none;
}
```

```css
/* { "browserlist": ["last 2 versions"] } */

/**
 * Remove the border on images inside links in IE 10-.
 */

img {
  border-style: none;
}
```

[PostCSS Normalize] will put itself at the beginning of your CSS file, unless
you dictate where it should be included:

```css
@import-normalize;
```

Duplicate `@import-normalize` rules will be removed for your convenience. Only
the first instance will be replaced.

---

[PostCSS Normalize] uses the non-opinionated version of [normalize.css].

---

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
[win-url]: https://ci.appveyor.com/project/jonathantneal/postcss-normalize
[win-img]: https://img.shields.io/appveyor/ci/jonathantneal/postcss-normalize.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[PostCSS Normalize]: https://github.com/jonathantneal/postcss-normalize
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss

[browserlist]: http://browserl.ist/
[normalize.css]: https://github.com/jonathantneal/normalize.css
