
const ThemeColorKeys = ["primary-color", "secondary-color", "danger-color", "primary-color-hover", "secondary-color-hover", "danger-color-hover"];
export declare const DThemeColorTypes: ["primary-color", "secondary-color", "danger-color", "primary-color-hover", "secondary-color-hover", "danger-color-hover"];
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
				this.set(themecolorKey, color)
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

	set(key: T, value: string) {
		this.theme.set(key, value);
		const cssvar = this.keyToProperty(key)
		document.body.style.setProperty(cssvar, value);
		if (this.computed) {
			this.computed(key, value)
		}
	}

	has(key: string) {
		return this.theme.has(key as T)
	}

	get(key: T) {
		return this.theme.get(key)
	}

	static ColorLuminance(hex: string, lum: number) {

		// validate hex string
		hex = String(hex).replace(/[^0-9a-f]/gi, '');
		if (hex.length < 6) {
			hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
		}
		lum = lum || 0;

		// convert to decimal and change luminosity
		var rgb = "#", c, i;
		for (i = 0; i < 3; i++) {
			c = parseInt(hex.substr(i*2,2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			rgb += ("00"+c).substr(c.length);
		}

		return rgb;
	}

}


// document.documentElement.style.setProperty("--primary-color", "#23b696");
