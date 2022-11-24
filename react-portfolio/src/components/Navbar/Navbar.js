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

  return (
    <div className="navbar">
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
                <Link className="navbar-logo-link" to="/">
                  Eh
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
