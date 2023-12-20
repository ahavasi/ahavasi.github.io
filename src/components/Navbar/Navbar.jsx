import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Menu, Switch } from "antd";
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
    label: "Projects",
    key: "projects",
    icon: <ExperimentOutlined />,
    children: [
      {
        type: "group",
        label: <Link to="airbnb">Airbnb Clone</Link>,
      },
      {
        type: "group",
        label: <Link to="meme-generator">Meme Generator</Link>,
      },
      {
        type: "group",
        label: <Link to="react-facts">React Facts</Link>,
      },
      {
        type: "group",
        label: <Link to="tenzies">Tenzies</Link>,
      },
    ],
  },
];

export default function Navbar(props) {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className={`nav--container ${props.darkMode ? "dark" : "light"}`}>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme={props.darkMode ? "dark" : "light"}
        items={items}
        style={{ width: "93%" }}
      />
      <div className="darkmode-wrapper">
        <p className="mode">{props.darkMode ? "Dark" : "Light"}</p>
        <Switch defaultChecked onChange={props.onChangeDarkMode} />
      </div>
    </div>
  );
}
