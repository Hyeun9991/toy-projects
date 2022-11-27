import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Footer.scss';

const Footer = () => {
  return (
    <div className="footer-section-container">
      {/* <div className="footer-menu-links">
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
      <div className="footer-about-box">
        <p>
          Phone Call <a href="sms: 010-7527-5792">+82 10-7527-5792</a>
        </p>
        <p>
          Email <a href="mailto: hyeun9991@gmail.com">hyeun9991@gmail.com</a>
        </p>
      </div> */}

      <div className="footer-center">
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
      <div className="footer-start">
        <h3>Eh Portfolio Website</h3>
        <span>
          phone call
          <a href="sms: 010-7527-5792">+82 10 &#183; 7527 &#183; 5792</a>
        </span>
        <span>
          Email
          <a href="mailto: hyeun9991@gmail.com">hyeun9991@gmail.com</a>
        </span>
      </div>
      <div className="footer-end">
        <ul>
          <li>
            <a href="https://velog.io/@hyeun9991" target="_blank">
              blog
            </a>
          </li>
          <li>
            <a href="https://github.com/Hyeun9991" target="_blank">
              github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
