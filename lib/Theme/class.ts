import Values from "values.js"
import tinycolor from "tinycolor2"

const ThemeColorKeys = [
	"primary-color",
	"secondary-color",
	"danger-color",
	"primary-color-hover",
	"secondary-color-hover",
	"danger-color-hover",
	"success-color",
	"warning-color",
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
	"success-color",
	"warning-color",
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

export type TThemeComputed<T extends string> = (
	key: T,
	value: string,
	luminance: number,
	alpha: number,
) => void

export class Theme<T extends string> {
	static ThemeColorKeys = ThemeColorKeys
	theme: TTheme<T>
	default: TTheme<T>
	computed?: TThemeComputed<T>
	private themeColorKeys: T[]
	constructor(theme?: TTheme<T>, computed?: TThemeComputed<T>, themeColorKeys?: T[]) {
		this.theme = {}
		this.default = {}
		this.themeColorKeys = themeColorKeys ? themeColorKeys : ([...Theme.ThemeColorKeys] as T[])
		for (let i = 0; i < this.themeColorKeys.length; i++) {
			const themecolorKey = this.themeColorKeys[i] as T
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

	set(key: T, value: hex, computed = false, alpha?: number): void {
		this.theme[key] = value

		const tiny = tinycolor(value)
		if (alpha !== undefined) {
			tiny.setAlpha(alpha)
		}
		const cssvar = this.keyToProperty(key)
		document.body.style.setProperty(cssvar, alpha !== undefined ? tiny.toRgbString() : value)
		if (computed && this.computed) {
			this.computed(key, value, tiny.getLuminance(), tiny.getAlpha())
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
