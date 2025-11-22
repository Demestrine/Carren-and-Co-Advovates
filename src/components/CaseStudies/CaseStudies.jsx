import React from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
  const cases = [
    {
      number: "01",
      title: "The right of minority shareholders in a takeover"
    },
    {
      number: "02", 
      title: "Rising solo to the rescue of her beloved nonperth"
    }
  ];

  return (
    <section className="case-studies">
      <div className="container">
        <h2>My Recent Case Studies</h2>
        <div className="cases-grid">
          {cases.map((caseItem, index) => (
            <div key={index} className="case-card">
              <span className="case-number">{caseItem.number}</span>
              <h3>{caseItem.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;