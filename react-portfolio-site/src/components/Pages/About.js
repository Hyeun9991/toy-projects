import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import '../../styles/About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <p className="about-top-right-text">
          About
        </p>
        <div className="about-box-1">
          <div className="about-logo">
            {/* <Link to='/'>Eh</Link> */}
            <p className="text-btn-logo">Eh</p>
          </div>
        </div>
        <div className="about-box-2">
          <div className="about-title">
            <h1>I'm a&nbsp;</h1>
            <Typical
              steps={['Frontend Developer', 'Park Eun Hye', 'Eh']}
              loop={1}
              wrapper="h1"
              className="typical-text"
            />
          </div>
          <div className="about-text-1">
            <ul className="left-text">
              <li>name</li>
              <li>email</li>
              <li>call phone</li>
            </ul>
            <ul className="right-text">
              <li>Park Eun Hye</li>
              <li>hyeun9991@gmail.com</li>
              <li>+82 10 7527 5792</li>
            </ul>
          </div>
          <div className="about-text-2">
            <p>
              온라인 비즈니스에서 수요가 높아 밝은 전망을 보이는 웹 개발은
              프론트엔드 개발자가 되기 위한 계기가 되었습니다. 사용자 경험이
              좋은 웹 개발을 하기 위해, 가치 있는 아웃풋을 내기 위해 항상
              고민하는 개발자가 되는 것이 목표입니다.
            </p>
          </div>
        </div>
        <div className="about-box-3"></div>
        <div className="about-box-4">
          <div className="about-home-link">
            <Link to="/" className="text-btn-logo">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
