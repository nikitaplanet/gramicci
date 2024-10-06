/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'button-active': '#333333',
				'button-disabled': '#9E9E9E',
				'main-background': '#181D22',
				'card-background': '#efefef',
				'tool-background': '#f9f9f9',
				'code-background': '#272823',
			},
			screens: {
				sm: {max: '767px'},
				md: {max: '768px'},
				lg: {max: '1024px'},
				xl: {max: '1280px'},
				'2xl': {max: '1536px'},
				'3xl': {max: '1920px'},
			},
		},
	},
};
