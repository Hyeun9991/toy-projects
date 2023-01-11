import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const menuList = [
    {
      id: 1,
      title: 'home',
      url: '/',
    },
    {
      id: 2,
      title: 'about',
      url: '/about',
    },
    {
      id: 3,
      title: 'skills',
      url: '/skills',
    },
    {
      id: 4,
      title: 'projects',
      url: '/projects',
    },
  ];
  const socialList = [
    {
      id: 1,
      title: 'email',
      url: 'mailto: hyeun9991@gmail.com',
    },
    {
      id: 2,
      title: 'mobile',
      url: 'sms: 010-7527-5792',
    },
    {
      id: 3,
      title: 'github',
      url: 'https://github.com/Hyeun9991',
    },
    {
      id: 4,
      title: 'blog',
      url: 'https://velog.io/@hyeun9991',
    },
  ];

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="secondary-footer">
          <div className="sf-start">
            <nav className="menu-nav">
              <p className="footer-title">menu</p>
              <ul>
                {menuList.map((t) => {
                  return (
                    <li key={t.id}>
                      <Link to={t.url} className="link-item">
                        {t.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="sf-end">
            <div className="sc-menu">
              <Link className="footer-title" to="/contact">
                social & contact
              </Link>
              <ul>
                {socialList.map((t) => {
                  return (
                    <li key={t.id}>
                      <a href={t.url} target="_blank" className="link-item">
                        {t.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="main-footer">
          <div className="footer-version">
            <p className="main-footer-text">ver.01</p>
            <p className="main-footer-text">last update 2022.01.09</p>
          </div>
          <div className="footer-logo">
            <Link className="logo" to="/">
              Eh
            </Link>
          </div>
          <div className="footer-info">
            <p className="main-footer-text">eh portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
