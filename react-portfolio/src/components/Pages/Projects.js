import React, { useState } from 'react';
import '../../styles/Projects.scss';
import ToTopButton from '../ToTopButton/ToTopButton';

const Projects = () => {
  const [projectClick, setProjectClick] = useState(false);
  const showProject = () => {
    setProjectClick(!projectClick);
  };

  return (
    <div className="projects">
      <ToTopButton />
      <div className="projects-container">
        
      </div>
    </div>
  );
};

export default Projects;
