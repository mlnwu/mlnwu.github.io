// Importing required modules and components
import { createContext, useEffect, useState } from 'react'; // Importing createContext, useEffect, and useState from 'react'
import PropTypes from 'prop-types'; // Importing PropTypes for type checking

// Creating a new context called ThemeContext
const ThemeContext = createContext();

// Defining the ThemeProvider component
const ThemeProvider = ({ children }) => {
  // State to manage the current theme name ('light' or 'dark')
  const [themeName, setThemeName] = useState('light');

  // useEffect hook to set the initial theme based on the user's system preference or local storage
  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)'); // Check user's system preference for dark mode
    setThemeName(
      localStorage.getItem('themeName') ||
        (darkMediaQuery.matches ? 'dark' : 'light')
    ); // Set the initial theme based on local storage or user's system preference
  }, []);

  // Function to toggle the theme between 'light' and 'dark' and save it to local storage
  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name); // Save the theme to local storage
    setThemeName(name); // Update the theme state
  };

  // Theme colors based on the themeName
  const themeColors = {
    light: {
      backgroundColor: '#F8F4F9',
      textColor: '#1E2749',
    },
    dark: {
      backgroundColor: '#1b263b',
      textColor: '#DDE6ED',
    },
  };

  // CSS styles based on the current theme
  const themeStyles = {
    backgroundColor: themeColors[themeName].backgroundColor,
    color: themeColors[themeName].textColor,
  };

  // Render the ThemeContext.Provider and pass the theme data and functions to its descendants
  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {/* The themeStyles are applied to the div, affecting the styles of all children */}
      <div style={themeStyles}>{children}</div>
    </ThemeContext.Provider>
  );
};

// PropTypes for the ThemeProvider component to ensure 'children' is of type 'node'
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Export the ThemeProvider component and ThemeContext to make them accessible to other parts of the application
export { ThemeProvider, ThemeContext };
