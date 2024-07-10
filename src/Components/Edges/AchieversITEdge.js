import React from 'react';
import styles from './AchieversEdge.module.css';

const AchieversEdge = ({ edges }) => {
  return (
    <div className="container my-5">
      <h2 className="mb-5 fw-bold">Achievers IT Edge</h2>
      <div className="row">
        {edges.map((edge) => (
          <div key={edge.id} className="col-md-3">
            <div className={styles['card-hover']}>
              <img src={edge.icon} alt={`Icon ${edge.id}`} className={`${styles.icon} ${styles[edge.name]}`} />
              <h6>{edge.title}</h6>
              <p>{edge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchieversEdge;

