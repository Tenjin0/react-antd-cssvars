import { useDebugValue } from "react";

import Values from 'values.js'

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
	"table-head-background-selected-hover"
];

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
	"table-head-background-selected-hover"
]

export declare type TThemeColorTypes = typeof DThemeColorTypes[number];

export type TThemeComputed<T extends string> = (key: T, value: string) => void

export class Theme<T extends string> {

	static ThemeColorKeys = ThemeColorKeys
	theme: Map<T, string>
	computed?: TThemeComputed<T>
	constructor(theme?: Map<T, string>, computed?: TThemeComputed<T>) {
		this.theme = new Map()
		for (let i = 0; i < Theme.ThemeColorKeys.length; i++) {
			const themecolorKey = Theme.ThemeColorKeys[i] as T;
			const cssvar = this.keyToProperty(themecolorKey)
			if (theme && theme.has(themecolorKey)) {
				const color = theme.get(themecolorKey)
				this.set(themecolorKey, color, false)
			}
			else {
				const color = getComputedStyle(document.body).getPropertyValue(cssvar).trim()
				this.theme.set(themecolorKey, color)
			}
		}

		if (computed) {
			this.computed = computed
		}

	}

	keyToProperty(key: T) {
		return "--" + key
	}

	set(key: T, value: string, computed: boolean = false) {
		this.theme.set(key, value);
		const cssvar = this.keyToProperty(key)
		document.body.style.setProperty(cssvar, value);
		if (computed && this.computed) {
			this.computed(key, value)
		}
	}

	has(key: string) {
		return this.theme.has(key as T)
	}

	get(key: T) {
		return this.theme.get(key)
	}

	static colorLuminance(hex: string, lum: number) {

		// validate hex string
		hex = String(hex).replace(/[^0-9a-f]/gi, '');
		if (hex.length < 6) {
			hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
		}
		lum = lum || 0;

		// convert to decimal and change luminosity
		var rgb = "#", c, i;
		for (i = 0; i < 3; i++) {
			c = parseInt(hex.substr(i * 2, 2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			rgb += ("00" + c).substr(c.length);
		}

		return rgb;
	}

	static tint(hex, weigth) {
		const color = new Values(hex)
		return "#" + color.tint(weigth).hex
	}

	static shade(hex, weigth) {
		const color = new Values(hex)
		return "#" + color.tint(weigth).hex
	}

}


// document.documentElement.style.setProperty("--primary-color", "#23b696");
