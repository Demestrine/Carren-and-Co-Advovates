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
            <span className="section-label">Team</span>
            <h2 className="team-title">Hi, I’m Advocate Carren Joseph</h2>
            <p className="team-subtitle">Advocate of the High Court of Kenya</p>
            <div className="team-description">
              <p>
                I lead this practice with a firm commitment to integrity, excellence, and client-centered legal service. Over the years, I have gained extensive experience across diverse areas of law, enabling me to provide strategic, practical, and results-oriented guidance to individuals, families, businesses, and institutions across Kenya.

My approach blends deep legal knowledge with a clear understanding of the realities clients face in the Kenyan legal environment. I focus on offering solutions that are not only legally sound but also aligned with your goals and long-term interests.

Every client I work with receives personalized attention, strong legal protection, and dedicated support to help them achieve their personal, professional, and commercial objectives. My mission is simple: to empower you with the right legal advice, represent your interests with excellence, and stand with you every step of the way.
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