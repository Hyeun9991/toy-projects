import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import barcodeImage from '../../asstes/imgaes/barcode.png';
import '../../styles/Navbar2.scss';

const Navbar2 = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollYActive, setScrollYActive] = useState(false);
  const [click, setClick] = useState(false);

  // scrollY(스크롤 높이)가 40을 넘으면 scrollYActive state를 on, off (2022.11.04)
  const navModeChange = () => {
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
      window.addEventListener('scroll', navModeChange);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', navModeChange);
    };
  });

  // click state on, off (2022.11.04)
  const showMenu = () => {
    setClick(!click);
  };

  return (
    <header className={scrollYActive ? 'header mode-change' : 'header'}>
      {/* header-container */}
      <div className="header-container">
        {/* header-logo-btn */}
        <div className="header-logo-btn">
          <Link to="/">Eh</Link>
        </div>
        {/* /header-logo-btn */}

        {/* header-menu-btn */}
        <div className="header-menu-btn" onClick={showMenu}>
          <span>Map</span>
        </div>
        {/* /header-menu-btn */}

        {/* header-menu-box */}
        <div className={click ? "header-menu-box open-menu" : "header-menu-box"}>
          <div className="menu-film-bg">
            <div className="film-logo">
              <span>Eh</span>
            </div>
            <div className="film-menu-1 film-box">
              <Link className="menu-box-1 film-menu-items" to="/">
                {/* <p className="show-more-text">Show more...</p> */}
              </Link>
              {/* <p className="menu-items-title">Home</p> */}
            </div>
            <div className="film-menu-2 film-box">
              <Link className="menu-box-2 film-menu-items" to="/about">
                {/* <p className="show-more-text">Show more...</p> */}
              </Link>
              <p className="menu-items-title">About</p>
            </div>
            <div className="film-menu-3 film-box">
              <Link className="menu-box-3 film-menu-items" to="/projects">
                {/* <p className="show-more-text">Show more...</p> */}
              </Link>
              <p className="menu-items-title">Projects</p>
            </div>
          </div>
        </div>
        {/* /header-menu-box */}
      </div>
      {/* /header-container */}
    </header>
  );
};

export default Navbar2;
