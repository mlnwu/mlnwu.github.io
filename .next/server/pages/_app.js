/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/theme.js":
/*!***************************!*\
  !*** ./contexts/theme.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ ThemeProvider),\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n// Importing required modules and components\n // Importing createContext, useEffect, and useState from 'react'\n // Importing PropTypes for type checking\n// Creating a new context called ThemeContext\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Defining the ThemeProvider component\nconst ThemeProvider = ({ children  })=>{\n    // State to manage the current theme name ('light' or 'dark')\n    const { 0: themeName , 1: setThemeName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light');\n    // useEffect hook to set the initial theme based on the user's system preference or local storage\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)'); // Check user's system preference for dark mode\n        setThemeName(localStorage.getItem('themeName') || (darkMediaQuery.matches ? 'dark' : 'light')); // Set the initial theme based on local storage or user's system preference\n    }, []);\n    // Function to toggle the theme between 'light' and 'dark' and save it to local storage\n    const toggleTheme = ()=>{\n        const name = themeName === 'dark' ? 'light' : 'dark';\n        localStorage.setItem('themeName', name); // Save the theme to local storage\n        setThemeName(name); // Update the theme state\n    };\n    // Theme colors based on the themeName\n    const themeColors = {\n        light: {\n            backgroundColor: '#F8F4F9',\n            textColor: '#1E2749'\n        },\n        dark: {\n            backgroundColor: '#1b263b',\n            textColor: '#DDE6ED'\n        }\n    };\n    // CSS styles based on the current theme\n    const themeStyles = {\n        backgroundColor: themeColors[themeName].backgroundColor,\n        color: themeColors[themeName].textColor\n    };\n    // Render the ThemeContext.Provider and pass the theme data and functions to its descendants\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: [\n            {\n                themeName,\n                toggleTheme\n            }\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: themeStyles,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/maggie/portfolio_v2/portfolio/mlnwu.github.io/contexts/theme.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/maggie/portfolio_v2/portfolio/mlnwu.github.io/contexts/theme.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined));\n};\n// PropTypes for the ThemeProvider component to ensure 'children' is of type 'node'\nThemeProvider.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)\n};\n// Export the ThemeProvider component and ThemeContext to make them accessible to other parts of the application\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy90aGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxFQUE0QztBQUNnQixDQUFnRTtBQUN4RixDQUF3QztBQUU1RSxFQUE2QztBQUM3QyxLQUFLLENBQUNJLFlBQVksaUJBQUdKLG9EQUFhO0FBRWxDLEVBQXVDO0FBQ3ZDLEtBQUssQ0FBQ0ssYUFBYSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ3ZDLEVBQTZEO0lBQzdELEtBQUssTUFBRUMsU0FBUyxNQUFFQyxZQUFZLE1BQUlOLCtDQUFRLENBQUMsQ0FBTztJQUVsRCxFQUFpRztJQUNqR0QsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsS0FBSyxDQUFDUSxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLENBQThCLCtCQUFHLENBQStDO1FBQ3pISCxZQUFZLENBQ1ZJLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQVcsZ0JBQzdCSixjQUFjLENBQUNLLE9BQU8sR0FBRyxDQUFNLFFBQUcsQ0FBTyxTQUMzQyxDQUEyRTtJQUNoRixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsRUFBdUY7SUFDdkYsS0FBSyxDQUFDQyxXQUFXLE9BQVMsQ0FBQztRQUN6QixLQUFLLENBQUNDLElBQUksR0FBR1QsU0FBUyxLQUFLLENBQU0sUUFBRyxDQUFPLFNBQUcsQ0FBTTtRQUNwREssWUFBWSxDQUFDSyxPQUFPLENBQUMsQ0FBVyxZQUFFRCxJQUFJLEVBQUcsQ0FBa0M7UUFDM0VSLFlBQVksQ0FBQ1EsSUFBSSxFQUFHLENBQXlCO0lBQy9DLENBQUM7SUFFRCxFQUFzQztJQUN0QyxLQUFLLENBQUNFLFdBQVcsR0FBRyxDQUFDO1FBQ25CQyxLQUFLLEVBQUUsQ0FBQztZQUNOQyxlQUFlLEVBQUUsQ0FBUztZQUMxQkMsU0FBUyxFQUFFLENBQVM7UUFDdEIsQ0FBQztRQUNEQyxJQUFJLEVBQUUsQ0FBQztZQUNMRixlQUFlLEVBQUUsQ0FBUztZQUMxQkMsU0FBUyxFQUFFLENBQVM7UUFDdEIsQ0FBQztJQUNILENBQUM7SUFFRCxFQUF3QztJQUN4QyxLQUFLLENBQUNFLFdBQVcsR0FBRyxDQUFDO1FBQ25CSCxlQUFlLEVBQUVGLFdBQVcsQ0FBQ1gsU0FBUyxFQUFFYSxlQUFlO1FBQ3ZESSxLQUFLLEVBQUVOLFdBQVcsQ0FBQ1gsU0FBUyxFQUFFYyxTQUFTO0lBQ3pDLENBQUM7SUFFRCxFQUE0RjtJQUM1RixNQUFNLDZFQUNIakIsWUFBWSxDQUFDcUIsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFBLENBQUM7Z0JBQUNuQixTQUFTO2dCQUFFUSxXQUFXO1lBQUMsQ0FBQztRQUFBLENBQUM7OEZBRXZEWSxDQUFHO1lBQUNDLEtBQUssRUFBRUwsV0FBVztzQkFBR2pCLFFBQVE7Ozs7Ozs7Ozs7O0FBR3hDLENBQUM7QUFFRCxFQUFtRjtBQUNuRkQsYUFBYSxDQUFDd0IsU0FBUyxHQUFHLENBQUM7SUFDekJ2QixRQUFRLEVBQUVILG1FQUF5QjtBQUNyQyxDQUFDO0FBRUQsRUFBZ0g7QUFDekUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvLi9jb250ZXh0cy90aGVtZS5qcz9jOGJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydGluZyByZXF1aXJlZCBtb2R1bGVzIGFuZCBjb21wb25lbnRzXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOyAvLyBJbXBvcnRpbmcgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCBhbmQgdXNlU3RhdGUgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnOyAvLyBJbXBvcnRpbmcgUHJvcFR5cGVzIGZvciB0eXBlIGNoZWNraW5nXG5cbi8vIENyZWF0aW5nIGEgbmV3IGNvbnRleHQgY2FsbGVkIFRoZW1lQ29udGV4dFxuY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG4vLyBEZWZpbmluZyB0aGUgVGhlbWVQcm92aWRlciBjb21wb25lbnRcbmNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIC8vIFN0YXRlIHRvIG1hbmFnZSB0aGUgY3VycmVudCB0aGVtZSBuYW1lICgnbGlnaHQnIG9yICdkYXJrJylcbiAgY29uc3QgW3RoZW1lTmFtZSwgc2V0VGhlbWVOYW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xuXG4gIC8vIHVzZUVmZmVjdCBob29rIHRvIHNldCB0aGUgaW5pdGlhbCB0aGVtZSBiYXNlZCBvbiB0aGUgdXNlcidzIHN5c3RlbSBwcmVmZXJlbmNlIG9yIGxvY2FsIHN0b3JhZ2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkYXJrTWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7IC8vIENoZWNrIHVzZXIncyBzeXN0ZW0gcHJlZmVyZW5jZSBmb3IgZGFyayBtb2RlXG4gICAgc2V0VGhlbWVOYW1lKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lTmFtZScpIHx8XG4gICAgICAgIChkYXJrTWVkaWFRdWVyeS5tYXRjaGVzID8gJ2RhcmsnIDogJ2xpZ2h0JylcbiAgICApOyAvLyBTZXQgdGhlIGluaXRpYWwgdGhlbWUgYmFzZWQgb24gbG9jYWwgc3RvcmFnZSBvciB1c2VyJ3Mgc3lzdGVtIHByZWZlcmVuY2VcbiAgfSwgW10pO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIHRvZ2dsZSB0aGUgdGhlbWUgYmV0d2VlbiAnbGlnaHQnIGFuZCAnZGFyaycgYW5kIHNhdmUgaXQgdG8gbG9jYWwgc3RvcmFnZVxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gdGhlbWVOYW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZU5hbWUnLCBuYW1lKTsgLy8gU2F2ZSB0aGUgdGhlbWUgdG8gbG9jYWwgc3RvcmFnZVxuICAgIHNldFRoZW1lTmFtZShuYW1lKTsgLy8gVXBkYXRlIHRoZSB0aGVtZSBzdGF0ZVxuICB9O1xuXG4gIC8vIFRoZW1lIGNvbG9ycyBiYXNlZCBvbiB0aGUgdGhlbWVOYW1lXG4gIGNvbnN0IHRoZW1lQ29sb3JzID0ge1xuICAgIGxpZ2h0OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjhGNEY5JyxcbiAgICAgIHRleHRDb2xvcjogJyMxRTI3NDknLFxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFiMjYzYicsXG4gICAgICB0ZXh0Q29sb3I6ICcjRERFNkVEJyxcbiAgICB9LFxuICB9O1xuXG4gIC8vIENTUyBzdHlsZXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgdGhlbWVcbiAgY29uc3QgdGhlbWVTdHlsZXMgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZUNvbG9yc1t0aGVtZU5hbWVdLmJhY2tncm91bmRDb2xvcixcbiAgICBjb2xvcjogdGhlbWVDb2xvcnNbdGhlbWVOYW1lXS50ZXh0Q29sb3IsXG4gIH07XG5cbiAgLy8gUmVuZGVyIHRoZSBUaGVtZUNvbnRleHQuUHJvdmlkZXIgYW5kIHBhc3MgdGhlIHRoZW1lIGRhdGEgYW5kIGZ1bmN0aW9ucyB0byBpdHMgZGVzY2VuZGFudHNcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbeyB0aGVtZU5hbWUsIHRvZ2dsZVRoZW1lIH1dfT5cbiAgICAgIHsvKiBUaGUgdGhlbWVTdHlsZXMgYXJlIGFwcGxpZWQgdG8gdGhlIGRpdiwgYWZmZWN0aW5nIHRoZSBzdHlsZXMgb2YgYWxsIGNoaWxkcmVuICovfVxuICAgICAgPGRpdiBzdHlsZT17dGhlbWVTdHlsZXN9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbi8vIFByb3BUeXBlcyBmb3IgdGhlIFRoZW1lUHJvdmlkZXIgY29tcG9uZW50IHRvIGVuc3VyZSAnY2hpbGRyZW4nIGlzIG9mIHR5cGUgJ25vZGUnXG5UaGVtZVByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG4vLyBFeHBvcnQgdGhlIFRoZW1lUHJvdmlkZXIgY29tcG9uZW50IGFuZCBUaGVtZUNvbnRleHQgdG8gbWFrZSB0aGVtIGFjY2Vzc2libGUgdG8gb3RoZXIgcGFydHMgb2YgdGhlIGFwcGxpY2F0aW9uXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyLCBUaGVtZUNvbnRleHQgfTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJUaGVtZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aGVtZU5hbWUiLCJzZXRUaGVtZU5hbWUiLCJkYXJrTWVkaWFRdWVyeSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWF0Y2hlcyIsInRvZ2dsZVRoZW1lIiwibmFtZSIsInNldEl0ZW0iLCJ0aGVtZUNvbG9ycyIsImxpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiZGFyayIsInRoZW1lU3R5bGVzIiwiY29sb3IiLCJQcm92aWRlciIsInZhbHVlIiwiZGl2Iiwic3R5bGUiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/theme.js\n");

/***/ }),

