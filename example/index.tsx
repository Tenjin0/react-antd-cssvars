import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, Theme, TThemeColorTypes } from '../src/context/themeProvider';

import App from './components/index'

import './style.less'

const computed = (key: TThemeColorTypes, value: string) => {

	console.log(key, value,)
	if (key === "primary-color") {
		theme.set("primary-color-hover", Theme.ColorLuminance(value, -0.2))
	}
}
const theme = new Theme<TThemeColorTypes>(null, computed)

window['theme'] = theme

ReactDOM.render(<ThemeProvider value={theme}><App /></ThemeProvider>, document.getElementById("root"));
