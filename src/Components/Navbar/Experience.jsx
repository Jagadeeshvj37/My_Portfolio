import React from "react";
import { Element } from "react-scroll";
import "./Experience.css";
const Experience = () => {
  return (
    <Element id="exp" className="experience-container">
      <h1>Experience</h1>
      <div className="experience-overall">
        <div className="experience-client">
          <h2>2 Yrs</h2>
          <h3>Work Experience</h3>
        </div>
        <div className="experience-project">
          <h2>3+</h2>
          <h3>Projects</h3>
        </div>
        <div className="experience-teaching">
          <h2>2+</h2>
          <h3>Students</h3>
        </div>
      </div>
    </Element>
  );
};

export default Experience;
