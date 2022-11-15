import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/About.scss';

const About = () => {
  return (
    <div className="about">
      <p className="about-logo">Eh</p>
      <div className="about-title">
        <Link to="/">Home</Link>
        {/* <p>About</p> */}
      </div>
      <div className="about-container">
        <input type="radio" name="about-tab-menu" id="about-tab-1" checked />
        <label htmlFor="about-tab-1">Memo</label>
        <input type="radio" name="about-tab-menu" id="about-tab-2" />
        <label htmlFor="about-tab-2">About Me</label>

        <div className="about-conbox con1">
          <div className="q-a-tab">
            {/* q-a-box-1 */}
            <div className="q-a-box q-a-box-1">
              {/* q-a-1 */}
              <div className="q-a-1">
                <div className="q-a-1-about-me q-a-about-me">
                  <h2>개발자가 되려는 계기가 무엇인가요?</h2>
                  <p>
                    온라인 비즈니스에서 수요가 높아 밝은 전망을 보이는 웹 개발은
                    프론트엔드 개발자가 되기 위한 계기가 되었습니다.
                    <br /> 사용자 경험이 좋은 웹 개발을 하기 위해, 가치 있는
                    아웃풋을 내기 위해 항상 고민하는 개발자가 되는 것이
                    목표입니다.
                  </p>
                </div>
              </div>
              {/* /q-a-1 */}
            </div>
            {/* /q-a-box-1 */}

            {/* q-a-box-2 */}
            <div className="q-a-box q-a-box-2">
              {/* q-a-2 */}
              <div className="q-a-2">
                <div className="q-a-2-about-me q-a-about-me">
                  <h2>어떤 공부를 했나요?</h2>
                  <p>
                    생활코딩 이고잉님의 웹 수업 강의를 통해 기초, JavaScript 등
                    웹 개발에 필요한 내용들을 학습했습니다. <br />
                    최근에는 더 향상된 사용자 경험을 줄 수 있는 브라우저를
                    개발하기 위해 React를 공부하고 있습니다. 더 나아가 cs 지식을
                    꼭 알야아 된다고 판단되어 공부중입니다.
                  </p>
                </div>
              </div>
              {/* /q-a-2 */}
            </div>
            {/* /q-a-box-2 */}

            {/* q-a-box-3 */}
            <div className="q-a-box q-a-box-3">
              {/* q-a-3 */}
              <div className="q-a-3">
                <div className="q-a-3-about-me q-a-about-me">
                  <h2>사용할 수 있는 개발언어는 무엇인가요?</h2>
                  <p>
                    Html5의 시멘틱 태그사용, SCSS를 사용해 태그들을 적절하게
                    배치하고 심미성을 높일 수 있습니다.
                    <br />
                    JavaScript를 활용해서 정적 사이트에 필수인 이벤트와 DOM을
                    제어할 수 있습니다.
                  </p>
                </div>
              </div>
              {/* /q-a-3 */}
            </div>
            {/* /q-a-box-3 */}

            {/* q-a-box-4 */}
            <div className="q-a-box q-a-box-4">
              {/* q-a-4 */}
              <div className="q-a-4">
                <div className="q-a-4-about-me q-a-about-me">
                  <h2>Html, CSS 숙련도</h2>
                  <p>
                    Html5의 시멘틱 태그사용, SCSS를 사용해 태그들을 적절하게
                    배치하고 심미성을 높일 수 있습니다.
                    <br />
                    JavaScript를 활용해서 정적 사이트에 필수인 이벤트와 DOM을
                    제어할 수 있습니다.
                  </p>
                </div>
              </div>
              {/* /q-a-4 */}
            </div>
            {/* /q-a-box-4 */}

            {/* q-a-box-5 */}
            <div className="q-a-box q-a-box-5">
              {/* q-a-5 */}
              <div className="q-a-5">
                <div className="q-a-5-about-me q-a-about-me">
                  <h2>JavaScript 숙련도</h2>
                  <p>
                    Html5의 시멘틱 태그사용, SCSS를 사용해 태그들을 적절하게
                    배치하고 심미성을 높일 수 있습니다.
                    <br />
                    JavaScript를 활용해서 정적 사이트에 필수인 이벤트와 DOM을
                    제어할 수 있습니다.
                  </p>
                </div>
              </div>
              {/* /q-a-5 */}
            </div>
            {/* /q-a-box-5 */}

            {/* q-a-box-6 */}
            <div className="q-a-box q-a-box-6">
              {/* q-a-6 */}
              <div className="q-a-6">
                <div className="q-a-6-about-me q-a-about-me">
                  <h2>Tools</h2>
                  <p>
                    Html5의 시멘틱 태그사용, SCSS를 사용해 태그들을 적절하게
                    배치하고 심미성을 높일 수 있습니다.
                    <br />
                    JavaScript를 활용해서 정적 사이트에 필수인 이벤트와 DOM을
                    제어할 수 있습니다.
                  </p>
                </div>
              </div>
              {/* /q-a-6 */}
            </div>
            {/* /q-a-box-6 */}
          </div>
        </div>
        <div className="about-conbox con2">
          <div className="about-tab">
            <p>
              오프라인에서 온라인으로 일 처리하는 시대가 오면서 온라인의 핵심
              플랫폼인 웹 브라우저와 모바일 앱의 수요 증가와 이를 개발하는
              프론트엔드 개발자는 온라인 비즈니스 산업 종류에 얽매이지 않고
              필요로 하다는 것에 웹 개발의 전망이 밝다고 판단되었습니다. <br /><br />
              프론트엔드 개발이 적성에 맞는지 생활코딩 이고잉님의 웹 수업 강의를
              통해 웹의 동작 원리부터 기초, JavaScript 등 웹 개발에 필요한
              내용들을 학습했습니다.
              수업 과정을 따라가면서 나온 아웃풋과 그 과정에서 발생한 오류를
              해석하고 해결 방법을 찾아 해결한 시간이 성취감을 가져왔습니다.<br /><br />
              현재는 좋은 사용자 경험을 줄 수 있는 브라우저를 개발하기 위해
              react와 react-router를 학습하고 있습니다.
              개인 토이 프로젝트를 만든 후 효율적이고 수요가 높은 아웃풋을 내기
              위해선 팀이 있어야한다고 생각했습니다. 
              기획과 백엔드와의 소통도 원활해야 한다고 생각하기에 git 지식과
              백엔드와의 소통이 이뤄지는 엔드포인트인 RESTful API를 학습하고
              있습니다.
              이를 기반으로 기초를 잘 다진 연결고리가 되는 프론트엔드 개발자가
              되겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
