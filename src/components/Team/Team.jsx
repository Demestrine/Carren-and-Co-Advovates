import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { 
      name: 'Bessie Alexander', 
      role: 'Corporate Lawyer', 
      image: '/src/assets/c4.jpg' 
    },
    { 
      name: 'Kathryn Murphy', 
      role: 'Family Lawyer', 
      image: '/src/assets/c6.jpg' 
    }
  ];

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="team-header">
          <span className="section-label">Expert team</span>
          <h2 className="section-title">
            Elaborately selected team of professionals specialising in different areas of law
          </h2>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card fade-in">
              <div className="team-portrait">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="team-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="portrait-placeholder">{member.name.charAt(0)}</div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
        
        <div className="team-carousel">
          <button className="carousel-arrow">←</button>
          <button className="carousel-arrow">→</button>
        </div>
      </div>
    </section>
  );
};

export default Team;