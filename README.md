# PostCSS Normalize [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Gitter Chat][git-img]][git-url]

[PostCSS Normalize] lets you use the parts of [normalize.css] you need, based
on your project’s [browserlist].

Use `@import-normalize` to determine where [normalize.css] rules will be
included. Duplicate `@import-normalize` rules will be removed. See all the [Options] for more information.

```css
@import-normalize;
```

Results:

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

## Options

### allowDuplicates

Allows you to insert multiple, duplicate insertions of [normalize.css] rules.
The default is `false`.

```js
require('postcss-normalize')({
  allowDuplicates: true
});
```

### browsers

Allows you to override of the project’s [browserlist] for [PostCSS Normalize].
The default is `false`.

```js
require('postcss-normalize')({
  browsers: 'last 2 versions'
});
```

### forceImport

Allows you to force an insertion of [normalize.css] rules at the beginning of
the CSS file if no insertion point is specified. The default is `false`.

```js
require('postcss-normalize')({
  forceImport: true
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
[Options]: #Options
