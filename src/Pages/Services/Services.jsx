// pages/Services.jsx
import React from 'react';
import './services.css';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <main>
        <h1>Services</h1>
        <div className="services-container">
          {[
            { title: 'EIN', price: '$59' },
            { title: 'LLC', price: '$259' },
            { title: 'C-Corp Formation', price: '$259' },
            { title: 'ITIN', price: '$249' },
            { title: 'Reseller Permit', price: '$259' },
            { title: 'Sales Tax Compliance', price: '$199' },
            { title: 'Website Building', price: '$350' },
          ].map((service, index) => (
            <div className="service reveal" key={index}>
              <h2>{service.title}</h2>
              <p>{service.price}</p>
              <Link to="/contact">
                <button>Contact Us</button>
              </Link>
            </div>
          ))}
        </div>
      </main>

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

export default Services;
