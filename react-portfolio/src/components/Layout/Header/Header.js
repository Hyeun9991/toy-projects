import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { menuItems, socialItems } from './menuItems';
import './Header.scss';

const Header = () => {
  // 토글을 닫아두기 위해 초기값을 false로 설정
  const [btnClick, setBtnClick] = useState(false);
  /**
   * state (true or false) 토글 함수
   */
  const showMenu = () => {
    setBtnClick(!btnClick);
  };

  return (
    <header className="header">
      <div className={`header-container ${btnClick ? 'open' : ''}`}>
        {/* main-header */}
        <div className="main-header">
          <div className="header-logo">
            <h1>
              <Link to="/" className="logo">
                Eh
              </Link>
            </h1>
          </div>
          <nav className="main-nav" role="navigation">
            <ul>
              {menuItems.map((t) => {
                return (
                  <li key={t.id}>
                    <NavLink to={t.url} className="menu-item active-link">
                      {t.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="header-contact">
            <NavLink to="/contact" className="contact-item active-link">
              get in touch
            </NavLink>
          </div>
          <div
            className={`open-menu-btn ${btnClick ? 'clicked' : ''}`}
            onClick={showMenu}
            type="button"
          >
            <span className="first-bar"></span>
            <span className="second-bar"></span>
          </div>
        </div>
        {/* /main-header */}
        {/* secondary-header */}
        <div className="secondary-header">
          {/* <p className="background-title">navigate</p> */}
          <nav className="secondary-nav" role="navigation">
            <div className="sn-container">
              <ul className="sn-menu">
                <p className=" sn-title">menu</p>
                {menuItems.map((t) => {
                  return (
                    <li key={t.id}>
                      <NavLink to={t.url} className="sn-item">
                        {t.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <div className="sn-contact">
                <p className="sn-title">get in touch</p>
                <NavLink to="/contact" className="sn-item">
                  contact
                </NavLink>
              </div>
              <ul className="sn-social">
                <p className="sn-title">social</p>
                {socialItems.map((t) => {
                  return (
                    <li key={t.id}>
                      <a href={t.url} target="_blank" className="sn-item">
                        {t.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
        {/* /secondary-header */}
      </div>
    </header>
  );
};

export default Header;
