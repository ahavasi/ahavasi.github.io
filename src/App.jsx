import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Resume from "./components/Resume/Resume";
import Airbnb from "./components/projects/airbnb/Airbnb";
import MemeGenerator from "./components/projects/meme-generator/MemeGenerator";
import ReactFacts from "./components/projects/react-facts/ReactFacts";
import Tenzies from "./components/projects/tenzies/Tenzies";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="resume" element={<Resume />}></Route>
            <Route path="airbnb" element={<Airbnb />}></Route>
            <Route path="meme-generator" element={<MemeGenerator />}></Route>
            <Route path="react-facts" element={<ReactFacts />}></Route>
            <Route path="tenzies" element={<Tenzies />}></Route>
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Andre Havasi ©{new Date().getFullYear()} Created by using Ant Design
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
