import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeContainer.scss';

const HomeContainer = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="home">
      <div className="home-section-container">
        <section className="intro-section">
          <div className="intro-title-container">
            <h1 className="intro-title">eunhye</h1>
          </div>
          <div className="secondary-title-container">
            {secondaryTitleList.map((t) => {
              return (
                <p key={t.id} className="intro-secondary-title">
                  {t.word}
                </p>
              );
            })}
          </div>
        </section>
        <section className="projects-section">
          <h2 className="background-title">project list</h2>
          <div className="content-container">
            <ul className="tab-menu">
              <li
                className={`tab ${toggleState === 1 ? 'active-tab' : ''}`}
                onClick={() => toggleTab(1)}
              >
                all
              </li>
              <li
                className={`tab ${toggleState === 2 ? 'active-tab' : ''}`}
                onClick={() => toggleTab(2)}
              >
                website
              </li>
            </ul>
            <ul className="contents">
              <li
                className={`all-content content ${
                  toggleState === 1 ? 'active-content' : ''
                }`}
              >
                <Link to="/projects/portfolio" className="project-item">
                  <img
                    className="project-thumbnail"
                    alt="portfolio 썸네일"
                    src={require('../../assets/images/portfolio_cover.png')}
                  ></img>
                </Link>
              </li>
              <li
                className={`content ${
                  toggleState === 2 ? 'active-content' : ''
                }`}
              >
                <Link to="/projects/portfolio" className="project-item">
                  <img
                    className="project-thumbnail"
                    alt="portfolio 썸네일"
                    src={require('../../assets/images/portfolio_cover.png')}
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="page-footer-title">
        <p className="pf-title">home</p>
      </div>
    </div>
  );
};

export default HomeContainer;

const secondaryTitleList = [
  {
    id: 1,
    word: 'p',
  },
  {
    id: 2,
    word: 'o',
  },
  {
    id: 3,
    word: 'r',
  },
  {
    id: 4,
    word: 't',
  },
  {
    id: 5,
    word: 'f',
  },
  {
    id: 6,
    word: 'o',
  },
  {
    id: 7,
    word: 'l',
  },
  {
    id: 8,
    word: 'i',
  },
  {
    id: 9,
    word: 'o',
  },
];
