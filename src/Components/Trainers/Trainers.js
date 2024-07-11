import React from 'react';
import styles from './Trainers.module.css';

const Trainers = () => {
  const trainers = [
    { name: 'Cognizant', logo: '/images/cognizant.png' },
    { name: 'HCL', logo: '/images/hcl.png' },
    { name: 'Infosys', logo: '/images/infosys.png' },
    { name: 'Accenture', logo: '/images/accenture.png' },
    { name: 'Oracle', logo: '/images/oracle.png' },
    { name: 'IBM', logo: '/images/ibm.png' },
    { name: 'Amazon', logo: '/images/amazon.png' },
    { name: 'Visa', logo: '/images/visa.png' },
    { name: 'Flipcart', logo: '/images/flipcart.png' },
    { name: 'Dell', logo: '/images/dell.png' },
  ];
  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-5">Our Trainers From</h2>
      <div className="row text-center">
        {trainers.map((trainer, index) => (
          <div key={index} className={`col-md-3 mb-4 ${styles.trainerCard}`}>
            <div className="card h-100 rounded-0 border-0">
              <div className={`card-body ${styles.innerBody}`}>
                <img src={trainer.logo} alt={trainer.name} className={styles.logo} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
