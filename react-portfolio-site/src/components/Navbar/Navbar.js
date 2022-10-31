import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItems1, NavItems2, allNavItems } from './NavItems';
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
    if (scrollY > 160) {
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
    <div className={scrollYActive ? 'navbar change' : 'navbar'}>
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
                <a>EH</a>
              </div>
            </div>
            <div className="show-contact-box">
              <a href="#">Contact</a>
            </div>
          </div>

          <ul className="link-box">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>

          <div className="logo-box">
            <a href="/">EUNHYE</a>
          </div>
        </div>
      </div>

      <div className="navbar-bottom">
        <div className="navbar-bottom-container">
          <ul className="menu-box">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
