import React from 'react';
import ToTopButton from '../../components/ToTopButton/ToTopButton';
import './AboutContainer.scss';

const AboutContainer = () => {
  return (
    <div className="about-container">
      <ToTopButton />
      <div className="about-resume about-section">
        <h1 className="about-title">Resume</h1>
        <div className="resume-img"></div>
        <div className="resume-text">
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
      </div>
      <div className="about-skills about-section">
        <h1 className="about-title">skills</h1>
      </div>
      <div className="about-profile about-section">
        <h1 className="about-title">profile</h1>
      </div>
    </div>
  );
};

export default AboutContainer;
