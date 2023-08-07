// Importing required modules and components
import uniqid from 'uniqid'; // uniqid is a module used to generate unique IDs
import Spacer from './Spacer'; // Spacer is a custom component for adding vertical space
import Hyphenated from 'react-hyphen'; // react-hyphen is a module for hyphenating text
import { about } from '../data/portfolio'; // 'about' is an array of objects containing information about a portfolio

// Defining the About component
const About = () => {
  // Destructuring data from the first element of the 'about' array
  const { education, description, hobbies, skills } = about[0];

  // If there is no education data, return null (render nothing)
  if (!education.length) return null;

  return (
    // Render the About section
    <section className='section about' id='about'>
      {/* Add some space (height: 2) above the section */}
      <Spacer height={2} />

      {/* Render the section title */}
      <h2 className='section__title'>About</h2>

      {/* Render the education data (if available) */}
      {education && (
        <div className='about__desc paragraph__list'>
          {/* Use react-hyphen to hyphenate the text */}
          <Hyphenated>
            {/* Map over the education items and generate paragraphs */}
            {education.map((item) => (
              <p key={uniqid()}>{item}</p>
            ))}
            <></>
            <></>
          </Hyphenated>
        </div>
      )}

      {/* Add some space (height: 1) below the education data */}
      <Spacer height={1} />

      {/* Render the description data (if available) */}
      {description && (
        <div className='about__desc paragraph__list'>
          {/* Use react-hyphen to hyphenate the text */}
          <Hyphenated>
            {/* Map over the description items and generate paragraphs */}
            {description.map((item) => (
              <p key={uniqid()}>{item}</p>
            ))}
            <></>
            <></>
          </Hyphenated>
        </div>
      )}

      {/* Add some space (height: 1) below the description data */}
      <Spacer height={1} />

      {/* Render the hobbies data (if available) */}
      {hobbies && (
        <div className='about__desc paragraph__list'>
          {/* Use react-hyphen to hyphenate the text */}
          <Hyphenated>
            {/* Map over the hobbies items and generate paragraphs */}
            {hobbies.map((item) => (
              <p key={uniqid()}>{item}</p>
            ))}
            <></>
            <></>
          </Hyphenated>
        </div>
      )}

      {/* Add some space (height: 2) below the hobbies data */}
      <Spacer height={2} />

      {/* Render the skills data as an unordered list */}
      <ul className='about__list'>
        {/* Map over the skills and generate list items with unique keys */}
        {skills.map((skill) => (
          <li key={uniqid()} className='about__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

// Export the About component to make it accessible to other parts of the application
export default About;
