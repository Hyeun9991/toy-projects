import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import './HomeContainer.scss';

const HomeContainer = () => {
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
      word: 'l',
    },
    {
      id: 7,
      word: 'i',
    },
    {
      id: 8,
      word: 'o',
    },
  ];
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
        <section className="home-content-section has-section">
          <div className="content-container">
            <div className="content-start">
              <Link to="/about" className="content-title-container">
                <h2 className="content-title">about</h2>
                <BiRightArrowAlt className="arrow-text" />
              </Link>

              <div className="content-content-container">
                <div className="content-secondary-title">
                  <h3>"시야가 넓은 개발자"</h3>
                </div>
                <p className="content-text">사용자 측면에서 사고하는</p>
                <p className="content-text">고객의 니즈와 트렌드를 파악하는</p>
                <p className="content-text">시장성있는 아웃풋을 낼 수 있는</p>
                <p className="content-text">
                  개발자가 되기위해 고민하는 신입 개발자 박은혜입니다.
                </p>
              </div>
            </div>
            <div className="content-end">
              <Link to="/skills" className="content-title-container">
                <h2 className="content-title">skills</h2>
                <BiRightArrowAlt className="arrow-text" />
              </Link>

              <div className="content-content-container">
                <p className="content-text">
                  html5 <b>/</b> css <b>&</b> scss <b>/</b> javascript <b>/</b>{' '}
                  react.js
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-content-section projects-section">
          <Link to="/projects" className="content-title">
            my projects
          </Link>
          <div className="projects-container">
            <Link to="/projects/portfolio" className="project-item">
              <div className="project-content-container">
                <h3 className="project-title">eh portfolio</h3>
                <p className="desc-text">React로 개발된 포트폴리오 웹사이트</p>
                <p className="secondary-desc-text">ux & ui, Web development</p>
              </div>
              <div className="project-image-wrapper">
                <img
                  src={require('../../assets/images/eh-portfolio-image.png')}
                  className="project-image"
                ></img>
              </div>
            </Link>
            <Link to="/projects/portfolio" className="project-item right-item">
              <div className="project-image-wrapper">
                <img
                  src={require('../../assets/images/eh-portfolio-image.png')}
                  className="project-image"
                ></img>
              </div>
              <div className="project-content-container">
                <h3 className="project-title">eh portfolio</h3>
                <p className="desc-text">React로 개발된 포트폴리오 웹사이트</p>
                <p className="secondary-desc-text">ux & ui, Web development</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeContainer;
