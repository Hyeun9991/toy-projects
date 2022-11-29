import React from 'react';
import ToTopButton from '../../components/ToTopButton/ToTopButton';
import './AboutContainer.scss';

const AboutContainer = () => {
  return (
    <div className="about-container">
      <ToTopButton />

      <div className="about-resume">
        <p className="about-resume-title">Resume</p>

        {/* resume-overview */}
        <div className="resume-overview resume-section">
          <div className="overview-start start-section">
            <p className="about-title">Eunhye</p>
            <div className="overview-img"></div>
          </div>
          <div className="overview-end end-section">
            <p className="about-title">Overview</p>
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
        </div>
        {/* /resume-overview */}

        {/* resume-skills */}
        <div className="resume-skills resume-section">
          <div className="skills-start start-section">
            <p className="about-title">Skills</p>
            <div className="skill-item-section">
              <div className="skill-item">
                <div className="item-icon html-icon"></div>
                <div className="item-title">html5</div>
              </div>
              <div className="skill-item">
                <div className="item-icon css-icon"></div>
                <div className="item-title">css</div>
                
              </div>
              <div className="skill-item">
              <div className="item-icon scss-icon"></div>
                <div className="item-title">scss</div>
              </div>
              <div className="skill-item">
                <div className="item-icon js-icon"></div>
                <div className="item-title">javascript</div>
              </div>
              <div className="skill-item">
                <div className="item-icon react-icon"></div>
                <div className="item-title">react</div>
              </div>
            </div>
            
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
            
          </div>
        </div>
        {/* /resume-profile */}

        {/* resume-contact */}
        <div className="resume-profile resume-section">
          {/* profile-start */}
          <div className="profile-start">
            <p className="about-title">Profile</p>
            <div className="resume-profile-item">
              <h2>name</h2>
              <p>박은혜 | Park Eun Hye</p>
            </div>
            <div className="resume-profile-item">
              <h2>Occupation</h2>
              <p>Web Frontend Developer</p>
            </div>
            <div className="resume-profile-item">
              <h2>address</h2>
              <p>Incheon Korea</p>
            </div>
          </div>
          {/* /profile-start */}

          {/* contact-center */}
          <div className="contact-center start-section">
            <p className="about-title">Contact</p>
            <div className="resume-contact-item">
              <h2>
                email
                <a href="mailto:hyeun9991@gmail.com">hyeun9991@gmail.com</a>
              </h2>
            </div>
            <div className="resume-contact-item">
              <h2>
                phone call
                <a href="sms:010-7527-5792">+82 10-7527-5792</a>
              </h2>
            </div>
          </div>
          {/* /contact-center */}

          {/* social-end */}
          <div className="social-end end-section">
            <p className="about-title">Social</p>
            <div className="resume-social-item">
              <h2>
                blog
                <a href="https://velog.io/@hyeun9991" target="_blank">
                  velog.io/@hyeun9991
                </a>
              </h2>
            </div>
            <div className="resume-social-item">
              <h2>
                github
                <a href="https://github.com/hyeun9991" target="_blank">
                  github.com/hyeun9991
                </a>
              </h2>
            </div>
          </div>
          {/* /social-end */}
        </div>
        {/* /resume-contact */}
      </div>

      {/* about-overview */}
      {/* <div className="about-overview about-section">
        <h1 className="about-title">overview</h1>
        <div className="overview-start">
          <div className="about-img" />
        </div>
        <div className="overview-end">
          <h2>
            &#34; 컴퓨터랑 일하는 건 엄청 멋있다. 누구랑 싸우지도 않고, 모든
            것을 대신 기억해주고, 내 맥주를 뺏어 마시지도 않는다. &#34;
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
      </div> */}
      {/* /about-overview */}

      {/* about-resume */}
      {/* <div className="about-resume about-section">
        <h1 className="about-title">resume</h1>
      </div> */}
      {/* /about-resume */}

      {/* about-skills */}
      {/* <div className="about-skills about-section">
        <h1 className="about-title">skills</h1>
      </div> */}
      {/* /about-skills */}
    </div>
  );
};

export default AboutContainer;
