import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectContainer.scss';

const ProjectContainer = () => {
  const [btnClick, setBtnClick] = useState(false);
  const openMenu = () => {
    setBtnClick(!btnClick);
  };

  const projectList = [
    {
      id: 1,
      title: 'Eh Portfolio',
      url: '#1',
      class: 'underline-link-small color-white',
    },
    {
      id: 2,
      title: 'Eh Blog',
      url: '#2',
      class: 'underline-link-small color-white',
    },
    {
      id: 3,
      title: 'Eh Diary',
      url: '#3',
      class: 'underline-link-small color-white',
    },
  ];

  return (
    <div className="projects">
      {/* projects-navigator */}
      <nav className="projects-navigator">
        <ul
          className={btnClick ? 'project-menus open-menu' : 'project-menus'}
          onClick={openMenu}
        >
          {projectList.map((t) => {
            return (
              <li key={t.id}>
                <a href={t.url} className={t.class}>
                  {t.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* /projects-navigator */}

      <ul className="projects-list-container">
        <li className="project-link project-link-1" id="1">
          <div className="content-container">
            <Link
              to="/projects/portfolio"
              className="title color-white title-link-position"
            >
              eh portfolio
            </Link>
            <div className="left-img-wrapper">
              <img
                src={require('../../assets/images/portfolio_preview_01.png')}
                alt="portfolio 프리뷰 이미지 01"
                className="portfolio-preview-img-1 preview-img"
              />
            </div>
            <div className="right-img-wrapper">
              <img
                src={require('../../assets/images/portfolio_preview_02.png')}
                alt="portfolio 프리뷰 이미지 02"
                className="portfolio-preview-img-2 preview-img"
              />
            </div>
          </div>
        </li>
        <li className="project-link project-link-2" id="2">
          <div className="content-container">
            <p className="title-link-position title color-white">eh blog</p>
          </div>
        </li>
        <li className="project-link project-link-3" id="3">
          <div className="content-container">
            <p className="title-link-position title color-white">eh diary</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectContainer;
