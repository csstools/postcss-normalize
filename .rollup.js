import babel from 'rollup-plugin-babel';

export default {
	input: 'src/index.js',
	output: [
		{ file: 'index.cjs.js', format: 'cjs', sourcemap: true, strict: false },
		{ file: 'index.esm.mjs', format: 'esm', sourcemap: true, strict: false }
	],
	plugins: [
		babel({
			plugins: [
				['@babel/plugin-syntax-import-meta']
			],
			presets: [
				['@babel/preset-env', { modules: false, targets: { node: 8 } }]
			]
		}),
		patchBabelPluginSyntaxImportMeta()
	]
};

function patchBabelPluginSyntaxImportMeta () {
	return {
		name: 'patch-babel-plugin-syntax-import-meta',
		renderChunk (code) {
			const requireMatch = /new \(require\('u' \+ 'rl'\)\.URL\)/;

			return code.replace(requireMatch, 'new url.URL');
		}
	};
}
