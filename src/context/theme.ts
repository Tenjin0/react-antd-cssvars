import Values from "../../node_modules/values.js"
import tinycolor from "tinycolor2"

const ThemeColorKeys = [
	"primary-color",
	"secondary-color",
	"danger-color",
	"primary-color-hover",
	"secondary-color-hover",
	"danger-color-hover",
	"disable-color",
	"text-color",
	"text-color-inv",
	"background-hover",
	"background-selected",
	"table-head-text-color",
	"table-head-background",
	"table-head-background-hover",
	"table-head-background-selected",
	"table-head-background-selected-hover",
	"menu-background",
	"submenu-background",
	"menu-text-color",
]

// --background-contrast: @default-antd-background-contrast;
export declare const DThemeColorTypes: [
	"primary-color",
	"secondary-color",
	"danger-color",
	"primary-color-hover",
	"secondary-color-hover",
	"danger-color-hover",
	"disable-color",
	"text-color",
	"text-color-inv",
	"background-hover",
	"background-selected",
	"table-head-text-color",
	"table-head-background",
	"table-head-background-hover",
	"table-head-background-selected",
	"table-head-background-selected-hover",
	"menu-background",
	"submenu-background",
	"menu-text-color",
]

export type hex = string

export type TTheme<T extends string> = {
	[key in T]?: string
}

export interface IValue {
	hex: hex
	luminance: number
	alpha: number
}
export declare type TThemeColorTypes = typeof DThemeColorTypes[number]

export type TThemeComputed<T extends string> = (key: T, value: string, luminance: number) => void

export class Theme<T extends string> {
	static ThemeColorKeys = ThemeColorKeys
	theme: TTheme<T>
	default: TTheme<T>
	computed?: TThemeComputed<T>
	constructor(theme?: TTheme<T>, computed?: TThemeComputed<T>) {
		this.theme = {}
		this.default = {}
		for (let i = 0; i < Theme.ThemeColorKeys.length; i++) {
			const themecolorKey = Theme.ThemeColorKeys[i] as T
			const cssvar = this.keyToProperty(themecolorKey)
			if (theme && theme[themecolorKey]) {
				const color = theme[themecolorKey]
				this.set(themecolorKey, color, false)
				this.default[themecolorKey] = color
			} else {
				const color = getComputedStyle(document.body).getPropertyValue(cssvar).trim()
				this.theme[themecolorKey] = color
				this.default[themecolorKey] = color
			}
		}

		if (computed) {
			this.computed = computed
		}
	}

	private keyToProperty(key: T) {
		return "--" + key
	}

	set(key: T, value: hex, computed = false): void {
		this.theme[key] = value

		const tiny = tinycolor(value)
		const cssvar = this.keyToProperty(key)
		document.body.style.setProperty(cssvar, value)
		if (computed && this.computed) {
			this.computed(key, value, tiny.getLuminance())
		}
	}

	has(key: T): boolean {
		return Boolean(this.theme[key])
	}

	get(key: T): hex {
		return this.theme[key]
	}

	reset(): void {
		for (const key in this.default) {
			const value = this.default[key]
			this.set(key, value)
		}
	}

	reverse(key1: T, key2: T): void {
		const tmp: hex = this.theme[key1]
		const tmp2: hex = this.theme[key2]
		this.set(key1, tmp2)
		this.set(key2, tmp)
	}

	static tint(hex: hex, weigth: number): hex {
		const color = new Values(hex)
		return "#" + color.tint(weigth).hex
	}

	static shade(hex: hex, weigth: number): hex {
		const color = new Values(hex)
		return "#" + color.shade(weigth).hex
	}

	static isdark(hex: hex): boolean {
		return tinycolor(hex).isDark()
	}
}

// document.documentElement.style.setProperty("--primary-color", "#23b696");
