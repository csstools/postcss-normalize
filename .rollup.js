import pkg from './package.json'

export default {
	...pkg.rollup,
	plugins: [patchBabelPluginSyntaxImportMeta(), ...pkg.rollup.plugins.map(plugin => require(plugin)())],
	onwarn(warning, warn) {
		if (warning.code !== 'UNRESOLVED_IMPORT') warn(warning)
	}
}

function patchBabelPluginSyntaxImportMeta () {
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
