import React from "react";
import "./Projects.css";

function Projects() {

  const projectData = [
    {
      title: "CARRERFORGE",
      description:
        "A full-stack job recruitment platform connecting recruiters and job seekers. Features include job posting, application tracking, and role-based dashboards.",
      tech: ["React.js", "Node.js", "Chart.js", "Express", "MongoDB", "Supabase"],
      github: "https://github.com/tharunprasath45/ISDA",
      live: "https://classy-maamoul-70bfcb.netlify.app"
    },
    {
      title: "BYWAY",
      description:
        "A full-stack web application designed to simplify online course discovery and registration for learners on a single platform. The system provides an intuitive user interface for browsing courses, viewing detailed descriptions, and managing enrollments.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/tharunprasath45/Online_react_courses",
      live: "http://localhost:5174/"
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1 className="title">
        MY <span>PROJECTS</span>
      </h1>

      <div className="project-container">

        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            {/* TECH STACK */}
            <div className="tech">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            {/* LINKS */}
            <div className="links">
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.live} target="_blank">Live</a>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;