import React from 'react';

const Projects = () => {
  return (
    <div className="projects page-box">
      <div className="projects-section1 page-section1">
        <span className="page-title">Projects</span>
        <div className="projects-content-desc-box">
          <div className="desc-box-1">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              ex placeat facilis necessitatibus ea temporibus minima amet magni
              voluptates minus ab assumenda impedit quae, quod omnis obcaecati
            </p>
          </div>
          <div className="desc-box-2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              ex placeat facilis necessitatibus ea temporibus minima amet magni
              voluptates minus ab assumenda impedit quae, quod omnis obcaecati
            </p>
          </div>
        </div>
        <div className="projects-content-box">
          <div className="project-box-1 p-box-item">
            <p className="hidden-text">클릭해서 더 자세히 보기</p>
            <div className="project-image"></div>
            <div className="project-desc-box">
              <div className="project-title">
                <div className="project-name">
                  <h3>Project 01</h3>
                </div>
                <div className="project-date">
                  <p>2022.9.9 ~ 2022.10.31</p>
                </div>
              </div>
              <div className="project-desc">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione, ex placeat facilis necessitatibus ea temporibus
                  minima amet magni voluptates minus ab assumenda impedit quae,
                  quod omnis obcaecati
                </p>
              </div>
            </div>
          </div>
          <div className="project-box-2 p-box-item">
            <p className="hidden-text">클릭해서 더 자세히 보기</p>
            <div className="project-image"></div>
            <div className="project-desc-box">
              <div className="project-title">
                <div className="project-name">
                  <h3>Project 02</h3>
                </div>
                <div className="project-date">
                  <p>2023.1.1 ~ 2023.4.1</p>
                </div>
              </div>
              <div className="project-desc">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione, ex placeat facilis necessitatibus ea temporibus
                  minima amet magni voluptates minus ab assumenda impedit quae,
                  quod omnis obcaecati
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
