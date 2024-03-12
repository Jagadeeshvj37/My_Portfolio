import React from 'react'
import {Link} from "react-scroll"
import './Home_content.css'
import myresume from '../../img/Jagadeesh Professional CV Resume (2).ae4e0da2c9e0a569ddcb (1).pdf'

const Home_content = () => {
  return (
    <div className='home_content'>
        <div className='home_content-container'>
            <h1>Mr. Jagadeesh</h1>
            <p>I am full stack web developer </p>
            <a href={myresume} download>
                <button  className='home_content-downloadbtn'>Download CV</button>
            </a>
            <Link to='projects' smooth={true} duration={500}>
                <button className='home_content-workbtn'>My works</button>
            </Link>
        </div>
    </div>
  )
}

export default Home_content