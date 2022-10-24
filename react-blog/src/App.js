import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// scss
import './App.scss';

// components & pages
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
