import "./App.css";
import Resume from "./components/Resume/Resume";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Airbnb from "./components/projects/airbnb/Airbnb";
import Projects from "./components/Projects";
import MemeGenerator from "./components/projects/meme-generator/MemeGenerator";
import ReactFacts from "./components/projects/react-facts/ReactFacts";
import Tenzies from "./components/projects/tenzies/Tenzies";

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
            <Route path="meme-generator" element={<MemeGenerator />}></Route>
            <Route path="react-facts" element={<ReactFacts />}></Route>
            <Route path="tenzies" element={<Tenzies />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
