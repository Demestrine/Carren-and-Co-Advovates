import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section" id="contacts">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">
              Contact us to get the best legal help
            </h2>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>(+29) 556-0764</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>contact@bylaw.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Office</h4>
                  <p>123 Legal Avenue, Suite 400<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <button className="social-icon">f</button>
              <button className="social-icon">t</button>
              <button className="social-icon">in</button>
            </div>
          </div>
          
          <div className="contact-form-container fade-in">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <select 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="family">Family Law</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="mediation">Mediation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Describe your legal problem"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;