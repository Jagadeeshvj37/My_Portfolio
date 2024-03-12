import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";
// import {IconButton} from "@mui/material"
import { Instagram, LinkedIn, Facebook,GitHub } from "@mui/icons-material";

const Contact = () => {
  return (
    <Element name="contact" className="contact-container">
      <h1>Contact</h1>
      <div className="contact-details">
        <h2>
          Email: <span>jagadeeshvj37@gmail.com</span>
        </h2>
        <h2>
          Github: <span>Jagadeeshvj37</span>
        </h2>
        <a href="https://www.instagram.com/jaghu_bhai?igsh=NXc1NnQ3bmRqM2Rr" target="_blank"
         className="contact-icons contact-instagram">
          <Instagram />
        </a>
        <a href="https://www.linkedin.com/in/jagadeeshvj37?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
        className="contact-icons contact-linkedin">
          <LinkedIn />
        </a>
        <a href="https://github.com/Jagadeeshvj37" target="_blank"
        className="contact-icons contact-github">
          <GitHub />
        </a>
      </div>
    </Element>
  );
};

export default Contact;
