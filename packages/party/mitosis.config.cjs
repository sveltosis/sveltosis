const { sveltosis } = require('@sveltosis/parser');

module.exports = {
	files: 'sveltosis/**/*',
	dest: 'output',
	targets: ['react', 'vue', 'angular', 'qwik', 'marko', 'solid'],
	parser: sveltosis,
	extension: 'svelte',
	options: {
		react: {
			typescript: true,
		},
		vue: {
			vueVersion: 3,
			api: 'composition',
			typescript: true,
		},
	},
};
