import Link from 'next/link';
import styles from './cards.module.css';

const CardComponent = ({ title, role}) => {
  return (
    <div className={`card ${styles.card}`}>
      <div className="card-body p-0 d-flex align-items-center">
        <Link href='#'>
        <div className='container'>
          <div className='row'>
						<div className={`${styles.rowOne} col-md-7 col-sm-6 text-start`}>
              <span className="card-title text-muted">{title}</span><br/>
              <b className="card-subtitle mb-2 text-black">{role}</b>
						</div>
					  <div className='col-md-5 col-sm-6 text-start'>
              <p className={`${styles['know-more']} card-link fs-6 fw-bold`}>Know More</p>
					  </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default CardComponent;
