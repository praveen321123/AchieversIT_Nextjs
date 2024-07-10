// components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={`fixed-bottom ${styles.footer}`}>
      <div className="container d-flex justify-content-around py-2">
        <div className="d-flex align-items-center">
          <i class={`${styles['text-lightblue']} fas fa-phone-volume`}></i>
          <span>Call us on: +91 8151000080</span>
        </div>
        <div className="d-flex align-items-center">
          <i class={`${styles['text-orangered']} far fa-envelope`}></i>
          <span>Request A Call Back</span>
        </div>
        <div className="d-flex align-items-center">
          <i class={`${styles['text-light-green']} fab fa-whatsapp`}></i>
          <span>Chat With Us!</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
