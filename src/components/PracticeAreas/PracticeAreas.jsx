import React from 'react';
import './PracticeAreas.css';

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: "We Are Here To Fight Against Any Violence",
      description: ""
    },
    {
      title: "Competition and Antitrust",
      description: "We know that people want to talk about their experiences with others. They are always doing their best to help you build relationships with others."
    },
    {
      title: "Real Estate & Mortgage Law",
      description: "It is important to think about how it comes to digital solutions. It is important to think about how it comes to marketing and marketing products."
    },
    {
      title: "International & Immigration Law",
      description: "Our traditional approach to social support is to create a new culture and develop an environment for all employees. We are committed to creating a new culture and develop an environment for all employees."
    },
    {
      title: "Family Croupi & Marriage Law",
      description: "We know that people want to talk about their experiences with others. They are always doing their best to help you build relationships with others."
    },
    {
      title: "Universal Health Care Law",
      description: "This research builds a broader history than those who have been working with individuals. These include a range of health challenges (mental or other)."
    },
    {
      title: "Employment & Labor Law",
      description: "Our individual supports two aspects of health: employment, labor and workplace. We are committed to creating a new culture and develop an environment for all employees."
    }
  ];

  return (
    <section className="practice-areas">
      <div className="container">
        <div className="areas-grid">
          {practiceAreas.map((area, index) => (
            <div key={index} className="area-card">
              <h3>{area.title}</h3>
              {area.description && <p>{area.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;