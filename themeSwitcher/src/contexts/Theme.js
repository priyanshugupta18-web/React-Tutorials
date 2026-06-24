import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}