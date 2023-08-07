// Importing required modules and components
import uniqid from 'uniqid'; // uniqid is a module used to generate unique IDs

// Defining the Spacer component
const Spacer = ({ height }) => {
  // Create an empty array to store the <br> elements
  const spacers = [];

  // Loop through the specified 'height' and push a <br> element with a unique key into the 'spacers' array
  for (let i = 0; i < height; i++) {
    spacers.push(<br key={uniqid()} />);
  }

  // Return the array of <br> elements, effectively creating the desired vertical spacing
  return spacers;
};

// Export the Spacer component to make it accessible to other parts of the application
export default Spacer;
