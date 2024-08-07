import React from 'react';
import styles from './Banner.module.css';

const Banner = ({ title, subtitle, backgroundImage, backgroundPosition = 'top' }) => {
  return (
    <div 
      className={styles.banner} 
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition}}
    >
      <div className={`text-white ${styles.content}`}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
