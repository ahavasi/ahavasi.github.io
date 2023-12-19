import React from "react";
import trollface from "./meme-assets/trollface.png";
import "./MemeHeader.css";

export default function MemeHeader() {
  return (
    <header className="header">
      <img className="header--image" src={trollface} alt="troll face" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
