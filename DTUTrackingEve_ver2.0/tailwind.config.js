/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/**.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				// background main dark
				'background--primary--dark': '#161722',
				'background--secondary--dark': '#0a0c17',
				// background main light
				'background--primary--light': '#ffffff',
				'background--secondary--light': '#f5f6fb',
				// text dark
				'text-main--dark': '#62a2f8',
				'text-gray--dark': '#737377',
				'text-white--dark': '#e8e6e3',
				'text-desc--dark': '#676568',
				'text--tab--dark': '#c8c7c6',
				'active--tab--bottom--dark': '#061d8d',
				'icon--color--dark': '#263fbb',
				// text light
				'text-main--light': '#26334a',
				'text-gray--light': '#918c8c',
				'text-white--light': '#ffffff',
				'text-desc--light': '#a7a39f',
				'text--tab--light': '#262626',
				'active--tab--bottom--light': '#657ef8',
				'icon--color--light': '#657df4',
				// button dark
				'color--bg-button--dark': '#657ef8',
				'color--text-button--dark': '#fafeff',
				// button light
				'color--bg--button--light': '#e1e7ff',
				'color--text--button--light': '#657ef7',
				//login dark
				'login--text--navigate--dark': '#4e74a7',
				'login--text--button--dark': '#928c84',
				'login--bg--button--dark': '#232628',
				'login--text--button--inp--dark': '#d6d6db',
				'login--bg--button--inp--dark': '#202124',
				'login--title--dark': '#d1e1ed',
				'input--err--dark': '#ce3e3e',
				'placeholder--dark': '#4e535c',
				'input--text--dark': '#eaeef2',
				'bg-input-active--dark': '#556ad0',
				//login light
				'login--text--navigate--light': '#6e86f9',
				'login--text--button--light': '#ccccd2',
				'login--bg--button--light': '#e4e5eb',
				'login--text--button--inp--light': '#ebeefe',
				'login--bg--button--inp--light': '#657ef8',
				'login--title--light': '#222224',
				'input--err--light': '#ff6c6c',
				// status dark
				'color--green--dark': '#41d4a0',
				'background--green--dark': '#1c2931',
				'panel-green--dark': '#20a584',
				'color--red--dark': '#89323e',
				'background--red--dark': '#27202d',
				'panel-red--dark': '#b43e4b',
				'color--gray--dark': '#586860',
				'background--gray--dark': '#0a0c17',
				'panel-gray--dark': '#5c6468',
				// status light
				'color--green--light': '#74debb',
				'background--green--light': '#effcf8',
				'panel-green--light': '#33d7a0',
				'color--red--light': '#ffc8e0',
				'background--red--light': '#fff5f7',
				'panel-red--light': '#ff8296',
				'color--gray--light': '#a0adbf',
				'background--gray--light': '#f5f6fb',
				'panel-gray--light': '#8693a5',
				// other
				yellow: '#fcae59',
				// search dark
				'bg--search': '#1b1d2a',
				'icon--search': '#63717f',
				'text-search': '#b5bac1',
				'placeholder--search': '#677789',

				// Ver 2
				// background
				backgroundColor_main_dark: '#0c0f1d',
				backgroundColor_secondary_dark: '#1b1d2a',
				backgroundColor_main_light: '#f5f6fb',
				backgroundColor_secondary_light: '#fff',
				// status green
				statusColor_panel_green: '#33d7a0',
				statusColor_bg_green: '#33d7a014',
				statusColor_icon_green: '#33d7a0',
				// status red
				statusColor_panel_red_light: '#ff8296',
				statusColor_bg_red_light: '#ff829614',
				statusColor_icon_red_light: '#ff8296',
				statusColor_panel_red_dark: '#b43e4b',
				statusColor_bg_red_dark: '#b43e4b14',
				statusColor_icon_red_dark: '#b43e4b',
				// status gray
				statusColor_panel_gray_light: '#8592a3',
				statusColor_bg_gray_light: '#fff',
				statusColor_icon_gray_light: '#8592a3',
				statusColor_panel_gray_dark: '#76777f',
				statusColor_bg_gray_dark: '#1b1d2a',
				statusColor_icon_gray_dark: '#76777f',
				// line tab
				lineTabColor: '#657ef8',
				// text
				textColor_main_dark: '#ffffffd9',
				textColor_secondary_dark: '#ffffff73',
				textColor_main_light: '#000000d9',
				textColor_secondary_light: '#00000073',
				// yellow
				yellow_star: '#ffcf39',
				// bottom tab
				btColor_icon_light: '#8592a3',
				btColor_icon_dark: '#cecfd1',
				btColor_icon_active: '#657ef8',
				// tab option
				tColor_bg_dark: '#363f7e',
				tColor_bg_light: '#e1e7ff',
				tColor_bg_active: '#657ef8',
				tColor_text: '#657ef8',
				tColor_text_active: '#fff',
				// input
				inpBgColor_light: '#f9fafc',
				inpPlaceholder_light: '#c1c2c7',
				inpBorder_light: '#e4e5eb',
				inpErr_light: '#ff4d4d',
				inpText_light: '#222224',
				inpBgColor_dark: '#202124',
				inpPlaceholder_dark: '#575c66',
				inpBorder_dark: '#2d2e33',
				inpErr_dark: '#ce3e3e',
				inpText_dark: '#f2f6fa',
			},
			backgroundColor: {
				overlay: 'rgba(0,0,0,0.7)',
			},
		},
	},
	plugins: [],
}
