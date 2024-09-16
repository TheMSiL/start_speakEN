/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				's': '480px',
				lg: '1050px',
				'2xl': '1439px',
				'1500': '1500px',
				'3xl': '1900px',
			},
		},
	},
	plugins: [],
};
