import React from 'react';
import { Routes, Route } from 'react-router-dom';
/**********[ scss ]**********/
import './App.scss';
/**********[ components & routes ]**********/
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Portfolio from './containers/Project/ProjectPages/Portfolio/Portfolio';
import ToTopButton from './components/ToTopButton/ToTopButton';
import SKillsPage from './pages/SkillsPage';

function App() {
  return (
    <div className="App">
      <ToTopButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SKillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
