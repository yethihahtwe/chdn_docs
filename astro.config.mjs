// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.chdn-karenni.org',
	integrations: [
		starlight({
			title: 'CHDN Documentations',
			favicon: './public/favicon.ico',
			logo: {
				src: './src/assets/logo_light.png',
			},
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			customCss: [
				// Path to your custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Mobile Applications', items: [
						{label: 'CHDN Case Report', slug: 'mobile-apps/chdn-case-report'},
					],
				},
				{
					label: 'Web Applications', items: [
						{label: 'Malaria Case Report', items: [
							{label: 'Introduction', slug: 'web-apps/malaria-case-report/introduction'},
							{label: 'Getting Started', slug: 'web-apps/malaria-case-report/getting-started'},
							{label: 'Managing case reports', slug: 'web-apps/malaria-case-report/managing-case-reports'},
							{label: 'Viewing case reports', slug: 'web-apps/malaria-case-report/viewing-case-reports'},
							{label: 'Adding new case reports', slug: 'web-apps/malaria-case-report/adding-new-case-reports'},
							{label: 'Editing case reports', slug: 'web-apps/malaria-case-report/editing-case-reports'},
							{label: 'Managing users', slug: 'web-apps/malaria-case-report/managing-users'},
						]},
					],
				}
			],
		}),
	],
});
