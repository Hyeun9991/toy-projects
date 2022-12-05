import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io';
import ToTopButton from '../../components/ToTopButton/ToTopButton';
import './AboutContainer.scss';

const AboutContainer = () => {
  return (
    <div className="about-container">
      <ToTopButton />

      {/* about-resume */}
      <div className="about-resume">
        <p className="about-resume-title">Resume</p>
        {/* resume-overview */}
        <div className="resume-overview resume-section">
          {/* overview-start */}
          <div className="overview-start start-section">
            <div className="overview-img"></div>
          </div>
          {/* /overview-start */}

          {/* overview-end */}
          <div className="overview-end end-section">
            <div className="overview-text">
              <h2>
                {/* &#34; */}
                “컴퓨터랑 일하는 건 엄청 멋있다. 누구랑 싸우지도 않고, 모든 것을
                대신 기억해주고, 내 맥주를 뺏어 마시지도 않는다. ”
                <p>by. Paul Leary</p>
              </h2>
              <span>
                <b className="underline-b">웹개발에 대한 꾸준한 수요증가</b>는
                웹프론트 개발자가 되기위한 <b className="underline-b">동기</b>로
                충분했습니다. <br />
                컴퓨터의 <b className="underline-b">입력과 아웃풋이 명확함</b>에
                매력을 느끼고 <b className="underline-b">즐기면서</b> 개발하고
                있습니다.
                <br />
                <p className="background-p">
                  모든 프로젝트에 애정을 갖고 사용자에게 좋은 경험을 줄 수 있는
                  개발자로 거듭나기 위해 공부 중 입니다.
                </p>
              </span>
            </div>
          </div>
          {/* /overview-end */}
        </div>
        {/* /resume-overview */}

        {/* resume-skills */}
        <div className="resume-skills resume-section">
          <div className="skills-start start-section">
            {/* skill-item-section */}
            <div className="skill-item-section">
              <div className="skill-item">
                <div className="item-title">HTML5</div>
              </div>
              <div className="skill-item">
                <div className="item-title">CSS</div>
              </div>
              <div className="skill-item">
                <div className="item-title">SCSS</div>
              </div>
              <div className="skill-item">
                <div className="item-title">JavaScript</div>
              </div>
              <div className="skill-item">
                <div className="item-title">React</div>
              </div>
            </div>
            {/* /skill-item-section */}

            {/* skill-desc-section */}
            <div className="skill-desc-section">
              <div className="desc-item">
                <h2>html5</h2>
                <p>‑ dom 조작</p>
                <p>‑ dom 조작</p>
                <p>‑ dom 조작</p>
              </div>
              <div className="desc-item">
                <h2>css, scss</h2>
                <p>‑ dom 조작</p>
              </div>
              <div className="desc-item">
                <h2>javascript</h2>
                <p>‑ dom 조작</p>
              </div>
              <div className="desc-item">
                <h2>react</h2>
                <p>‑ dom 조작</p>
              </div>
            </div>
            {/* /skill-desc-section */}
          </div>
        </div>
        {/* /resume-profile */}

        {/* resume-contact */}
        <div className="resume-profile resume-section">
          {/* profile-start */}
          <div className="profile-start">
            <div className="resume-profile-item">
              <h2>name</h2>
              <div className="item-tags">
                <p># 박은혜</p>
                <p># Park Eun Hye</p>
                <p># Eh</p>
              </div>
            </div>
            <div className="resume-profile-item">
              <h2>Occupation</h2>
              <div className="item-tags">
                <p># Web Developer</p>
                <p># Frontend</p>
              </div>
            </div>
            <div className="resume-profile-item">
              <h2>address</h2>
              <p># Incheon Korea</p>
            </div>
          </div>
          {/* /profile-start */}

          {/* contact-center */}
          <div className="contact-center start-section">
            <div className="resume-contact-item">
              <h2>email</h2>
              <a href="mailto:hyeun9991@gmail.com"># hyeun9991@gmail.com</a>
            </div>
            <div className="resume-contact-item">
              <h2>phone call</h2>
              <a href="sms:010-7527-5792"># +82 10-7527-5792</a>
            </div>
          </div>
          {/* /contact-center */}

          {/* social-end */}
          <div className="social-end end-section">
            <div className="resume-social-item">
              <h2>blog</h2>
              <a href="https://velog.io/@hyeun9991" target="_blank">
                # velog.io/@hyeun9991
              </a>
            </div>
            <div className="resume-social-item">
              <h2>github</h2>
              <a href="https://github.com/hyeun9991" target="_blank">
                # github.com/hyeun9991
              </a>
            </div>
          </div>
          {/* /social-end */}
        </div>
        {/* /resume-contact */}
      </div>
      {/* /about-resume */}
    </div>
  );
};

export default AboutContainer;
