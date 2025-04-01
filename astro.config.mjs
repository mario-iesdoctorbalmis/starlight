// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


import astroD2 from 'astro-d2'

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
	// para configurar github pages
	site: 'https://mario-iesdoctorbalmis.github.io', //tu usuario de github

	integrations: [astroD2(), // starlight
	starlight({
		favicon: '/images/favicon.png',
		logo: {
			src: './src/assets/balmis.jpeg',
		},
		title: {
			es: 'IES Doctor Balmis - ES',
			va: 'IES Doctor Balmis - VA',
			en: 'IES Doctor Balmis - EN',
		},
		locales: {
			'es': { lang: 'es', label: 'Español' },
			'en': { lang: 'en', label: 'English' },
			'va': { lang: 'va', label: 'Valencià' },
		},
		// Set Spanish as the default language for this site.
		defaultLocale: 'es',
		sidebar: [
			// UT1
			{
				label: 'UT1 - Modo de trabajo de Astro Starlight',
				translations: {
					'va': 'UT1 - Modo de treball d\'Astro Starlight',
					'en': 'UT1 - Astro Starlight Work Mode',
				},
				// Collapsa el grupo de forma predeterminada.
				collapsed: true,
				items: [
					{
						label: '1.1 Básicos',
						translations: {
							'va': '1.1 Bàsics',
							'en': '1.1 Basics',
						},
						items: [
							'ut1/ut11-introduction',
							'ut1/ut11-other',
						],
					},
					{
						label: '1.2 Submenú ejemplo',
						translations: {
							'va': '1.2 Submenú',
							'en': '1.2 Submenu',
						},
						items: [
							'ut1/ut12-introduction',
							'ut1/ut12-other',
						],
					},
					{
						label: '1.3 tercer subapartado ejemplo',
						translations: {
							'va': '1.3 tercer subapartat',
							'en': '1.3 third subsection',
						},

						items: [
							'ut1/ut13-introduction',
						],
					},
				],
			},
			//UT2
			{
				label: 'UT2 - Subir a la nube',
				translations: {
					'va': 'UT2 - Nube',
					'en': 'UT2 - Cloud',
				},
				// Collapsa el grupo de forma predeterminada.
				collapsed: true,
				items: [
					'ut2/ut2-introduction',
				],
			},
			// UT3
			{
				label: 'UT3 - Tema 3',
				translations: {
					'va': 'UT3 - Tercer tema',
					'en': 'UT3 - Third topic',
				},
				// Collapsa el grupo de forma predeterminada.
				collapsed: true,
				autogenerate: { directory: 'ut3' },
			},
		],

	}), markdoc()],

});