import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaInstagram, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Let's connect and discuss your project or opportunity</p>
      </div>
      
      <div className="contact-info">
        <div className="contact-item">
          <div className="icon-container">
            <FaPhoneAlt className="icon" />
          </div>
          <div className="contact-text">
            <a href="tel:+19542709492">954-270-9492</a>
            <span>Available Mon-Fri, 9AM-6PM</span>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="icon-container">
            <FaEnvelope className="icon" />
          </div>
          <div className="contact-text">
            <a href="mailto:parisisley@gmail.com">parisisley@gmail.com</a>
            <span>Email me anytime</span>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="icon-container">
            <FaMapMarkerAlt className="icon" />
          </div>
          <div className="contact-text">
            <a href="#">South Florida</a>
            <span>Dade | Broward | West Palm</span>
          </div>
        </div>
      </div>
      
      <div className="social-links">
        <a href="https://www.linkedin.com/in/paris-isley/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin />
        </a>
        <a href="https://github.com/parisisley" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/paris.isley" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;