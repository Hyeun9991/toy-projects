import React, { useState } from 'react';
import '../../styles/Projects.scss';
import ToTopButton from '../ToTopButton/ToTopButton';

const Projects = () => {
  const [projectClick, setProjectClick] = useState(false);
  const showProject = () => {
    setProjectClick(!projectClick);
  };

  return (
    <div className="projects">
      <ToTopButton />
      <div className="projects-container">
        {/* project-search-box */}
        <div className="project-search-box">
          <h1>Projects list</h1>
          <input
            type="text"
            className="search-input"
            placeholder="search here"
          />
        </div>
        {/* /project-search-box */}

        {/* projects-list */}
        <div className="projects-list">
          {/* project-box */}
          <div className="project-box">
            <div className="project-image portfolio-img" onClick={showProject}>
              <div className="project-title-date">
                <p className="pro-title">Eh Portfolio website</p>
                <p className="pro-date">2022.11.23</p>
              </div>
            </div>
            <div className={projectClick ? 'pro-modal pro-show' : 'pro-modal'}>
              <div className="project-desc">
                <div className="pro-close-btn" onClick={showProject}>
                  <p>Close</p>
                </div>
                <div className="pro-contents">
                  <div className="pro-desc-img">
                    <img className="desc-img portfolio-desc-img"></img>
                  </div>
                  <div className="pro-desc-text">
                    <span>
                      프로젝트 이름
                      <h3>Eh Portfolio Website</h3>
                    </span>
                    <span>
                      프로젝트 설명
                      <p>공부하면서 배우고 만든 프로젝트들을 모은 사이트</p>
                    </span>
                    <span>
                      역할
                      <p> &#183; 피그마를 활용해서 기획과 디자인 도안 작업</p>
                      <p> &#183; HTML 마크업, SCSS로 디자인</p>
                      <p>
                        &#183; React Router의 Link 태그를 활용해서 컴포넌트와
                        url 연결
                      </p>
                      <p>
                        &#183; React Hooks의 useState, useEffect를 활용해서
                        메뉴창 닫기 기능 구현
                      </p>
                      <p>
                        {' '}
                        &#183; Email.js의 API를 활용해서 이메일 폼 기능 구현
                      </p>
                    </span>
                    <span>
                      사용한 언어, 툴<p> &#183; HTML5, SCSS</p>
                      <p> &#183; React (react router dom v6)</p>
                      <p> &#183; JavaScript</p>
                      <p> &#183; Email.js</p>
                    </span>
                    <span>
                      프로젝트 링크
                      <a
                        href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                        target="_blank"
                      >
                        <b>깃허브</b>{' '}
                        github.com/Hyeun9991/toy-projects/tree/main/react-portfolio
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* project-box */}

          {/* project-box */}
          {/* <div className="project-box">
            <div className="project-image" onClick={showProject}>
              <div className="project-title-date">
                <p className="pro-title">Eh Portfolio website</p>
                <p className="pro-date">2022.11.23</p>
              </div>
            </div>
            <div className={projectClick ? 'pro-modal pro-show' : 'pro-modal'}>
              <div className="project-desc">
                <div className="pro-close-btn" onClick={showProject}>
                  <p>Close</p>
                </div>
                <div className="pro-contents">
                  <div className="pro-desc-img">
                    <img className="desc-img"></img>
                  </div>
                  <div className="pro-desc-text">
                    <span>
                      프로젝트 이름
                      <h3>Eh Portfolio Website</h3>
                    </span>
                    <span>
                      프로젝트 설명
                      <p>공부하면서 배우고 만든 프로젝트들을 모은 사이트</p>
                    </span>
                    <span>
                      역할
                      <p> &#183; 피그마를 활용해서 기획과 디자인 도안 작업</p>
                      <p> &#183; HTML 마크업, SCSS로 디자인</p>
                      <p>
                        &#183; React Router의 Link 태그를 활용해서 컴포넌트와
                        url 연결
                      </p>
                      <p>
                        &#183; React Hooks의 useState, useEffect를 활용해서
                        메뉴창 닫기 기능 구현
                      </p>
                      <p>
                        {' '}
                        &#183; Email.js의 API를 활용해서 이메일 폼 기능 구현
                      </p>
                    </span>
                    <span>
                      사용한 언어, 툴<p> &#183; HTML5, SCSS</p>
                      <p> &#183; React (react router dom v6)</p>
                      <p> &#183; JavaScript</p>
                      <p> &#183; Email.js</p>
                    </span>
                    <span>
                      프로젝트 링크
                      <a
                        href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                        target="_blank"
                      >
                        <b>깃허브</b>{' '}
                        github.com/Hyeun9991/toy-projects/tree/main/react-portfolio
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* project-box */}

          {/* project-box */}
          {/* <div className="project-box">
            <div className="project-image" onClick={showProject}>
              <div className="project-title-date">
                <p className="pro-title">Eh Portfolio website</p>
                <p className="pro-date">2022.11.23</p>
              </div>
            </div>
            <div className={projectClick ? 'pro-modal pro-show' : 'pro-modal'}>
              <div className="project-desc">
                <div className="pro-close-btn" onClick={showProject}>
                  <p>Close</p>
                </div>
                <div className="pro-contents">
                  <div className="pro-desc-img">
                    <img className="desc-img"></img>
                  </div>
                  <div className="pro-desc-text">
                    <span>
                      프로젝트 이름
                      <h3>Eh Portfolio Website</h3>
                    </span>
                    <span>
                      프로젝트 설명
                      <p>공부하면서 배우고 만든 프로젝트들을 모은 사이트</p>
                    </span>
                    <span>
                      역할
                      <p> &#183; 피그마를 활용해서 기획과 디자인 도안 작업</p>
                      <p> &#183; HTML 마크업, SCSS로 디자인</p>
                      <p>
                        &#183; React Router의 Link 태그를 활용해서 컴포넌트와
                        url 연결
                      </p>
                      <p>
                        &#183; React Hooks의 useState, useEffect를 활용해서
                        메뉴창 닫기 기능 구현
                      </p>
                      <p>
                        {' '}
                        &#183; Email.js의 API를 활용해서 이메일 폼 기능 구현
                      </p>
                    </span>
                    <span>
                      사용한 언어, 툴<p> &#183; HTML5, SCSS</p>
                      <p> &#183; React (react router dom v6)</p>
                      <p> &#183; JavaScript</p>
                      <p> &#183; Email.js</p>
                    </span>
                    <span>
                      프로젝트 링크
                      <a
                        href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                        target="_blank"
                      >
                        <b>깃허브</b>{' '}
                        github.com/Hyeun9991/toy-projects/tree/main/react-portfolio
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* project-box */}

          {/* project-box */}
          {/* <div className="project-box">
            <div className="project-image" onClick={showProject}>
              <div className="project-title-date">
                <p className="pro-title">Eh Portfolio website</p>
                <p className="pro-date">2022.11.23</p>
              </div>
            </div>
            <div className={projectClick ? 'pro-modal pro-show' : 'pro-modal'}>
              <div className="project-desc">
                <div className="pro-close-btn" onClick={showProject}>
                  <p>Close</p>
                </div>
                <div className="pro-contents">
                  <div className="pro-desc-img">
                    <img className="desc-img"></img>
                  </div>
                  <div className="pro-desc-text">
                    <span>
                      프로젝트 이름
                      <h3>Eh Portfolio Website</h3>
                    </span>
                    <span>
                      프로젝트 설명
                      <p>공부하면서 배우고 만든 프로젝트들을 모은 사이트</p>
                    </span>
                    <span>
                      역할
                      <p> &#183; 피그마를 활용해서 기획과 디자인 도안 작업</p>
                      <p> &#183; HTML 마크업, SCSS로 디자인</p>
                      <p>
                        &#183; React Router의 Link 태그를 활용해서 컴포넌트와
                        url 연결
                      </p>
                      <p>
                        &#183; React Hooks의 useState, useEffect를 활용해서
                        메뉴창 닫기 기능 구현
                      </p>
                      <p>
                        {' '}
                        &#183; Email.js의 API를 활용해서 이메일 폼 기능 구현
                      </p>
                    </span>
                    <span>
                      사용한 언어, 툴<p> &#183; HTML5, SCSS</p>
                      <p> &#183; React (react router dom v6)</p>
                      <p> &#183; JavaScript</p>
                      <p> &#183; Email.js</p>
                    </span>
                    <span>
                      프로젝트 링크
                      <a
                        href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                        target="_blank"
                      >
                        <b>깃허브</b>{' '}
                        github.com/Hyeun9991/toy-projects/tree/main/react-portfolio
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* /project-box */}

          {/* project-box */}
          {/* <div className="project-box">
            <div className="project-image" onClick={showProject}>
              <div className="project-title-date">
                <p className="pro-title">Eh Portfolio website</p>
                <p className="pro-date">2022.11.23</p>
              </div>
            </div>
            <div className={projectClick ? 'pro-modal pro-show' : 'pro-modal'}>
              <div className="project-desc">
                <div className="pro-close-btn" onClick={showProject}>
                  <p>Close</p>
                </div>
                <div className="pro-contents">
                  <div className="pro-desc-img">
                    <img className="desc-img"></img>
                  </div>
                  <div className="pro-desc-text">
                    <span>
                      프로젝트 이름
                      <h3>Eh Portfolio Website</h3>
                    </span>
                    <span>
                      프로젝트 설명
                      <p>공부하면서 배우고 만든 프로젝트들을 모은 사이트</p>
                    </span>
                    <span>
                      역할
                      <p> &#183; 피그마를 활용해서 기획과 디자인 도안 작업</p>
                      <p> &#183; HTML 마크업, SCSS로 디자인</p>
                      <p>
                        &#183; React Router의 Link 태그를 활용해서 컴포넌트와
                        url 연결
                      </p>
                      <p>
                        &#183; React Hooks의 useState, useEffect를 활용해서
                        메뉴창 닫기 기능 구현
                      </p>
                      <p>
                        {' '}
                        &#183; Email.js의 API를 활용해서 이메일 폼 기능 구현
                      </p>
                    </span>
                    <span>
                      사용한 언어, 툴<p> &#183; HTML5, SCSS</p>
                      <p> &#183; React (react router dom v6)</p>
                      <p> &#183; JavaScript</p>
                      <p> &#183; Email.js</p>
                    </span>
                    <span>
                      프로젝트 링크
                      <a
                        href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                        target="_blank"
                      >
                        <b>깃허브</b>{' '}
                        github.com/Hyeun9991/toy-projects/tree/main/react-portfolio
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* /project-box */}

          {/* project-box */}
          {/* <div className="project-box">
            <div className="project-image" onClick={showProject}>
              <div className="project-title-date">
                <p className="pro-title">Eh Portfolio website</p>
                <p className="pro-date">2022.11.23</p>
              </div>
            </div>
            <div className={projectClick ? 'pro-modal pro-show' : 'pro-modal'}>
              <div className="project-desc">
                <div className="pro-close-btn" onClick={showProject}>
                  <p>Close</p>
                </div>
                <div className="pro-contents">
                  <div className="pro-desc-img">
                    <img className="desc-img"></img>
                  </div>
                  <div className="pro-desc-text">
                    <span>
                      프로젝트 이름
                      <h3>Eh Portfolio Website</h3>
                    </span>
                    <span>
                      프로젝트 설명
                      <p>공부하면서 배우고 만든 프로젝트들을 모은 사이트</p>
                    </span>
                    <span>
                      역할
                      <p> &#183; 피그마를 활용해서 기획과 디자인 도안 작업</p>
                      <p> &#183; HTML 마크업, SCSS로 디자인</p>
                      <p>
                        &#183; React Router의 Link 태그를 활용해서 컴포넌트와
                        url 연결
                      </p>
                      <p>
                        &#183; React Hooks의 useState, useEffect를 활용해서
                        메뉴창 닫기 기능 구현
                      </p>
                      <p>
                        {' '}
                        &#183; Email.js의 API를 활용해서 이메일 폼 기능 구현
                      </p>
                    </span>
                    <span>
                      사용한 언어, 툴<p> &#183; HTML5, SCSS</p>
                      <p> &#183; React (react router dom v6)</p>
                      <p> &#183; JavaScript</p>
                      <p> &#183; Email.js</p>
                    </span>
                    <span>
                      프로젝트 링크
                      <a
                        href="https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio"
                        target="_blank"
                      >
                        <b>깃허브</b>{' '}
                        github.com/Hyeun9991/toy-projects/tree/main/react-portfolio
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* /project-box */}
        </div>
        {/* /projects-list */}
      </div>
    </div>
  );
};

export default Projects;
