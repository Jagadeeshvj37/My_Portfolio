import React from "react";
import {Element} from 'react-scroll'
import './Project.css'
import ProjectList from "./ProjectList";
const Project = () => {
  const myProjects = [
    {
      img:"https://screenshots.codesandbox.io/p912n/5.png",
      title:"todo-list",
      desc:"Used to do set a task and perform, Once the work is over we can able to delete.",
      link:"www.google.com",
    },
    {
      img:"https://cdn.dribbble.com/userupload/4619241/file/original-1225bed78ab2d20798e203f9fc8e4687.webp?resize=752x",
      title:"E-Commerce",
      desc:"All the products will be displayed and we can able to add to cart and also we can able to view.",
      link:"www.google.com",
    },
  ]
  return (
    <Element id="project" className="project-container">
        <h1>Projects</h1>
        <p>These are all my projects</p>
        <div className="project-list">
            {myProjects.map((project,index)=>{
              return(
                <ProjectList
                  key={index}
                  img={project.img}
                  title={project.title}
                  desc={project.desc}
                  link={project.link}
                />
              )
            })}
        </div>

    </Element>
  )
};

export default Project;
