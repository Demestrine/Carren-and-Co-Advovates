import React from 'react';
import './AttorneyProfile.css';

const AttorneyProfile = () => {
  return (
    <section className="attorney-profile">
      <div className="container">
        <div className="profile-content">
          <div className="profile-image">
            {/* Add attorney image here */}
            <div className="image-placeholder">Attorney Photo</div>
          </div>
          <div className="profile-info">
            <h2>I'm Advocate Rubina Based in New York</h2>
            <p className="title">Attorney General and General Lovers</p>
            <p className="description">
              We are confident that I should provide advice from memberships to help them achieve their goals. 
              We are confident that I should provide advice from memberships to help them achieve their goals. 
              We are confident that I should provide advice from memberships to help them achieve their goals.
            </p>
            <button className="btn">Contact Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneyProfile;