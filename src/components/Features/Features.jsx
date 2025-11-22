import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Features.css';

// CORRECT IMPORT PATH:
import goldCheck from '../../assets/icons/gold-check.svg';

const Features = () => {
  const features = [
    {
      icon: goldCheck,
      title: 'Top Specialists',
      description: 'Expert lawyers with proven track records and decades of combined experience.'
    },
    {
      icon: goldCheck,
      title: 'Focus on Results',
      description: 'We prioritize achieving your desired outcomes with strategic legal approaches.'
    },
    {
      icon: goldCheck,
      title: 'Competitive Fees',
      description: 'Transparent pricing without compromising on quality or attention to detail.'
    },
    {
      icon: goldCheck,
      title: 'Rapid Response',
      description: 'Quick adaptation to evolving situations with agile legal strategies.'
    },
    {
      icon: goldCheck,
      title: 'Client Protection',
      description: 'Your interests are always our top priority in every legal matter.'
    },
    {
      icon: goldCheck,
      title: 'Proven Success',
      description: 'Track record of successful cases and satisfied clients across various domains.'
    }
  ];

  const [ref, isVisible] = useScrollAnimation(0.05);

  return (
    <section className="features" id="why-us">
      <div className="container">
        <div className="features-content">
          <div className="features-text">
            <h2 className="features-title">
              We are committed to administering justice not just winning cases
            </h2>
            <p className="features-subtitle">
              Our approach combines legal expertise with strategic thinking to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="features-scroll-container">
            <div 
              ref={ref}
              className={`features-scroll-track ${isVisible ? 'animate' : ''}`}
            >
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="feature-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="feature-icon-wrapper">
                    <img src={feature.icon} alt={feature.title} className="feature-gold-icon" />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;