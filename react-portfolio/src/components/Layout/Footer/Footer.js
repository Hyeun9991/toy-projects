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
      <p className="background-title">eunhye</p>
      <div className="footer-container">
        {/* secondary-footer */}
        <div className="secondary-footer">
          <div className="sf-start sf-container">
            <p className="footer-item">navigate</p>
            <ul>
              {menuList.map((t) => {
                return (
                  <li key={t.id}>
                    <Link to={t.url} className="footer-active-item">
                      {t.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sf-end sf-container">
            <p className="footer-item">connection</p>
            <ul>
              {socialList.map((t) => {
                return (
                  <li key={t.id}>
                    <a
                      href={t.url}
                      target="_blank"
                      className="footer-active-item"
                    >
                      {t.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* /secondary-footer */}
        {/* main-footer */}
        <div className="main-footer">
          <div className="footer-info-01">
            <p className="footer-item">ver.01</p>
            <p className="footer-item">last update 2023.01.12</p>
          </div>
          <div className="footer-info-02">
            <p className="footer-item">eh portfolio</p>
          </div>
          <div className="footer-logo">
            <Link to="/" className="logo">
              Eh
            </Link>
          </div>
        </div>
        {/* /main-footer */}
      </div>
    </div>
  );
};

export default Footer;
