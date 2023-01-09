import React from 'react';
import { Link } from 'react-router-dom';
import './AboutContainer.scss';

const AboutContainer = () => {
  return (
    <div className="about-container">
      <div className="about-section-wrapper">
        {/* about-section-1 overview*/}
        <section className="about-section-1 about-section">
          <div className="content-wrapper">
            <div className="about-intro-image">
              <p className="cursive-text">i love </p>
              <img
                src={require('../../assets/images/home-about-img.png')}
                alt="profile image"
                className="profile-img"
              />
              <p className="cursive-text">coding</p>
            </div>
            <div className="about-overview">
              <h1 className="title overview-title">
                "시야가 넓은 개발자"
              </h1>
              <div className="overview-text">
                <p className="thin-text">사용자 측면에서 사고하는</p>
                <p className="thin-text">고객의 니즈와 트렌드를 파악하는</p>
                <p className="thin-text">시장성있는 아웃풋을 낼 수 있는</p>
                <p className="thin-text">
                  개발자가 되기위해 고민하는 신입 개발자 박은혜입니다.
                </p>
              </div>
              <Link to="/resume" className="box-link" target="_blank">
                resume
              </Link>
            </div>
          </div>
        </section>
        {/* /about-section-1 */}

        {/* about-section-2 way*/}
        <section className="about-section-2 about-section dark-section">
          <div className="content-wrapper">
            <div className="section-title">
              <h2 className="title color-white">
                Scalability <b>&</b> Way
              </h2>
            </div>
            <div className="section-content">
              <p className="thin-text color-white">
                온라인으로 일처리하는 시대가 오면서 
                <b>온라인의 핵심 플랫폼인 웹,앱</b>의 프론트 부분을 개발하는
                프론트엔드 개발자는 온라인 비즈니스 산업 종류에 얽매이지 않고
                필요로 하다는 것에 웹 개발의 전망이 밝다고 판단했습니다.
              </p>
              <p className="thin-text color-white">
                먼저 적성에 맞는지{' '}
                <b>
                  생활코딩을 비롯해 인터넷 강의를 통해 웹의 동작 원리부터 기초,
                  JavaScript 등 웹 개발에 필요한 내용들을 학습
                </b>
                했습니다. 공부하는 과정에서 개발에 대해 흥미를 느껴 
                <b>kamranahmedse의 프론트엔드 개발자 로드맵</b>을 따라 단계별로
                학습하고 중요하거나 배운 내용을 <b>깃허브</b>와 
                <b>블로그</b>에 올리는 방식으로 공부했습니다.
              </p>
              <p className="thin-text color-white">
                수업 과정을 따라가면서 나온 아웃풋과 그 과정에서 발생한{' '}
                <b>오류를 해석하고 해결 방법을 찾아 해결한 시간이 성취감을</b>{' '}
                가져왔습니다. 현재는 React (react-router)를 학습하고 복습하는
                시간을 갖기 위해 반응형 포트폴리오 웹사이트를 개발하고 있습니다.
              </p>
            </div>
          </div>
        </section>
        {/* /about-section-2 */}

        {/* about-section-3 hobby */}
        {/* <section className="about-section-3 about-section">
          <div className="content-wrapper">
            <div className="section-title">
              <span className="secondary-title">my hobby</span>
              <h2 className="title">
                Coffee <b>&</b> Watch Movie
              </h2>
            </div>
            <div className="section-content">
              <p className="thin-text">
                제 취미는 <b>커피</b>와 <b>영화</b>를 보는것입니다.
              </p>
            </div>
          </div>
        </section> */}
        {/* /about-section-3 */}

        {/* about-section-4 skills */}
        {/* <section className="about-section-4 about-section dark-section">
          <div className="content-wrapper">
            <div className="section-title">
              <h2 className="title color-white">my skills</h2>
            </div>
            <div className="section-content">
              <ul className="skill-list">
                <li className="skill-item">
                  <div className="skill-title">
                    <span className="secondary-title color-white">3</span>
                    <p className="title-middle color-white">html</p>
                  </div>
                  <div className="skill-desc">
                    <p className="thin-text color-white">
                      웹접근성과 SEO를 고려하여 적절한 태그사용
                    </p>
                  </div>
                </li>
                <li className="skill-item right-item">
                  <div className="skill-title">
                    <span className="secondary-title color-white">3</span>
                    <p className="title-middle color-white">css & scss</p>
                  </div>
                  <div className="skill-desc">
                    <p className="thin-text color-white">
                      @media query를 사용해 반응형 웹사이트 개발
                    </p>
                  </div>
                </li>
                <li className="skill-item">
                  <div className="skill-title">
                    <span className="secondary-title color-white">2</span>
                    <p className="title-middle color-white">JavaScript</p>
                  </div>
                  <div className="skill-desc">
                    <p className="thin-text color-white">
                      DOM 조작과 EventListener를 활용해 간단한 기능 구현
                    </p>
                    <p className="thin-text color-white">
                      RESTful API를 활용하여 외부 API 연동{' '}
                    </p>
                    <p className="thin-text color-white">
                      스크린 높이값을 구해 Parallax Scrolling 구현{' '}
                    </p>
                  </div>
                </li>
                <li className="skill-item right-item">
                  <div className="skill-title">
                    <span className="secondary-title color-white">2</span>
                    <p className="title-middle color-white">react</p>
                  </div>
                  <div className="skill-desc">
                    <p className="thin-text color-white">
                      Hooks의 State를 활용해 간단한 기능 구현
                    </p>
                    <p className="thin-text color-white">
                      CRA, React-Router로 SPA 웹사이트 구현{' '}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section> */}
        {/* /about-section-4 */}
      </div>
    </div>
  );
};

export default AboutContainer;
