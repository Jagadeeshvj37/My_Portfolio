import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

function Navbar() {
  return (
    <div className='header'>
        <div className="header-left">
            <h1>Develp<span>er</span></h1>
            
        </div>
        <div className="header-right">
            <Link to="home" smooth={true} duration={500}>
                <h4>About</h4>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
                <h4>Skills</h4>
            </Link>
            <Link to="project" smooth={true} duration={500}>
                <h4>Projects</h4>
            </Link>
            <Link to="exp" smooth={true} duration={500}>
                <h4>Experience</h4>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
                <h4>Contact</h4>
            </Link>
            {/* <h4 className='header-right-button'>Join with me</h4> */}
            
        </div>
    </div>
  )
}

export default Navbar