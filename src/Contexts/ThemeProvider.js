import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);
    
    const info = {
        isDark,
        setIsDark
    }
    return (
        <ThemeContext.Provider
            value={info}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;