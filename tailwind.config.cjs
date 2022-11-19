/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				"vector": "url(/assets/Vector.svg)"
			},
			colors: {
				secondary: {
					main: '#8AC653',
					light: '#2ACC32',
				},
				primary: '#950195',
				paleblue: '#F5FBFC'
			},
			animation: {
				'pulse-once': 'pulse_once 800ms linear',
				'slide-left': 'slide_left 600ms linear',
				'slide-right': 'slide_right 600ms linear',
			},
			keyframes: {
				slide_left: {
					'0%': {
						opacity: 0,
						transform: 'translateX(-15%)',
					},
					'100%': {
						transform: 'translateX(0%)',
						opacity: 1,
					},
				},
				slide_right: {
					'0%': {
						opacity: 0,
						transform: 'translateX(10%)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateX(0%)',
					},
				},
				pulse_once: {
					'0%': {
						opacity: 0,
					},
					'100%': {
						opacity: 1,
					},
				},
			},
		},
	},
	plugins: [],
};
