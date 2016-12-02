module.exports = {
	entry: 'index.es6',
	dest: 'index.js',
	format: 'cjs',
	plugins: [
		require('rollup-plugin-babel')({
			presets: [
				['es2015', {
					modules: false
				}]
			],
			plugins: [
				'external-helpers'
			]
		}),
		require('rollup-plugin-uglify')()
	]
};
