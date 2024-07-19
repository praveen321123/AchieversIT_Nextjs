import React from 'react';
import styles from './categoryCard.module.css';

const CategoryCard = ({ icon, title }) => {
  return (
    <div className={`card mb-0 ${styles.card}`}>
      <div className="card-body text-center">
        <img src={icon} alt={`${title} icon`} className={styles.icon} />
        <h5 className="card-title mt-3">{title}</h5>
      </div>
    </div>
  );
};

export default CategoryCard;
