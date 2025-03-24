import React, { useState } from "react";
import "./Projects.css";
import timetable from '../images/timetablepic.png';

function Projects() {
  // Example project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Time Table Project",
      category: "Web Development",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Github", "HTML", "CSS"],
      imageURL: timetable, // Replace with your actual image path
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/parisisley/timetable.git"
    },
    {
      id: 2,
      title: "Cat Database",
      category: "UI/UX Design",
      description: "This app is about to creating a data dashboard that provides an at-a-glance summary of information gathered from a public API. This one is about cats.",
      technologies: ["React", "Github", "API", "HTML", "CSS"],
      image: "/assets/images/cat-database.png",      
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/parisisley/cat-database.git"
    },
    {
      id: 3,
      title: "Aurora Comics Website",
      category: "Web Development",
      description: "Aurora comics is an online bookstore with infinite titles available.",
      technologies: ["React.js", "HTML", "CSS", "JavaScript"],
      image: "placeholder", // Replace with your actual image path
      demoLink: "https://aurora-comics.com/",
      codeLink: "https://aurora-comics.com/"
    },
    {
      id: 4,
      title: "Screenshot Webpage",
      category: "Web Development",
      description: "This app uses the ApiFlash API to take screenshots of a given website with a variety of parameters.",
      technologies: ["React", "CSS3", "Responsive Design", "GitHub Pages"],
      image: "placeholder", // Replace with your actual image path
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/parisisley/screenshotmaker.git"
    },
    {
      id: 5,
      title: "Magnetometer Shark: An Interactive Exhibit",
      category: "Web Development",
      description: "Exhibit prop that uses magnometer to trigger arduino when it encounters a magnet. Causing plush shark to light LED eyeballs, vibrate, and make noise to indicate that the target was found.",
      technologies: ["C++", "Arduino", "Soldering", "ELEGOO"],
      image: "placeholder", // Replace with your actual image path
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/yourusername/project-repo"
    },
    {
      id: 6,
      title: "Ball Count Releaser: An Interactive Exhibit",
      category: "Electrical Engineering",
      description: "Exciting museum exhibit that uses suction to shoot balls through acrylic tubing, triggering a sensor that counts 150 balls in a cage, then releases them at once.",
      technologies: ["Arduino", "C++", "Soldering", "ELEGOO"],
      image: "placeholder", // Replace with your actual image path
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/yourusername/project-repo"
    }
  ];

  // Filter state
  const [filter, setFilter] = useState("All");
  
  // Get unique categories
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  // Filtered projects
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-container">
      {/* Header */}
      <header className="projects-header">
        <h1>My Projects</h1>
        <p>Explore some of my recent work and ongoing projects</p>
      </header>

      {/* Filter Buttons */}
      <div className="filter-container">
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-button ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image-container">
              <div className="project-image placeholder"></div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <span className="project-category">{project.category}</span>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <section className="projects-cta">
        <h2>Interested in working together?</h2>
        <p>I'm always open to discussing new projects and opportunities.</p>
        <a href="/contact" className="contact-button">Get In Touch</a>
      </section>
    </div>
  );
}

export default Projects;