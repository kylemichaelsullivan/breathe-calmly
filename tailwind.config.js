import { COLORS } from './src/colors';

const safeClasses = COLORS.map((color) => `bg-${color}-400`);

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	safelist: safeClasses,
	plugins: [],
};
