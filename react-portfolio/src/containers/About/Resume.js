import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbGps } from 'react-icons/tb';
import { IoLogoJavascript, IoLogoHtml5 } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { SiBloglovin, SiSass, SiReact } from 'react-icons/si';
import { AiOutlineMessage } from 'react-icons/ai';
import './Resume.scss';

const Resume = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleSkill = (index) => {
    setToggleState(index);
  };

  return (
    <div className="resume">
      {/* resume-header */}
      <div className="resume-header">
        <div className='rh-wrapper'>
          <Link to="/" className="logo-small resume-logo">
            eunhye
          </Link>
        </div>
      </div>
      {/* /resume-header */}
      {/* resume-container */}
      <div className="resume-container">
        <div className="left-content">
          {/* profile-container */}
          <div className="profile-container">
            <div className="img-wrapper">
              <img
                src={require('../../assets/images/home-about-img.png')}
                alt=""
              />
            </div>
            <div className="name-wrapper">
              <p className="title-small">박은혜, park eun hye</p>
              <p className="secondary-title">front-end developer</p>
            </div>
          </div>
          {/* /profile-container */}
          {/* contact-container */}
          <div className="contact-container">
            <p className="title-small left-title">contact</p>
            <div className="contact-item">
              <TbGps className="bold-text" />
              <a
                href="https://www.google.co.kr/maps/place/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C+%EB%82%A8%EB%8F%99%EA%B5%AC+%EB%85%BC%ED%98%84%EB%8F%99/data=!3m1!4b1!4m5!3m4!1s0x357b7a41e0fec225:0x692a71578d11b1e5!8m2!3d37.4075188!4d126.7056?hl=ko"
                className="bold-text"
                target="_blank"
              >
                인천광역시 남동구
              </a>
            </div>
            <div className="contact-item">
              <AiOutlineMessage className="bold-text" />
              <a href="sms:010-7527-5792" className="bold-text" target="_blank">
                +82 10-7527-5792
              </a>
            </div>
            <div className="contact-item">
              <MdAlternateEmail className="bold-text" />
              <a
                href="mailto:hyeun9991@gmail.com"
                className="bold-text email-link"
                target="_blank"
              >
                hyeun9991@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <BsGithub className="bold-text" />
              <a
                href="https://github.com/Hyeun9991"
                className="bold-text email-link"
                target="_blank"
              >
                github.com/Hyeun9991
              </a>
            </div>
            <div className="contact-item">
              <SiBloglovin className="bold-text" />
              <a
                href="https://velog.io/@hyeun9991"
                className="bold-text email-link"
                target="_blank"
              >
                velog.io/@hyeun9991
              </a>
            </div>
          </div>
          {/* /contact-container */}
          {/* skills-container */}
          <div className="skills-container">
            <p className="title-small left-title">skills</p>
            <div
              className={
                toggleState === 1 ? 'skill-item open-skill' : 'skill-item'
              }
              onClick={() => toggleSkill(1)}
            >
              <div className="skill-title">
                <IoLogoHtml5 className="bold-text" />
                <p className="bold-text">html</p>
              </div>
              <div
                className={
                  toggleState === 1
                    ? 'skill-desc-wrapper open-desc'
                    : 'skill-desc-wrapper'
                }
              >
                <p className="thin-text">
                  웹접근성과 SEO를 고려하여 적절한 태그사용
                </p>
              </div>
            </div>
            <div
              className={
                toggleState === 2 ? 'skill-item open-skill' : 'skill-item'
              }
              onClick={() => toggleSkill(2)}
            >
              <div className="skill-title">
                <SiSass className="bold-text" />
                <p className="bold-text">css & scss</p>
              </div>
              <div
                className={
                  toggleState === 2
                    ? 'skill-desc-wrapper open-desc'
                    : 'skill-desc-wrapper'
                }
              >
                <p className="thin-text">
                  @media query를 사용해 반응형 웹사이트 개발
                </p>
              </div>
            </div>
            <div
              className={
                toggleState === 3 ? 'skill-item open-skill' : 'skill-item'
              }
              onClick={() => toggleSkill(3)}
            >
              <div className="skill-title">
                <IoLogoJavascript className="bold-text" />
                <p className="bold-text">javascript</p>
              </div>
              <div
                className={
                  toggleState === 3
                    ? 'skill-desc-wrapper open-desc'
                    : 'skill-desc-wrapper'
                }
              >
                <p className="thin-text">
                  DOM 조작과 EventListener를 활용해 간단한 기능 구현
                </p>
                <p className="thin-text">
                  RESTful API를 활용하여 외부 API 연동
                </p>
                <p className="thin-text">
                  스크린 높이값을 구해 Parallax Scrolling 구현
                </p>
              </div>
            </div>
            <div
              className={
                toggleState === 4 ? 'skill-item open-skill' : 'skill-item'
              }
              onClick={() => toggleSkill(4)}
            >
              <div className="skill-title">
                <SiReact className="bold-text" />
                <p className="bold-text">react.js</p>
              </div>
              <div
                className={
                  toggleState === 4
                    ? 'skill-desc-wrapper open-desc'
                    : 'skill-desc-wrapper'
                }
              >
                <p className="thin-text">
                  Hooks의 State를 활용해 간단한 기능 구현
                </p>
                <p className="thin-text">
                  CRA, React-Router로 SPA 웹사이트 구현
                </p>
              </div>
            </div>
          </div>
          {/* /skills-container */}
        </div>
        <div className="right-content">
          <div className="right-section-container">
            <div className="right-section right-section-1"></div>
            <div className="right-section right-section-2"></div>
            <div className="right-section right-section-3"></div>
          </div>
        </div>
      </div>
      {/* /resume-container */}
      {/* resume-bottom */}
      <div className="resume-bottom">
        <div className='rb-wrapper'>
          <Link to="/" className="logo-small resume-logo color-white">
            eunhye
          </Link>
        </div>
      </div>
      {/* /resume-bottom */}
    </div>
  );
};

export default Resume;
