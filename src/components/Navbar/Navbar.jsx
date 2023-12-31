import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Menu, Switch } from "antd";
import {
  FileOutlined,
  HomeOutlined,
  ExperimentOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import resumeData from "../../resumeData";

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
  {
    label: (
      <a href={resumeData.social.linkedin} target="_blank">
        <LinkedinOutlined /> - LinkedIn
      </a>
    ),
    key: "linkedin",
  },
  {
    label: (
      <a href={resumeData.social.github} target="_blank">
        <GithubOutlined /> - GitHub
      </a>
    ),
    key: "github",
  },
];

export default function Navbar(props) {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div
      className={`nav--container ${
        props.darkMode ? "dark dark-shadow" : "light light-shadow"
      }`}
    >
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme={props.darkMode ? "dark" : "light"}
        items={items}
        style={{ width: "93%" }}
      />
      <div className={`darkmode-wrapper ${!props.darkMode && "light-border"}`}>
        <p className="mode">{props.darkMode ? "Dark" : "Light"}</p>
        <Switch defaultChecked onChange={props.onChangeDarkMode} />
      </div>
    </div>
  );
}
