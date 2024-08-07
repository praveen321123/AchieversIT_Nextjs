import React from 'react';
import Image from 'next/image';
import styles from './CorporateTraining.module.css';

const CorporateTraining = () => {
  return (
    <div className={`container my-5 ${styles.trainingsContainer}`}>
      <h2 className="text-center mb-4 fw-bold">CORPORATE TRAINING</h2>
      <h5 className="text-center my-4 px-4 fw-bold">
        Looking for a live instructor Led Online training platform to train your employees and connect them with 
        best professional trainers, and enrich their careers?
      </h5>
      <div className={`row ${styles.containerRow}`}>
        <div className="col-md-6 col-12 mb-4 pe-5">
          <div>
            <h4>
              <span><i className={`far fa-envelope ${styles.icon} me-2`}></i></span>Proven Online Training Platform
            </h4><hr/>
            <p>
              AchieversIT has built up a robust Live Instructor-Led internet preparing stage that permits learners to get 
              prepared by the Expert coaches and through self-guided preparing programs. AchieversIT incorporates learning conditions combining 
              traditional learning the board with the social association and cooperative abilities to construct a branded and corporate learning
              arrangement that guides and expands commitment.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-12 mb-4">
          <div>
            <h4>
              <span><i class={`fa-solid fa-laptop-code ${styles.icon} me-2`}></i></span>Trending Courses
            </h4><hr/>
            <p>
              Our E-learning Management system (LMS) comprises of a few courses identified with the most recent progressions in Information Technology 
              and Software, for example, Business Intelligence and Analytics, DevOps, Cloud Integration, Cloud Computing, Internet of Things, 
              BigData and Analytics, Continuous Integration, Release Management and our highly qualified trainers created excellent course contents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTraining;
