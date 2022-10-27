import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;