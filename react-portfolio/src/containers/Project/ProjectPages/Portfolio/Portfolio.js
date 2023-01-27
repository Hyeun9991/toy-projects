import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PortfolioItemList } from './PortfolioItemList';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import './Portfolio.scss';

const Portfolio = () => {
  const navigate = useNavigate();
  const [clickState, setClickState] = useState(false);

  const goBackButton = () => {
    navigate(-1);
  };
  const toggleState = () => {
    setClickState(!clickState);
  };

  return (
    <div className="project">
      <div className="project-header">
        <div className="ph-container">
          <Link to="/" className="logo">
            Eh
          </Link>
          <div className="back-link-btn">
            <IoChevronBackCircleOutline
              className="back-link"
              onClick={goBackButton}
            />
          </div>
        </div>
      </div>
      <div
        className={`content-container ${clickState ? 'change-container' : ''}`}
      >
        <div className="content-start content-box">
          <div className="project-img-container">
            <img
              src={require('../../../../assets/images/portfolio_cover.png')}
              alt="portfolio 프리뷰 1"
              className="project-img"
            />
            <img
              src={require('../../../../assets/images/home_01.png')}
              alt="portfolio 프리뷰 2"
              className="project-img"
            />
            <img
              src={require('../../../../assets/images/skills_01.png')}
              alt="portfolio 프리뷰 3"
              className="project-img"
            />
            <img
              src={require('../../../../assets/images/projects_01.png')}
              alt="portfolio 프리뷰 4"
              className="project-img"
            />
            <img
              src={require('../../../../assets/images/contact_01.png')}
              alt="portfolio 프리뷰 5"
              className="project-img last-img"
            />
          </div>
        </div>
        <button className="side-btn" onClick={toggleState}></button>
        <div className="content-end content-box">
          <article className="ce">
            <div className="ce-start">
              <div className="project-info">
                <h1 className="content-secondary-title">
                  Eh: eunhye portfolio
                </h1>
                <p className="content-side-title">2022/11 ~ 2023/01</p>
              </div>
              <div className="project-rs">
                <p className="content-side-title tag-text">개인 프로젝트</p>
                <p className="content-side-title tag-text">UX & UI</p>
                <p className="content-side-title tag-text">Web Development</p>
                <p className="content-side-title tag-text">JavaScript</p>
                <p className="content-side-title tag-text">React.JS</p>
              </div>
            </div>
            <div className="ce-center">
              <div className="desc-item">
                <h2 className="content-side-title">개요</h2>
                <p className="content-text">
                  ·&nbsp;&nbsp;개발자로서 나만의 홈페이지를 개발하고 싶어서 시작한
                  프로젝트
                </p>
              </div>
              <div className="desc-item">
                <h2 className="content-side-title">기여한 부분</h2>
                <p className="content-text">
                  ·&nbsp;&nbsp;사이트 구성, 디자인, 기능 구현 계획
                </p>
              </div>
              <div className="desc-item">
                <p className="content-side-title">기능 구현</p>
                <p className="content-text">
                  ·&nbsp;&nbsp;react router dom(ver.6)을 활용하여 routing 기능 구현 기능
                  구현{' '}
                </p>
              </div>
              <div className="desc-item">
                <p className="content-side-title">개발 후기</p>
                <p className="content-text">
                  ·&nbsp;&nbsp;react router dom(ver.6)을 활용하여 routing 기능 구현 기능
                  구현{' '}
                </p>
              </div>
            </div>
            <div className="ce-end">
              <div className="project-links">
                <a
                  href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                  target="_blank"
                  className="link-button"
                >
                  github
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* /project-content-wrapper */}
    </div>
  );
};

export default Portfolio;
