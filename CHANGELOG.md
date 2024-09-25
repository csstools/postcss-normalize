# Changes to PostCSS Normalize

### 13.0.1

- Maintenance release after updating dependencies

### 13.0.0

- Pin versions of `@csstools/normalize.css` and `sanitize.css`

### 12.0.0

- Remove TypeScript types. This package is a dual published cjs and esm and it isn't worth it, all info is in `README.md`.
- Set minimum node version to 18
- Fix resolution of `@csstools/normalize.css` path when using ESM

### 11.0.0

- Cleanup build dependencies

### 10.0.1 (September 15, 2021)

- Added: `sanitize.css` to support 13+ (major).

This version removes support for `pages.css` yet is released as a patch version
to resolve issues in **Create React App**. This is a betrayal of semantic
versioning.

### 10.0.0 (April 28, 2021)

- Updated: PostCSS support to ^8 (major).
- Updated: Node support to 12+ (major).

### 9.0.0 (April 12, 2020)

- Updated: `normalize.css` to support any version (major).
- Updated: `sanitize.css` to support any version (major).
- Updated: Node support to 10.0.0 (major).
- Removed: Unused `browserslist` dependency.

### 8.0.1 (June 10, 2019)

- Fixed: Issue with Windows failing to resolve normalize.
- Updated: `browserslist` to 4.6.2 (patch).
- Updated: `postcss` to 7.0.17 (patch).

### 8.0.0 (June 3, 2019)

- Added: `sanitize.css` 10.0.0 (major).
- Updated: `@csstools/normalize.css` to 10.1.0 (major).
- Updated: `browserslist` to 4.5.6 (minor).
- Updated: `postcss` to 7.0.16 (patch).
- Updated: Node 8+ compatibility (major).

### 7.0.1 (August 24, 2018)

- Use postcss-browser-comments 2.0.0 (major, but a patch for this project).

PostCSS Browser Comments was using an older version of PostCSS, requiring 2
versions of PostCSS to use PostCSS Normalize. This update resolves that.

### 7.0.0 (August 24, 2018)

- Use normalize.css 9.0.1 (major).

### 6.0.0 (June 16, 2018)

- Use normalize.css 8 (major).
- Include normalize.css comments.
- Include normalize.css sourcemap.

### 5.0.0 (June 7, 2018)

- Update `browserslist` to 3.2.8 (major).
- Update: `postcss` to 6.0.22 (patch).
- Update: Node support from 4 to 6 (major).

### 4.0.0 (June 21, 2017)

- Require insertion point. Make old behavior an option.
- Allow multiple insertion points.

### 3.0.0 (May 26, 2017)

- Use csstools/normalize.css 7.
- Change the insertion point to `@import-normalize` to avoid confusion or
  collision with standard import behavior.

### 2.1.0 (May 26, 2017)

- Support an insertion point via `@import postcss-normalize`.
- Update tree creation to avoid AST issues with source.

### 2.0.1 (May 21, 2017)

- Update tree creation to avoid AST issues with other PostCSS plugins.

### 2.0.0 (May 17, 2017)

- Support PostCSS 6.
- Support Node 4.

### 1.0.0 (May 2, 2017)

- Initial version.
