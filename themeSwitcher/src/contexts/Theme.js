import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
    theme: 'white'
});

export default ThemeContext;

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
    return useContext(ThemeContext);
}