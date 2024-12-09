/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	safelist: 'prose prose-sm m-auto animate-spin animate-bounce animate-ping animate-pulse',
	daisyui: {
		themes: ['garden'],
	},
	plugins: [
		require('@tailwindcss/typography'), require('daisyui')
	],
}
