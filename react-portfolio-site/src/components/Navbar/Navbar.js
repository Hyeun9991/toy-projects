import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../../asstes/imgaes/home-image.png';
import aboutImage from '../../asstes/imgaes/about-image.png';
import '../../styles/Navbar.scss';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollYActive, setScrollYActive] = useState(false);
  const [btnClick, setBtnClick] = useState(false);

  const showMenu = () => {
    setBtnClick(!btnClick);
  };

  const onScroll = () => {
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
      window.addEventListener('scroll', onScroll);
    };
    scrollEvent();
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <div className={scrollYActive ? 'navbar navbar-change' : 'navbar'}>
      <div className="navbar-container">
        {/* logo */}
        <div className="logo nav-icons">
          <Link to="/" className="logo-link-a logo-font">
            Eh
          </Link>
        </div>
        {/* /logo */}

        {/* menu-btn */}
        <div className="menu-btn nav-icons" onClick={showMenu}>
          <p>Film</p>
        </div>
        {/* /menu-btn */}

        {/* menus */}
        <div className={btnClick ? 'menus show-menu' : 'menus'}>
          <ul className="film-bg">
            <p className="film-logo film-text-color logo-font">Eh</p>
            <li className="film-box">
              <Link to="/" className="film-link film-home">
                
                <img src={homeImage} alt=""  />
              </Link>

              <div className="film-title-box">
                <p className="film-text-color">home</p>
              </div>
            </li>
            <li className="film-box">
              <Link to="/about" className="film-link film-about">
                <img src={aboutImage} alt="" />
              </Link>
              <div className="film-title-box">
                <p className="film-text-color">about</p>
              </div>
            </li>
            <li className="film-box">
              <Link to="/projects" className="film-link film-projects"></Link>
              <div className="film-title-box">
                <p className="film-text-color">projects</p>
              </div>
            </li>
          </ul>
        </div>
        {/* /menus */}
      </div>
    </div>
  );
};

export default Navbar;
