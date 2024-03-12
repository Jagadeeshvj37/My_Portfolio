import React from "react";
import { Element } from "react-scroll";
import portfolioSkill from "../../img/skill.png";
import LinearProgress from "@mui/material/LinearProgress"
import './Skill.css'

const Skill = () => {
  return (
  <Element id="skills" className="skillContainer">
    <div className="skill-img">
        <img src={portfolioSkill} alt="" />
    </div>
    <div className="skill-text">
        <h2>SKILLSET</h2>
        <div className="skill-skillset">
            <h5>HTML</h5>
            <div className="skill-slider skill-slider-1">
                <LinearProgress variant="determinate" value={80}/>
            </div>
        </div>
        <div className="skill-skillset">
            <h5>CSS</h5>
            <div className="skill-slider skill-slider-2">
                <LinearProgress variant="determinate" value={80}/>
            </div>
        </div>
        <div className="skill-skillset">
            <h5>JAVASCRIPT</h5>
            <div className="skill-slider skill-slider-3">
                <LinearProgress variant="determinate" value={70}/>
            </div>
        </div>
        <div className="skill-skillset">
            <h5>React</h5>
            <div className="skill-slider skill-slider-4">
                <LinearProgress variant="determinate" value={70}/>
            </div>
        </div>
        <div className="skill-skillset">
            <h5>Nodejs</h5>
            <div className="skill-slider skill-slider-5">
                <LinearProgress variant="determinate" value={60}/>
            </div>
        </div>
        <div className="skill-skillset">
            <h5>Mongodb</h5>
            <div className="skill-slider skill-slider-6">
                <LinearProgress variant="determinate" value={60}/>
            </div>
        </div>
        <div className="skill-skillset">
            <h5>JAVA</h5>
            <div className="skill-slider skill-slider-7">
                <LinearProgress variant="determinate" value={60}/>
            </div>
        </div>
        <div className="skill-skillset">
            <h5>MSSQL</h5>
            <div className="skill-slider skill-slider-8">
                <LinearProgress variant="determinate" value={70}/>
            </div>
        </div>
    </div>
  </Element>
  );
};

export default Skill;
