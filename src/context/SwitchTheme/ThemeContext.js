import { createContext, useContext } from "react";

export const ThemeContext = createContext(null); //box of context data

export const useThemeContext = () => {
    const themeContext = useContext(ThemeContext);
    if(!themeContext) {
        console.log("you forgot to wrrap it with ThemeContext.provider")
    }
    return ThemeContext
}