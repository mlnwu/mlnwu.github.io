// Importing required modules and components
import Spacer from './Spacer'; // Spacer is a custom component for adding vertical space
import { contact } from '../data/portfolio'; // 'contact' is an object containing contact information for a portfolio

// Defining the Contact component
const Contact = () => {
  // If there is no email data in the 'contact' object, return null (render nothing)
  if (!contact.email) return null;

  return (
    // Render the Contact section
    <section className='section contact center' id='contact'>
      {/* Add some space (height: 2) above the section */}
      <Spacer height={2} />

      {/* Render the section title */}
      <h2 className='section__title'>Contact</h2>

      {/* Render an anchor tag that opens the user's default email client */}
      <a href={`mailto:${contact.email}`} target='_blank' rel='noreferrer'>
        {/* Render a button-styled span that says "Email Me" */}
        <span type='button' className='btn btn--outline'>
          Email Me
        </span>
      </a>
    </section>
  );
};

// Export the Contact component to make it accessible to other parts of the application
export default Contact;
