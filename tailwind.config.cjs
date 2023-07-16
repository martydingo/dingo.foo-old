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
						'--tw-prose-headings': theme('colors.everforest.dark.gray.2'),
						h1: {
							color: theme("colors.everforest.dark.gray.2"),
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
			light: {
				"primary": "#F57D26",
				"primary-focus": "#E69875",
				"secondary": "#DFA000",
				"secondary-focus": "#DBBC7F",
				"accent": "#8DA101",
				"accent-focus": "#A7C080",
				"neutral": "#DDD8BE",
				"base-100": "#F3EAD3",
				"base-200": "#EAE4CA",
				"base-300": "#E5DFC5",
				"base-content": "#5C6A72",
			},
		}]
	}
}
