import React from 'react';
import './Services.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import webdesign from '../images/webdesign.png'; 
import printing from '../images/3Dprinting.png';
import it from '../images/it.png';
import dogwalking from '../images/dogwalker.png';
import petsitting from '../images/petsitting.png';
import dropin from '../images/dropin.png';

function Services() {
  const services = [
    {
      title: '3D Printing',
      description: '3D printing services for prototypes, models, and unique designs.',
      imageUrl: printing,
      pricing: '$30/production hour + $50 for modeling. ',
    },
    {
      title: 'Home & Office IT Services',
      description: 'Setup and support for computers, networks, and devices.',
      imageUrl: it,
      pricing: '$100/hour',
    },
    {
      title: 'Web Development',
      description: 'Build modern, responsive websites tailored to your business needs.',
      imageUrl: webdesign,
      pricing: '$200 for a one page, responsive webpage. $500 for multipage website.',
    },
    {
      title: 'Pet Drop ins',
      description: 'Quick visits to check on, feed, and provide companionship for your pets.',
      imageUrl: dropin,
      pricing: '$35 for half an hour OR $50/hour.',
    },
    {
      title: 'Dog Walking',
      description: 'Professional dog walking services to keep your pup healthy and happy.',
      imageUrl: dogwalking,
      pricing: '$50/hour',
    },
    {
      title: 'Pet Sitting',
      description: 'In-home pet sitting services when you are away, providing comfort and care.',
      imageUrl: petsitting,
      pricing: '$75/night. Additional $15 for each pet.',
    },
  ];

  return (
    <div className="services-container">
      {/* Header */}
      <header className="services-header">
        <h1>Services</h1>
        <p></p>
      </header>

      <section className="services-section">

        
        <div className="service-cards">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>
      
    </div>
  );
}

export default Services;