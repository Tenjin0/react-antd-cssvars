import React from "react"
import ReactDOM from "react-dom"

import { ConfigProvider } from "antd"

import { Theme, TThemeColorTypes, TTheme, ThemeColorKeys } from "../lib/Theme"
import { CustomTThemeColorTypes, ThemeProvider } from "./context"
import App from "./components/index"

import "./style.less"

const customDThemeColorTypes: CustomTThemeColorTypes[] = [...ThemeColorKeys]
customDThemeColorTypes.push("debug")

const computed = (key: CustomTThemeColorTypes, value: string, luminance: number) => {
	if (key === "primary-color") {
		theme.set("table-head-text-color", value)
		const background = Theme.tint(value, 90)
		theme.set("table-head-background", background)
		theme.set("background-selected", background)
		theme.set("table-head-background-hover", Theme.tint(value, 75))
		theme.set("table-head-background-selected", Theme.tint(value, 15))
		theme.set("table-head-background-selected-hover", value)
		theme.set("box-shadow-color", value, false, 20)
	}
	if (theme.has(`${key}-hover` as TThemeColorTypes)) {
		theme.set(`${key}-hover` as TThemeColorTypes, Theme.tint(value, 17.5), false)
	}
	if (theme.has(`${key}-background` as TThemeColorTypes)) {
		theme.set(`${key}-background` as TThemeColorTypes, Theme.tint(value, 75), false)
	}
	if (key === "menu-background") {
		if (luminance < 0.015) {
			theme.set("submenu-background", Theme.tint(value, 20), false)
		} else {
			theme.set("submenu-background", Theme.shade(value, 20), false)
		}
		if (Theme.isdark(value)) {
			theme.set("menu-text-color", theme.get("text-color-inv"), false, 0.65)
		} else {
			theme.set("menu-text-color", theme.get("text-color"), false, 0.65)
		}
	}
}

const initTheme: TTheme<CustomTThemeColorTypes> = {
	"menu-background": "#000000",
	"submenu-background": "#333333",
	debug: "#333333",
}

const theme = new Theme<CustomTThemeColorTypes>(initTheme, computed, customDThemeColorTypes)
window["theme"] = theme

ReactDOM.render(
	<ConfigProvider>
		<ThemeProvider value={theme}>
			<App />
		</ThemeProvider>
	</ConfigProvider>,
	document.getElementById("root"),
)
