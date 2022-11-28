import React from 'react';
import { Routes, Route } from 'react-router-dom';

/**********[ scss ]**********/
import './App.scss';
import './styles/reset.scss';
import './styles/common.scss';

/**********[ components & routes ]**********/
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-page" element={<ProjectPage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/contact-page" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
