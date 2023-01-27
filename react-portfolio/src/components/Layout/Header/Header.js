import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { menuItems, socialItems, sideItems } from './menuItems';
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
      <nav role="navigation" className="header-container">
        <div className="h-logo">
          <h1 className="logo active-item">
            <NavLink to="/">Eh</NavLink>
          </h1>
        </div>
        <ul className="h-menu">
          {menuItems.map((t) => {
            return (
              <li key={t.id}>
                <NavLink to={t.url} className="h-item active-item">
                  {t.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="h-contact">
          <NavLink to="/contact" className="h-item active-item">
            get in touch
          </NavLink>
        </div>
        <div
          className={`h-open-btn ${btnClick ? 'clicked' : ''}`}
          onClick={showMenu}
          type="button"
        >
          <span className="first-bar"></span>
          <span className="second-bar"></span>
        </div>
        <nav
          role="navigation"
          className={`h-side-nav ${btnClick ? 'open-side' : ''}`}
        >
          <div className="hs-container">
            <ul className="hs-start">
              {sideItems.map((t) => {
                return (
                  <li key={t.id}>
                    <NavLink to={t.url} className="h-item">
                      {t.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <ul className="hs-end">
              {socialItems.map((t) => {
                return (
                  <li key={t.id}>
                    <a href={t.url} target="_blank" className="h-item">
                      {t.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
