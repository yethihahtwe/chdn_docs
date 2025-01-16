// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.chdn-karenni.org',
	integrations: [
		starlight({
			title: 'CHDN Documentations',
			logo: {
				src: './src/assets/logo.png',
			},
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			sidebar: [
				{
					label: 'Mobile Applications', items: [
						{label: 'CHDN Case Report', slug: 'mobile-apps/chdn-case-report'},
					],
				},
			],
		}),
	],
});