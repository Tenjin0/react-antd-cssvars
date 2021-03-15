import React from "react"
import { Theme, TThemeColorTypes } from "../../lib/Theme"

export type CustomTThemeColorTypes = TThemeColorTypes | "debug"

const ThemeContext = React.createContext<Theme<CustomTThemeColorTypes>>(null)

export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer
