import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**********[ scss ]**********/
import './styles/App.scss';

/**********[ components & pages ]**********/
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Pages/Projects';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
