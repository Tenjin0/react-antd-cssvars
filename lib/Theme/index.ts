import React from "react"
import { Theme, TThemeColorTypes, TThemeComputed, hex } from "./class"

const ThemeContext = React.createContext<Theme<TThemeColorTypes>>(null)

export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer

export default ThemeContext
export { Theme }
export type { TThemeColorTypes, TThemeComputed, hex }
