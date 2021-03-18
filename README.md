# react-antd-cssvars

[![Build Status](https://travis-ci.org/Tenjin0/react-antd-cssvars.svg?branch=master)](https://travis-ci.org/Tenjin0/react-antd-cssvars)
## Usage 

Provide a way to dynamically change the color of ant design components.  

1. [import the less file of this library to replace all ant design colors by the associated the custom property](#i-less)
2. [create a Theme to modify the values with javacript](#i-create)


Note: Support hex8.

### Done

* Button:  add secondary, success, warning type
* CheckBox
* Collapse
* Input
* Menu
* Message
* PageHeader
* Progress
* Radio
* Result
* Select
* Slider
* Spin
* Steps
* Switch
* Table
* Tabs
* Tag: add primary, secondary and danger color
* Timeline: add primary, secondary, success and danger color (Item need to import the one from the package)

### Not Done Yet

* Alert ( issue with the background)
* Dropdown
* Statistic
* BackTop
* Popconfirm
* Others xD

### [Demo page](https://tenjin0.github.io/react-antd-cssvars/example/)
<br/>

## A. Styles

### I. Less

```less
@import "~antd/dist/antd.less";
@import "~react-antd-cssvars/dist/style.less";

```

### II. Default [list here](https://github.com/Tenjin0/react-antd-cssvars/blob/develop/lib/styles/default.less)

You can redifine the default color value
```less

// in your less file
@import "~antd/dist/antd.less";
@import "~react-antd-cssvars/dist/style.less";

@default-antd-primary-color: #fff;
@default-antd-primary-color-hover: #333333;

```

### III. Custom properties [list here](https://github.com/Tenjin0/react-antd-cssvars/blob/develop/lib/styles/index.less)
<br/>
<br/>

## B. Theme [See example source](https://github.com/Tenjin0/react-antd-cssvars/blob/develop/example/index.tsx)

<br/>

### I. Create
	
```typescript
// in your typescript file
import { Theme, TThemeColorTypes } from "react-antd-cssvars"

const theme = new Theme<TThemeColorTypes>()
```
<br/>

### II. Init theme

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
<br/>

### III. Compute color

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
<br/>

### IV. Customize cssvars

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
<br/>

### V. Functions [See documentation](https://tenjin0.github.io/react-antd-cssvars/classes/theme_class.theme.html)

<br/>
<br/>

## C. Custom Component
<br/>

### I. Button: 

1.  add secondary, success, warning type
2.  add uppercase props

<br/>

### II. Tag: 

1.  add primary, secondary and danger color


<br/>

### III. Timeline:

1. add primary, secondary, success and danger color (Item need to import the one from the package)

<br/>


### IV. ColorPicker: 

* add new component ColorPicker

<br/>

### V. Status: 

* add new component Status Derived from Badge


<br/>
<br/>

## D. Requirements

* "@types/react": ">=16.0.0"
* "antd": "^4.13.0"
* "react": ">=16.0.0"
* "react-dom": ">=16.0.0
