import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { NavItems1 } from './NavItems';
import { NavItems2 } from './NavItems';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const showMenu = () => {
    setClicked(!clicked);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-menu-1">
          {NavItems1.map((t) => {
            return (
              <li key={t.id}>
                <Link to={t.url} className={t.class}>
                  <span>{t.title}</span>
                </Link>
              </li>
            );
          })}
        </div>
        <div className="navbar-logo">
          <Link to="/" className="menu-logo">
            <p className="logo-1">EUNHYE</p>
          </Link>
        </div>
        <div className="navbar-menu-2">
          {NavItems2.map((t) => {
            return (
              <li key={t.id}>
                <Link to={t.url} className={t.class}>
                  <span>{t.title}</span>
                </Link>
              </li>
            );
          })}
        </div>
        <div
          className={clicked ? 'navbar-menu-icon on' : 'navbar-menu-icon'}
          onClick={showMenu}
        >
          <span></span>
        </div>
        <div
          className={clicked ? 'navbar-hidden-menu open' : 'navbar-hidden-menu'}
        >
          <ul className="hidden-menu-1">
            <li>
              <p>01</p>
              <Link to="/" className="menu-items">
                HOME
              </Link>
            </li>
            <li>
              <p>02</p>
              <Link to="/projects" className="menu-items">
                PROJECTS
              </Link>
            </li>
            <li>
              <p>03</p>
              <Link to="/about" className="menu-items">
                ABOUT
              </Link>
            </li>
            <li>
              <p>04</p>
              <Link to="/contact" className="menu-items">
                CONTACT
              </Link>
            </li>
          </ul>
          {/* <div className="hidden-menu-2">
            {NavItems2.map((t) => {
              return (
                <li key={t.id}>
                  <Link to={t.url} className={t.class}>
                    <span>{t.title}</span>
                  </Link>
                </li>
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
