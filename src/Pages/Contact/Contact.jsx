import React, { useState } from 'react';
import './contact.css';
import { Link } from 'react-router-dom'; // use 'react-router-dom' instead of 'react-router'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim()) {
      alert("Name and Email are required!");
      return;
    }

    const encodedMessage = encodeURIComponent(
      `*New Inquiry From Website*\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message || 'No message provided.'}`
    );

    const whatsappUrl = `https://wa.me/923107018321?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <section className="contact-info">
        <div className="contact-info-container">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email Us</h4>
              <p>blinksconsaltants@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fab fa-whatsapp"></i>
            <div>
              <h4>Call/WhatsApp</h4>
              <p>+1 (201) 277-1905</p>
            </div>
          </div>
        </div>
      </section>

      <div className="form-container">
        <h2>Contact Us on WhatsApp</h2>
        <div id="whatsappForm">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (optional)</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
          </div>

          <button type="button" className="btn" onClick={handleSubmit}>
            Send Message
          </button>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>Blinks Consultant</h3>
            <p>Your trusted partner for LLC registration, tax guidance, and smart marketing in the USA.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/blog">Blogs</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: blinksconsaltants@gmail.com</p>
            <p>Phone: +1 (201) 277-1905</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Blinks Consultant. All rights reserved. <br />
            <a href="http://www.kaleemify.com/" style={{ color: 'white' }}>Build by Kaleemify Company</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
