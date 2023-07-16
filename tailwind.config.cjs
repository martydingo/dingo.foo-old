import typography from "@tailwindcss/typography"
import daisyui from "daisyui"
import everforest from "./src/themes/everforest"

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				everforest
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						h1: {
							color: theme("colors.everforest.light.red"),
						},
						h2: {
							color: theme("colors.everforest.light.orange"),
						},
						h3: {
							color: theme("colors.everforest.light.yellow"),
						},
						h4: {
							color: theme("colors.everforest.light.green"),
						},
						h5: {
							color: theme("colors.everforest.light.blue"),
						},
						h6: {
							color: theme("colors.everforest.light.purple"),
						},
						"--tw-prose-body": theme("colors.everforest.light.primary"),
						"--tw-prose-quotes": theme("colors.everforest.light.gray.0"),
						"--tw-prose-code": theme("colors.everforest.light.gray.0"),
						"--tw-prose-bold": theme("colors.everforest.light.gray.2"),
					},
				},
				invert: {
					css: {
						'--tw-prose-headings': theme('colors.everforest.dark.gray.2'),
						h1: {
							color: theme("colors.everforest.dark.red"),
						},
						h2: {
							color: theme("colors.everforest.dark.orange"),
						},
						h3: {
							color: theme("colors.everforest.dark.yellow"),
						},
						h4: {
							color: theme("colors.everforest.dark.green"),
						},
						h5: {
							color: theme("colors.everforest.dark.blue"),
						},
						h6: {
							color: theme("colors.everforest.dark.purple"),
						},
						"--tw-prose-body": theme("colors.everforest.dark.primary"),
						"--tw-prose-quotes": theme("colors.everforest.dark.gray.0"),
						"--tw-prose-code": theme("colors.everforest.dark.gray.0"),
						"--tw-prose-bold": theme("colors.everforest.dark.gray.2"),
					},
				},
			}),
		},
	},
	plugins: [
		typography,
		daisyui
	],
	daisyui: {
		themes: [{
			dark: {
				"primary": "#E69875",
				"primary-focus": "#F57D26",
				"secondary": "#DBBC7F",
				"secondary-focus": "#DFA000",
				"accent": "#A7C080",
				"accent-focus": "#8DA101",
				"neutral": "#4D5960",
				"base-100": "#333C43",
				"base-200": "#3A464C",
				"base-300": "#434F55",
				"base-content": "#D3C6AA",
			},
		}]
	}
}
