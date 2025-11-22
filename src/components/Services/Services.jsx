import React from 'react';
import './Services.css';

// CORRECT IMPORT PATHS:
import corporateIcon from '../../assets/icons/gold-shield.svg';
import transportIcon from '../../assets/icons/gold-award.svg';
import familyIcon from '../../assets/icons/gold-medal.svg';
import contractIcon from '../../assets/icons/gold-star.svg';
import realEstateIcon from '../../assets/icons/gold-shield.svg'; // Using shield again for real estate
import mediationIcon from '../../assets/icons/gold-clock.svg';

const Services = () => {
  const services = [
    { icon: corporateIcon, title: 'Corporate Law', description: 'Business formation, contracts, mergers and acquisitions' },
    { icon: transportIcon, title: 'Transportation Law', description: 'Logistics, shipping regulations, and compliance' },
    { icon: familyIcon, title: 'Family Law', description: 'Divorce, child custody, and family disputes' },
    { icon: contractIcon, title: 'Contract Law', description: 'Drafting, review, and enforcement of contracts' },
    { icon: realEstateIcon, title: 'Real Estate', description: 'Property transactions, zoning, and disputes' },
    { icon: mediationIcon, title: 'Mediation', description: 'Conflict resolution and dispute mediation' }
  ];

  return (
    <section className="services" id="legal-areas">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Legal practice areas</span>
          <h2 className="section-title">
            For nearly 7 years we help people to solve their legal problems in such areas as
          </h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} className="gold-icon" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <button className="dark-btn">All categories</button>
        </div>
      </div>
    </section>
  );
};

export default Services;