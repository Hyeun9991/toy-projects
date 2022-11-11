import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/About.scss';

const About = () => {
  return (
    <div className="about">
      <p className="about-logo">Eh</p>
      <div className="about-link-line">
        <Link to="/" className="home-text-btn">
          &larr; Home
        </Link>
        <p className="about-top-right-text">About</p>
      </div>
      <div className="about-container">
        <div className="q-a-box-1 q-a-box">
          {/* q-a-1 */}
          <div className="q-a-1">
            <div className="q-a-1-picture q-a-picture">
              <div className="picture-box"></div>
              <div className="text-box">
                <p>motivation</p>
              </div>
            </div>
            <div className="q-a-1-about-me q-a-about-me">
              <h2>개발자가 되려는 계기가 무엇인가요?</h2>
              <p>
                온라인 비즈니스에서 수요가 높아 밝은 전망을 보이는 웹 개발은
                프론트엔드 개발자가 되기 위한 계기가 되었습니다.
                <br /> 사용자 경험이 좋은 웹 개발을 하기 위해, 가치 있는
                아웃풋을 내기 위해 항상 고민하는 개발자가 되는 것이 목표입니다.
              </p>
            </div>
          </div>
          {/* /q-a-1 */}
        </div>

        <div className="q-a-box-2 q-a-box">
          {/* q-a-2 */}
          <div className="q-a-2">
            <div className="q-a-2-picture q-a-picture">
              <div className="picture-box"></div>
              <div className="text-box">
                <p>learning</p>
              </div>
            </div>
            <div className="q-a-2-about-me q-a-about-me">
              <h2>어떤 공부를 했나요?</h2>
              <p>
                생활코딩 이고잉님의 웹 수업 강의를 통해 기초, JavaScript 등 웹
                개발에 필요한 내용들을 학습했습니다. <br />
                최근에는 더 향상된 사용자 경험을 줄 수 있는 브라우저를 개발하기
                위해 React를 공부하고 있습니다. 더 나아가 cs 지식을 꼭 알야아
                된다고 판단되어 공부중입니다.
              </p>
            </div>
          </div>
          {/* /q-a-2 */}
        </div>

        <div className="q-a-box-3 q-a-box">
          {/* q-a-3 */}
          <div className="q-a-3">
            <div className="q-a-3-picture q-a-picture">
              <div className="picture-box"></div>
              <div className="text-box">
                <p>skills</p>
              </div>
            </div>
            <div className="q-a-3-about-me q-a-about-me">
              <h2>사용할 수 있는 개발언어는 무엇인가요?</h2>
              <p>
                Html5의 시멘틱 태그사용, SCSS를 사용해 태그들을 적절하게
                배치하고 심미성을 높일 수 있습니다.
                <br />
                JavaScript를 활용해서 정적 사이트에 필수인 이벤트와 DOM을 제어할
                수 있습니다.
              </p>
            </div>
          </div>
          {/* /q-a-3 */}
        </div>
      </div>
    </div>
  );
};

export default About;
