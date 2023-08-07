// Importing required modules and components
import { useContext, useState, useEffect } from 'react'; // React hooks for state and effect handling
import Brightness2Icon from '@material-ui/icons/Brightness2'; // Material-UI icon for dark mode
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'; // Material-UI icon for light mode
import MenuIcon from '@material-ui/icons/Menu'; // Material-UI icon for the hamburger menu
import CloseIcon from '@material-ui/icons/Close'; // Material-UI icon for the close button
import { ThemeContext } from '../contexts/theme'; // hemeContext is a custom context for managing theme
import { home, about, projects, contact } from '../data/portfolio'; // Data objects related to the portfolio

// Defining the Navbar component
const Navbar = () => {
  // Using the useContext hook to access theme state and toggleTheme function from the ThemeContext
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);

  // State to manage the visibility of the navigation list (hamburger menu)
  const [showNavList, setShowNavList] = useState(false);

  // State to track whether the page has been scrolled or not
  const [scrolled, setScrolled] = useState(false);

  // Destructuring data from the 'home' object
  const { name } = home;

  // useEffect hook to add and remove a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to toggle the visibility of the navigation list and enable/disable scroll on the body
  const toggleNavList = () => {
    if (showNavList) {
      document.body.classList.remove('disable-scroll');
    } else {
      document.body.classList.add('disable-scroll');
    }
    setShowNavList(!showNavList);
  };

  // Function to hide the navigation list and enable scroll on the body
  const hideNavList = () => {
    document.body.classList.remove('disable-scroll');
    setShowNavList(false);
  };

  return (
    // Render the Navbar
    <nav className={`center nav ${scrolled ? 'shadow' : ''}`}>
      <div className='nav__content animate__animated animate__fadeIn animate__delay-5s'>
        {/* Navigation list */}
        <ul style={{ display: showNavList ? 'flex' : null }} className='nav__list'>
          {/* Render the home link */}
          <li className='nav__list-item'>
            <strong>
              <a href='#top' onClick={hideNavList} className='link'>
                {name || 'About Me'}
              </a>
            </strong>
          </li>

          {/* Render the about link (if about data exists) */}
          {about.length && (
            <li className='nav__list-item'>
              <a href='#about' onClick={hideNavList} className='link link--nav'>
                About
              </a>
            </li>
          )}

          {/* Render the projects link (if projects data exists) */}
          {projects.length && (
            <li className='nav__list-item'>
              <a href='#projects' onClick={hideNavList} className='link link--nav'>
                Projects
              </a>
            </li>
          )}

          {/* Render the contact link (if email exists) */}
          {contact.email && (
            <li className='nav__list-item'>
              <a href='#contact' onClick={hideNavList} className='link link--nav'>
                Contact
              </a>
            </li>
          )}
        </ul>

        {/* Hamburger menu button */}
        <button
          type='button'
          onClick={toggleNavList}
          className='btn btn--icon nav__hamburger nav__button'
          aria-label='toggle navigation'
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Theme toggle button */}
        <button
          type='button'
          onClick={toggleTheme}
          className='btn btn--icon nav__theme nav__button'
          aria-label='toggle theme'
        >
          {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
      </div>
    </nav>
  );
};

// Export the Navbar component to make it accessible to other parts of the application
export default Navbar;
