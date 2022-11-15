import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowDropUp } from 'react-icons/md';
/**********[ scss ]**********/
import '../../styles/Home.scss';

/**********[ components ]**********/
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import AboutPictureLink from '../AboutPictureLink/AboutPictureLink';
import ContactMemo from '../ContactMemo/ContactMemo';
import Projects from '../Pages/Projects';
import ProjectFilmLink from '../ProjectFilmLink/ProjectFilmLink';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollYActive, setScrollYActive] = useState(false);

  const WelcomeTextOpa0 = () => {
    if (scrollY > 40) {
      setScrollY(window.pageYOffset);
      setScrollYActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollYActive(false);
    }
  };
  useEffect(() => {
    const scrollEvent = () => {
      window.addEventListener('scroll', WelcomeTextOpa0);
    };
    scrollEvent();
    return () => {
      window.removeEventListener('scroll', WelcomeTextOpa0);
    };
  });

  const onScroll = () => {
    setScrollY(window.scrollY); // 윈도우의 스크롤 값 넣어주기
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll); // 윈도우 스크롤 이벤트 등록
    // 여기서 끝내면 언마운트되고 스크롤될때마다 onScroll 함수가 계속 실행됨 (메모리 누수)
    return () => {
      window.removeEventListener('scroll', onScroll);
      // 컴포넌트가 언마운트 되기 직전에 onScroll 함수가 제거됨
    };
  }, []); // 의존성 배열이 비어있으면 마운트되는 시점에 한번만 실행됨

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="home">
      <Navbar />
      <button
        onClick={scrollToTop}
        className="to-top-btn"
        style={{ opacity: (scrollY - 40) / 50 }}
      >
        <MdArrowDropUp />
      </button>
      <div
        className={
          scrollYActive ? 'home-welcome-msg opa-0' : 'home-welcome-msg'
        }
      >
        <p>Welcome To </p>
      </div>

      {/* home-sections-1 */}
      <div className="home-sections-1">
        <div className="home-about">
          <div
            className="about-link"
            style={{ transform: `translateX(${scrollY / 10}px)` }}
          >
            <AboutPictureLink />
          </div>
          <div
            className="about-desc"
            style={{ opacity: (scrollY - 300) / 200 }}
          >
            <h1>안녕하세요!</h1>
            <p>저는 이 사이트를 개발한 박은혜입니다.</p>
            <p>
              발전된 웹과 웹개발의 범용성의 매력에 빠져 개발을 공부하고
              있습니다.
            </p>
            <p>귀여운 제 웹사이트에 방문해주셔서 감사드립니다!</p>
            <p></p>
            <p style={{ opacity: 0.8 }}>
              ( 이 사이트는 React로 개발되었습니다. <br />
              소스 코드는 제{' '}
              <a
                href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio-site"
                target="_blank"
                title="hyeun9991 깃허브 링크"
              >
                깃헙 사이트
              </a>
              에서 확인해주세요. )
            </p>
          </div>
        </div>

        <div className="home-projects">
          <div
            className="projects-link"
            style={{ transform: `translateX(${scrollY / -20}px)` }}
          >
            <ProjectFilmLink />
          </div>
          <Link
            to="/projects"
            className="projects-text text-link"
            title="projects 페이지 바로가기"
          >
            Projects
          </Link>
        </div>
      </div>
      {/* /home-sections-1 */}

      {/* home-sections-2 */}
      <div className="home-sections-2">
        <p className="contact-text">Please Contact and Feedback</p>
        <div className="contact-component">
          <ContactMemo />
        </div>
      </div>
      {/* /home-sections-2 */}
    </div>
  );
};

export default Home;