/***/ "./data/portfolio.js":
/*!***************************!*\
  !*** ./data/portfolio.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home),\n/* harmony export */   \"about\": () => (/* binding */ about),\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst home = {\n    name: 'Maggie Wu',\n    role: 'Computer Science Graduate',\n    company: 'Oregon State University',\n    description: [\n        '[about me]', \n    ],\n    resume: 'https://pdf.ac/2h4Z7q',\n    social: {\n        linkedin: 'https://www.linkedin.com/in/maggielwu/',\n        github: 'https://github.com/mlnwu'\n    },\n    greetingEmoji: '👋'\n};\nconst about = [\n    {\n        education: [\n            'I recently graduated magna cum laude (c/o \\'23) from Oregon State University with a Bachelor of Science in Computer Science. My first degree was from California Polytechnic State University - San Luis Obispo, where I graduated cum laude with a Bachelor of Science in Nutrition.', \n        ],\n        description: [\n            'In my portfolio, you\\'ll find a diverse collection of my work, where I take pleasure in crafting visually captivating pieces. Whether I\\'m immersed in programming, digital design, or curating content for my Instagram reels, my passion for aesthetics shines through. As a perpetual learner, I\\'m constantly pushing myself beyond comfort zones, embracing new challenges and exploring the boundaries of my skills.', \n        ],\n        skills: [\n            'Python',\n            'HTML',\n            'CSS',\n            'JavaScript',\n            'C++',\n            'C',\n            'SQL',\n            'Kotlin',\n            'Jetpack Compose',\n            'MongoDB',\n            'Mongoose',\n            'React',\n            'Node.js',\n            'Express.js',\n            'Next.js',\n            'REST API',\n            'Flask',\n            'Git',\n            'Linux', \n        ]\n    }, \n];\nconst projects = [\n    {\n        thumbnail: 'images/codewise.png',\n        name: 'Codewise',\n        description: [\n            'A software programming quiz website for employers to test incoming candidates.', \n        ],\n        stack: [\n            'JavaScript',\n            'CSS',\n            'HTML',\n            'React',\n            'Express.js',\n            'Node.js',\n            'SQL',\n            'AWS Aurora'\n        ],\n        sourceCode: 'https://github.com/mayacdsouza/codewise',\n        pdfPreview: 'https://pdf.ac/2kzv6W',\n        pdfPreview: 'https://pdf.ac/IFMet',\n        pdfPreview: 'https://pdf.ac/2OOik5'\n    },\n    {\n        thumbnail: 'images/biwu_fitness.png',\n        name: 'Biwu Fitness',\n        description: [\n            'A gym management website to record member information, transactions, personal trainers, class schedules and enrollment.', \n        ],\n        stack: [\n            'Python',\n            'HTML',\n            'CSS',\n            'SQL',\n            'Flask',\n            'Jinja2',\n            'Gunicorn'\n        ],\n        sourceCode: 'https://github.com/mlnwu/osu-cs340-w23-biwu-fitness',\n        pdfPreview: 'https://pdf.ac/2koS12'\n    },\n    {\n        thumbnail: 'images/flight_search.png',\n        name: 'Flight Search',\n        description: [\n            'An app that includes a search and favorite functionality. Users can view a list of destinations using that airport as a departure.', \n        ],\n        stack: [\n            'SQL',\n            'Room',\n            'Kotlin',\n            'Jetpack Compose',\n            'Android Studio'\n        ],\n        sourceCode: 'https://github.com/mlnwu/osu-cs492-su23-flight-search-app'\n    },\n    {\n        thumbnail: 'images/otp.png',\n        name: 'One-Time Pads',\n        description: [\n            'Programs that encrypt and decrypt information using a OTP-like system with socket-based interprocess communication.', \n        ],\n        stack: [\n            'C',\n            'Shell',\n            'Linux',\n            'Unix',\n            'Sockets'\n        ],\n        sourceCode: 'https://github.com/mlnwu/osu-cs344-sp23-otp'\n    },\n    {\n        thumbnail: 'images/traceroute.png',\n        name: 'Traceroute',\n        description: [\n            'A raw socket implementation of ICMP\\'s ping to enhance ping accuracy and create traceroute functionality.', \n        ],\n        stack: [\n            'Python',\n            'Internet Control Message Protocol',\n            'Linux',\n            'Unix',\n            'Sockets'\n        ],\n        sourceCode: 'https://github.com/mlnwu/osu-cs372-sp23-traceroute'\n    },\n    {\n        thumbnail: 'images/oen.png',\n        name: 'Oen',\n        description: [\n            'A project brief and user journey map for Oen, an ambidextrous vertical mouse, as a solution for the ergonomic needs of desk workers.', \n        ],\n        stack: [\n            'Figma', \n        ],\n        pdfPreview: 'https://pdf.ac/2tIKiR',\n        livePreview: 'https://www.figma.com/file/jnGursoij4vPwPqTsS6UAZ/Maggie-Wu---User-Journey-Map?node-id=0%3A1&t=ncbazdFP89UuDcpK-1'\n    }, \n];\nconst contact = {\n    email: 'maggielwu@gmail.com'\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDO1lBQ1osQ0FBMkc7UUFDN0csQ0FBQztRQUNEVyxLQUFLLEVBQUUsQ0FBQztZQUFBLENBQVE7WUFBRSxDQUFtQztZQUFFLENBQU87WUFBRSxDQUFNO1lBQUUsQ0FBUztRQUFBLENBQUM7UUFDbEZDLFVBQVUsRUFBRSxDQUFvRDtJQUNsRSxDQUFDO0lBQ0QsQ0FBQztRQUNDRixTQUFTLEVBQUUsQ0FBZ0I7UUFDM0JiLElBQUksRUFBRSxDQUFLO1FBQ1hHLFdBQVcsRUFBRSxDQUFDO1lBQ1osQ0FBc0k7UUFDeEksQ0FBQztRQUNEVyxLQUFLLEVBQUUsQ0FBQztZQUFBLENBQU87UUFBQyxDQUFDO1FBQ2pCRSxVQUFVLEVBQUUsQ0FBdUI7UUFDbkNDLFdBQVcsRUFBRSxDQUFtSDtJQUNsSSxDQUFDO0FBQ0gsQ0FBQztBQUVELEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7SUFDZkMsS0FBSyxFQUFFLENBQXFCO0FBQzlCLENBQUM7QUFFc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvLi9kYXRhL3BvcnRmb2xpby5qcz9kOGI0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhvbWUgPSB7XG4gIG5hbWU6ICdNYWdnaWUgV3UnLFxuICByb2xlOiAnQ29tcHV0ZXIgU2NpZW5jZSBHcmFkdWF0ZScsXG4gIGNvbXBhbnk6ICdPcmVnb24gU3RhdGUgVW5pdmVyc2l0eScsXG4gIGRlc2NyaXB0aW9uOiBbXG4gICAgJ1thYm91dCBtZV0nLFxuICBdLFxuICByZXN1bWU6ICdodHRwczovL3BkZi5hYy8yaDRaN3EnLFxuICBzb2NpYWw6IHtcbiAgICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tYWdnaWVsd3UvJyxcbiAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vbWxud3UnLFxuICB9LFxuICBncmVldGluZ0Vtb2ppOiAn8J+RiycsXG59XG5cbmNvbnN0IGFib3V0ID0gW1xue1xuICBlZHVjYXRpb246IFtcbiAgICAnSSByZWNlbnRseSBncmFkdWF0ZWQgbWFnbmEgY3VtIGxhdWRlIChjL28gXFwnMjMpIGZyb20gT3JlZ29uIFN0YXRlIFVuaXZlcnNpdHkgd2l0aCBhIEJhY2hlbG9yIG9mIFNjaWVuY2UgaW4gQ29tcHV0ZXIgU2NpZW5jZS4gTXkgZmlyc3QgZGVncmVlIHdhcyBmcm9tIENhbGlmb3JuaWEgUG9seXRlY2huaWMgU3RhdGUgVW5pdmVyc2l0eSAtIFNhbiBMdWlzIE9iaXNwbywgd2hlcmUgSSBncmFkdWF0ZWQgY3VtIGxhdWRlIHdpdGggYSBCYWNoZWxvciBvZiBTY2llbmNlIGluIE51dHJpdGlvbi4nLFxuICBdLFxuICBkZXNjcmlwdGlvbjogW1xuICAgICdJbiBteSBwb3J0Zm9saW8sIHlvdVxcJ2xsIGZpbmQgYSBkaXZlcnNlIGNvbGxlY3Rpb24gb2YgbXkgd29yaywgd2hlcmUgSSB0YWtlIHBsZWFzdXJlIGluIGNyYWZ0aW5nIHZpc3VhbGx5IGNhcHRpdmF0aW5nIHBpZWNlcy4gV2hldGhlciBJXFwnbSBpbW1lcnNlZCBpbiBwcm9ncmFtbWluZywgZGlnaXRhbCBkZXNpZ24sIG9yIGN1cmF0aW5nIGNvbnRlbnQgZm9yIG15IEluc3RhZ3JhbSByZWVscywgbXkgcGFzc2lvbiBmb3IgYWVzdGhldGljcyBzaGluZXMgdGhyb3VnaC4gQXMgYSBwZXJwZXR1YWwgbGVhcm5lciwgSVxcJ20gY29uc3RhbnRseSBwdXNoaW5nIG15c2VsZiBiZXlvbmQgY29tZm9ydCB6b25lcywgZW1icmFjaW5nIG5ldyBjaGFsbGVuZ2VzIGFuZCBleHBsb3JpbmcgdGhlIGJvdW5kYXJpZXMgb2YgbXkgc2tpbGxzLicsXG4gIF0sXG4gIHNraWxsczogW1xuICAgICdQeXRob24nLFxuICAgICdIVE1MJyxcbiAgICAnQ1NTJyxcbiAgICAnSmF2YVNjcmlwdCcsXG4gICAgJ0MrKycsXG4gICAgJ0MnLFxuICAgICdTUUwnLFxuICAgICdLb3RsaW4nLFxuICAgICdKZXRwYWNrIENvbXBvc2UnLFxuICAgICdNb25nb0RCJyxcbiAgICAnTW9uZ29vc2UnLFxuICAgICdSZWFjdCcsXG4gICAgJ05vZGUuanMnLFxuICAgICdFeHByZXNzLmpzJyxcbiAgICAnTmV4dC5qcycsXG4gICAgJ1JFU1QgQVBJJyxcbiAgICAnRmxhc2snLFxuICAgICdHaXQnLFxuICAgICdMaW51eCcsXG4gIF0sXG59LFxuXVxuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9jb2Rld2lzZS5wbmcnLFxuICAgIG5hbWU6ICdDb2Rld2lzZScsXG4gICAgZGVzY3JpcHRpb246IFtcbiAgICAgICdBIHNvZnR3YXJlIHByb2dyYW1taW5nIHF1aXogd2Vic2l0ZSBmb3IgZW1wbG95ZXJzIHRvIHRlc3QgaW5jb21pbmcgY2FuZGlkYXRlcy4nLFxuICAgIF0sXG4gICAgc3RhY2s6IFsnSmF2YVNjcmlwdCcsICdDU1MnLCAnSFRNTCcsICdSZWFjdCcsICdFeHByZXNzLmpzJywgJ05vZGUuanMnLCAnU1FMJywgJ0FXUyBBdXJvcmEnXSxcbiAgICBzb3VyY2VDb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL21heWFjZHNvdXphL2NvZGV3aXNlJyxcbiAgICBwZGZQcmV2aWV3OiAnaHR0cHM6Ly9wZGYuYWMvMmt6djZXJyxcbiAgICBwZGZQcmV2aWV3OiAnaHR0cHM6Ly9wZGYuYWMvSUZNZXQnLFxuICAgIHBkZlByZXZpZXc6ICdodHRwczovL3BkZi5hYy8yT09pazUnLFxuICAgIC8vIGxpdmVQcmV2aWV3OiAnaHR0cHM6Ly9naXRodWIuY29tJyxcbiAgfSxcbiAge1xuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9iaXd1X2ZpdG5lc3MucG5nJyxcbiAgICBuYW1lOiAnQml3dSBGaXRuZXNzJyxcbiAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgJ0EgZ3ltIG1hbmFnZW1lbnQgd2Vic2l0ZSB0byByZWNvcmQgbWVtYmVyIGluZm9ybWF0aW9uLCB0cmFuc2FjdGlvbnMsIHBlcnNvbmFsIHRyYWluZXJzLCBjbGFzcyBzY2hlZHVsZXMgYW5kIGVucm9sbG1lbnQuJyxcbiAgICBdLFxuICAgIHN0YWNrOiBbJ1B5dGhvbicsICdIVE1MJywgJ0NTUycsICdTUUwnLCAnRmxhc2snLCAnSmluamEyJywgJ0d1bmljb3JuJ10sXG4gICAgc291cmNlQ29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tbG53dS9vc3UtY3MzNDAtdzIzLWJpd3UtZml0bmVzcycsXG4gICAgcGRmUHJldmlldzogJ2h0dHBzOi8vcGRmLmFjLzJrb1MxMicsXG4gIH0sXG4gIHtcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvZmxpZ2h0X3NlYXJjaC5wbmcnLFxuICAgIG5hbWU6ICdGbGlnaHQgU2VhcmNoJyxcbiAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgJ0FuIGFwcCB0aGF0IGluY2x1ZGVzIGEgc2VhcmNoIGFuZCBmYXZvcml0ZSBmdW5jdGlvbmFsaXR5LiBVc2VycyBjYW4gdmlldyBhIGxpc3Qgb2YgZGVzdGluYXRpb25zIHVzaW5nIHRoYXQgYWlycG9ydCBhcyBhIGRlcGFydHVyZS4nLFxuICAgIF0sXG4gICAgc3RhY2s6IFsnU1FMJywgJ1Jvb20nLCAnS290bGluJywgJ0pldHBhY2sgQ29tcG9zZScsICdBbmRyb2lkIFN0dWRpbyddLFxuICAgIHNvdXJjZUNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vbWxud3Uvb3N1LWNzNDkyLXN1MjMtZmxpZ2h0LXNlYXJjaC1hcHAnLFxuICB9LFxuICB7XG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL290cC5wbmcnLFxuICAgIG5hbWU6ICdPbmUtVGltZSBQYWRzJyxcbiAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgJ1Byb2dyYW1zIHRoYXQgZW5jcnlwdCBhbmQgZGVjcnlwdCBpbmZvcm1hdGlvbiB1c2luZyBhIE9UUC1saWtlIHN5c3RlbSB3aXRoIHNvY2tldC1iYXNlZCBpbnRlcnByb2Nlc3MgY29tbXVuaWNhdGlvbi4nLFxuICAgIF0sXG4gICAgc3RhY2s6IFsnQycsICdTaGVsbCcsICdMaW51eCcsICdVbml4JywgJ1NvY2tldHMnXSxcbiAgICBzb3VyY2VDb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL21sbnd1L29zdS1jczM0NC1zcDIzLW90cCcsXG4gIH0sXG4gIHtcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvdHJhY2Vyb3V0ZS5wbmcnLFxuICAgIG5hbWU6ICdUcmFjZXJvdXRlJyxcbiAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgJ0EgcmF3IHNvY2tldCBpbXBsZW1lbnRhdGlvbiBvZiBJQ01QXFwncyBwaW5nIHRvIGVuaGFuY2UgcGluZyBhY2N1cmFjeSBhbmQgY3JlYXRlIHRyYWNlcm91dGUgZnVuY3Rpb25hbGl0eS4nLFxuICAgIF0sXG4gICAgc3RhY2s6IFsnUHl0aG9uJywgJ0ludGVybmV0IENvbnRyb2wgTWVzc2FnZSBQcm90b2NvbCcsICdMaW51eCcsICdVbml4JywgJ1NvY2tldHMnXSxcbiAgICBzb3VyY2VDb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL21sbnd1L29zdS1jczM3Mi1zcDIzLXRyYWNlcm91dGUnLFxuICB9LFxuICB7XG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL29lbi5wbmcnLFxuICAgIG5hbWU6ICdPZW4nLFxuICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAnQSBwcm9qZWN0IGJyaWVmIGFuZCB1c2VyIGpvdXJuZXkgbWFwIGZvciBPZW4sIGFuIGFtYmlkZXh0cm91cyB2ZXJ0aWNhbCBtb3VzZSwgYXMgYSBzb2x1dGlvbiBmb3IgdGhlIGVyZ29ub21pYyBuZWVkcyBvZiBkZXNrIHdvcmtlcnMuJyxcbiAgICBdLFxuICAgIHN0YWNrOiBbJ0ZpZ21hJyxdLFxuICAgIHBkZlByZXZpZXc6ICdodHRwczovL3BkZi5hYy8ydElLaVInLFxuICAgIGxpdmVQcmV2aWV3OiAnaHR0cHM6Ly93d3cuZmlnbWEuY29tL2ZpbGUvam5HdXJzb2lqNHZQd1BxVHNTNlVBWi9NYWdnaWUtV3UtLS1Vc2VyLUpvdXJuZXktTWFwP25vZGUtaWQ9MCUzQTEmdD1uY2JhemRGUDg5VXVEY3BLLTEnLFxuICB9LFxuXVxuXG5jb25zdCBjb250YWN0ID0ge1xuICBlbWFpbDogJ21hZ2dpZWx3dUBnbWFpbC5jb20nLFxufVxuXG5leHBvcnQgeyBob21lLCBhYm91dCwgcHJvamVjdHMsIGNvbnRhY3QgfSJdLCJuYW1lcyI6WyJob21lIiwibmFtZSIsInJvbGUiLCJjb21wYW55IiwiZGVzY3JpcHRpb24iLCJyZXN1bWUiLCJzb2NpYWwiLCJsaW5rZWRpbiIsImdpdGh1YiIsImdyZWV0aW5nRW1vamkiLCJhYm91dCIsImVkdWNhdGlvbiIsInNraWxscyIsInByb2plY3RzIiwidGh1bWJuYWlsIiwic3RhY2siLCJzb3VyY2VDb2RlIiwicGRmUHJldmlldyIsImxpdmVQcmV2aWV3IiwiY29udGFjdCIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/portfolio.js\n");

