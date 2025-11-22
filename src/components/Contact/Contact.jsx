import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Ready to discuss your legal needs? Contact us for a free consultation.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>📍 Address</h4>
                <p>123 Legal Street<br />New York, NY 10001</p>
              </div>
              
              <div className="contact-item">
                <h4>📞 Phone</h4>
                <p>(555) 123-4567</p>
              </div>
              
              <div className="contact-item">
                <h4>✉️ Email</h4>
                <p>info@carrenadvocates.com</p>
              </div>
              
              <div className="contact-item">
                <h4>🕒 Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <select name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select Practice Area</option>
                  <option value="competition">Competition Law</option>
                  <option value="real-estate">Real Estate Law</option>
                  <option value="immigration">Immigration Law</option>
                  <option value="family">Family Law</option>
                  <option value="employment">Employment Law</option>
                  <option value="healthcare">Healthcare Law</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;