import React from 'react';
import styles from './Trainers.module.css';

const Trainers = () => {
  const trainers = [
    { name: 'Cognizant', logo: '/icons/cognizant.png' },
    { name: 'HCL', logo: '/icons/hcl.png' },
    { name: 'Infosys', logo: '/icons/infosys.png' },
    { name: 'Accenture', logo: '/icons/accenture.png' },
    { name: 'Oracle', logo: '/icons/oracle.png' },
    { name: 'IBM', logo: '/icons/ibm.png' },
    { name: 'Amazon', logo: '/icons/amazon.png' },
    { name: 'Visa', logo: '/icons/visa.png' },
    { name: 'Flipcart', logo: '/icons/flipcart.png' },
    { name: 'Dell', logo: '/icons/dell.png' },
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
