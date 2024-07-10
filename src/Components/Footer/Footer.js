// components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={`fixed-bottom ${styles.footer}`}>
      <div className="container d-flex justify-content-around py-2">
        <div className="d-flex align-items-center">
          <i className="bi bi-telephone-fill text-primary me-2"></i>
          <span>Call us on: +91 8151000080</span>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-envelope-fill text-warning me-2"></i>
          <span>Request A Call Back</span>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-whatsapp text-success me-2"></i>
          <span>Chat With Us!</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
