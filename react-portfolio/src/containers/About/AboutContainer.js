import React from 'react';
import { Link } from 'react-router-dom';
import './AboutContainer.scss';

const AboutContainer = () => {
  return (
    <div className="about">
      <div className="about-section-container">
        {/* about-section-1 overview*/}
        <section className="about-section-1 about-section">
          <div className="content-wrapper">
            <div className="content-start">
              <div className="content-text-wrapper">
                <p className="content-secondary-title">"시야가 넓은 개발자"</p>
                <p className="content-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  esse eos voluptatibus, nam dignissimos saepe quidem facilis
                  aut vero aperiam dolorum necessitatibus a officia eaque magnam
                  ea provident. Error, doloremque.
                </p>
              </div>
              <h1 className="content-title">About me</h1>
            </div>
            <div className="content-end">
              <div className="content-image-frame">
                <p className="img-text">
                  eunhye - <br /> front-end
                </p>
                <img
                  src={require('../../assets/images/home-about-img.png')}
                  className="content-img"
                  alt="about 이미지"
                />
              </div>
            </div>
          </div>
        </section>
        {/* /about-section-1 */}
        {/* about-section-2 way*/}
        <section className="about-section-2 about-section">
          <div className="content-wrapper">
            <h2 className="content-title">Scalability & Way</h2>
            <div className="content-text-container">
              <p className="content-text">
                온라인으로 일처리하는 시대가 오면서 
                <b>온라인의 핵심 플랫폼인 웹,앱</b>의 프론트 부분을 개발하는
                프론트엔드 개발자는 온라인 비즈니스 산업 종류에 얽매이지 않고
                필요로 하다는 것에 웹 개발의 전망이 밝다고 판단했습니다.
              </p>
              <p className="content-text">
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
              <p className="content-text">
                수업 과정을 따라가면서 나온 아웃풋과 그 과정에서 발생한{' '}
                <b>오류를 해석하고 해결 방법을 찾아 해결한 시간이 성취감을</b>{' '}
                가져왔습니다. 현재는 React (react-router)를 학습하고 복습하는
                시간을 갖기 위해 반응형 포트폴리오 웹사이트를 개발하고 있습니다.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* page-footer-title */}
      <div className="page-footer-title">
        <p className='pf-title'>about</p>
      </div>
      {/* /page-footer-title */}
    </div>
  );
};

export default AboutContainer;
