"use strict";
exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ThemeProvider),
/* harmony export */   "N": () => (/* binding */ ThemeContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

// Importing required modules and components
 // Importing createContext, useEffect, and useState from 'react'
 // Importing PropTypes for type checking
// Creating a new context called ThemeContext
const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
// Defining the ThemeProvider component
const ThemeProvider = ({ children  })=>{
    // State to manage the current theme name ('light' or 'dark')
    const { 0: themeName , 1: setThemeName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light');
    // useEffect hook to set the initial theme based on the user's system preference or local storage
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)'); // Check user's system preference for dark mode
        setThemeName(localStorage.getItem('themeName') || (darkMediaQuery.matches ? 'dark' : 'light')); // Set the initial theme based on local storage or user's system preference
    }, []);
    // Function to toggle the theme between 'light' and 'dark' and save it to local storage
    const toggleTheme = ()=>{
        const name = themeName === 'dark' ? 'light' : 'dark';
        localStorage.setItem('themeName', name); // Save the theme to local storage
        setThemeName(name); // Update the theme state
    };
    // Theme colors based on the themeName
    const themeColors = {
        light: {
            backgroundColor: '#F8F4F9',
            textColor: '#1E2749'
        },
        dark: {
            backgroundColor: '#1b263b',
            textColor: '#DDE6ED'
        }
    };
    // CSS styles based on the current theme
    const themeStyles = {
        backgroundColor: themeColors[themeName].backgroundColor,
        color: themeColors[themeName].textColor
    };
    // Render the ThemeContext.Provider and pass the theme data and functions to its descendants
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: [
            {
                themeName,
                toggleTheme
            }
        ],
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: themeStyles,
            children: children
        })
    }));
};
// PropTypes for the ThemeProvider component to ensure 'children' is of type 'node'
ThemeProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)
};
// Export the ThemeProvider component and ThemeContext to make them accessible to other parts of the application



/***/ }),

/***/ 987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LE": () => (/* binding */ home),
/* harmony export */   "jZ": () => (/* binding */ about),
/* harmony export */   "q": () => (/* binding */ projects),
/* harmony export */   "PX": () => (/* binding */ contact)
/* harmony export */ });
const home = {
    name: 'Maggie Wu',
    role: 'Computer Science Student',
    company: 'Oregon State University',
    description: [
        '[about me]', 
    ],
    resume: 'https://pdf.ac/2h4Z7q',
    social: {
        linkedin: 'https://www.linkedin.com/in/maggielwu/',
        github: 'https://github.com/wumag'
    },
    greetingEmoji: '👋'
};
const about = [
    {
        education: [
            'I\'m a postbaccalaureate senior (c/o \'23) majoring in Computer Science at Oregon State University. My first degree was from California Polytechnic State University - San Luis Obispo, where I graduated cum laude with a Bachelor of Science in Nutrition.', 
        ],
        description: [
            'In my portfolio, you\'ll find a diverse collection of my work, where I take pleasure in crafting visually captivating pieces. Whether I\'m immersed in programming, digital design, or curating content for my Instagram reels, my passion for aesthetics shines through. As a perpetual learner, I\'m constantly pushing myself beyond comfort zones, embracing new challenges and exploring the boundaries of my skills.', 
        ],
        skills: [
            'Python',
            'HTML',
            'CSS',
            'JavaScript',
            'C++',
            'C',
            'SQL',
            'Kotlin',
            'Jetpack Compose',
            'MongoDB',
            'Mongoose',
            'React',
            'Node.js',
            'Express.js',
            'Next.js',
            'REST API',
            'Flask',
            'Git',
            'Linux', 
        ]
    }, 
];
const projects = [
    {
        thumbnail: 'images/codewise.png',
        name: 'Codewise',
        description: [
            'A software programming quiz website for employers to test incoming candidates.', 
        ],
        stack: [
            'JavaScript',
            'CSS',
            'HTML',
            'React',
            'Express.js',
            'Node.js',
            'SQL',
            'AWS Aurora'
        ],
        sourceCode: 'https://github.com/mayacdsouza/codewise',
        pdfPreview: 'https://pdf.ac/2kzv6W'
    },
    {
        thumbnail: 'images/biwu_fitness.png',
        name: 'Biwu Fitness',
        description: [
            'A gym management website to record member information, transactions, personal trainers, class schedules and enrollment.', 
        ],
        stack: [
            'Python',
            'HTML',
            'CSS',
            'SQL',
            'Flask',
            'Jinja2',
            'Gunicorn'
        ],
        sourceCode: 'https://github.com/wumag/osu-cs340-w23-biwu-fitness',
        pdfPreview: 'https://pdf.ac/2koS12'
    },
    {
        thumbnail: 'images/course_scroller.png',
        name: 'Course Scroller',
        description: [
            'A single-screen app that displays a scrollable list of the required courses for the CS post-bacc degree.', 
        ],
        stack: [
            'Kotlin',
            'Jetpack Compose',
            'Android Studio'
        ],
        sourceCode: 'https://github.com/wumag/osu-cs492-su23-assignment-3'
    },
    {
        thumbnail: 'images/otp.png',
        name: 'One-Time Pads',
        description: [
            'Programs that encrypt and decrypt information using a OTP-like system with socket-based interprocess communication.', 
        ],
        stack: [
            'C',
            'Shell',
            'Linux',
            'Unix',
            'Sockets'
        ],
        sourceCode: 'https://github.com/wumag/osu-cs344-sp23-otp'
    },
    {
        thumbnail: 'images/traceroute.png',
        name: 'Traceroute',
        description: [
            'A raw socket implementation of ICMP\'s ping to enhance ping accuracy and create traceroute functionality.', 
        ],
        stack: [
            'Python',
            'Internet Control Message Protocol',
            'Linux',
            'Unix',
            'Sockets'
        ],
        sourceCode: 'https://github.com/wumag/osu-cs372-sp23-traceroute'
    },
    {
        thumbnail: 'images/oen.png',
        name: 'Oen',
        description: [
            'A project brief and user journey map for Oen, an ambidextrous vertical mouse, as a solution for the ergonomic needs of desk workers.', 
        ],
        stack: [
            'Figma', 
        ],
        pdfPreview: 'https://pdf.ac/2tIKiR',
        livePreview: 'https://www.figma.com/file/jnGursoij4vPwPqTsS6UAZ/Maggie-Wu---User-Journey-Map?node-id=0%3A1&t=ncbazdFP89UuDcpK-1'
    }, 
];
const contact = {
    email: 'maggielwu@gmail.com'
};



/***/ })

};
;