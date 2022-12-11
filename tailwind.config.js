/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
  theme: {
    extend: {
			fontFamily: {
				'sans': ["Proxima Nova", ...defaultTheme.fontFamily.sans],
				'body': ['"Open Sans"']
			},
			colors: {
				'cloud-kh': '#d12525',
				'gold': '#ebd366',
				'mako': '#5cdcba',
				'pink': '#e780a9',
				'pink-100': '#d881a9',
				'mauve': '#84607a',
				'purple': '#74397a',
				'purple-200': '#663761',
				'purple-400': '#581455',
				'purple-500': '#1d082a'
			},
			boxShadow: {
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.2)',
      },
			dropShadow: {
        'lg': 'filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.2)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.2));',
      }
		},
  },
  plugins: [],
}
 