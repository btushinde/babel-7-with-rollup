const rollup = require('rollup');
const rollupConfig = require('./rollup.config');

rollup.rollup({
	input: 'src/index.js',
	plugins: rollupConfig.plugins,
}).then((bundleResult) => {
	return bundleResult.write({
		file: 'lib/index.js',
		format: 'iife',
		sourcemap: false,
		name: 'bndlname'
	});
});