// Importing required modules and components
import uniqid from 'uniqid'; // uniqid is a module used to generate unique IDs
import GitHubIcon from '@material-ui/icons/GitHub'; // Material-UI icon component for GitHub
import LinkedInIcon from '@material-ui/icons/LinkedIn'; // Material-UI icon component for LinkedIn
import { home } from '../data/portfolio'; // 'home' is an object containing information for the home section of a portfolio

// Defining the Home component
const Home = () => {
  // Destructuring data from the 'home' object
  const { name, role, company, resume, social, greetingEmoji } = home;

  // Extracting the first name from the 'name' property (if available)
  const firstName = name ? name.split(' ')[0] : null;

  return (
    // Render the Home section
    <div className='home'>
      <div className='home__pseudo-padding home__pseudo-padding-top' />

      {/* Render the greeting message with the first name */}
      {firstName && (
        <h1 className='home__greeting animate__animated animate__fadeInUp animate__delay-1s'>
          Hello, I&apos;m <span className='text--strong'>{firstName}</span>
          {/* Render the greeting emoji (if available) */}
          {greetingEmoji && <span> {greetingEmoji}</span>}
        </h1>
      )}

      {/* Render the role and company information */}
      {role && (
        <h1 className='home__role animate__animated animate__fadeInUp animate__delay-3s'>
          I&apos;m a {role} at
          {/* Render the company name (if available) */}
          {company && (
            <>
              <br />
              <span>
                {' '}
                <span className='text--strong'>{company}</span>
              </span>
            </>
          )}
        </h1>
      )}

      {/* Render the contact section */}
      <div className='home__contact center'>
        {/* Render the 'Resume' button (if a resume URL is available) */}
        {resume && (
          <a href={resume} target='_blank' rel='noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {/* Render social media links */}
        {social && (
          <>
            {/* Render the GitHub icon link (if a GitHub URL is available) */}
            {social.github && (
              <a
                href={social.github}
                target='_blank'
                rel='noreferrer'
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {/* Render the LinkedIn icon link (if a LinkedIn URL is available) */}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target='_blank'
                rel='noreferrer'
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
      <div className='home__pseudo-padding' />
    </div>
  );
};

// Export the Home component to make it accessible to other parts of the application
export default Home;
