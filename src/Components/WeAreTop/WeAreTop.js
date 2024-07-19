import React from 'react';
import styles from './TopAIT.module.css';

const WeAreTop = () => {
  return (
    <div className={`container ${styles['inner-container']}`}>
      <h2 className="text-center">Why We are on TOP 1</h2>
      <p className="text-center">More people train with AchieversIT because of our commitment to quality, Placement Support, and Real-time Training.</p>
      <div className="row text-center">
        <div className={`col-md-3 ${styles.statCard}`}>
          <section className={`${styles.card_1} card card_3 rounded-0 border-0`}>
            <div className="card-body">
              <h3>135 +</h3>
              <p>TRENDING COURSES</p>
            </div>
          </section>
        </div>
        <div className={`col-md-3 ${styles.statCard}`}>
          <section className={`${styles.card_2} card card_3 rounded-0 border-0`}>
            <div className="card-body">
              <h3>60 +</h3>
              <p>IT Companies are tied-UP to hire our trained students</p>
            </div>
          </section>
        </div>
        <div className={`col-md-3 ${styles.statCard}`}>
          <section className={`${styles.card_3} card card_3 rounded-0 border-0`}>
            <div className="card-body">
              <h3>25 +</h3>
              <p>Students attend Interviews every day through our Placement Cell</p>
            </div>
          </section>
        </div>
        <div className={`col-md-3 ${styles.statCard}`}>
          <section className={`${styles.card_4} card card_3 rounded-0 border-0`}>
            <div className="card-body">
              <h3>3 +</h3>
              <p>Of our students Get Jobs every day in Bangalore and India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WeAreTop;
