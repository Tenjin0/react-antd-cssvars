import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider, Theme, TThemeColorTypes } from "../lib/Theme"

import App from "./components/index"

import "./style.less"

const computed = (key: TThemeColorTypes, value: string, luminance: number) => {
	if (key === "primary-color") {
		theme.set("table-head-text-color", value)
		const background = Theme.tint(value, 90)
		theme.set("table-head-background", background)
		theme.set("background-selected", background)
		theme.set("table-head-background-hover", Theme.tint(value, 75))
		theme.set("table-head-background-selected", Theme.tint(value, 15))
		theme.set("table-head-background-selected-hover", value)
	}
	if (theme.has(`${key}-hover` as TThemeColorTypes)) {
		theme.set(`${key}-hover` as TThemeColorTypes, Theme.tint(value, 17.5))
	}
	if (key === "menu-background") {
		if (luminance < 0.015) {
			theme.set("submenu-background", Theme.tint(value, 20))
		} else {
			theme.set("submenu-background", Theme.shade(value, 20))
		}
		if (Theme.isdark(value)) {
			theme.set("menu-text-color", theme.get("text-color-inv"))
		} else {
			theme.set("menu-text-color", theme.get("text-color"))
		}
	}
}
const theme = new Theme<TThemeColorTypes>(null, computed)
theme.set("menu-background", "#000000", true)
window["theme"] = theme

ReactDOM.render(
	<ThemeProvider value={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById("root"),
)
