import React, { useState } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import './SkillsContainer.scss';

const Skills = () => {
  const [toggleState, setToggleState] = useState(1);

  /**
   * 클릭한 tab매뉴의 숫자로 toggleState 변경됨
   * @param {number} index tab menu state number
   */
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="skills">
      <div className="skill-tab-menu">
        <div className="skill-title-container">
          <div
            className={
              toggleState === 1
                ? 'tab content-text active-tab'
                : 'tab content-text'
            }
            onClick={() => toggleTab(1)}
          >
            all
          </div>
          <div
            className={
              toggleState === 2
                ? 'tab content-text active-tab'
                : 'tab content-text'
            }
            onClick={() => toggleTab(2)}
          >
            html
          </div>
          <div
            className={
              toggleState === 3
                ? 'tab content-text active-tab'
                : 'tab content-text'
            }
            onClick={() => toggleTab(3)}
          >
            css
          </div>
          <div
            className={
              toggleState === 4
                ? 'tab content-text active-tab'
                : 'tab content-text'
            }
            onClick={() => toggleTab(4)}
          >
            javascript
          </div>
          <div
            className={
              toggleState === 5
                ? 'tab content-text active-tab'
                : 'tab content-text'
            }
            onClick={() => toggleTab(5)}
          >
            tools
          </div>
        </div>
        <div className="skill-content-container">
          <div
            className={`content ${
              toggleState === 1 ? 'active-content  all-contents' : ''
            }`}
          >
            <div className="skill-item">
              <div className="title-wrapper">
                <AiFillHtml5 className="content-main-title html-icon icon" />
                <h2 className="content-main-title">html</h2>
              </div>
              <div className="text-wrapper">
                <p className="content-text">
                  웹접근성과 SEO를 고려하여 적절한 태그사용
                </p>
              </div>
            </div>
            <div className="skill-item">
              <div className="title-wrapper">
                <FaCss3Alt className="content-main-title css-icon icon" />
                <h2 className="content-main-title">css</h2>
              </div>
              <div className="text-wrapper">
                <p className="content-text">
                  @media query를 사용해 반응형 웹사이트 개발
                </p>
              </div>
            </div>
            <div className="skill-item">
              <div className="title-wrapper">
                <IoLogoJavascript className="content-main-title js-icon icon" />
                <h2 className="content-main-title">javascript</h2>
              </div>
              <div className="text-wrapper">
                <p className="content-text">
                  DOM 조작과 EventListener를 활용해 간단한 기능 구현
                </p>
                <p className="content-text">
                  RESTful API를 활용하여 외부 API 연동
                </p>
                <p className="content-text">
                  스크린 높이값을 구해 Parallax Scrolling 구현
                </p>
              </div>
            </div>
            <div className="skill-item">
              <div className="title-wrapper">
                <FaReact className="content-main-title react-icon icon" />
                <h2 className="content-main-title">react.js</h2>
              </div>
              <div className="text-wrapper">
                <p className="content-text">
                  Hooks의 State를 활용해 간단한 기능 구현
                </p>
                <p className="content-text">
                  CRA, React-Router로 SPA 웹사이트 구현
                </p>
              </div>
            </div>
          </div>
          <div
            className={`content ${
              toggleState === 2 ? 'active-content html-content' : ''
            }`}
          >
            <div className="skill-item">
              <div className="title-wrapper">
                <AiFillHtml5 className="content-main-title html-icon icon" />
                <h2 className="content-main-title">html</h2>
              </div>
              <div className="text-wrapper">
                <p className="content-text">
                  웹접근성과 SEO를 고려하여 적절한 태그사용
                </p>
              </div>
            </div>
          </div>
          <div
            className={`content ${
              toggleState === 3 ? 'active-content css-content' : ''
            }`}
          >
            <div className="skill-item">
              <div className="title-wrapper">
                <FaCss3Alt className="content-main-title css-icon icon" />
                <h2 className="content-main-title">css</h2>
              </div>
              <div className="text-wrapper">
                <p className="content-text">
                  @media query를 사용해 반응형 웹사이트 개발
                </p>
              </div>
            </div>
          </div>
          <div
            className={`content ${
              toggleState === 4 ? 'active-content js-content' : ''
            }`}
          >
            <div className="skill-item">
              <div className="title-wrapper">
                <IoLogoJavascript className="content-main-title js-icon icon" />
                <h2 className="content-main-title">javascript</h2>
              </div>
              <div className="text-wrapper">
                <p className="content-text">
                  DOM 조작과 EventListener를 활용해 간단한 기능 구현
                </p>
                <p className="content-text">
                  RESTful API를 활용하여 외부 API 연동
                </p>
                <p className="content-text">
                  스크린 높이값을 구해 Parallax Scrolling 구현
                </p>
              </div>
            </div>
          </div>
          <div
            className={`content ${
              toggleState === 5 ? 'active-content tools-content' : ''
            }`}
          >
            <div className="skill-item">
              <div className="title-wrapper">
                <FaReact className="content-main-title react-icon icon" />
                <h2 className="content-main-title">react.js</h2>
              </div>
              <div className="text-wrapper">
                <p className="content-text">
                  Hooks의 State를 활용해 간단한 기능 구현
                </p>
                <p className="content-text">
                  CRA, React-Router로 SPA 웹사이트 구현
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page-footer-title */}
      <div className="page-footer-title">
        <p className="pf-title">skills</p>
      </div>
      {/* /page-footer-title */}
    </div>
  );
};

export default Skills;
