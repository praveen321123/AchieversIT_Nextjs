"use client"

import { useState } from 'react';
import styles from "./Openings.module.css"

const JobOpenings = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const jobs = [
    {
      title: 'Front End Developer - Angular js,Nodejs',
      location: 'Bangalore',
      description: 'A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application...'
    },
    {
      title: 'Senior Software Engineer - Java Full Stack Developer',
      location: 'Bangalore',
      description: 'Responsible for designing and developing web applications and microservices...'
    },
    {
      title: 'UI Developer - AngularJS Frameworks',
      location: 'Bangalore',
      description: 'Specializes in creating interactive, user-friendly web applications using AngularJS...'
    },
    {
      title: 'Python Developer ( Fresher ) Requirement.',
      location: 'Bangalore',
      description: 'Looking for a fresher Python developer with good knowledge in Python programming...'
    },
    {
      title: 'Python Developer ( Fresher ) Requirement.',
      location: 'Bangalore',
      description: 'Looking for a fresher Python developer with good knowledge in Python programming...'
    },
		{
      title: 'Python Developer ( Fresher ) Requirement.',
      location: 'Bangalore',
      description: 'Looking for a fresher Python developer with good knowledge in Python programming...'
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Latest Job Openings</h2>
      <div className="row mt-4 ms-3">
        {jobs.map((job, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className={`card mt-3 ${styles["job-card"]} ${activeIndex === index ? 'active' : ''}`}>
              <div className="card-body ">
                <h4 className="card-title fw-bold">{job.title}</h4>
                <p className="card-text">Location: {job.location}</p>
                {activeIndex === index && (
                  <div className="job-description">
                    <p>{job.description}</p>
                  </div>
                )}
                <button className="btn" onClick={() => handleToggle(index)}>
                  <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOpenings;
