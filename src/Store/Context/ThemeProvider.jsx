import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../useContext';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // default light

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
