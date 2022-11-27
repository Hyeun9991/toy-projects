import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Navbar.scss';

const Navbar = () => {
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
    <div className={scrollYActive ? 'navbar flip' : 'navbar'}>
      {/* navbar-container */}
      <div className="navbar-container">
        {/* navbar-wrapper */}
        <div
          className={
            btnClick ? 'navbar-wrapper wrapper-full' : 'navbar-wrapper'
          }
        >
          {/* navbar-wrapper-inner */}
          <div className="navbar-wrapper-inner">
            {/* navbar-primary */}
            <nav className="navbar-primary">
              <div className="navbar-primary-start">
                <p className="pri-items pri-menu-btn" onClick={showMenuList}>
                  {btnClick ? 'close' : 'menu'}
                </p>
                <ul className="pri-menus ">
                  <li>
                    <Link to="/about" className="pri-items">
                      about
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects" className="pri-items">
                      projects
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="navbar-primary-center">
                {/* <Link className="navbar-logo-link" to="/">
                  Eh
                </Link> */}
                <Link to='/' className="flip-text">
                  <div className="flip-text-inner">
                    <div className="flip-text-front">
                      <p>Eunhye</p>
                      <p className='nav-portfolio-text'>portfolio</p>
                    </div>
                    <div className="flip-text-back">
                      <p>Eh</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="navbar-primary-end">
                <Link className="navbar-contact-link pri-items" to="/contact">
                  contact
                </Link>
              </div>
            </nav>
            {/* /navbar-primary */}

            {/* navbar-secondary */}
            <nav
              className={
                btnClick ? 'navbar-secondary sec-show' : 'navbar-secondary'
              }
            >
              <div className="navbar-sec-start">
                <ul>
                  <li>
                    <Link to="/about">about</Link>
                  </li>
                  <li>
                    <Link to="/projects">projects</Link>
                  </li>
                </ul>
              </div>
              <div className="navbar-sec-end">
                <span>
                  phone call <a href="sms: 010-7527-5792">+82 10-7527-5792</a>
                </span>
                <span>
                  Email{' '}
                  <a href="mailto: hyeun9991@gmail.com">hyeun9991@gmail.com</a>
                </span>
              </div>
            </nav>
            {/* /navbar-secondary */}
          </div>
          {/* /navbar-wrapper-inner */}
        </div>
        {/* /navbar-wrapper */}
      </div>
      {/* /navbar-container */}
    </div>
  );
};

export default Navbar;
