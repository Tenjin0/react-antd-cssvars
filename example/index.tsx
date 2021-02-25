import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, Theme, TThemeColorTypes } from '../src/context/themeProvider';

import App from './components/index'

import './style.less'

const computed = (key: TThemeColorTypes, value: string) => {

	console.log(key, value,)
	if (key === "primary-color") {
		theme.set("table-head-text-color", value)
		theme.set("table-head-background", Theme.tint(value, 90))
		theme.set("table-head-background-hover", Theme.tint(value, 75))
		theme.set("table-head-background-selected", Theme.tint(value, 15))
		theme.set("table-head-background-selected-hover", value)
	}
	if (theme.has(`${key}-hover`)) {
		theme.set(`${key}-hover` as TThemeColorTypes, Theme.tint(value, 17.5))
	}

}
const theme = new Theme<TThemeColorTypes>(null, computed)

window['theme'] = theme

ReactDOM.render(<ThemeProvider value={theme}><App /></ThemeProvider>, document.getElementById("root"));
