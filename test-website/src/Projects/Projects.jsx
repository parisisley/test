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
      title: "Social Media Dashboard",
      category: "UI/UX Design",
      description: "A responsive dashboard design for a social media analytics platform. Includes data visualization, user management, and content scheduling features.",
      technologies: ["React", "Chart.js", "CSS Grid", "Figma", "Redux"],
      image: "placeholder", // Replace with your actual image path
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/yourusername/project-repo"
    },
    {
      id: 3,
      title: "Task Management App",
      category: "Mobile Development",
      description: "A task management application with drag-and-drop functionality, team collaboration, and progress tracking. Built with React Native and Firebase.",
      technologies: ["React Native", "Firebase", "Redux", "Styled Components"],
      image: "placeholder", // Replace with your actual image path
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/yourusername/project-repo"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Web Development",
      description: "A responsive portfolio website for showcasing projects and skills. Built with React and modern CSS techniques.",
      technologies: ["React", "CSS3", "Responsive Design", "GitHub Pages"],
      image: "placeholder", // Replace with your actual image path
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/yourusername/project-repo"
    },
    {
      id: 5,
      title: "Weather Forecast App",
      category: "Web Development",
      description: "A weather forecast application that pulls data from an API and displays current and forecasted weather conditions based on user location or search.",
      technologies: ["JavaScript", "Weather API", "HTML5", "CSS3"],
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