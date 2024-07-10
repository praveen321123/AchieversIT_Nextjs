import React from 'react';
import styles from './Statistics.module.css';

const WeAreTop = () => {
  return (
    <div className={`container ${styles['inner-container']}`}>
      <h2 className="text-center">Why We are on TOP 1</h2>
      <p className="text-center">More people train with AchieversIT because of our commitment to quality, Placement Support, and Real-time Training.</p>
      <div className="row text-center">
        <div className={`col-md-3 ${styles.statCard}`}>
          <div className="card rounded-0">
            <div className="card-body card_1">
              <h3>135 +</h3>
              <p>TRENDING COURSES</p>
            </div>
          </div>
        </div>
        <div className={`col-md-3 ${styles.statCard}`}>
          <div className="card rounded-0">
            <div className="card-body card_2">
              <h3>60 +</h3>
              <p>IT Companies are tied-UP to hire our trained students</p>
            </div>
          </div>
        </div>
        <div className={`col-md-3 ${styles.statCard}`}>
          <div className="card card_2 rounded-0">
            <div className="card-body">
              <h3>25 +</h3>
              <p>Students attend Interviews every day through our Placement Cell</p>
            </div>
          </div>
        </div>
        <div className={`col-md-3 ${styles.statCard}`}>
          <div className="card card_3 rounded-0">
            <div className="card-body">
              <h3>3 +</h3>
              <p>Of our students Get Jobs every day in Bangalore and India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreTop;
