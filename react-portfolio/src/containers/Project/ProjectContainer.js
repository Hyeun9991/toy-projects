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
                <a href={t.url} className="pn-text">
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
              className="background-title title-link-position"
            >
              eh portfolio
            </Link>
            <div className="left-img-wrapper">
              <img
                src={require('../../assets/images/portfolio_cover.png')}
                alt="portfolio 프리뷰 이미지 01"
                className="portfolio-preview-img-1 preview-img"
              />
            </div>
            <div className="right-img-wrapper">
              <img
                src={require('../../assets/images/home_03.png')}
                alt="portfolio 프리뷰 이미지 02"
                className="portfolio-preview-img-2 preview-img"
              />
            </div>
          </div>
        </li>
      </ul>
      {/* page-footer-title */}
      <div className="page-footer-title">
        <p className="pf-title">projects</p>
      </div>
      {/* /page-footer-title */}
    </div>
  );
};

export default ProjectContainer;
