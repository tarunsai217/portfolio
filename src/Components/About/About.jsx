import * as React from "react";
import "./About.scss";
import myPic from "../../Assets/mypic.jpeg";
import resume from "../../Assets/resume.pdf";
export default function About() {
  return (
    <div id="home" className="about-container">
      <div className="about">
        <h1 className="intro-heading">Hi, I'm Tarun ! </h1>
        <p className="intro-description">
          I'm a passionate <span>Frontend Developer</span>. I love creating
          beautiful, responsive websites using modern techstacks like{" "}
          <span>ReactJs</span> and
          <span> AngularJs</span>.
        </p>
        <a href={resume} className="resume">
          Download my Resume
        </a>
      </div>
      <div className="image">
        <img src={myPic} alt="userimage" />
      </div>
    </div>
  );
}
