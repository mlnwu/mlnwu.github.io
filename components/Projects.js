// Importing required modules and components
import uniqid from 'uniqid'; // uniqid is a module used to generate unique IDs
import ProjectCard from './ProjectCard'; // ProjectCard is a component that displays project details
import Spacer from './Spacer'; // Spacer is a custom component for adding vertical space
import { projects } from '../data/portfolio'; // 'projects' is an array of objects containing information about projects

// Defining the Projects component
const Projects = () => {
  // If there are no projects, return null (render nothing)
  if (!projects.length) return null;

  return (
    // Render the Projects section
    <section id='projects' className='section projects'>
      {/* Add some space (height: 2) above the section */}
      <Spacer height={2} />

      {/* Render the section title */}
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {/* Map over the projects array and render a ProjectCard component for each project */}
        {projects.map((project) => (
          <ProjectCard key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

// Export the Projects component to make it accessible to other parts of the application
export default Projects;
