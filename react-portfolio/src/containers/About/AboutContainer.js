import React from 'react';
import { Link } from 'react-router-dom';
import { profileItems } from './profileItems';
import './AboutContainer.scss';

const AboutContainer = () => {
  return (
    <div className="about">
      <div className="about-cover">
        <h1 className="background-title">eunhye</h1>
        <div className="about-img-wrapper">
          <img
            src={require('../../assets/images/profile-img.png')}
            alt="프로필사진"
            className="about-img"
          />
          <p className="sign-text">Eunhye .</p>
        </div>
      </div>
      <div className="about-section-container">
        <section className="s-start">
          <div className="sticky-profile">
            <div className="content-container">
              <article className="content">
                <div className="profile-01">
                  <div className="profile-img-wrapper">
                    <img
                      src={require('../../assets/images/profile-img.png')}
                      alt="프로필사진"
                      className="profile-img"
                    />
                  </div>
                  <div className="profile-name-wrapper">
                    <p className="content-text">eunhye</p>
                    <p className="content-side-title">developer front-end</p>
                  </div>
                </div>
                <div className="profile-02">
                  <ul>
                    {profileItems.map((t) => {
                      return (
                        <li key={t.id}>
                          {t.icon}
                          <a
                            href={t.url}
                            target="_blank"
                            className="content-text"
                          >
                            {t.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="contact-button">
                  <Link to="/contact" className="link-button">
                    get in touch
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="s-end">
          <section className="se-section se-01">
            <div className="content-container">
              <h2 className="content-side-title">about me</h2>
              <article className="content">
                <h3 className="content-secondary-title">
                  “나의 DEFAULT는 배움”
                </h3>
                <p className="content-text">
                  저는 어릴 때부터 무엇이든지 직접 구현해보고 만드는 것을
                  좋아했습니다.
                </p>
                <p className="content-text">
                  점점 발전하는 온라인 시대의 양질의 서비스를 접하면서 지금
                  이용하고 있는 서비스 혹은 점점 발전될 미래의 기술에 대해
                  흥미가 생겼습니다.
                </p>
              </article>
            </div>
          </section>
          <section className="se-section se-02">
            <div className="content-container">
              <h2 className="content-side-title">my skills</h2>
              <article className="content">
                <ul className="sl-left">
                  <li className="skill-item">
                    <h3 className="content-secondary-title">HTML</h3>
                    <div className="text-container">
                      <p className="content-text">
                        ·&nbsp;&nbsp;웹접근성과 SEO를 고려하여 적절한 태그사용
                      </p>
                    </div>
                  </li>
                  <li className="skill-item">
                    <h3 className="content-secondary-title">CSS</h3>
                    <div className="text-container">
                      <p className="content-text">
                        ·&nbsp;&nbsp;@MEDIA QUERY를 사용해 반응형 웹사이트 개발
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className="sl-right">
                  <li className="skill-item">
                    <h3 className="content-secondary-title">JAVASCRIPT</h3>
                    <div className="text-container">
                      <p className="content-text">
                        ·&nbsp;&nbsp;DOM 조작과 EVENTLISTENER를 활용해 간단한
                        기능 구현
                      </p>
                      <p className="content-text">
                        ·&nbsp;&nbsp;RESTFUL API를 활용하여 외부 API 연동
                      </p>
                      <p className="content-text">
                        ·&nbsp;&nbsp;스크린 높이값을 구해 PARALLAX SCROLLING
                        구현
                      </p>
                    </div>
                  </li>
                  <li className="skill-item">
                    <h3 className="content-secondary-title">REACT.JS</h3>
                    <div className="text-container">
                      <p className="content-text">
                        ·&nbsp;&nbsp;HOOKS의 STATE를 활용해 간단한 기능 구현
                      </p>
                      <p className="content-text">
                        ·&nbsp;&nbsp;CRA, REACT-ROUTER로 SPA 웹사이트 구현
                      </p>
                    </div>
                  </li>
                </ul>
              </article>
            </div>
          </section>
        </section>
      </div>
      <div className="page-footer-title">
        <p className="pf-title">about</p>
      </div>
    </div>
  );
};

export default AboutContainer;
