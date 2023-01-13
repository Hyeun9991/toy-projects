import React from 'react';
import { Link } from 'react-router-dom';
import './AboutContainer.scss';

const AboutContainer = () => {
  return (
    <div className="about">
      <div className="about-section-container">
        <section className="about-section about-section-01">
          <p className="background-title">eunhye</p>
          <div className="about-img-wrapper">
            <img
              src={require('../../assets/images/home-about-img.png')}
              alt="about 이미지 01"
              className="about-img"
            />
            <p className="sign-text">Eunhye .</p>
          </div>
        </section>
        <section className="about-section about-section-02">
          <div className="content-container">
            <h2 className="content-main-title">SCALABILITY & WAY</h2>
            <p className="content-side-title">: 웹의 확장성과 공부 방법</p>
            <div className="content-text-container">
              <div className="text-item">
                <p className="content-text">
                  온라인으로 일처리하는 시대가 오면서 온라인의 핵심 플랫폼인
                  웹,앱의 프론트 부분을 개발하는 프론트엔드 개발자는 온라인
                  비즈니스 산업 종류에 얽매이지 않고 필요로 하다는 것에 웹
                  개발의 전망이 밝다고 판단했습니다.
                </p>
                <p className="content-text">
                  먼저 적성에 맞는지 생활코딩을 비롯해 인터넷 강의를 통해 웹의
                  동작 원리부터 기초, JavaScript 등 웹 개발에 필요한 내용들을
                  학습했습니다.
                </p>
              </div>
              <div className="text-item">
                <p className="content-text">
                  공부하는 과정에서 개발에 대해 흥미를 느껴 kamranahmedse의
                  프론트엔드 개발자 로드맵을 따라 단계별로 학습하고 중요하거나
                  배운 내용을 깃허브와 블로그에 올리는 방식으로 공부했습니다.
                </p>
                <p className="content-text">
                  수업 과정을 따라가면서 나온 아웃풋과 그 과정에서 발생한 오류를
                  해석하고 해결 방법을 찾아 해결한 시간이 성취감을 가져왔습니다.
                  현재는 React (react-router)를 학습하고 복습하는 시간을 갖기
                  위해 반응형 포트폴리오 웹사이트를 개발하고 있습니다.
                </p>
              </div>
            </div>
            <a href="#02" className="content-link">
              더 보기
            </a>
          </div>
        </section>
        <section className="about-section about-section-03" id="02">
          <div className="content-container">
            <h2 className="content-main-title sign-text">
              {/* My Favorite Things */}
            </h2>
            <h2 className="content-main-title">More About me</h2>
            <ul className="favorite-container">
              <li className="favorite-item">
                <h3 className="content-side-title">favorite thing to do : </h3>
                <p className="item-text handwriting-text">
                  커피 마시면서 TV보기
                </p>
              </li>
              <li className="favorite-item">
                <h3 className="content-side-title">favorite food :</h3>
                <p className="item-text handwriting-text">
                  지코바 양념 구이 치킨
                </p>
              </li>
              <li className="favorite-item">
                <h3 className="content-side-title">my favorite song :</h3>
                <p className="item-text handwriting-text">
                  태연 - 사계 (Four Seasons)
                </p>
              </li>
              <li className="favorite-item">
                <h3 className="content-side-title">what makes me happy :</h3>
                <p className="item-text handwriting-text">
                  침대위에서 플레이리스트 들으면서 공부할 때
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      {/* page-footer-title */}
      <div className="page-footer-title">
        <p className="pf-title">about</p>
      </div>
      {/* /page-footer-title */}
    </div>
  );
};

export default AboutContainer;
