import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Portfolio from './containers/Project/ProjectPages/Portfolio/Portfolio';
import ToTopButton from './components/ToTopButton/ToTopButton';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ToTopButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
