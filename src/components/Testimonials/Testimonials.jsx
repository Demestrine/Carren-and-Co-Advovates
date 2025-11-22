import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials" id="reviews">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-header">
            <h2 className="testimonials-title">
              What people say about our company?
            </h2>
          </div>
          
          <div className="testimonial-card fade-in">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">
              "BYLAW provided exceptional legal guidance during a complex corporate merger. 
              Their expertise and attention to detail were invaluable throughout the process."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">👤</div>
              <div className="author-info">
                <h4 className="author-name">Penelope Williamson</h4>
                <p className="author-role">CEO, TechCorp International</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;