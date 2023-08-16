// Defining the Footer component
const Footer = () => (
  // Render the footer section
  <footer className='footer'>
    {/* Render an anchor tag that links to a GitHub repository */}
    <a
      href='https://github.com/mlnwu/mlnwu.github.io'
      target='_blank' // Open the link in a new tab/window
      rel='noreferrer' // Add security attributes to the link
      className='link footer__link' // Apply CSS classes for styling
    >
      Created by Maggie Wu
    </a>
  </footer>
);

// Export the Footer component to make it accessible to other parts of the application
export default Footer;
