# postcss-normalize 
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

[PostCSS] plugin that that automatically applies the latest normalize.css

```css
.foo {
  color: #fff;
}
```

```css

/* Normalize styles here */

.foo {
  color: #fff;
}
```

--

### Usage

```js
postcss([ require('postcss-normalize') ])
```

See [PostCSS] docs for examples for your environment.

--

### License

MIT © [Sean King](https://twitter.com/seaneking)

[npm-image]: https://badge.fury.io/js/postcss-normalize.svg
[npm-url]: https://npmjs.org/package/postcss-normalize
[travis-image]: https://travis-ci.org/seaneking/postcss-normalize.svg?branch=master
[travis-url]: https://travis-ci.org/seaneking/postcss-normalize
[daviddm-image]: https://david-dm.org/seaneking/postcss-normalize.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/seaneking/postcss-normalize
[PostCSS]: https://github.com/postcss/postcss

