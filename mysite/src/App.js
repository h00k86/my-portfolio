import './App.css';
import NavBar from './NavBar.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import WhoAmI from "./pages/WhoAmI.jsx";
import Contacts from "./pages/Contacts.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/whoami" element={<WhoAmI />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
