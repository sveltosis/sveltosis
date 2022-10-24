import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import { run } from 'vite-plugin-run';

import FullReload from 'vite-plugin-full-reload';

// https://astro.build/config
export default defineConfig({
	// https://docs.astro.build/en/reference/configuration-reference/
	integrations: [tailwind(), svelte()],
	vite: {
		plugins: [
			run([
				{
					name: 'prebuild',
					run: ['node', 'prebuild.js'],
					condition: (file) => {
						return file.indexOf('/party/sveltosis/') > 0 && file.indexOf('.svelte') > 0;
					},
					startup: false,
					delay: 50,
				},
			]),
			FullReload(['content/**/*'], { delay: 800 }),
		],
		optimizeDeps: {
			exclude: ['locate-path', 'path-exists', 'find-up'],
		},
	},
});
