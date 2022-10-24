import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';
import svelte from '@astrojs/svelte';
import { run } from 'vite-plugin-run';

import FullReload from 'vite-plugin-full-reload';

// https://astro.build/config
export default defineConfig({
	// https://docs.astro.build/en/reference/configuration-reference/
	integrations: [tailwind(), svelte()],
	output: 'server',
	adapter: netlify(),
	vite: {
		plugins: [
			run([
				{
					name: 'prebuild',
					run: ['node', 'prebuild.js'],
					condition: (file) => {
						console.log({ file });
						return file.indexOf('/party/sveltosis/') > 0 && file.indexOf('.svelte') > 0;
					},
					startup: false,
					onFileChanged: () => {
						console.log('file changed');
					},
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
