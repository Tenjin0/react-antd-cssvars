import React from 'react';
import { Theme, TThemeColorTypes, TThemeComputed } from './theme';
declare const ThemeContext: React.Context<Theme<"primary-color" | "secondary-color" | "danger-color" | "primary-color-hover" | "secondary-color-hover" | "danger-color-hover">>;
export declare const ThemeProvider: React.Provider<Theme<"primary-color" | "secondary-color" | "danger-color" | "primary-color-hover" | "secondary-color-hover" | "danger-color-hover">>;
export declare const ThemeConsumer: React.Consumer<Theme<"primary-color" | "secondary-color" | "danger-color" | "primary-color-hover" | "secondary-color-hover" | "danger-color-hover">>;
export default ThemeContext;
export { Theme };
export type { TThemeColorTypes, TThemeComputed };
