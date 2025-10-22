import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const themValue = {theme, setTheme}

    return <ThemeContext.Provider value = { themValue }>{ children }</ThemeContext.Provider>
}