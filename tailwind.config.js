/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            maxWidth: {
                '8xl': '1400px'
            },
            colors: {
                'main-background': '#181D22',
                'tool-background': '#F5F5F5',
            },
        },
    },
};
