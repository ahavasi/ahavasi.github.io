import "./App.css";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
