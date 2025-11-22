import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="team-content">
          <div className="team-image">
            <img 
              src="/src/assets/c4.jpg" 
              alt="Our Team"
              className="team-main-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="image-placeholder">Team</div>
          </div>
          
          <div className="team-info">
            <span className="section-label">Our Team</span>
            <h2 className="team-title">I'm Advocate Rubina Based in New York</h2>
            <p className="team-subtitle">Attorney General and General Lovers</p>
            <div className="team-description">
              <p>
                We are confident that I should provide advice from memberships to help them achieve their goals. 
                We are confident that I should provide advice from memberships to help them achieve their goals. 
                We are confident that I should provide advice from memberships to help them achieve their goals.
              </p>
            </div>
            <button className="team-contact-btn">Contact Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;