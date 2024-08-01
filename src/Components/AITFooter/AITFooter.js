import React from 'react';
import styles from './AITFooter.module.css';
import Image from 'next/image';
import ait_img from "@/assests/logo-white.png"

const AITFooter = () => {
  return (
    <footer className={`${styles.footer} py-5 px-4`}>
      <div className="container-fluid">
        <div className="row border-bottom">
          <div className={`${styles.description} col-md-12 col-lg-3`}>
          <Image src={ait_img} className="mb-3" alt="AchieversIT" priority/>
            <p>
              AchieversIT - Provides a wide group of opportunities for freshers and Experienced
              candidate who can develop their skills and build their career opportunities across
              multiple Companies.
            </p>
          </div>
          <div className={`${styles.company} col-md-6 col-lg-3 mt-1 `}>
            <h5>COMPANY</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Placements</a></li>
              <li><a href="#">Corporate Training</a></li>
              <li><a href="#">Contact US</a></li>
            </ul>
          </div>
          <div className={`${styles.trending} col-md-6 col-lg-3`}>
            <h5>TRENDING COURSES</h5>
            <ul className="list-unstyled">
              <li><a href="#">UI Development Course</a></li>
              <li><a href="#">Angular JS Course</a></li>
              <li><a href="#">React JS Course</a></li>
              <li><a href="#">Digital Marketing Course</a></li>
              <li><a href="#">Python Course</a></li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-3">
            <h5>CONTACT INFO</h5>
            <address>
              <p className='py-1'>
                #63, 1<sup>st</sup> Floor, 16<sup>th</sup> Main, 8<sup>th</sup> Cross, BTM 1<sup>st</sup> Stage,
                Bangalore, India - 560029
              </p>
              <p className='py-1'>India: +91 8431-040-457</p>
              <p><a href="mailto:info@achieversit.com">info@achieversit.com</a></p>
            </address>
          </div>
        </div>
        <div className="row mt-5">
          <div className={`${styles.icons} col-md-12 text-center`}>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className={`${styles['facebook-icon']}`}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className={`${styles['instagram-icon']}`}>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className={`${styles['linkedin-icon']}`}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className={`${styles['twitter-icon']}`}>
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className={`${styles['pinterest-icon']}`}>
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className={`${styles['youtube-icon']}`}>
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.rights} row mt-3 `}>
          <div className=" col-md-12 col-lg-6">
            <p className='me-5 text-white-50'>Copyright &copy; 2024 AchieversIT. All Rights Reserved</p>
          </div>
          <div className="col-md-12 col-lg-6">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#">Terms of use</a></li>
              <li className="list-inline-item"><a href="#">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AITFooter;
