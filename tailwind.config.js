/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			maxWidth: {
				'8xl': '1400px',
			},
			colors: {
				'button-disabled': '#9E9E9E',
				'main-background': '#181D22',
				'card-background': '#efefef',
				'tool-background': '#f9f9f9',
				'code-background': '#272823',
			},
			screens: {
				sm: {max: '767px'},
				md: {min: '768px'},
				lg: {min: '1024px'},
				xl: {min: '1280px'},
				'2xl': {min: '1536px'},
				'3xl': {min: '1920px'},
			},
		},
	},
};
