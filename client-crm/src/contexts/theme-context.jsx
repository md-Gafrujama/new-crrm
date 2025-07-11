import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";

const initialState = {
    theme: "system",
    setTheme: () => null,
};

export const ThemeProviderContext = createContext(initialState);

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme", ...props }) {
       const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem(storageKey);
        return storedTheme || defaultTheme;
    });

    useEffect(() => {
        console.log('Theme changed to:', theme);
        const root = window.document.documentElement;
  
        root.classList.remove("light", "dark");

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            console.log('System theme detected:', systemTheme);
            root.classList.add(systemTheme);
            document.body.className = systemTheme;
        }
        else {
            console.log('Applying theme class:', theme);
            root.classList.add(theme);
            document.body.className = theme;
        }
    }, [theme]);

    const value = {
        theme,
        setTheme: (theme) => {
             console.log('Setting theme to:', theme);
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node,
    defaultTheme: PropTypes.string,
    storageKey: PropTypes.string,
};
