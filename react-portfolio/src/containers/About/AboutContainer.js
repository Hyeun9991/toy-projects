import React from 'react';
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
        <section className="profile-section all-about-section">
          <article className="content-container">
            <h2 className="content-title content-side-title">Profile</h2>
            <div className="content-main-text">
              <div className="left-c">
                <div className="mt-item">
                  <h3 className="content-side-title">Name:&nbsp;</h3>
                  <p className="content-text">박은혜, Park Eun-Hye</p>
                </div>
                <div className="mt-item">
                  <h3 className="content-side-title">Address:&nbsp;</h3>
                  <p className="content-text">Incheon, Republic of Korea</p>
                </div>
                <div className="mt-item">
                  <h3 className="content-side-title">Phone:&nbsp;</h3>
                  <p className="content-text">+82 10-7527-5792</p>
                </div>
              </div>
              <div className="right-c">
                <div className="mt-item">
                  <h3 className="content-side-title">Email:&nbsp;</h3>
                  <a
                    href="mailto:hyeun9991@gmail.com"
                    target="_blank"
                    className="content-text"
                  >
                    hyeun9991@gmail.com
                  </a>
                </div>
                <div className="mt-item">
                  <h3 className="content-side-title">Github:&nbsp;</h3>
                  <a
                    href="https://github.com/Hyeun9991"
                    target="_blank"
                    className="content-text"
                  >
                    github.com/Hyeun9991
                  </a>
                </div>
                <div className="mt-item">
                  <h3 className="content-side-title">Blog:&nbsp;</h3>
                  <a
                    href="https://velog.io/@hyeun9991"
                    target="_blank"
                    className="content-text"
                  >
                    velog.io/@hyeun9991
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="introduce-section all-about-section">
          <article className="content-container">
            <h2 className="content-title content-side-title">Introduce</h2>
            <div className="content-main-text">
              <p className="content-text">
                안녕하세요! 웹 개발에 관심이 많고 배움과 경험으로 성장 중인
                프론트엔드 개발자 박은혜입니다.
              </p>
              <p className="content-text">
                프론트엔드 로드맵과 인터넷 강의 및 공식문서를 통해 개발에 대한
                지식을 습득하였고 최근에는 개인프로젝트를 React로 진행하면서
                기획과 기능 구현을 한 경험이 있습니다.
              </p>
              <p className="content-text">
                공부하면서 습득한 지식과 프로젝트에서 겪은 경험을 통해 기능
                구현을 잘하는 개발자뿐만 아니라 사용자의 관점에서 사고하여
                배제되는 사람이 없도록 동등하고 동일한 서비스를 만드는 개발자가
                되는 것이 목표입니다.
              </p>
            </div>
          </article>
        </section>
        <section className="skills-section all-about-section">
          <article className="content-container">
            <h2 className="content-title content-side-title">Skills</h2>
            <div className="content-main-text">
              <div className="mt-item">
                <h3 className="content-text">JavaScript</h3>
                <div className="text-wrapper">
                  <p className="content-text">
                    ·&nbsp;&nbsp;ES6+ 표준 스팩으로 DOM 조작, 이벤트 함수
                    핸들링을 활용하여 프로젝트를 진행한 경험이 있습니다.
                  </p>
                  <p className="content-text">
                    ·&nbsp;&nbsp;map, forEach 함수를 활용한 경험이 있습니다.
                  </p>
                  <p className="content-text">
                    ·&nbsp;&nbsp;React(CRA, React Router)를 활용해 SPA를 개발한
                    경험이 있습니다.
                  </p>
                </div>
              </div>
              <div className="mt-item">
                <h3 className="content-text">ETC</h3>
                <div className="text-wrapper">
                  <p className="content-text">
                    ·&nbsp;&nbsp;웹 표준을 준수하여 시멘틱 태그에 맞게 개발한
                    경험이 있습니다.
                  </p>
                  <p className="content-text">
                    ·&nbsp;&nbsp;다양한 스크린 크기에 대응하기 위해 반응형으로
                    개발한 경험이 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="projects-section all-about-section">
          <article className="content-container">
            <h2 className="content-title content-side-title">Profile</h2>
            <div className="content-main-text">
              <div className="left-c">
                <div className="mt-item">
                  <p className="content-side-title">
                    홈페이지, 포트폴리오 웹사이트
                  </p>
                  <h3 className="content-secondary-title">
                    Eh: Eunhye Portfolio
                  </h3>
                </div>
                <div className="mt-item">
                  <h3 className="content-side-title">개발 기간</h3>
                  <p className="content-text">2022.11 ~ [진행중인 프로젝트]</p>
                </div>
                <div className="mt-item">
                  <h3 className="content-side-title">기술 스택</h3>
                  <div className="skill-tags">
                    <p className="content-side-title tag-text">HTML</p>
                    <p className="content-side-title tag-text">SCSS</p>
                    <p className="content-side-title tag-text">JavaScript</p>
                    <p className="content-side-title tag-text">React</p>
                  </div>
                </div>
                <div className="mt-item">
                  <h3 className="content-side-title">링크</h3>
                  <a
                    href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                    target="_blank"
                    className="content-text"
                  >
                    Github
                  </a>
                </div>
              </div>
              <div className="right-c">
                <div className="mt-item">
                  <h3 className="content-side-title">개요</h3>
                  <p className="content-text">
                    ·&nbsp;&nbsp;습득했던 지식을 기반으로 사이트 기획, 기능
                    구현, 배포를 공부하기 위해서 진행한 프로젝트
                  </p>
                </div>
                <div className="mt-item">
                  <h3 className="content-side-title">
                    참여인원 및 자신의 역할
                  </h3>
                  <p className="content-text">·&nbsp;&nbsp;개인 프로젝트</p>
                  <p className="content-text">
                    ·&nbsp;&nbsp;기획(사이트 구성, 디자인, 파일 구성), 기능 구현
                  </p>
                </div>
                <div className="mt-item">
                  <h3 className="content-side-title">주요 개발 내용</h3>
                  <p className="content-text">
                    ·&nbsp;&nbsp;useLocation, useEffect를 활용하여 URL이 변경될
                    때마다 스크롤 위치를 맨 위로 올리는 기능 구현
                  </p>
                  <p className="content-text">
                    ·&nbsp;&nbsp;window에 scrollTo 함수를 활용하여 클릭하면
                    스크롤 위치를 맨 위로 올리는 기능 구현
                  </p>
                  <p className="content-text">
                    ·&nbsp;&nbsp;window의 높이를 구해 일정 스크롤 위치를
                    초과하면 화면에 나타나는 기능 구현
                  </p>
                </div>
                <div className="mt-item">
                  <h3 className="content-side-title">개발 후기</h3>
                  <p className="content-text">
                    ·&nbsp;&nbsp;이론적으로 습득한 지식 이외 새로운 지식을
                    습득하는 시간이 되었습니다.
                  </p>
                  <p className="content-text">
                    ·&nbsp;&nbsp;테스트하는 과정에서 불편했던 점을 발견하고
                    기능을 구현하여 보완하는 경험을 했습니다.
                  </p>
                  <p className="content-text">
                    ·&nbsp;&nbsp;리팩토링과 CRUD 지식을 학습해서 버전 2에 추가할
                    계획입니다.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
      <div className="page-footer-title">
        <p className="pf-title">about</p>
      </div>
    </div>
  );
};

export default AboutContainer;
