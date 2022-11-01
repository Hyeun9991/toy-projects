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
    <div className={scrollYActive ? 'nav-section change' : 'nav-section'}>
      <ul className={clicked ? 'hidden-menu-box open' : 'hidden-menu-box'}>
        <div className="hidden-icon-box">
          <div className="hidden-menu-icon" onClick={showMenu}>
            <span className="hidden-icon" onClick={showMenu}></span>
          </div>
          <div className="hidden-logo">
            <a className="hidden-logo-text">Eh</a>
          </div>
        </div>
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
      </ul>
      <div className="navbar">
        <div className="navbar-top">
          <div className="navbar-top-container">
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
                <a href="#" className="menu-items contact-items">
                  Contact
                </a>
              </div>
            </div>

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

            <div className="logo-box">
              <a href="/" className="logo-text">
                Eh
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-bottom">
          <div className="navbar-bottom-container">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
