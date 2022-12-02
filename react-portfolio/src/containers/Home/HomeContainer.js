import React from 'react';
import { Link } from 'react-router-dom';
import ToTopButton from '../../components/ToTopButton/ToTopButton';
import './HomeContainer.scss';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <ToTopButton />
      <div className="home-section-wrapper">
        <p className="home-title">Welcome to Eh</p>
        <div className="home-section">
          <a
            href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
            target="_blank"
            className="section-start"
          >
            <div className="intro-link"></div>
            <p># github source code</p>
          </a>
          <div className="section-end">
            <div className="intro-text">
              <p>
                안녕하세요 저는 웹개발자{' '}
                <Link to="/about-page" title="about 페이지 바로가기">
                  # 박은혜
                </Link>{' '}
                입니다.
              </p>
              <p>이 사이트는 리액트를 통해 제작되었으며</p>
              <p>
                <Link to="/project-page" title="projects 페이지 바로가기">
                  # 프로젝트
                </Link>{' '}
                를 모아 둘 목적으로 개발을 진행했습니다.
              </p>
              <p>다시 한번 제 사이트에 방문해주셔서 감사드립니다.</p>
              <p>
                이 사이트의 자세한 소스는{' '}
                <a
                  href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                  target="_blank"
                  title="github 페이지 바로가기"
                >
                  # 깃허브
                </a>{' '}
                를 참고해주세요
              </p>
            </div>
          </div>
        </div>
        <div className="home-section"></div>
        <div className="home-section"></div>

        {/* <div className="home-section-1 home-section-item">
          <div className="home-intro">
            <div className="intro-start">
              <a
                href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                target='_blank'
                className="intro-github-link intro-menu-link"
              >
                <p className="menu-link-title">Portfolio</p>
                <div className="link-img"></div>
                <div className="link-text">
                  <p>Eh Portfolio Website</p>
                </div>
                <p className="hidden-text">github 바로가기</p>
              </a>
            </div>

            <div className="intro-end">
              <div className="intro-text">
                <p>
                  안녕하세요 저는 웹개발자{' '}
                  <Link to="/about-page" title="about 페이지 바로가기">
                    # 박은혜
                  </Link>
                  입니다.
                </p>
                <p>이 사이트는 리액트를 통해 제작되었으며</p>
                <p>
                  저의{' '}
                  <Link to="/project-page" title="projects 페이지 바로가기">
                    # 프로젝트
                  </Link>
                  를 모아 둘 목적으로 개발을 진행했습니다.
                </p>
                <p>다시 한번 제 사이트에 방문해주셔서 감사드립니다.</p>
                <p>
                  이 사이트의 자세한 소스는 제{' '}
                  <a
                    href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                    target="_blank"
                    title="github 페이지 바로가기"
                  >
                    # 깃허브
                  </a>
                  를 참고해주세요
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-2 home-section-item">
          <div className="home-intro">
            <div className="intro-end">
              <div className="intro-text">
                <p>About text</p>
              </div>
            </div>
            <div className="intro-start">
              <div className="intro-github-link intro-menu-link">
                <p className="menu-link-title">About</p>
                <div className="link-img"></div>
                <div className="link-text">
                  <a
                    href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                    target="_blank"
                    title="github 페이지 바로가기"
                  >
                    About
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-3 home-section-item">
          <div className="home-intro">
            <div className="intro-start">
              <div className="intro-github-link intro-menu-link">
                <p className="menu-link-title">Projects</p>
                <div className="link-img"></div>
                <div className="link-text">
                  <a
                    href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                    target="_blank"
                    title="github 페이지 바로가기"
                  >
                    Projects
                  </a>
                </div>
              </div>
            </div>

            <div className="intro-end">
              <div className="intro-text">
                <p>Projects text</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-4 home-section-item">
          <div className="home-intro">
            <div className="intro-end">
              <div className="intro-text">
                <p>contact text</p>
              </div>
            </div>
            <div className="intro-start">
              <div className="intro-github-link intro-menu-link">
                <p className="menu-link-title">Contact</p>
                <div className="link-img"></div>
                <div className="link-text">
                  <a
                    href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                    target="_blank"
                    title="github 페이지 바로가기"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeContainer;
