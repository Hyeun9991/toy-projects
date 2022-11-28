import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss'

const Header = () => {
  const [btnClick, setBtnClick] = useState(false);
  const { pathname } = useLocation();

  // btnClick state를 toggle하는 함수 (2022.11.21)
  const showMenuList = () => {
    setBtnClick(!btnClick);
  };

  // url(pathname)이 바뀌면 btnClick state를 false로 변경 (2022.11.21)
  useEffect(() => {
    setBtnClick(false);
  }, [pathname]);

  const [scrollY, setScrollY] = useState(0);
  const [scrollYActive, setScrollYActive] = useState(false);

  // 스크롤값이 40을 초과하면 scrollActive toggle 하는 함수 (2022.11.27)
  const introFlip = () => {
    if (scrollY > 40) {
      setScrollY(window.pageYOffset);
      setScrollYActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollYActive(false);
    }
  };

  // introFlip 함수를 실행하는 useEffect (2022.11.27)
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', introFlip);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', introFlip);
    };
  });

  return (
    <header className={scrollYActive ? 'header flip' : 'header'}>
      {/* header-container */}
      <div className="header-container">
        {/* header-wrapper */}
        <div
          className={
            btnClick ? 'header-wrapper wrapper-full' : 'header-wrapper'
          }
        >
          {/* header-wrapper-inner */}
          <div className="header-wrapper-inner">
            {/* header-primary */}
            <nav className="header-primary">
              <div className="header-primary-start">
                <p className="pri-items pri-menu-btn" onClick={showMenuList}>
                  {btnClick ? 'close' : 'menu'}
                </p>
                <ul className="pri-menus ">
                  <li>
                    <Link to="/about-page" className="pri-items">
                      about
                    </Link>
                  </li>
                  <li>
                    <Link to="/project-page" className="pri-items">
                      projects
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="header-primary-center">
                {/* <Link className="header-logo-link" to="/">
                  Eh
                </Link> */}
                <Link to="/" className="flip-text">
                  <div className="flip-text-inner">
                    <div className="flip-text-front">
                      <p>Eunhye</p>
                      <p className="nav-portfolio-text">portfolio</p>
                    </div>
                    <div className="flip-text-back">
                      <p>Eh</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="header-primary-end">
                <Link className="header-contact-link pri-items" to="/contact-page">
                  contact
                </Link>
              </div>
            </nav>
            {/* /header-primary */}

            {/* header-secondary */}
            <nav
              className={
                btnClick ? 'header-secondary sec-show' : 'header-secondary'
              }
            >
              <div className="header-sec-start">
                <ul>
                  <li>
                    <Link to="/about">about</Link>
                  </li>
                  <li>
                    <Link to="/projects">projects</Link>
                  </li>
                </ul>
              </div>
              <div className="header-sec-end">
                <span>
                  phone call <a href="sms: 010-7527-5792">+82 10-7527-5792</a>
                </span>
                <span>
                  Email{' '}
                  <a href="mailto: hyeun9991@gmail.com">hyeun9991@gmail.com</a>
                </span>
              </div>
            </nav>
            {/* /header-secondary */}
          </div>
          {/* /header-wrapper-inner */}
        </div>
        {/* /header-wrapper */}
      </div>
      {/* /header-container */}
    </header>
  );
};

export default Header;
