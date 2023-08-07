// Importing required modules and components
import React, { useEffect, useState } from 'react'; // Importing React, useEffect, and useState from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'; // Material-UI icon for the "scroll to top" arrow

// Defining the ScrollToTop component
const ScrollToTop = () => {
  // State to manage the visibility of the "scroll to top" button
  const [isVisible, setIsVisible] = useState(false);

  // useEffect hook to add and remove a scroll event listener
  useEffect(() => {
    // Function to toggle the visibility of the button based on the scroll position
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    // Adding the scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Removing the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Render the "scroll to top" button if isVisible is true, otherwise render nothing (null)
  return isVisible ? (
    <div className='scroll-top'>
      {/* Link to scroll back to the top of the page when clicked */}
      <a href='#top'>
        <ArrowUpwardIcon fontSize='large' />
      </a>
    </div>
  ) : null;
};

// Export the ScrollToTop component to make it accessible to other parts of the application
export default ScrollToTop;
