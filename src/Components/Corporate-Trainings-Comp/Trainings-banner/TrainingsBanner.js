import React from 'react';
import styles from './TrainingsBanner.module.css';

const TrainingsBanner = () => {
  return (
    <div className="container-fluid mb-5">
      <div className={`row ${styles.trainingContainer} p-0`}>
        <div className="col-lg-6 col-md-12 p-0">
          <img src="/images/TrainingBanner.jpg" alt="Training" className={`${styles.bannerImg} img-fluid`} />
        </div>
        <div className={`${styles.innerContainerTwo} col-lg-6 col-md-12 my-5 px-5`}>
          <h3 className={`text-uppercase ${styles.heading} mb-md-4 mb-lg-5 `}>Training Tailored to Your Needs</h3>
          <div className="d-flex align-items-center mb-4">
            <img src="/icons/chalkboard-teacher.svg" alt="Icon" className={`${styles.icon} ${styles.filterOrange}`}/>
            <p className="my-4 fw-bold fs-5">Our training practice are perfectly blended with options for effective eLearning or online classroom</p>
          </div>
          <div className="d-flex align-items-center mb-4">
            <img src="/icons/polls.svg" alt="Icon" className={`${styles.icon} ${styles.filterBlue}`}/>
            <p className="my-4 fw-bold fs-5">We are the best and most unique Foundation, Intermediate, and Expert level curriculum</p>
          </div>
          <div className="d-flex align-items-center">
            <img src="/icons/desktop.svg" alt="Icon" className={`${styles.icon} ${styles.filterLightGreen}`}/>
            <p className="my-4 fw-bold fs-5">Easy accessibility of training online or offline - anytime, anywhere, on any of your devices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingsBanner;
