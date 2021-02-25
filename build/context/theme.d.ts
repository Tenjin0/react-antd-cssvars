export declare const DThemeColorTypes: ["primary-color", "secondary-color", "danger-color", "primary-color-hover", "secondary-color-hover", "danger-color-hover"];
export declare type TThemeColorTypes = typeof DThemeColorTypes[number];
export declare type TThemeComputed<T extends string> = (key: T, value: string) => void;
export declare class Theme<T extends string> {
    static ThemeColorKeys: string[];
    theme: Map<T, string>;
    computed?: TThemeComputed<T>;
    constructor(theme?: Map<T, string>, computed?: TThemeComputed<T>);
    keyToProperty(key: T): string;
    set(key: T, value: string): void;
    has(key: string): boolean;
    get(key: T): string;
    static ColorLuminance(hex: string, lum: number): string;
}
