import React from 'react';
import ait_img from "@/assests/logo-white.png"
import Image from 'next/image';

const AITFooter = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <Image src={ait_img}  alt="AchieversIT Software Training Institute in Bangalore" priority/>            
          <p>AchieversIT - Provides a wide group of opportunities for freshers and Experienced candidates who can develop their skills and build their career opportunities across multiple Companies.</p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Placements</a></li>
              <li><a href="#" className="text-white">Corporate Training</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Trending Courses</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">UI Development Course</a></li>
              <li><a href="#" className="text-white">Angular JS Course</a></li>
              <li><a href="#" className="text-white">React JS Course</a></li>
              <li><a href="#" className="text-white">Digital Marketing Course</a></li>
              <li><a href="#" className="text-white">Python Course</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Contact Info</h5>
            <ul className="list-unstyled">
              <li><span role="img" aria-label="location">📍</span> #63, 1st Floor, 16th Main, 8th Cross, BTM 1st Stage, Bangalore, India - 560029</li>
              <li><span role="img" aria-label="phone">📞</span> India: +91 8431-040-457</li>
              <li><span role="img" aria-label="email">📧</span> info@achieversit.com</li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p>Copyright © 2024 AchieversIT. All Rights Reserved</p>
            <div className="d-flex justify-content-center">
              <a href="#" className="text-white mx-2">🌐</a>
              <a href="#" className="text-white mx-2">📸</a>
              <a href="#" className="text-white mx-2">💼</a>
              <a href="#" className="text-white mx-2">🐦</a>
              <a href="#" className="text-white mx-2">📍</a>
              <a href="#" className="text-white mx-2">▶️</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AITFooter;
