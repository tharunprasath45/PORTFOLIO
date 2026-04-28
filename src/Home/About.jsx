import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="title">
        ABOUT <span>ME</span>
      </h1>

      <div className="about-container">
        {/* LEFT CARD */}
        <div className="about-card journey">
          <h2>My Journey</h2>
          <p style={{fontSize: "18px"}}>
            I am an Electronics and Communication Engineering student with a
            strong passion for full stack development. My interest in
            programming started with curiosity and gradually evolved into
            building real-world web applications.
          </p>

          <p style={{fontSize: "18px"}}>
            I enjoy transforming ideas into functional and user-friendly digital
            solutions. I continuously improve my skills through hands-on
            development and learning modern technologies.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-section">
          {/* SKILLS */}
          <div className="about-card">
            <h2>Technical Skills</h2>
            <div className="skills">
              <span>React.js</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>UI&UX</span>
              <span>MongoDB</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>MySQL</span>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="about-card">
            <h2>Education</h2>
            <h3>B.E. Electronics and Communication Engineering</h3>
            <p>Bannari Amman Institute of Technology (2023–2027)</p>
            <p>CGPA: 7.2</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;