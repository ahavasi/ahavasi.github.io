import React from "react";
import resumeData from "../../resumeData";
import "./Resume.css";

export default function Resume() {
  const experience = resumeData.experience;
  const experienceElements = experience.map((ex) => (
    <div key={ex.id}>
      <h4>{ex.title}</h4>
      <p>{ex.desc}</p>
    </div>
  ));
  return (
    <div style={{ margin: "1rem" }}>
      <div className="resume--body">
        <div>
          <div>
            <h2>Experience</h2>
            {experienceElements}
          </div>
          <div>
            <h2>Education</h2>
            <p>{resumeData.education}</p>
          </div>
          <div>
            <h2>Skills</h2>
            <p>{resumeData.skills}</p>
          </div>
          <div>
            <h2>Familiarities</h2>
            <p>{resumeData.familiarities}</p>
          </div>
          <div>
            <h2>Current Learning</h2>
            <p>{resumeData.learning}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
