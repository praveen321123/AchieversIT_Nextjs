import React from 'react';
import styles from './courseCard.module.css';

const CourseCard = ({ title, description, reviews, rating, isBestSeller, bestSellerSVG, svgImage, cardTitle}) => {
  return (
    <div className={`card ${styles.card}`}>
      <div className={`card-head ${styles.cardHead} ${styles[cardTitle]}`}>
      <div className="container p-0">
        <div className='row align-items-center'>
          <div className={`col-md-6 col-6 ${styles.cardImage}`}>
          <img src={svgImage} alt={`${title} logo`} />
          </div>
          <div className={`col-md-6 col-6 ${styles.cardTitle}`}>
            <h5 className="card-title fw-bold text-uppercase fs-5">{title}</h5>
            {/* {isBestSeller && (
             <span><img src={bestSellerSVG} alt="Best Seller" className={styles.badge} /></span>
            )} */}
          </div>
        </div>
      </div>
      </div>
      <div className={`card-body pb-0 ${styles.cardBody}`}>
        <p className={`card-text ${styles.cardText}`}>{description}</p>
      </div><hr />
      <div className={`cardFooter pt-0 ${styles.cardFooter}`}>
        <div>
          <span className="fst-italic">Reviews</span>
          <div className="d-flex align-items-center">
            <span className="text-warning me-2">{[...Array(5)].map((_, i) => '★')}</span>
            <span>{rating} ({reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
