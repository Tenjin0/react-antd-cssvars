import tinycolor from "@ctrl/tinycolor"

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

export declare type TThemeColorTypes = typeof DThemeColorTypes[number]

export const ThemeColorKeys: TThemeColorTypes[] = [
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

		if (computed) {
			this.computed = computed
		}

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
	}

	private keyToProperty(key: T) {
		return "--" + key
	}

	set(key: T, value: hex, computed = false, alpha?: number): void {
		const tiny = tinycolor(value)
		if (alpha !== undefined) {
			tiny.setAlpha(alpha)
		}
		alpha = tiny.getAlpha()

		this.theme[key] = alpha !== 1 ? tiny.toHex8String() : tiny.toHexString()
		const cssvar = this.keyToProperty(key)
		document.body.style.setProperty(cssvar, this.theme[key])
		if (computed && this.computed) {
			this.computed(key, this.theme[key], tiny.getLuminance(), tiny.getAlpha())
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

	static getLuminance(color: hex): number {
		return tinycolor(color).getLuminance()
	}

	static getAlpha(color: hex): number {
		return tinycolor(color).getAlpha()
	}
	static tint(hex: hex, weigth: number): hex {
		return tinycolor(hex).tint(weigth).toHexString()
	}

	static shade(hex: hex, weigth: number): hex {
		return tinycolor(hex).shade(weigth).toHexString()
	}

	static isdark(hex: hex): boolean {
		return tinycolor(hex).isDark()
	}

	static mix(color1: hex, color2: hex, percent = 50): hex {
		return tinycolor(color1).mix(color2, percent).toHex()
	}
}

// document.documentElement.style.setProperty("--primary-color", "#23b696");
