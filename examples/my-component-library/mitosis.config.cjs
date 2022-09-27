const { sveltosis } = require('@sveltosis/parser');

module.exports = {
	files: 'src/lib/**/*',
	dest: 'output',
	targets: ['vue'],
	parser: sveltosis,
	extension: 'svelte'
};
