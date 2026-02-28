import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface ThemeContextType {
    isDark: boolean;
    toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ isDark: true, toggle: () => { } });

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState(() => {
        const stored = localStorage.getItem('theme');
        return stored ? stored === 'dark' : true;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.remove('light');
        } else {
            root.classList.add('light');
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, toggle: () => setIsDark(prev => !prev) }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
