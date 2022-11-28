import React, { useState } from 'react';
import ToTopButton from '../../components/ToTopButton/ToTopButton';
import './ProjectContainer.scss';

const ProjectContainer = () => {
  const [projectClick, setProjectClick] = useState(false);
  const showProject = () => {
    setProjectClick(!projectClick);
  };

  return (
    <div className="project-container">
      <ToTopButton />
      <h2>This is Project</h2>
    </div>
  );
};

export default ProjectContainer;
