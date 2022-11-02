import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FullPageNavItems, allNavItems } from './NavItems';
import '../../styles/Navbar.scss';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollYActive, setScrollYActive] = useState(false);
  const { pathname } = useLocation();

  // clicked state를 on, off(true, false)하는 함수 (2022.10.24)
  const showMenu = () => {
    setClicked(!clicked);
  };

  // pathname이 변경될 때 마다 clicked state를 false로 변경 (2022.10.31)
  useEffect(() => {
    setClicked(false);
  }, [pathname]);

  /* 2022.10.31
    scrollY가 40이 되면 scrollYActive state 변경
    (스크롤 높이가 40일 때 nav-section에 change 클래스 추가) 
  */
  const changeNavbar = () => {
    if (scrollY > 40) {
      setScrollY(window.pageYOffset);
      setScrollYActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollYActive(false);
    }
  };
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', changeNavbar);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  });

  return (
    // nav-section
    <div className={scrollYActive ? 'nav-section change' : 'nav-section'}>
      {/* hidden-menu-box */}
      <ul className={clicked ? 'hidden-menu-box open' : 'hidden-menu-box'}>
        {/* hidden-icon-box (menu-icon + logo) */}
        <div className="hidden-icon-box">
          <div className="hidden-menu-icon" onClick={showMenu}>
            <span className="hidden-icon" onClick={showMenu}></span>
          </div>
          <div className="hidden-logo">
            <a className="hidden-logo-text">Eh</a>
          </div>
        </div>
        {/* /hidden-icon-box (menu-icon + logo) */}

        {/* allNavItems */}
        {allNavItems.map((t) => {
          return (
            <li key={t.id}>
              <p>{t.ptag}</p>
              <Link to={t.url} className={t.class}>
                {t.title}
              </Link>
            </li>
          );
        })}
        {/* /allNavItems */}
      </ul>
      {/* /hidden-menu-box */}

      {/* navbar */}
      <div className="navbar">
        {/* navbar-top */}
        <div className="navbar-top">
          {/* navbar-top-container */}
          <div className="navbar-top-container">
            {/* show */}
            <div className="show">
              <div className="show-icon-box">
                <div
                  className={clicked ? 'show-menu-icon on' : 'show-menu-icon'}
                  onClick={showMenu}
                >
                  <span className="show-icon" onClick={showMenu}></span>
                </div>
                <div className="show-logo">
                  <a className="logo-text">Eh</a>
                </div>
              </div>
              <div className="show-contact-box">
                <a href="#" className="menu-items contact-item">
                  Contact
                </a>
              </div>
            </div>
            {/* /show */}

            {/* link-box */}
            <ul className="link-box">
              <li>
                <a
                  href="https://velog.io/@hyeun9991"
                  target="_blank"
                  className="menu-items"
                >
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Hyeun9991"
                  target="_blank"
                  className="menu-items"
                >
                  <span>Github</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto: hyeun9991@gmail.com"
                  title="Email"
                  className="menu-items"
                >
                  <span>Email</span>
                </a>
              </li>
            </ul>
            {/* /link-box */}

            {/* logo-box */}
            <div className="logo-box">
              <a href="/" className="logo-text">
                Eh
              </a>
            </div>
            {/* /logo-box */}
          </div>
          {/* /navbar-top-container */}
        </div>
        {/* /navbar-top */}

        {/* navbar-bottom */}
        <div className="navbar-bottom">
          {/* navbar-bottom-container */}
          <div className="navbar-bottom-container">
            {/* menu-box */}
            <ul className="menu-box">
              {FullPageNavItems.map((t) => {
                return (
                  <li key={t.id}>
                    <Link to={t.url} className={t.class}>
                      <span>{t.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* /menu-box */}
          </div>
          {/* /navbar-bottom-container */}
        </div>
        {/* /navbar-bottom */}
      </div>
      {/* navbar */}
    </div>
    // /nav-section
  );
};

export default Navbar;
