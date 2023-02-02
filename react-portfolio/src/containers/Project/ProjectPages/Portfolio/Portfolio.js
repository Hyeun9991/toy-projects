import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
              src={require('../../../../assets/images/homepage_projects.png')}
              alt="portfolio 프리뷰 2"
              className="project-img"
            />
            <img
              src={require('../../../../assets/images/aboutpage.png')}
              alt="portfolio 프리뷰 2"
              className="project-img"
            />
            <img
              src={require('../../../../assets/images/projectspage.png')}
              alt="portfolio 프리뷰 3"
              className="project-img"
            />
            <img
              src={require('../../../../assets/images/contactpage.png')}
              alt="portfolio 프리뷰 4"
              className="project-img"
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
                <p className="content-side-title tag-text">React</p>
              </div>
            </div>
            <div className="ce-center">
              <div className="desc-item">
                <h2 className="content-side-title">개요</h2>
                <p className="content-text">
                  ·&nbsp;&nbsp;습득했던 지식을 기반으로 사이트 기획, 기능 구현,
                  배포를 공부하기 위해서 진행한 프로젝트
                </p>
              </div>
              <div className="desc-item">
                <h2 className="content-side-title">참여인원 및 자신의 역할</h2>
                <p className="content-text">·&nbsp;&nbsp;개인 프로젝트</p>
                <p className="content-text">
                  ·&nbsp;&nbsp;기획(사이트 구성, 디자인, 파일 구성), 기능 구현
                </p>
              </div>
              <div className="desc-item">
                <h2 className="content-side-title">기여한 부분</h2>
                <p className="content-text">
                  ·&nbsp;&nbsp;사이트 구성, 디자인, 기능 구현 계획
                </p>
              </div>
              <div className="desc-item">
                <p className="content-side-title">주요 개발 내용</p>
                <p className="content-text">
                  ·&nbsp;&nbsp;useLocation, useEffect 를 활용하여 URL이 변경될
                  때마다 스크롤 위치를 맨 위로 올리는 기능 구현
                </p>
                <p className="content-text">
                  ·&nbsp;&nbsp;window에 scrollTo 함수를 활용하여 클릭하면 스크롤
                  위치를 맨 위로 올리는 기능 구현
                </p>
                <p className="content-text">
                  ·&nbsp;&nbsp;window의 높이를 구해 일정 스크롤 위치를 초과하면
                  화면에 나타나는 기능 구현
                </p>
              </div>
              <div className="desc-item">
                <p className="content-side-title">개발 후기</p>
                <p className="content-text">
                  ·&nbsp;&nbsp;이론적으로 습득한 지식 이외 새로운 지식을
                  습득하는 시간이 되었습니다.
                </p>
                <p className="content-text">
                  ·&nbsp;&nbsp;테스트하는 과정에서 불편했던 점을 발견하고 기능을
                  구현하여 보완하는 경험을 했습니다.
                </p>
                <p className="content-text">
                  ·&nbsp;&nbsp;리팩토링과 CRUD 지식을 학습해서 버전 2에 추가할
                  계획입니다.
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
