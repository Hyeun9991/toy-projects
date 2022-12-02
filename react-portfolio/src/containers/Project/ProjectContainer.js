import React from 'react';
import ToTopButton from '../../components/ToTopButton/ToTopButton';
import './ProjectContainer.scss';

const ProjectContainer = () => {
  return (
    <div className="project-container">
      <ToTopButton />
      <div className="projects-list">
        <p className="project-title">Projects List</p>
        <div className="project-section">
          <p className="project-item-title">Portfolio</p>
          <div className="project-img-section">
            <div className="project-img"></div>
          </div>
          <div className="project-desc-section">
            <div className="project-desc">
              <div className="decs-title">
                <h2>프로젝트 제목</h2>
                <p>
                &bull; [ Website ] Portfolio Website
                </p>
              </div>
              <div className="decs-text">
                <h2>프로젝트 설명</h2>
                <p>&bull; 배웠던 내용들을 토대로 만든 웹사이트</p>
                <p>&bull; resume, project들을 볼 수 있는 웹사이트</p>
                <p>&bull; react로 만든 웹사이트</p>
              </div>
              <div className="decs-text">
                <h2>프로젝트에서 맡은 역할</h2>
                <p>&bull; 각각의 스크린 사이즈에 대응하는 반응형 사이트 구현</p>
                <p>&bull; Email.js API를 활용해서 이메일 폼 구현</p>
              </div>
              <div className="decs-text">
                <h2>개발 도구</h2>
                <p>&bull; HTML5, SCSS, JavaScript, React(react-router)</p>
                <p>&bull; Email.js</p>
                <p>&bull; VSCode (Visual Studio Code)</p>
                <p>&bull; 크롬 개발자 도구</p>
                <p>&bull; figma (포트폴리오 구성,디자인 기획)</p>
              </div>
              <div className="decs-text">
                <h2>프로젝트 링크</h2>
                <a
                  href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                  target="_blank"
                >
                  &bull; github.com/Hyeun9991/toy-projects/tree/main/react-portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-section">
          <p className="project-item-title">Project Title</p>
          <div className="project-img-section">
            <div className="project-img"></div>
          </div>
          <div className="project-desc-section">
            <div className="project-desc"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
