import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const [counters, setCounters] = useState({ years: 0, won: 0, requests: 0, consultations: 0 });
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const steps = 60;
          const increment = (target, current) => (target - current) / steps;
          
          const animate = (targets) => {
            let current = { ...counters };
            const timer = setInterval(() => {
              let completed = true;
              Object.keys(targets).forEach(key => {
                current[key] += increment(targets[key], current[key]);
                if (current[key] < targets[key]) completed = false;
                else current[key] = targets[key];
              });
              
              setCounters({ ...current });
              
              if (completed) clearInterval(timer);
            }, duration / steps);
          };

          animate({ years: 7, won: 96, requests: 1295, consultations: 1287 });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="main">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              LEGAL SOLUTION.
            </h1>
            <p className="hero-description">
              We provide exceptional legal representation 
              tailored to your unique needs. Guidance 
              through complex legal challenges.
            </p>
          </div>
        </div>
        
        {/* STATS MOVED TO BOTTOM OF HERO SECTION */}
        <div className="stats-card-bottom" ref={statsRef}>
          <div className="stat-item">
            <span className="stat-number">{Math.round(counters.years)}+</span>
            <span className="stat-label">Years of practice</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{Math.round(counters.won)}%</span>
            <span className="stat-label">Cases won</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{Math.round(counters.requests)}+</span>
            <span className="stat-label">Requests</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{Math.round(counters.consultations)}+</span>
            <span className="stat-label">Consultations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;