import React from 'react';
import styles from './ReviewCard.module.css';

const ReviewCard = ({ name, course, review, stars }) => {
  return (
    <div className={`card ${styles.reviewCard}`}>
      <div className={`card-head ${styles.cardHead}`}>
        <div className="d-flex justify-content-between align-items-center">
          <div className={styles.initialCircle}>{name[0]}</div>
          <div className={styles.userName}>{name}</div>
        </div>
      </div>
      <div className={`card-body ${styles.cardBody}`}>
        <h5 className="card-title">{course}</h5>
        <div className={styles.stars}>
          {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
        </div>
        <p className="card-text">{review}</p>
        <a href="#" className={styles.readMore}>Read More</a>
      </div>
    </div>
  );
};

export default ReviewCard;
