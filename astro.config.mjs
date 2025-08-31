// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  	site: 'https://cawtoz.github.io',
  	base: '/cineteca-manual',
	integrations: [
		starlight({
			title: 'Manual de Usuario - Cineteca Digital',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
			},
			sidebar: [],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
