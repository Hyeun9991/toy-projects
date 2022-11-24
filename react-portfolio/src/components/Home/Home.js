import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/**********[ scss ]**********/
import '../../styles/Home.scss';

/**********[ components ]**********/
import Footer from '../Footer/Footer';
import ToTopButton from '../ToTopButton/ToTopButton';

const Home = () => {
  // const [scrollY, setScrollY] = useState(0);
  // const [scrollYActive, setScrollYActive] = useState(false);

  // const WelcomeTextOpa0 = () => {
  //   if (scrollY > 40) {
  //     setScrollY(window.pageYOffset);
  //     setScrollYActive(true);
  //   } else {
  //     setScrollY(window.pageYOffset);
  //     setScrollYActive(false);
  //   }
  // };
  // useEffect(() => {
  //   const scrollEvent = () => {
  //     window.addEventListener('scroll', WelcomeTextOpa0);
  //   };
  //   scrollEvent();
  //   return () => {
  //     window.removeEventListener('scroll', WelcomeTextOpa0);
  //   };
  // });

  // const onScroll = () => {
  //   setScrollY(window.scrollY); // 윈도우의 스크롤 값 넣어주기
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll); // 윈도우 스크롤 이벤트 등록
  //   // 여기서 끝내면 언마운트되고 스크롤될때마다 onScroll 함수가 계속 실행됨 (메모리 누수)
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //     // 컴포넌트가 언마운트 되기 직전에 onScroll 함수가 제거됨
  //   };
  // }, []); // 의존성 배열이 비어있으면 마운트되는 시점에 한번만 실행됨

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <div className="home">
      {/* to top button */}
      <ToTopButton />
      {/* /to top button */}

      {/* intro (welcome text) */}
      <div
        className='home-welcome-msg'
      >
        <p className="welcome-effect">Welcome To </p>
        <p className="welcome-eh">Eh</p>
      </div>
      {/* /intro (welcome text) */}

      {/* home-sections-1 */}
      <div className="home-sections">
        <div className="menus-sticky-container">
          <div className="menus-box">
            <div className="menu-box">
              <Link to="/about" className="menu-image menu-about">
                <p>about</p>
              </Link>
            </div>
            <div className="menu-box">
              <Link to="/projects" className="menu-image menu-projects">
                <p>projects</p>
              </Link>
            </div>
            <div className="menu-box">
              <Link to="/contact" className="menu-image menu-contact">
                <p>contact</p>
              </Link>
            </div>
          </div>
          <div className="sticky-box">
            <div className="sticky-text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Soluta, nostrum quas! Assumenda, ex dignissimos. Labore cumque
                tempora cupiditate nisi sed! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Soluta, nostrum quas! Assumenda,
                ex dignissimos. Labore cumque tempora cupiditate nisi sed!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /home-sections-1 */}

      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
