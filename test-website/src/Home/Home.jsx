import React from "react";
import "./Home.css";
// Import your image and PDF - replace with your actual file paths
import profileImage from "../assets/profile-image.jpg"; 
import resumePDF from "../assets/resume.pdf";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Paris Isley</h1>
          <p className="tagline">Web Developer & Designer</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="profile-image-container">
            <img src={profileImage} alt="Paris Isley" className="profile-image" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I'm Paris, a passionate web developer with a focus on creating 
              intuitive and engaging user experiences. I love bringing ideas to life 
              through code and design, always staying up-to-date with the latest 
              technologies and best practices in the industry.
            </p>
            <p>
              When I'm not coding, you might find me exploring new design trends, 
              contributing to open source projects, or enjoying the outdoors.
            </p>
            <div className="resume-download">
              <a href={resumePDF} download className="download-button">
                Download Resume
              </a>
              <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="view-button">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>
{/* Skills Section */}
<section className="skills-section">
  <h2>My Skills</h2>
  <div className="skills-container">
    <div className="skill-category">
      <h3>Frontend</h3>
      <ul className="skill-list">
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML5/CSS3</li>
        <li>Responsive Design</li>
      </ul>
    </div>
    <div className="skill-category">
      <h3>Backend</h3>
      <ul className="skill-list">
        <li>Node.js</li>
        <li>Express</li>
        <li>RESTful APIs</li>
        <li>Database Management</li>
      </ul>
    </div>
    <div className="skill-category">
      <h3>Tools</h3>
      <ul className="skill-list">
        <li>Git & GitHub</li>
        <li>VS Code</li>
        <li>Figma</li>
        <li>npm/yarn</li>
      </ul>
    </div>
    
    {/* New skill categories */}
    <div className="skill-category">
      <h3>Design</h3>
      <ul className="skill-list">
        <li>UI/UX Design</li>
        <li>Wireframing</li>
        <li>Prototyping</li>
        <li>Design Systems</li>
      </ul>
    </div>
    <div className="skill-category">
      <h3>Databases</h3>
      <ul className="skill-list">
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div className="skill-category">
      <h3>DevOps</h3>
      <ul className="skill-list">
        <li>CI/CD</li>
        <li>Docker</li>
        <li>AWS</li>
        <li>Deployment</li>
      </ul>
    </div>
  </div>
</section>

      {/* Featured Projects Preview */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-previews">
          <div className="project-card">
            <div className="project-image placeholder"></div>
            <h3>Project One</h3>
            <p>Brief description of your first featured project and the technologies used.</p>
            <a href="/projects" className="project-link">See Details</a>
          </div>
          <div className="project-card">
            <div className="project-image placeholder"></div>
            <h3>Project Two</h3>
            <p>Brief description of your second featured project and your role in it.</p>
            <a href="/projects" className="project-link">See Details</a>
          </div>
        </div>
        <div className="view-all-projects">
          <a href="/projects" className="view-all-button">View All Projects</a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Interested in Working Together?</h2>
        <p>I'm always open to discussing new projects and opportunities.</p>
        <a href="/contact" className="contact-button">Get In Touch</a>
      </section>
    </div>
  );
}

export default Home;