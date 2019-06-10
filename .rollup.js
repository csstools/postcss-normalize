import babel from 'rollup-plugin-babel';

export default {
	input: 'src/index.js',
	output: [
		{ file: 'index.cjs.js', format: 'cjs', sourcemap: true, strict: false },
		{ file: 'index.esm.mjs', format: 'esm', sourcemap: true, strict: false }
	],
	plugins: [
		patchBabelPluginSyntaxImportMeta(),
		babel({
			plugins: [
				['@babel/plugin-syntax-import-meta']
			],
			presets: [
				['@babel/preset-env', { modules: false, targets: { node: 8 } }]
			]
		})
	]
};

function patchBabelPluginSyntaxImportMeta () {
	return {
		name: 'patch-babel-plugin-syntax-import-meta',
		renderChunk (code, chunk, options) {
			const currentUrlMatch = /var url = require\('url'\);([\W\w]+)const currentURL[^\n]+\nconst currentFilename[^\n]+/;

			const shouldTransformImportMeta = options.format === 'cjs' && currentUrlMatch.test(code);

			if (shouldTransformImportMeta) {
				const updatedCode = code.replace(currentUrlMatch, '$1const currentFilename = __filename;');

				return updatedCode;
			}

			return null;
		}
	};
}