/***/ }),

/***/ "./lib/google-analytics.js":
/*!*********************************!*\
  !*** ./lib/google-analytics.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ga_measurement_id\": () => (/* binding */ ga_measurement_id),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\nconst ga_measurement_id = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID;\n// logs page views\nconst pageview = (url)=>{\n    window.gtag('config', ga_measurement_id, {\n        page_path: url\n    });\n};\n// logs specific events\nconst event = ({ action , params  })=>{\n    window.gtag('event', action, params);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ29vZ2xlLWFuYWx5dGljcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxLQUFLLENBQUNBLGlCQUFpQixHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsK0JBQStCO0FBRTVFLEVBQWtCO0FBQ1gsS0FBSyxDQUFDQyxRQUFRLElBQUlDLEdBQUcsR0FBSyxDQUFDO0lBQ2hDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFRLFNBQUVQLGlCQUFpQixFQUFFLENBQUM7UUFDeENRLFNBQVMsRUFBRUgsR0FBRztJQUNoQixDQUFDO0FBQ0gsQ0FBQztBQUVELEVBQXVCO0FBQ2hCLEtBQUssQ0FBQ0ksS0FBSyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxHQUFFQyxNQUFNLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDNUNMLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQU8sUUFBRUcsTUFBTSxFQUFFQyxNQUFNO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvLi9saWIvZ29vZ2xlLWFuYWx5dGljcy5qcz80ZmIzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnYV9tZWFzdXJlbWVudF9pZCA9IHByb2Nlc3MuZW52LkdPT0dMRV9BTkFMWVRJQ1NfTUVBU1VSRU1FTlRfSURcblxuLy8gbG9ncyBwYWdlIHZpZXdzXG5leHBvcnQgY29uc3QgcGFnZXZpZXcgPSAodXJsKSA9PiB7XG4gIHdpbmRvdy5ndGFnKCdjb25maWcnLCBnYV9tZWFzdXJlbWVudF9pZCwge1xuICAgIHBhZ2VfcGF0aDogdXJsLFxuICB9KVxufVxuXG4vLyBsb2dzIHNwZWNpZmljIGV2ZW50c1xuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBwYXJhbXMgfSkgPT4ge1xuICB3aW5kb3cuZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHBhcmFtcylcbn1cbiJdLCJuYW1lcyI6WyJnYV9tZWFzdXJlbWVudF9pZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQU5BTFlUSUNTX01FQVNVUkVNRU5UX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJwYXJhbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/google-analytics.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/portfolio */ \"./data/portfolio.js\");\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/theme */ \"./contexts/theme.js\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/App.css */ \"./styles/App.css\");\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.css */ \"./styles/Home.css\");\n/* harmony import */ var _styles_Home_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Contact_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Contact.css */ \"./styles/Contact.css\");\n/* harmony import */ var _styles_Contact_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_Footer_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Footer.css */ \"./styles/Footer.css\");\n/* harmony import */ var _styles_Footer_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_Navbar_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Navbar.css */ \"./styles/Navbar.css\");\n/* harmony import */ var _styles_Navbar_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_ProjectCard_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/ProjectCard.css */ \"./styles/ProjectCard.css\");\n/* harmony import */ var _styles_ProjectCard_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectCard_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_Projects_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Projects.css */ \"./styles/Projects.css\");\n/* harmony import */ var _styles_Projects_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_ScrollToTop_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/ScrollToTop.css */ \"./styles/ScrollToTop.css\");\n/* harmony import */ var _styles_ScrollToTop_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_ScrollToTop_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_About_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/About.css */ \"./styles/About.css\");\n/* harmony import */ var _styles_About_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_About_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _lib_google_analytics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/google-analytics */ \"./lib/google-analytics.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(()=>{\n        if (!_lib_google_analytics__WEBPACK_IMPORTED_MODULE_17__.ga_measurement_id) return;\n        const handleRouteChange = (url)=>(0,_lib_google_analytics__WEBPACK_IMPORTED_MODULE_17__.pageview)(url)\n        ;\n        router.events.on('routeChangeComplete', handleRouteChange);\n        return ()=>router.events.off('routeChangeComplete', handleRouteChange)\n        ;\n    }, [\n        router.events\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maggie/portfolio_v2/portfolio/mlnwu.github.io/pages/_app.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: _data_portfolio__WEBPACK_IMPORTED_MODULE_2__.home.name || 'Portfolio'\n                    }, void 0, false, {\n                        fileName: \"/Users/maggie/portfolio_v2/portfolio/mlnwu.github.io/pages/_app.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maggie/portfolio_v2/portfolio/mlnwu.github.io/pages/_app.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_theme__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/maggie/portfolio_v2/portfolio/mlnwu.github.io/pages/_app.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/maggie/portfolio_v2/portfolio/mlnwu.github.io/pages/_app.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ1k7QUFDUztBQUNyQjtBQUNGO0FBQ0M7QUFDRztBQUNEO0FBQ0E7QUFDSztBQUNIO0FBQ0c7QUFDTjtBQUNSO0FBRWE7QUFDTTtBQUM4QjtTQUU1RE8sS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsS0FBSyxDQUFDQyxNQUFNLEdBQUdOLHVEQUFTO0lBQ3hCRCxpREFBUyxLQUFPLENBQUM7UUFDZixFQUFFLEdBQUdFLHFFQUFpQixFQUFFLE1BQU07UUFDOUIsS0FBSyxDQUFDTSxpQkFBaUIsSUFBSUMsR0FBRyxHQUFLTixnRUFBUSxDQUFDTSxHQUFHOztRQUMvQ0YsTUFBTSxDQUFDRyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFxQixzQkFBRUgsaUJBQWlCO1FBQ3pELE1BQU0sS0FBT0QsTUFBTSxDQUFDRyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxDQUFxQixzQkFBRUosaUJBQWlCOztJQUN6RSxDQUFDLEVBQUUsQ0FBQ0Q7UUFBQUEsTUFBTSxDQUFDRyxNQUFNO0lBQUEsQ0FBQztJQUVsQixNQUFNOzt3RkFFRGIsa0RBQUk7O2dHQUNGZ0IsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7d0JBQUNDLE9BQU8sRUFBQyxDQUFxQzs7Ozs7O2dHQUNsRUMsQ0FBSztrQ0FBRWxCLHNEQUFTLElBQUksQ0FBVzs7Ozs7Ozs7Ozs7O3dGQUVqQ0MsMERBQWE7c0dBQ1hNLFNBQVM7dUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvX3YyLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuLi9kYXRhL3BvcnRmb2xpbydcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy90aGVtZSdcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL0FwcC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9Ib21lLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL0NvbnRhY3QuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvRm9vdGVyLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL05hdmJhci5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9Qcm9qZWN0Q2FyZC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9Qcm9qZWN0cy5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9TY3JvbGxUb1RvcC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9BYm91dC5jc3MnXG5pbXBvcnQgJ2FuaW1hdGUuY3NzJ1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgZ2FfbWVhc3VyZW1lbnRfaWQsIHBhZ2V2aWV3IH0gZnJvbSAnLi4vbGliL2dvb2dsZS1hbmFseXRpY3MnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZ2FfbWVhc3VyZW1lbnRfaWQpIHJldHVyblxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4gcGFnZXZpZXcodXJsKVxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICByZXR1cm4gKCkgPT4gcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgfSwgW3JvdXRlci5ldmVudHNdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICAgIDx0aXRsZT57aG9tZS5uYW1lIHx8ICdQb3J0Zm9saW8nfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGhlbWVQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiSGVhZCIsImhvbWUiLCJUaGVtZVByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2FfbWVhc3VyZW1lbnRfaWQiLCJwYWdldmlldyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJldmVudHMiLCJvbiIsIm9mZiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/About.css":
/*!**************************!*\
  !*** ./styles/About.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/App.css":
/*!************************!*\
  !*** ./styles/App.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Contact.css":
/*!****************************!*\
  !*** ./styles/Contact.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Footer.css":
/*!***************************!*\
  !*** ./styles/Footer.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Home.css":
/*!*************************!*\
  !*** ./styles/Home.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Navbar.css":
/*!***************************!*\
  !*** ./styles/Navbar.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/ProjectCard.css":
/*!********************************!*\
  !*** ./styles/ProjectCard.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Projects.css":
/*!*****************************!*\
  !*** ./styles/Projects.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/ScrollToTop.css":
/*!********************************!*\
  !*** ./styles/ScrollToTop.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();