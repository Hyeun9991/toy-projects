import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageNavbar.scss'

const PageNavbar = () => {
  const [btnClick, setBtnClick] = useState(false);

  const showMenu = () => {
    setBtnClick(!btnClick);
  };
  return (
    <div className="page-nav">
      {/* <div className="home-btn">
        <Link to="/">Home</Link>
      </div> */}
      <Link to='/' className="page-nav-logo">Eh</Link>
      {/* menu-btn */}
      <div
        className={
          btnClick ? 'menu-btn nav-icons btn-clicked' : 'menu-btn nav-icons'
        }
        onClick={showMenu}
      >
        <p>{btnClick ? 'close' : 'menu'}</p>
      </div>
      {/* /menu-btn */}
      {/* menus */}
      <div className={btnClick ? 'menus show-menu' : 'menus'}>
        <ul className="film-bg">
          <Link to='/' className="film-logo film-text-color logo-font">Eh</Link>
          <li className="film-box">
              <Link to="/about" className="film-link film-about">
                {/* <img src={aboutImage} alt="" /> */}
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
            <li className="film-box">
              <Link to="/contact" className="film-link film-contact"></Link>
              <div className="film-title-box">
                <p className="film-text-color">contact</p>
              </div>
            </li>
        </ul>
      </div>
      {/* /menus */}
    </div>
  );
};

export default PageNavbar;
