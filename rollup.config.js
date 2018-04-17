const rollupResolve = require('rollup-plugin-node-resolve');
const rollupBabel = require('rollup-plugin-babel');

module.exports = {
	input: './src/index.js',
	plugins: [
		rollupResolve(),
		rollupBabel()
	],
	output: [
		{
			name: 'namebndl',
			format: 'iife',
			file: './lib/index.js',
			sourcemap: false
		}
	],
}
