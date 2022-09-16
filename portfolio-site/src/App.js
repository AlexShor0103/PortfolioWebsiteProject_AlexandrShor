import './App.css';
import {BrowserRouter as Router, Navigate, Routes, Route, Link} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import ErrorPage from './Pages/ErrorPage';
function App() {
  return (
    <Router>
      <nav class="navBar">
        <ul list-style-type="none">
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/About"> About </Link></li>
          <li><Link to="/Resume"> Resume </Link></li>
          <li><Link to="/Projects"> Projects </Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/PortfolioWebsiteProject_AlexandrShor/" element={<Navigate to="/" replace />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
