import React from "react";
import profilePicture from "../../assets/profile_picture.png";
import "./Home.css";
import resumeData from "../../resumeData";

export default function Home() {
  return (
    <div>
      <h1 className="name">Andre Havasi</h1>
      <div className="home">
        <div className="profile--content">
          <img
            className="profile--picture"
            src={profilePicture}
            alt="A close up of Andre Havasi smiling in a garage looking past the camera."
          />
        </div>
        <div className="profile">
          <h2>Profile</h2>
          <p>{resumeData.profile}</p>
        </div>
      </div>
    </div>
  );
}
