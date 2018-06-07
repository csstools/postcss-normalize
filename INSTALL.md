# Installing PostCSS Normalize

$[PostCSS Normalize] runs in all Node environments, with special instructions for:

| [Node](#node) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- |

## Node

Add [PostCSS Normalize] to your project:

```bash
npm install postcss-normalize --save-dev
```

Use [PostCSS Normalize] to process your CSS:

```js
import postcssNormalize from 'postcss-normalize';

postcssNormalize.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
import postcss from 'postcss';
import postcssNormalize from 'postcss-normalize';

postcss([
  postcssNormalize(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## Webpack

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader --save-dev
```

Use [PostCSS Normalize] in your Webpack configuration:

```js
import postcssNormalize from 'postcss-normalize';

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [
              postcssNormalize(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire PostCSS] to your project:

```bash
npm install react-app-rewired react-app-rewire-postcss --save-dev
```

Use [React App Rewire PostCSS] and [PostCSS Normalize] in your
`config-overrides.js` file:

```js
import reactAppRewirePostcss from 'react-app-rewire-postcss';
import postcssNormalize from 'postcss-normalize';

export default config => reactAppRewirePostcss(config, {
  plugins: () => [
    postcssNormalize(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS Normalize] in your Gulpfile:

```js
import postcss from 'gulp-postcss';
import postcssNormalize from 'postcss-normalize';

gulp.task('css', () => gulp.src('./src/*.css').pipe(
  postcss([
    postcssNormalize(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS Normalize] in your Gruntfile:

```js
import postcssNormalize from 'postcss-normalize';

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
       postcssNormalize(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS Normalize]: https://github.com/jonathantneal/postcss-normalize
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired
