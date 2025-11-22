import React from 'react';
import './Stories.css';

const Stories = () => {
  return (
    <section className="stories">
      <div className="container">
        <h2>Our Stories</h2>
        <div className="stories-content">
          <div className="story-main">
            <h3>I Provide My Advance Level of Legal Support</h3>
            <div className="features-grid">
              <div className="feature">
                <h4>Competitive Pricing</h4>
                <p>Now we must realize businesses' product requirements. Business development aims at the best way.</p>
              </div>
              <div className="feature">
                <h4>LOOK Winning</h4>
                <p>Lack of customer service will benefit future customers. In response, We can continue to improve our business outcomes.</p>
              </div>
              <div className="feature">
                <h4>Positive Results</h4>
                <p>Customer practices remain secure. Customers have access to the skills required to be further set out in terms of the Group's needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;