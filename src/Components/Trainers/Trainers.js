// components/Trainers.js
import React from 'react';
import styles from './Trainers.module.css';

const trainers = [
  { name: 'Cognizant', logo: '/path-to-logo/cognizant.png' },
  { name: 'HCL', logo: '/path-to-logo/hcl.png' },
  { name: 'Infosys', logo: '/path-to-logo/infosys.png' },
  { name: 'Accenture', logo: '/path-to-logo/accenture.png' },
  { name: 'Oracle', logo: '/path-to-logo/oracle.png' },
  { name: 'IBM', logo: '/path-to-logo/ibm.png' },
  { name: 'Amazon', logo: '/path-to-logo/amazon.png' },
  { name: 'Visa', logo: '/path-to-logo/visa.png' },
];

const Trainers = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Our Trainers From</h2>
      <div className="row text-center">
        {trainers.map((trainer, index) => (
          <div key={index} className={`col-md-3 mb-4 ${styles.trainerCard}`}>
            <div className="card h-100">
              <div className="card-body">
                <img src={trainer.logo} alt={trainer.name} className={styles.logo} />
                <h5>{trainer.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
