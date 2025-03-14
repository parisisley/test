import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <span className="contact-text">
            <a href="tel:+19542709492">Phone: 954-270-9492</a>
          </span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <span className="contact-text">
            <a href="mailto:parisisley@gmail.com">Email: parisisley@gmail.com</a>
          </span>
        </div>
        <div className="contact-item">
          <FaLinkedin className="icon" />
          <span className="contact-text">
            <a href="https://www.linkedin.com/in/paris-isley/" target="_blank" rel="noopener noreferrer">
              LinkedIn: Paris Isley
            </a>
          </span>
        </div>
        <div className="contact-item">
          <FaInstagram className="icon" />
          <span className="contact-text">
            <a href="https://www.instagram.com/paris.isley" target="_blank" rel="noopener noreferrer">
              Instagram: @paris.isley
            </a>
          </span>
        </div>
        <div className="contact-item">
          <FaGithub className="icon" />
          <span className="contact-text">
            <a href="https://github.com/parisisley" target="_blank" rel="noopener noreferrer">
              GitHub: @parisisley
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
