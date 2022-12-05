import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToTopButton from '../../components/ToTopButton/ToTopButton';
import './HomeContainer.scss';

const HomeContainer = () => {
  const [clicked, setClicked] = useState(false);
  const showLink = () => {
    setClicked(!clicked);
  };

  return (
    <div className="home-container">
      <ToTopButton />

      <div className="home-section-wrapper">
        <p className="home-title">Welcome to Eh</p>

        {/* home-section1 */}
        <div className="home-section home-section1">
          <div className="section-start">
            <div className="text-start">
              <h1 className="intro-title">I'm Web developer</h1>
              <span>
                안녕하세요 저는 웹 프론트개발자 <p>박은혜</p> 입니다.
              </span>
              <span>
                자세한 내용은 <p>About</p> 페이지에서 확인해주세요.
              </span>
            </div>
            <div className="link">
              <Link to="/about-page" className="about-link">
                # about
              </Link>
            </div>
          </div>
        </div>
        {/* /home-section1 */}

        {/* home-section2 */}
        <div className="home-section home-section2">
          <div className="section-end">
            <div className="text-end">
              <h1 className="intro-title">This site is a portfolio site</h1>
              <span>
                이 사이트는 저의 <p>프로젝트</p> 들을 기록하기 위해 <br />
                개발된 사이트이며 저의 첫 번째 프로젝트입니다.
              </span>
              <span>
                이 사이트에 관한 소스코드는 <p>깃허브</p> 를 참고해주세요.
              </span>
            </div>
            <div className="link">
              <Link to="/project-page" className="projects-link">
                # projects
              </Link>
              <a
                href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                className="github-link"
                target="_blank"
              >
                # github
              </a>
            </div>
          </div>
        </div>
        {/* /home-section2 */}

        {/* home-section3 */}
        <div className="home-section home-section3">
          <div className="section-end">
            <div className="text-end">
              <h1 className="intro-title">Get in touch?</h1>
              <span>제 사이트에 방문해주셔서 감사드립니다.</span>
              <span>
                여러분의 <p>소중한 피드백</p> 은 <br />제 사이트 발전에 도움이
                됩니다
              </span>
              <span>
                연락은 <p>Contact</p> 페이지를 참고해주세요.
              </span>
            </div>
            <div className="link">
              <Link to="/contact-page" className="contact-link">
                # contact
              </Link>
              <a
                href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                className="github-link"
                target="_blank"
              >
                # github
              </a>
              <a
                href="https://velog.io/@hyeun9991"
                className="blog-link"
                target="_blank"
              >
                # blog
              </a>
            </div>
          </div>
        </div>
        {/* /home-section3 */}
      </div>
    </div>
  );
};

export default HomeContainer;
