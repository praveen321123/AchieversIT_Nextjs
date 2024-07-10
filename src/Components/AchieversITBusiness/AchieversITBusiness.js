import React from 'react';
import styles from './Business.module.css';

const AchieversITBusiness = () => {
  return (
    <div className={styles.banner}>
      <div>
      <h6><span className='fw-bold my-3'>Achievers IT !</span>&nbsp; &nbsp;for business</h6>
      <h2 className='fw-bold my-3'>No more dull edges in your company.Make your employees into masters....</h2>
      <h5 className='fw-bold my-3'>Nurture talent with instructor-led courses on trending technologies</h5>
      <button className={`fw-bold ${styles.button}`}>BUSINESS CONTACT</button>
      </div>
    </div>
  );
};

export default AchieversITBusiness;
