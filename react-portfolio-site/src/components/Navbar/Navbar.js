import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItems1 } from './NavItems';
import { NavItems2 } from './NavItems';
import { allNavItems } from './NavItems';
import '../../styles/Navbar.scss'

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
            {allNavItems.map((t) => {
              return (
                <li key={t.id}>
                  <p>{t.ptag}</p>
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
  );
};

export default Navbar;
