import React, { createContext, useState, useContext, useEffect } from 'react';
import { darkTheme, lightTheme } from './Themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;
  
  // Check if there's a saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  
  // Update CSS variables for scrollbar
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty('--scrollbar-track', '#222a35');
      document.documentElement.style.setProperty('--scrollbar-thumb', '#575c66');
      document.documentElement.style.setProperty('--scrollbar-thumb-hover', '#626970');
    } else {
      document.documentElement.style.setProperty('--scrollbar-track', '#f1f1f1');
      document.documentElement.style.setProperty('--scrollbar-thumb', '#c1c1c1');
      document.documentElement.style.setProperty('--scrollbar-thumb-hover', '#a8a8a8');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext); 