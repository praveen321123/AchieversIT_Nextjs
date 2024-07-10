import React from 'react';
import styles from './ContactUsBanner.module.css';

const ContactUsBanner = () => {
  return (
    <div className={styles.banner}>
      <h5>Enroll, Learn, Grow, Repeat! Get ready to achieve your learning goals with Achievers IT</h5>
      <button className={styles.button}>CONTACT US</button>
    </div>
  );
};

export default ContactUsBanner;
