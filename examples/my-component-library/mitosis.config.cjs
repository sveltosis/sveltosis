const { sveltosis } = require('sveltosis');

module.exports = {
	files: 'src/lib/**/*',
	dest: 'output',
	targets: ['vue'],
	parser: sveltosis,
	extension: 'svelte'
};
