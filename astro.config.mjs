// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


import astroD2 from 'astro-d2'

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
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
				label: 'UT1 - Primer tema',
				translations: {
					'va': 'UT1 - Tema primerenc',
					'en': 'UT1 - First one',
				},
				// Collapsa el grupo de forma predeterminada.
				collapsed: true,
				items: [
					{
						label: '1.1 básicos',
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
						label: '1.2 Submenú',
						translations: {
							'es': '1.2 Submenú',
							'en': '1.2 Submenu',
						},
						items: [
							'ut1/ut12-introduction',
							'ut1/ut12-other',
						],
					},
					{
						label: '1.3 tercer subapartado',
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
				label: 'UT2 - Segundo tema',
				translations: {
					'va': 'UT2 - Segon tema',
					'en': 'UT2 - Second topic',
				},
				// Collapsa el grupo de forma predeterminada.
				collapsed: true,
				items: [
					'ut2/ut2-introduction',
				],
			},
		],

	}), markdoc()],

});