/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
  theme: {
		borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
			fontFamily: {
				'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
				'body': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
				'KH': ["KH", ...defaultTheme.fontFamily.serif]
			},
			colors: {
				'cloud-kh': '#e63a22',
				'gold': '#eeb12b',
				'mako': '#5cdcba',
				'pink': '#e780a9',
				'pink-100': '#d881a9',
				'mauve': '#84607a',
				'purple': '#74397a',
				'purple-200': '#663761',
				'purple-400': '#581455',
				'purple-500': '#1d082a',
				'hundred': '#ea165c'
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
 