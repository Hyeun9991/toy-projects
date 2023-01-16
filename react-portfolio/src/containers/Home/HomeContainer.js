import React from 'react';
import { Link } from 'react-router-dom';
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
          <p className="background-title">Eh portfolio front-end *Developer</p>
          <div className="content-container">
            <div className="content-start">
              <div className="c-container">
                <p className="content-side-title">Who I am</p>
                <div className="overview">
                  <h2 className="content-main-title">"시야가 넓은 개발자"</h2>
                  <div className="content-text-wrapper">
                    <p className="content-text">사용자 측면에서 사고하는</p>
                    <p className="content-text">
                      고객의 니즈와 트렌드를 파악하는
                    </p>
                    <p className="content-text">
                      시장성있는 아웃풋을 낼 수 있는
                    </p>
                    <p className="content-text">
                      개발자가 되기위해 고민하는 신입 개발자 박은혜입니다.
                    </p>
                  </div>
                  <Link to="/about" className="content-link">
                    about me
                  </Link>
                </div>
              </div>
            </div>
            <div className="content-end">
              <div className="c-container">
                <p className="content-side-title">my skills</p>
                <div className="skill">
                  <h2 className="content-main-title">front-end skills</h2>
                  <div className="content-text-wrapper">
                    <p className="content-text">
                      html5 <b>/</b> css <b>&</b> scss <b>/</b> javascript{' '}
                      <b>/</b> react.js
                    </p>
                  </div>
                  <Link to="/skills" className="content-link">
                    my skills
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-content-section greetings-section">
          <p className="background-title">welcome to EH</p>
          <div className="content-container">
            <p className="content-side-title">welcome to eh</p>
            <div className="main-title-container">
              <h2 className="content-main-title">
                안녕하세요
                <br /> 프론트엔드 개발자
                <br /> 박은혜입니다.
              </h2>
            </div>
            <div className="content-text-container">
              <div className="text-item">
                <p className="content-text">
                  제 사이트에 방문해주신 모든 분들께 감사드립니다
                </p>
                <p className="content-text">
                  다음은 제 사이트에서 확인하실 수 있는 컨텐츠 목록입니다.
                </p>
              </div>
              <div className="text-item">
                <p className="content-text">
                  <Link to="/about">about</Link>
                </p>
                <p className="content-text">
                  <Link to="/skills">skills</Link>
                </p>
                <p className="content-text">
                  <Link to="/projects">Projects</Link>
                </p>
                <p className="content-text">
                  <Link to="/contact">contact</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="sign">
            <p className="sign-text">Eunhye .</p>
          </div>
        </section>
        <section className="home-content-section projects-section">
          <div className="project-item">
            <h2 className="background-title">eh portfolio</h2>
            <div className="project-preview-line">
              <div className="img-container">
                <img
                  src={require('../../assets/images/portfolio_cover.png')}
                  alt="포트폴리오 이미지 01"
                  className="preview-img"
                />
                <img
                  src={require('../../assets/images/home_01.png')}
                  alt="포트폴리오 이미지 02"
                  className="preview-img"
                />
                <img
                  src={require('../../assets/images/home_02.png')}
                  alt="포트폴리오 이미지 03"
                  className="preview-img"
                />
                <img
                  src={require('../../assets/images/home_03.png')}
                  alt="포트폴리오 이미지 04"
                  className="preview-img"
                />
              </div>
            </div>
            <div className="project-info">
              <div className="project-thumbnail">
                <img
                  src={require('../../assets/images/portfolio_cover.png')}
                  alt="project thumbnail"
                  className="thumbnail-img"
                />
              </div>
              <div className="project-title">
                <p className="content-side-title">01</p>
                <h3 className="content-main-title">eh portfolio</h3>
              </div>
              <div className="project-desc">
                <div className="desc-item">
                  <p className="content-side-title">역할</p>
                  <p className="content-text">ux & ui, web development</p>
                </div>
                <div className="desc-item">
                  <p className="content-side-title">한줄 설명</p>
                  <p className="content-text">
                    react로 개발된 프론트엔드 포트폴리오 웹사이트
                  </p>
                </div>
                <div className="desc-item">
                  <p className="content-side-title">사용 언어</p>
                  <p className="content-text">
                    jsx <b>&</b> scss, react.js <b>(cra, react-router)</b>
                  </p>
                </div>
              </div>
              <div className="project-link">
                <Link to="/projects/portfolio" className="content-link">
                  eh portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="home-content-section outro-section">
          <p className="sign-text">Eunhye . Portolio</p>
          <p className="background-title">thank you !</p>
          <p className="content-text">EH에 방문해주셔서 감사드립니다.</p>
          <Link to="/contact" className="content-link">
            연락하기
          </Link>
        </section>
      </div>
      <div className="page-footer-title">
        <p className="pf-title">home</p>
      </div>
    </div>
  );
};

export default HomeContainer;
