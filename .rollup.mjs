export default {
	input: 'src/index.js',
	output: [
		{ file: 'index.cjs', format: 'cjs', exports: 'default', sourcemap: false, strict: false },
		{ file: 'index.mjs', format: 'esm', sourcemap: false, strict: false }
	],
	plugins: [
		patchBabelPluginSyntaxImportMeta(),
	]
}

function patchBabelPluginSyntaxImportMeta() {
	return {
		name: 'patch-babel-plugin-syntax-import-meta',
		renderChunk (code, chunk, options) {
			const currentUrlMatch = /var url = require\('url'\);([\W\w]+)const currentURL[^\n]+\n(const currentFilename)[^\n]+/

			const shouldTransformImportMeta = options.format === 'cjs' && currentUrlMatch.test(code)

			if (shouldTransformImportMeta) {
				const updatedCode = code.replace(currentUrlMatch, '$1$2 = __filename;')

				return updatedCode
			}

			return null
		}
	}
}
