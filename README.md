# react-antd-cssvars

[![Build Status](https://travis-ci.org/Tenjin0/react-antd-cssvars.svg?branch=master)](https://travis-ci.org/Tenjin0/react-antd-cssvars)

Modify antd less files to replace colors by cssvar.
Add a theme provider to change dynamically the colors.

## Done

* Button:  add secondary, success, warning type
* CheckBox
* Collapse
* Input
* Menu
* Message
* PageHeader
* Progress
* Radio
* Select
* Slider
* Steps
* Switch
* Table
* Tabs
* Tag: add primary, secondary and danger color
* Timeline: add primary, secondary, success and danger color (Item need to import the one from the package)

## Not Done Yet

* Alert
* Result
* Spin
* Statistic
* BackTop
* Popconfirm
* Others xD

## [Demo page](https://tenjin0.github.io/react-antd-cssvars/example/)


## Styles

### Less

Documentation in progress.
### Css

Documentation in progress.


## Theme [See example source](https://github.com/Tenjin0/react-antd-cssvars/blob/develop/example/index.tsx)

### Create
	
```typescript
import { Theme, TThemeColorTypes } from "react-antd-cssvars"

const theme = new Theme<TThemeColorTypes>()
```

### Init theme

You can initialize the theme with the first parameter of the contructor.

```typescript
import { Theme, TThemeColorTypes, TTheme } from "react-antd-cssvars"

const initTheme: TTheme<TThemeColorTypes> = {
	"menu-background": "#000000",
	"submenu-background": "#333333",
	"menu-text-color": "#fff",
}

const theme = new Theme<TThemeColorTypes>(initTheme)
```

### Compute color

You can compute color from others color change by using the second parameter.

```typescript
import { Theme, TThemeColorTypes, TTheme } from "react-antd-cssvars"

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
```
### Customize cssvars

If you want to manage more cssvars. (Do not forget to define and initialize it in your less/css file)


```typescript
import { Theme, TThemeColorTypes, TTheme, DThemeColorTypes } from "react-antd-cssvars"
type CustomTThemeColorTypes = CustomTThemeColorTypes | "debug"
const customDThemeColorTypes: CustomTThemeColorTypes[] = [...ThemeColorKeys]
customDThemeColorTypes.push("debug")
	const initTheme: TTheme<CustomTThemeColorTypes> = {
		"debug": "#333333",
	}

const theme = new Theme<CustomTThemeColorTypes>(initTheme, null, customDThemeColorTypes)
```

### Functions

[See documentation](https://tenjin0.github.io/react-antd-cssvars/classes/theme_class.theme.html)


## Requirements

* "@types/react": ">=16.0.0"
* "antd": "^4.13.0"
* "react": ">=16.0.0"
* "react-dom": ">=16.0.0
