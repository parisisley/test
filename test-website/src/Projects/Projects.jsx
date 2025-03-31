import React, { useState } from "react";
import "./Projects.css";
import timetable from '../images/timetablepic.png';
import catdatabaseimg from '../images/cat-databaseimg.png';

function Projects() {
  // Example project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Time Table Project",
      category: "Web Development",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Github", "HTML", "CSS"],
      gallery: [timetable, timetable, timetable], // Replace with your actual gallery images
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/parisisley/timetable.git"
    },
    {
      id: 2,
      title: "Cat Database",
      category: "UI/UX Design",
      description: "This app is about to creating a data dashboard that provides an at-a-glance summary of information gathered from a public API. This one is about cats.",
      technologies: ["React", "Github", "API", "HTML", "CSS"],
      gallery: [catdatabaseimg], // Replace with actual gallery images
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/parisisley/cat-database.git"
    },
    {
      id: 3,
      title: "Aurora Comics Website",
      category: "Web Development",
      description: "Aurora comics is an online bookstore with infinite titles available.",
      technologies: ["React.js", "HTML", "CSS", "JavaScript"],
      gallery: ["placeholder", "placeholder"], // Replace with your actual gallery images
      demoLink: "https://aurora-comics.com/",
      codeLink: "https://aurora-comics.com/"
    },
    {
      id: 4,
      title: "Screenshot App",
      category: "Web Development",
      description: "This app uses the ApiFlash API to take screenshots of a given website with a variety of parameters.",
      technologies: ["React", "CSS3", "Responsive Design", "GitHub Pages"],
      gallery: ["placeholder", "placeholder"], // Replace with your actual gallery images
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/parisisley/screenshotmaker.git"
    },
    {
      id: 5,
      title: "Magnetometer Shark: An Interactive Exhibit",
      category: "Web Development",
      description: "Exhibit prop that uses magnometer to trigger arduino when it encounters a magnet. Causing plush shark to light LED eyeballs, vibrate, and make noise to indicate that the target was found.",
      technologies: ["C++", "Arduino", "Soldering", "ELEGOO"],
      gallery: ["placeholder", "placeholder"], // Replace with your actual gallery images
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/yourusername/project-repo"
    },
    {
      id: 6,
      title: "Ball Count Releaser: An Interactive Exhibit",
      category: "Electrical Engineering",
      description: "Exciting museum exhibit that uses suction to shoot balls through acrylic tubing, triggering a sensor that counts 150 balls in a cage, then releases them at once.",
      technologies: ["Arduino", "C++", "Soldering", "ELEGOO"],
      gallery: ["placeholder", "placeholder"], // Replace with your actual gallery images
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/yourusername/project-repo"
    }
  ];

  // Filter state
  const [filter, setFilter] = useState("All");
  // Gallery modal state
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get unique categories
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  // Filtered projects
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Open gallery modal
  const openGallery = (project) => {
    setCurrentProject(project);
    setCurrentImageIndex(0);
    setGalleryOpen(true);
  };

  // Close gallery modal
  const closeGallery = () => {
    setGalleryOpen(false);
    setCurrentProject(null);
  };

  // Navigation for gallery
  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === currentProject.gallery.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? currentProject.gallery.length - 1 : prevIndex - 1
      );
    }
  };

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
            <div 
              className="project-preview"
              onClick={() => openGallery(project)}
            >
              <div className="preview-content">
                <span className="view-gallery-text">View Gallery</span>
                <span className="gallery-count">{project.gallery.length} images</span>
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
              <div className="project-links-bottom">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Modal */}
      {galleryOpen && currentProject && (
        <div className="gallery-modal">
          <div className="gallery-content">
            <button className="gallery-close" onClick={closeGallery}>×</button>
            <h2>{currentProject.title} Gallery</h2>
            
            <div className="gallery-image-container">
              {currentProject.gallery[currentImageIndex] === "placeholder" ? (
                <div className="gallery-placeholder">
                  <span>Image placeholder</span>
                </div>
              ) : (
                <img 
                  src={currentProject.gallery[currentImageIndex]} 
                  alt={`${currentProject.title} screenshot ${currentImageIndex + 1}`} 
                  className="gallery-image" 
                />
              )}
              
              <div className="gallery-navigation">
                <button className="gallery-nav-button" onClick={prevImage}>&#10094;</button>
                <span className="gallery-counter">
                  {currentImageIndex + 1} / {currentProject.gallery.length}
                </span>
                <button className="gallery-nav-button" onClick={nextImage}>&#10095;</button>
              </div>
            </div>
          </div>
        </div>
      )}

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