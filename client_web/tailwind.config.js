/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#6172F3',
			},
			backgroundColor: {
				overlay: 'rgba(0,0,0,0.7)',
			},
		},
	},
	plugins: [],
}
