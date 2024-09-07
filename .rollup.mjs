export default {
	input: 'src/index.js',
	output: [
		{ file: 'index.cjs', format: 'cjs', exports: 'default', sourcemap: false, strict: false },
		{ file: 'index.mjs', format: 'esm', sourcemap: false, strict: false }
	]
}
