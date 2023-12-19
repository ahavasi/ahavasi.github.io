import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  FileOutlined,
  HomeOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="resume">Resume</Link>,
    key: "resume",
    icon: <FileOutlined />,
  },
  {
    label: <Link to="projects">Projects</Link>,
    key: "projects",
    icon: <ExperimentOutlined />,
    children: [
      {
        type: "group",
        label: <Link to="projects/airbnb">Airbnb Clone</Link>,
      },
      {
        type: "group",
        label: <Link to="projects/meme-generator">Meme Generator</Link>,
      },
      {
        type: "group",
        label: <Link to="projects/react-facts">React Facts</Link>,
      },
      {
        type: "group",
        label: <Link to="projects/tenzies">Tenzies</Link>,
      },
    ],
  },
];

export default function Navbar() {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="nav--container">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        items={items}
      />
    </div>
  );
}
