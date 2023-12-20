import "./App.css";
import Resume from "./components/Resume/Resume";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Airbnb from "./components/projects/airbnb/Airbnb";
import MemeGenerator from "./components/projects/meme-generator/MemeGenerator";
import ReactFacts from "./components/projects/react-facts/ReactFacts";
import Tenzies from "./components/projects/tenzies/Tenzies";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const onChangeDarkMode = (checked) => {
    setDarkMode((prev) => !prev);
  };
  const darkModeStyle = darkMode ? "dark" : "light";
  return (
    <div className={`full ${darkModeStyle}`}>
      <Navbar darkMode={darkMode} onChangeDarkMode={onChangeDarkMode} />
      <div className="main-body">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="resume" element={<Resume />}></Route>
          <Route path="airbnb" element={<Airbnb />}></Route>
          <Route path="meme-generator" element={<MemeGenerator />}></Route>
          <Route path="react-facts" element={<ReactFacts />}></Route>
          <Route path="tenzies" element={<Tenzies />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
