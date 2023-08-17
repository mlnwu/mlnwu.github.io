// Importing required modules and components
import uniqid from 'uniqid'; // uniqid is a module used to generate unique IDs
import GitHubIcon from '@material-ui/icons/GitHub'; // Material-UI icon for GitHub
import LaunchIcon from '@material-ui/icons/Launch'; // Material-UI icon for launching
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; // MUI icon for PDF preview

// Defining the ProjectCard component
const ProjectCard = ({ project }) => (
  // Render the project card
  <div className='project'>
    <div>
      {/* Render the project thumbnail (if available) */}
      {project.thumbnail && (
        <img
          className='project__thumbnail'
          src={project.thumbnail}
          alt='thumbnail'
        />
      )}

      {/* Render the project name (if available) */}
      {project.name && <h3>{project.name}</h3>}

      {/* Render the project description (if available) */}
      {project.description && (
        <div className='project__description paragraph__list'>
          {/* Map over the description items and generate paragraphs */}
          {project.description.map((item) => (
            <p key={uniqid()}>{item}</p>
          ))}
        </div>
      )}
    </div>

    <div>
      {/* Render the project stack (if available) */}
      {project.stack && (
        <ul className='project__stack'>
          {/* Map over the stack items and generate list items */}
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Render the source code link (if available) */}
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          target='_blank'
          rel='noreferrer'
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {/* Render the PDF preview link (if available) */}
      {project.pdfPreview && (
        <a
          href={project.pdfPreview}
          target='_blank'
          rel='noreferrer'
          aria-label='pdf preview'
          className='link link--icon'
        >
          <PictureAsPdfIcon />
        </a>
      )}

      {/* Render the PDF preview link (if available) */}
      {project.pdfPreview2 && (
        <a
          href={project.pdfPreview2}
          target='_blank'
          rel='noreferrer'
          aria-label='pdf preview'
          className='link link--icon'
        >
          <PictureAsPdfIcon />
        </a>
      )}

      {/* Render the PDF preview link (if available) */}
      {project.pdfPreview3 && (
        <a
          href={project.pdfPreview3}
          target='_blank'
          rel='noreferrer'
          aria-label='pdf preview'
          className='link link--icon'
        >
          <PictureAsPdfIcon />
        </a>
      )}

      {/* Render the live preview link (if available) */}
      {project.livePreview && (
        <a
          href={project.livePreview}
          target='_blank'
          rel='noreferrer'
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  </div>
);

// Export the ProjectCard component to make it accessible to other parts of the application
export default ProjectCard;
