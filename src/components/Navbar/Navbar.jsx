import {
  ExperimentOutlined,
  FileOutlined,
  GithubOutlined,
  HomeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import resumeData from "../../resumeData";
import "./Navbar.css";

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
        LinkedIn
      </a>
    ),
    key: "linkedin",
    icon: <LinkedinOutlined />,
  },
  {
    label: (
      <a href={resumeData.social.github} target="_blank">
        GitHub
      </a>
    ),
    key: "github",
    icon: <GithubOutlined />,
  },
];

export default function Navbar(props) {
  const [current, setCurrent] = useState("home");
  const [collapsed, setCollapsed] = useState(false);
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </Sider>
    </>
  );
}
