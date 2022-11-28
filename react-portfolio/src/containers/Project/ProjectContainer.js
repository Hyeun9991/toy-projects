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
      <div className='dev-section'>
        <h1><b>Project</b> Page</h1>
        <p>개발중..</p>
      </div>
    </div>
  );
};

export default ProjectContainer;
