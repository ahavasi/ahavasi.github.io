import "./App.css";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Airbnb from "./components/projects/airbnb/Airbnb";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="resume" element={<Resume />}></Route>
          <Route path="projects" element={<Projects />}>
            <Route path="airbnb" element={<Airbnb />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
