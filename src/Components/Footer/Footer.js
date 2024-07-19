import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={`fixed-bottom ${styles.footer}`}>
      <div className="container py-2">
        <div className={`row ${styles.footerRow} justify-content-center`}>
          <div className="col-md-4 d-flex align-items-center justify-content-center item-1">
            <i className={`${styles['text-lightblue']} fas fa-phone-volume`}></i>
            <span>Call us on: +91 8151000080</span>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center item-1">
            <i className={`${styles['text-orangered']} far fa-envelope`}></i>
            <span>Request A Call Back</span>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center item-1">
            <i className={`${styles['text-light-green']} fab fa-whatsapp`}></i>
            <span>Chat With Us!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
